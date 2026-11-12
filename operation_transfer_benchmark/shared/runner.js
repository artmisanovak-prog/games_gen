(function(){
'use strict';
const root=document.querySelector('[data-benchmark-root]');
if(!root)return;
const dataUrl=root.dataset.config;
const $=id=>document.getElementById(id);
let config=null,visibleKey=false,lastResult=null;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const download=(name,obj)=>{const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href)};
function promptText(){return ['Jsi účastníkem benchmarku pro testování přenosu operací.','Řiď se pouze zadáním a vrať jediný validní JSON objekt. Neuváděj komentář ani markdown.','',...config.tasks.map(t=>'ÚLOHA '+t.id+'\n'+t.prompt+'\nPožadovaný formát odpovědi: '+JSON.stringify(t.answerSchema))].join('\n\n')}
function render(){
 $('benchmarkTitle').textContent=config.title;
 $('benchmarkSubtitle').textContent=config.operation||'Testovaná operace bude doplněna po analýze zdroje.';
 $('benchmarkStatus').textContent=config.statusLabel||config.status;
 $('sourceInfo').innerHTML=(config.sources||[]).map(s=>'<div class="item">'+esc(s.label)+': <a href="'+esc(s.url)+'" target="_blank" rel="noopener">otevřít zdroj</a></div>').join('')||'<p class="muted">Zdrojové odkazy budou doplněny.</p>';
 $('taskList').innerHTML=config.tasks.length?config.tasks.map((t,i)=>'<article class="task"><h3>'+esc(t.title||('Úloha '+(i+1)))+'</h3><div class="small">'+esc(t.id)+'</div><p>'+esc(t.prompt)+'</p><pre>'+esc(JSON.stringify(t.answerSchema,null,2))+'</pre></article>').join(''):'<div class="notice">Tento benchmark je založen jako samostatný nástroj, ale úlohy zatím nejsou publikované. Nejprve musí být přečtena původní pohádka a odpovídající generátor. Nejde o chybu načítání ani o hotový test.</div>';
 $('copyPrompt').disabled=!config.tasks.length;
 $('exportTasks').disabled=!config.tasks.length;
 $('exportKey').disabled=!config.tasks.length;
 $('evaluate').disabled=!config.tasks.length;
}
function evaluate(){
 let parsed;try{parsed=JSON.parse($('modelAnswer').value)}catch(e){$('evaluation').innerHTML='<p class="status">Odpověď není validní JSON.</p>';return}
 if(!parsed||!Array.isArray(parsed.answers)){$('evaluation').innerHTML='<p class="status">Očekávám objekt s polem answers.</p>';return}
 const rows=config.tasks.map(t=>{const got=parsed.answers.find(x=>x.id===t.id);const ok=!!got&&JSON.stringify(normalize(got.answer))===JSON.stringify(normalize(t.expected));return {id:t.id,correct:ok,expected:t.expected,received:got?.answer??null}});
 const points=rows.filter(x=>x.correct).length;
 lastResult={benchmarkId:config.id,version:config.version,completedAt:new Date().toISOString(),score:{correct:points,total:rows.length,percent:Math.round(points/rows.length*100)},rows};
 $('evaluation').innerHTML='<div class="panel"><div class="score">'+points+' / '+rows.length+' ('+lastResult.score.percent+' %)</div>'+rows.map(x=>'<div class="item"><strong>'+esc(x.id)+'</strong> · <span class="'+(x.correct?'':'status')+'">'+(x.correct?'správně':'nesprávně')+'</span></div>').join('')+'<button id="downloadResult">Exportovat výsledek JSON</button></div>';
 $('downloadResult').onclick=()=>download(config.id+'-result.json',lastResult);
}
function normalize(v){if(Array.isArray(v))return v.map(normalize).sort((a,b)=>JSON.stringify(a).localeCompare(JSON.stringify(b)));if(v&&typeof v==='object')return Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])]));return v}
fetch(dataUrl).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json()}).then(c=>{config=c;render()}).catch(e=>{$('taskList').textContent='Nepodařilo se načíst konfiguraci benchmarku: '+e.message});
$('copyPrompt').onclick=async()=>{try{await navigator.clipboard.writeText(promptText());$('copyPrompt').textContent='Zadání zkopírováno'}catch(e){$('modelAnswer').value=promptText()}};
$('exportTasks').onclick=()=>download(config.id+'-tasks.json',{id:config.id,version:config.version,tasks:config.tasks.map(({expected,...t})=>t)});
$('exportKey').onclick=()=>download(config.id+'-answer-key.json',{id:config.id,version:config.version,answers:config.tasks.map(t=>({id:t.id,expected:t.expected,explanation:t.explanation||''}))});
$('evaluate').onclick=evaluate;
})();