/* MOUSE shared core · version 1.0 · local-first */
(function(g){
 const PREFIX="mouse:",VERSION="1.0";
 const enc=s=>btoa(unescape(encodeURIComponent(s))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
 const dec=s=>decodeURIComponent(escape(atob(s.replace(/-/g,"+").replace(/_/g,"/"))));
 function read(key,fallback=null){try{const x=localStorage.getItem(PREFIX+key);return x===null?fallback:JSON.parse(x)}catch{return fallback}}
 function write(key,value){localStorage.setItem(PREFIX+key,JSON.stringify(value));return value}
 function remove(key){localStorage.removeItem(PREFIX+key)}
 function all(){const out=[];for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&(k.startsWith(PREFIX)||k.startsWith("mouse_")||k==="uhlo_gen_v1"||k==="chcesmys_kogmapa")){let value;try{value=JSON.parse(localStorage.getItem(k))}catch{value=localStorage.getItem(k)}out.push({key:k,value,bytes:(localStorage.getItem(k)||"").length})}}return out.sort((a,b)=>a.key.localeCompare(b.key))}
 function encodeState(obj){return enc(JSON.stringify(obj))}
 function decodeState(hash=location.hash){try{const m=hash.match(/(?:^#|&)state=([^&]+)/);return m?JSON.parse(dec(m[1])):null}catch{return null}}
 function stateUrl(obj){const u=new URL(location.href);u.hash="state="+encodeState(obj);return u.href}
 async function getCards(){const r=await fetch("/games_gen/doma/mouse_lab/data/karty.json");if(!r.ok)throw Error("Karta API není dostupné: "+r.status);return r.json()}
 function download(name,data){const blob=new Blob([typeof data==="string"?data:JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
 g.MOUSE=Object.freeze({version:VERSION,prefix:PREFIX,read,write,remove,all,encodeState,decodeState,stateUrl,getCards,download});
})(window);