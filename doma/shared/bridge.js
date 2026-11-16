/* GAMES_GEN · shared bridge for the first five connected cards */
(function(){
"use strict";
const TOOLS={
 kocour:{title:"Kocour",url:"/games_gen/doma/kocour/",target:"note",run:["run"]},
 ryba:{title:"Ryba",url:"/games_gen/doma/ryba/",target:"note",run:["make"]},
 netopyr:{title:"Netopýr",url:"/games_gen/doma/netopyr/",target:"constraint",run:["generate","surprise"]},
 pavouk:{title:"Pavouk",url:"/games_gen/doma/pavouk/",target:"note",run:["run"]},
 lemur:{title:"Lemur",url:"/games_gen/doma/lemur/",target:"note",run:["run"]}
};
const path=location.pathname.toLowerCase();
const cardId=Object.keys(TOOLS).find(k=>path.includes("/"+k+"/"));
if(!cardId)return;
const tool=TOOLS[cardId], STORE="games_gen:bridge:records:v1", PENDING="games_gen:bridge:pending:v1";
const $=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function read(){try{return JSON.parse(localStorage.getItem(STORE)||"[]")}catch(e){return[]}}
function write(rows){localStorage.setItem(STORE,JSON.stringify(rows));if(window.MOUSE)MOUSE.write("bridge:records",rows)}
function fieldValues(){const out={};document.querySelectorAll("main input,main select,main textarea").forEach(el=>{if(!el.id||["fileImport"].includes(el.id)||["button","submit","file","hidden"].includes(el.type))return;out[el.id]=el.value});return out}
function outputText(){const el=$("result")||$("out");if(!el)return "";return (el.innerText||el.textContent||"").trim().slice(0,24000)}
function titleFromOutput(s){const lines=s.split("\n").map(x=>x.trim()).filter(Boolean);return (lines[0]||tool.title+" · pracovní výstup").slice(0,110)}
function saveRecord(){
 const output=outputText();
 if(!output||/Nastav parametry a vytvoř situaci|Zadej stav a spusť simulaci|Nastav situaci a spusť simulaci|Zatím bez/i.test(output)){$("bridgeStatus").textContent="Nejdřív vytvoř výsledek v generátoru.";return null}
 const rows=read(),rec={schema:"games-gen-connected-run/1.0",id:"B-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7),cardId,cardTitle:tool.title,title:titleFromOutput(output),createdAt:new Date().toISOString(),parentId:localStorage.getItem("games_gen:bridge:parent")||null,inputs:fieldValues(),output};
 rows.push(rec);write(rows);localStorage.removeItem("games_gen:bridge:parent");
 $("bridgeStatus").textContent="Uloženo do společné paměti · "+rows.length+" záznamů.";
 renderRecords(rec.id);return rec;
}
function renderRecords(selected){
 const rows=read().slice().reverse(),sel=$("bridgeSource");if(!sel)return;
 sel.innerHTML='<option value="">Vyber předchozí výsledek…</option>'+rows.map(r=>'<option value="'+esc(r.id)+'">'+esc(r.cardTitle+" · "+r.title+" · "+new Date(r.createdAt).toLocaleString("cs-CZ"))+'</option>').join("");
 if(selected)sel.value=selected;
 const recent=$("bridgeRecent");if(recent)recent.innerHTML=rows.slice(0,4).map(r=>'<div class="gbridge-item"><b>'+esc(r.cardTitle)+'</b><span>'+esc(r.title)+'</span><small>'+new Date(r.createdAt).toLocaleString("cs-CZ")+'</small></div>').join("")||'<p class="gbridge-muted">Zatím nejsou uložené žádné společné běhy.</p>';
}
function selectedRecord(){const id=$("bridgeSource").value;return read().find(r=>r.id===id)}
function insertRecord(rec){
 if(!rec)return;
 const target=$(tool.target);if(!target){$("bridgeStatus").textContent="Pro tento generátor nebylo nalezeno vstupní pole.";return}
 const payload="\n\n[PŘEDANÝ VÝSTUP · "+rec.cardTitle+" · "+rec.title+"]\n"+rec.output;
 target.value=(target.value||"").trim()?target.value.trim()+payload:payload.trim();
 target.dispatchEvent(new Event("input",{bubbles:true}));
 localStorage.setItem("games_gen:bridge:parent",rec.id);
 $("bridgeStatus").textContent="Výstup z "+rec.cardTitle+" vložen do pole „"+tool.target+"“. Spusť generátor a vznikne navazující běh.";
 target.scrollIntoView({behavior:"smooth",block:"center"});target.focus();
}
function transferCurrent(){
 const output=outputText();
 if(!output||/Nastav parametry a vytvoř situaci|Zadej stav a spusť simulaci|Nastav situaci a spusť simulaci|Zatím bez/i.test(output)){$("bridgeStatus").textContent="Nejdřív vytvoř výsledek, který chceš předat.";return}
 let rows=read(),rec=rows.find(r=>r.cardId===cardId&&r.output===output);
 if(!rec)rec=saveRecord();if(!rec)return;
 const dest=$("bridgeTarget").value;if(!dest||!TOOLS[dest])return;
 localStorage.setItem(PENDING,JSON.stringify({record:rec,target:dest,createdAt:new Date().toISOString()}));
 location.href=TOOLS[dest].url;
}
function receivePending(){
 let p;try{p=JSON.parse(localStorage.getItem(PENDING)||"null")}catch(e){p=null}
 if(!p||p.target!==cardId)return;
 localStorage.removeItem(PENDING);insertRecord(p.record);
 $("bridgeStatus").textContent="Převzato z "+(p.record.cardTitle||"předchozího nástroje")+". Vstup je připraven.";
}
function exportMemory(){
 const data={schema:"games-gen-connected-workspace/1.0",exportedAt:new Date().toISOString(),tools:TOOLS,records:read()};
 const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="games-gen-propojene-behy.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function importMemory(file){
 const reader=new FileReader();reader.onload=()=>{try{const d=JSON.parse(reader.result),incoming=Array.isArray(d)?d:d.records;if(!Array.isArray(incoming))throw Error("Soubor neobsahuje seznam záznamů.");const old=read(),ids=new Set(old.map(x=>x.id)),merged=old.concat(incoming.filter(x=>x&&x.id&&!ids.has(x.id)));write(merged);renderRecords();$("bridgeStatus").textContent="Importováno "+(merged.length-old.length)+" nových záznamů."}catch(e){$("bridgeStatus").textContent="Import se nezdařil: "+e.message}};reader.readAsText(file)}
function mount(){
 const style=document.createElement("style");style.textContent=`
#gbridge{max-width:1120px;margin:16px auto;padding:0 16px;font:14px/1.45 system-ui,sans-serif;color:#e9e7df}
#gbridge .gbridge-box{background:#202822;border:1px solid #52604f;border-radius:14px;padding:15px}
#gbridge h2{font:20px Georgia,serif;margin:0 0 5px;color:#d8c69b}
#gbridge p{margin:5px 0 12px;color:#bdc5b8}
#gbridge .gbridge-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}
#gbridge label{display:block;color:#d0d4c8;font-size:12px;margin:7px 0}
#gbridge select,#gbridge input[type=file]{width:100%;box-sizing:border-box;padding:9px;background:#141a16;color:#f0eee7;border:1px solid #596452;border-radius:8px;font:inherit}
#gbridge button{border:1px solid #78856d;border-radius:8px;padding:9px 12px;background:#d8c69b;color:#20251f;font-weight:700;cursor:pointer;margin:5px 5px 0 0}
#gbridge button.alt{background:#303b31;color:#e9e7df}
#gbridge .gbridge-tools{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0}
#gbridge .gbridge-tools a{color:#e5d4a9;text-decoration:none;border:1px solid #596452;border-radius:99px;padding:5px 10px;font-size:12px}
#gbridge .gbridge-status{font-size:12px;color:#d8c69b;min-height:18px;margin-top:9px}
#gbridge .gbridge-recent{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:7px;margin-top:9px}
#gbridge .gbridge-item{border:1px solid #465244;border-radius:8px;padding:8px;min-width:0}
#gbridge .gbridge-item b,#gbridge .gbridge-item span,#gbridge .gbridge-item small{display:block;overflow-wrap:anywhere}
#gbridge .gbridge-item b{color:#d8c69b}
#gbridge .gbridge-item small,.gbridge-muted{color:#aeb7aa;font-size:11px}
@media(max-width:520px){#gbridge{padding:0 10px}#gbridge .gbridge-box{padding:12px}}
`;document.head.appendChild(style);
 const el=document.createElement("section");el.id="gbridge";el.innerHTML='<div class="gbridge-box"><h2>Propojený pracovní prostor · '+esc(tool.title)+'</h2><p>Výsledky pěti karet sdílejí jednu místní paměť. Výstup můžeš předat dalšímu generátoru a pokračovat v řetězci.</p><div class="gbridge-tools">'+Object.entries(TOOLS).map(([id,t])=>'<a href="'+t.url+'">'+esc(t.title)+'</a>').join("")+'</div><div class="gbridge-grid"><div><label>Výsledek z předchozího běhu<select id="bridgeSource"><option value="">Načítám…</option></select></label><button class="alt" id="bridgeInsert">Vložit jako vstup</button></div><div><label>Předat aktuální výsledek do<select id="bridgeTarget">'+Object.entries(TOOLS).filter(([id])=>id!==cardId).map(([id,t])=>'<option value="'+id+'">'+esc(t.title)+'</option>').join("")+'</select></label><button id="bridgeTransfer">Předat do další karty</button></div></div><div><button id="bridgeSave">Uložit aktuální výsledek</button><button class="alt" id="bridgeExport">Exportovat společnou paměť JSON</button><label>Importovat dříve exportovanou společnou paměť<input id="fileImport" type="file" accept="application/json"></label></div><div id="bridgeStatus" class="gbridge-status" role="status"></div><div id="bridgeRecent" class="gbridge-recent"></div></div>';
 const main=document.querySelector("main");if(main)main.parentNode.insertBefore(el,main);else document.body.prepend(el);
 $("bridgeInsert").addEventListener("click",()=>insertRecord(selectedRecord()));
 $("bridgeTransfer").addEventListener("click",transferCurrent);
 $("bridgeSave").addEventListener("click",()=>saveRecord());
 $("bridgeExport").addEventListener("click",exportMemory);
 $("fileImport").addEventListener("change",e=>{if(e.target.files[0])importMemory(e.target.files[0]);e.target.value=""});
 renderRecords();
 document.addEventListener("click",e=>{const b=e.target.closest("button");if(!b||!tool.run.includes(b.id))return;setTimeout(()=>{const r=saveRecord();if(r)$("bridgeStatus").textContent="Automaticky uloženo po generování · "+tool.title+".";},180)});
 receivePending();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);else mount();
})();