<?php
namespace App\Crud;

use App\Casts\CurrencyCast;
use App\Casts\DateCast;
use App\Casts\DayCast;
use App\Casts\YesNoBoolCast;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Services\CrudService;
use App\Services\CrudEntry;
use App\Exceptions\NotAllowedException;
use TorMorten\Eventy\Facades\Events as Hook;
use App\Models\CloudPlan;
use App\Services\Helper;

class CloudPlanCrud extends CrudService
{
    /**
     * Defines if the crud class should be automatically discovered by NexoPOS.
     * If set to "true", you won't need to register that class on the "CrudServiceProvider".
     */
    const AUTOLOAD = true;

    protected $casts    =   [
        'trial_duration'    =>  DayCast::class,
        'has_trial'         =>  YesNoBoolCast::class,
        'cost'              =>  CurrencyCast::class,
        'updated_at'        =>  DateCast::class,
        'created_at'        =>  DateCast::class,
    ];

    /**
     * define the base table
     * @param string
     */
    protected $table = 'cloud_plans';

    /**
     * default slug
     * @param string
     */
    protected $slug = 'cloud-plans';

    /**
     * Define namespace
     * @param string
     */
    protected $namespace = 'cloud-plans';

    /**
     * To be able to autoload the class, we need to define
     * the identifier on a constant.
     */
    const IDENTIFIER = 'cloud-plans';

    /**
     * Model Used
     * @param string
     */
    protected $model = CloudPlan::class;

    /**
     * Define permissions
     * @param array
     */
    protected $permissions  =   [
        'create'    =>  true,
        'read'      =>  true,
        'update'    =>  true,
        'delete'    =>  true,
    ];

    /**
     * Adding relation
     * Example : [ 'nexopos_users as user', 'user.id', '=', 'nexopos_orders.author' ]
     * @param array
     */
    public $relations   =  [
    ];

    /**
     * all tabs mentionned on the tabs relations
     * are ignored on the parent model.
     */
    protected $tabsRelations    =   [
        // 'tab_name'      =>      [ YourRelatedModel::class, 'localkey_on_relatedmodel', 'foreignkey_on_crud_model' ],
    ];

    /**
     * Export Columns defines the columns that
     * should be included on the exported csv file.
     */
    protected $exportColumns = []; // @getColumns will be used by default.

    /**
     * Pick
     * Restrict columns you retrieve from relation.
     * Should be an array of associative keys, where
     * keys are either the related table or alias name.
     * Example : [
     *      'user'  =>  [ 'username' ], // here the relation on the table nexopos_users is using "user" as an alias
     * ]
     */
    public $pick = [];

    /**
     * Define where statement
     * @var array
    **/
    protected $listWhere = [];

    /**
     * Define where in statement
     * @var array
     */
    protected $whereIn = [];

    /**
     * If few fields should only be filled
     * those should be listed here.
     */
    public $fillable = [];

    /**
     * If fields should be ignored during saving
     * those fields should be listed here
     */
    public $skippable = [];

    /**
     * Determine if the options column should display
     * before the crud columns
     */
    protected $prependOptions = false;

    /**
     * Will make the options column available per row if
     * set to "true". Otherwise it will be hidden.
     */
    protected $showOptions = true;

    /**
     * Here goes the CRUD constructor. Here you can change the behavior 
     * of the crud component.
     */
    public function __construct()
    {
        parent::__construct();

        Hook::addFilter( $this->namespace . '-crud-actions', [ $this, 'addActions' ], 10, 2 );
    }

    /**
     * Return the label used for the crud object.
    **/
    public function getLabels(): array
    {
        return [
            'list_title'            =>  __( 'Cloud Plans' ),
            'list_description'      =>  __( 'Shows all available cloud plans.' ),
            'no_entry'              =>  __( 'No cloud plans has been saved yet!' ),
            'create_new'            =>  __( 'Add a new Cloud Plan' ),
            'create_title'          =>  __( 'Create a new Cloud Plan' ),
            'create_description'    =>  __( 'Configure a new Cloud Plan and seve it.' ),
            'edit_title'            =>  __( 'Edit Cloud Plan' ),
            'edit_description'      =>  __( 'Modify  Cloud Plan.' ),
            'back_to_list'          =>  __( 'Return to Cloud Plans' ),
        ];
    }

    /**
     * Defines the forms used to create and update entries.
     */
    public function getForm( CloudPlan $entry = null ): array
    {
        return [
            'main' =>  [
                'label'         =>  __( 'Name' ),
                'name'          =>  'name',
                'value'         =>  $entry->name ?? '',
                'description'   =>  __( 'Provide a name to the resource.' )
            ],
            'tabs'  =>  [
                'general'   =>  [
                    'label'     =>  __( 'General' ),
                    'fields'    =>  [
                        [
                            'type'  =>  'switch',
                            'name'  =>  'has_trial',
                            'options'   =>  Helper::kvToJsOptions([
                                0   =>  __( 'No' ),
                                1   =>  __( 'Yes' ),
                            ]),
                            'label' =>  __( 'Has Trial' ),
                            'description'   =>  __( 'Set if the plan has a trial' ),
                            'value' =>  $entry->has_trial ?? '',
                        ], [
                            'type'  =>  'number',
                            'name'  =>  'trial_duration',
                            'label' =>  __( 'Trial Duration' ),
                            'description'   =>  __( 'Set (in days) how long a trial last.' ),
                            'value' =>  $entry->trial_duration ?? '',
                        ], [
                            'type'  =>  'number',
                            'name'  =>  'cost',
                            'label' =>  __( 'Cost' ),
                            'description'   =>  __( 'Set the cost of the plan' ),
                            'value' =>  $entry->cost ?? '',
                        ], [
                            'type'  =>  'textarea',
                            'name'  =>  'description',
                            'label' =>  __( 'Description' ),
                            'description'   =>  __( 'Provide futher context for a better understanding.' ),
                            'value' =>  $entry->description ?? '',
                        ], 
                    ]
                ]
            ]
        ];
    }

