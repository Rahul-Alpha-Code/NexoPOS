import{g as y}from"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";var c=function x($,w){var f=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,o=/(^[ ]*|[ ]*$)/g,u=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,d=/^0x[0-9a-f]+$/i,h=/^0/,m=function(N){return x.insensitive&&(""+N).toLowerCase()||""+N},n=m($).replace(o,"")||"",l=m(w).replace(o,"")||"",t=n.replace(f,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),i=l.replace(f,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),p=parseInt(n.match(d),16)||t.length!==1&&n.match(u)&&Date.parse(n),s=parseInt(l.match(d),16)||p&&l.match(u)&&Date.parse(l)||null,r,a;if(s){if(p<s)return-1;if(p>s)return 1}for(var e=0,g=Math.max(t.length,i.length);e<g;e++){if(r=!(t[e]||"").match(h)&&parseFloat(t[e])||t[e]||0,a=!(i[e]||"").match(h)&&parseFloat(i[e])||i[e]||0,isNaN(r)!==isNaN(a))return isNaN(r)?1:-1;if(typeof r!=typeof a&&(r+="",a+=""),r<a)return-1;if(r>a)return 1}return 0};const F=y(c);export{F as n};