    /**
     * Filter POST input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPostInputs( $inputs ): array
    {
        $inputs[ 'author' ] =   Auth::id();

        return $inputs;
    }

    /**
     * Filter PUT input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPutInputs( array $inputs, CloudPlan $entry )
    {
        $inputs[ 'author' ] =   Auth::id();
        
        return $inputs;
    }

    /**
     * Trigger actions that are executed before the
     * crud entry is created.
     */
    public function beforePost( array $request ): array
    {
        $this->allowedTo( 'create' );

        return $request;
    }

    /**
     * Trigger actions that will be executed 
     * after the entry has been created.
     */
    public function afterPost( array $request, CloudPlan $entry ): array
    {
        return $request;
    }


    /**
     * A shortcut and secure way to access
     * senstive value on a read only way.
     */
    public function get( string $param ): mixed
    {
        switch( $param ) {
            case 'model' : return $this->model ; break;
        }
    }

    /**
     * Trigger actions that are executed before
     * the crud entry is updated.
     */
    public function beforePut( array $request, CloudPlan $entry ): array
    {
        $this->allowedTo( 'update' );

        return $request;
    }

    /**
     * This trigger actions that are executed after
     * the crud entry is successfully updated.
     */
    public function afterPut( array $request, CloudPlan $entry ): array
    {
        return $request;
    }

    /**
     * This triggers actions that will be executed ebfore
     * the crud entry is deleted.
     */
    public function beforeDelete( $namespace, $id, $model ): void
    {
        if ( $namespace == 'cloud-plans' ) {
            /**
             *  Perform an action before deleting an entry
             *  In case something wrong, this response can be returned
             *
             *  return response([
             *      'status'    =>  'danger',
             *      'message'   =>  __( 'You\re not allowed to do that.' )
             *  ], 403 );
            **/
            if ( $this->permissions[ 'delete' ] !== false ) {
                ns()->restrict( $this->permissions[ 'delete' ] );
            } else {
                throw new NotAllowedException;
            }
        }
    }

    /**
     * Define columns and how it is structured.
     */
    public function getColumns(): array
    {
        return [
            'name'  =>  [
                'label'  =>  __( 'Name' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'cost'  =>  [
                'label'  =>  __( 'Cost' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'has_trial'  =>  [
                'label'  =>  __( 'Has Trial' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'trial_duration'  =>  [
                'label'  =>  __( 'Trial Duration' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'updated_at'  =>  [
                'label'  =>  __( 'Updated At' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
        ];
    }

    /**
     * Define row actions.
     */
    public function addActions( CrudEntry $entry, $namespace ): CrudEntry
    {
        /**
         * Declaring entry actions
         */
        $entry->action( 
            identifier: 'edit',
            label: __( 'Edit' ),
            url: ns()->url( '/dashboard/' . $this->slug . '/edit/' . $entry->id )
        );
        
        $entry->action( 
            identifier: 'delete',
            label: __( 'Delete' ),
            type: 'DELETE',
            url: ns()->url( '/api/crud/cloud-plans/' . $entry->id ),
            confirm: [
                'message'  =>  __( 'Would you like to delete this ?' ),
            ]
        );
        
        return $entry;
    }


    /**
     * trigger actions that are executed
     * when a bulk actio is posted.
     */
    public function bulkAction( Request $request ): array
    {
        /**
         * Deleting licence is only allowed for admin
         * and supervisor.
         */

        if ( $request->input( 'action' ) == 'delete_selected' ) {

            /**
             * Will control if the user has the permissoin to do that.
             */
            if ( $this->permissions[ 'delete' ] !== false ) {
                ns()->restrict( $this->permissions[ 'delete' ] );
            } else {
                throw new NotAllowedException;
            }

            $status     =   [
                'success'   =>  0,
                'failed'    =>  0
            ];

            foreach ( $request->input( 'entries' ) as $id ) {
                $entity     =   $this->model::find( $id );
                if ( $entity instanceof CloudPlan ) {
                    $entity->delete();
                    $status[ 'success' ]++;
                } else {
                    $status[ 'failed' ]++;
                }
            }
            return $status;
        }

        return Hook::filter( $this->namespace . '-catch-action', false, $request );
    }

    /**
     * Defines links used on the CRUD object.
     */
    public function getLinks(): array
    {
        return  [
            'list'      =>  ns()->url( 'dashboard/' . 'cloud-plans' ),
            'create'    =>  ns()->url( 'dashboard/' . 'cloud-plans/create' ),
            'edit'      =>  ns()->url( 'dashboard/' . 'cloud-plans/edit/' ),
            'post'      =>  ns()->url( 'api/crud/' . 'cloud-plans' ),
            'put'       =>  ns()->url( 'api/crud/' . 'cloud-plans/{id}' . '' ),
        ];
    }

    /**
     * Defines the bulk actions.
    **/
    public function getBulkActions(): array
    {
        return Hook::filter( $this->namespace . '-bulk', [
            [
                'label'         =>  __( 'Delete Selected Entries' ),
                'identifier'    =>  'delete_selected',
                'url'           =>  ns()->route( 'ns.api.crud-bulk-actions', [
                    'namespace' =>  $this->namespace
                ])
            ]
        ]);
    }

    /**
     * Defines the export configuration.
    **/
    public function getExports(): array
    {
        return [];
    }
}
