/* ResumeForge: app.js */
const $=id=>document.getElementById(id),KEY='resumeforge_v2',clone=o=>JSON.parse(JSON.stringify(o));
const h=(t,a={},...c)=>{const e=document.createElement(t);for(const k in a)k==='class'?e.className=a[k]:k.startsWith('on')?e.addEventListener(k.slice(2),a[k]):e.setAttribute(k,a[k]);e.append(...c);return e};
const DEF={overview:'Professional Summary',exp:'Work Experience',proj:'Projects',edu:'Education',cert:'Certifications',skills:'Skills',lang:'Languages',achv:'Achievements',int:'Interests'};
const LABELS={overview:['Professional Summary','Summary','Professional Overview'],exp:['Work Experience','Experience'],proj:['Projects','Technical Projects'],edu:['Education'],cert:['Certifications','Licenses & Certifications'],skills:['Skills','Technical Skills'],lang:['Languages'],achv:['Achievements','Leadership & Achievements'],int:['Interests']};
const LISTS={exp:['Role | Company | Location','Dates','Responsibilities / achievements (one per line)'],proj:['Project title | Tech stack','Link / date','What you built (one per line)'],edu:['Qualification | Institute | Location','Year / score','Details (optional, one per line)'],cert:['Certification name','Date issued','Issuing organization · credential ID (optional)']};
const LINES={skills:'Skills by category (one per line, e.g. Programming: Java, Python)',lang:'Languages',achv:'Achievements (one per line)',int:'Interests'};
const FONTS={Calibri:"Calibri,Carlito,'Segoe UI',Arial,sans-serif",Arial:'Arial,Helvetica,sans-serif',Helvetica:'Helvetica,Arial,sans-serif',Inter:"Inter,'Segoe UI',Arial,sans-serif",Roboto:"Roboto,'Segoe UI',Arial,sans-serif",Georgia:'Georgia,serif',Garamond:"Garamond,'EB Garamond','Times New Roman',serif",Cambria:'Cambria,Georgia,serif','Times New Roman':"'Times New Roman',Times,serif"};
const FGROUP={'Modern (sans-serif)':['Calibri','Arial','Helvetica','Inter','Roboto'],'Traditional (serif)':['Georgia','Garamond','Cambria','Times New Roman']};
const TPL={classic:'Classic',modern:'Modern',minimal:'Minimal',executive:'Executive',bold:'Bold',compact:'Compact',sideleft:'2-Col Sidebar Left',tint:'2-Col Tinted',band:'2-Col Header Band',duo:'2-Col Duo'};
const TWO=['sideleft','tint','band','duo'],SIDEKEYS=['skills','lang','int'];
const SWATCH=['#167d91','#2f5aa8','#1f7a4d','#8a3b8f','#c0392b','#333333'];
const MG={std:['Standard (1 in)',96],cmp:['Compact (0.75 in)',72],nar:['Narrow (0.5 in)',48]};
const DENS={loose:['Loose',1.15,8],normal:['Normal',1.08,7],tight:['Tight',1.0,6]};
const VERBS=['Led','Built','Developed','Designed','Implemented','Executed','Optimized','Automated','Analyzed','Delivered'];
const SAMPLE={name:'Dnyandip Katkar',title:'B.Tech CSE Student | AI/ML | Data Science | Full-Stack Development',phone:'+91 72493 85424',email:'dnyandipkatkar24@gmail.com',location:'Pune, Maharashtra, India',links:'LinkedIn: linkedin.com/in/dnyandipkatkar\nGitHub: github.com/Dnyan5424\nPortfolio: dnyan5424.github.io/Dnyandip-portfolio',
overview:'Second-year B.Tech CSE student skilled in full-stack development, data analytics and AI/ML, with projects in EV management and AI-assisted food screening.',
skills:'Programming: Java, Python, C, C++, R\nWeb & Databases: HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, MongoDB\nAI/ML & Data Science: Pandas, NumPy, Scikit-learn, TensorFlow\nAnalytics & Tools: Power BI, Tableau, Microsoft Excel, Git, GitHub\nGeospatial: GIS, Google Earth Engine, Sentinel-1/2, Landsat, NDVI (project exposure)\nSoft Skills: Adaptability, teamwork, collaboration, quick learning, problem-solving, dedication',
edu:[{a:'B.Tech in Computer Science and Engineering | Dr. D. Y. Patil Institute of Technology, Pimpri, Pune',b:'Second Year | Expected 2029',c:''},{a:'Diploma in Engineering | SVERI’s College of Engineering (Polytechnic), Pandharpur',b:'2023–2026 | 96.12%',c:''},{a:'SSC | Shree Chandrashekhar Vidyalaya, Shreepur',b:'2023 | 93.40%',c:''}],
exp:[{a:'Data Science Intern | ProAzure Software Solutions Ltd., Pune',b:'June 2025 – August 2025',c:''},{a:'Internship / Job Simulations | Forage',b:'2025',c:'Tata: GenAI customer segmentation | Citi: trade risk simulation\nDeloitte: data cleaning and dashboards | J&J MedTech: Python robotics analysis'}],
proj:[{a:'Smart EV Station Management System | React, Node.js, Express.js, MongoDB, Leaflet, Python, FastAPI',b:'',c:'Designed a full-stack EV charging platform with station discovery, slot booking and ML-assisted wait-time prediction.'},{a:'FoodGuard – A3S (Adaptive Multi-Evidence Adulteration Screening System) | Python, TensorFlow, MobileNetV3Small, FastAPI, React, MongoDB',b:'',c:'Explored MobileNetV3Small food-adulteration screening using image quality, uncertainty and evidence fusion.'},{a:'BhuRakshak – AI-GIS Environmental Monitoring Platform | Python, GIS, Google Earth Engine, Sentinel-1/2, Landsat, NDVI, MERN Stack',b:'',c:'Concept for satellite-based monitoring of deforestation, encroachment and water-body change with geotagged reports.'}],
cert:[{a:'AI/ML for Geodata Analytics',b:'',c:'Indian Institute of Remote Sensing (IIRS), ISRO'},{a:'Earth Observations & Numerical Models for Cyclone Monitoring',b:'',c:'Indian Institute of Remote Sensing (IIRS), ISRO'},{a:'TCS iON Career Edge – Young Professional',b:'',c:'TCS iON'},{a:'Google Analytics Certification',b:'',c:'Google'},{a:'Google Play Academy Certification',b:'',c:'Google Play Academy'},{a:'Full Stack Web Development',b:'',c:'Udemy'}],
achv:'College Technical Event Organizer\nStudent Representative – Annual Gathering\nNational-Level Hackathon: Participation\nTechSpirit: Runner-up, college technical events (incl. technical quiz)',
lang:'English (Fluent), Marathi (Proficient), Hindi (Fluent)',int:'Reading, travelling, AI/ML, data science, geospatial technology',
order:['overview','skills','edu','exp','proj','cert','achv','lang','int'],hide:{},col:{},jd:'',bul:'disc',nc:'normal',titles:{},tpl:'classic',accent:'#167d91',font:'Calibri',fs:10.5,ns:22,hs:12,gap:12,mg:'std',dens:'normal',pages:'1',auto:'on',ha:'left',hc:'auto',dv:'auto',sl:'on'};
const KEY3='resumeforge_v5',uid=()=>Math.random().toString(36).slice(2,8),BLANK={name:'',title:'',phone:'',email:'',location:'',links:'',overview:'',exp:[],proj:[],edu:[],cert:[],skills:'',lang:'',achv:''};
let DB=loadDB(),S=fit(DB.docs[DB.cur].data),hist=[JSON.stringify(S)],hi=0,tm;const open=new Set(['Template & style','Header']);
function fit(o){const r={...clone(SAMPLE),...o};if(!TPL[r.tpl])r.tpl='classic';Object.keys(DEF).forEach(k=>{if(!r.order.includes(k))r.order.push(k)});if(!FONTS[r.font])r.font='Calibri';r.fs=Math.min(11.5,Math.max(10,r.fs));return r}
function loadDB(){try{const d=JSON.parse(localStorage.getItem(KEY3));if(d&&d.docs&&d.docs[d.cur])return d}catch(e){}const id=uid(),n={cur:id,docs:{[id]:{name:'Dnyandip main',data:clone(SAMPLE)}}};['resumeforge_v3','resumeforge_v4'].forEach((key,q)=>{try{const o=JSON.parse(localStorage.getItem(key));if(o&&o.docs)for(const k in o.docs)n.docs['o'+q+k]={name:'Old: '+o.docs[k].name,data:o.docs[k].data}}catch(e){}});return n}
function save(){DB.docs[DB.cur].data=S;try{localStorage.setItem(KEY3,JSON.stringify(DB))}catch(e){}const el=$('saved');if(el)el.textContent='Saved '+new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
function upd(){render();view();save();clearTimeout(tm);tm=setTimeout(snap,450)}
function snap(){const j=JSON.stringify(S);if(j===hist[hi])return;hist=hist.slice(0,hi+1);hist.push(j);if(hist.length>80)hist.shift();hi=hist.length-1;btns()}
function jump(d){clearTimeout(tm);snap();const n=hi+d;if(n<0||n>=hist.length)return;hi=n;S=JSON.parse(hist[hi]);buildEditor();render();save();btns()}
function btns(){$('undoBtn').disabled=hi<1;$('redoBtn').disabled=hi>=hist.length-1}
function rebuild(){buildEditor();upd()}
function docs(){$('docSel').replaceChildren(...Object.entries(DB.docs).map(([id,d])=>{const o=h('option',{value:id},d.name);if(id===DB.cur)o.selected=true;return o}))}
function show(id){DB.cur=id;S=fit(DB.docs[id].data);hist=[JSON.stringify(S)];hi=0;docs();buildEditor();render();save();btns()}
function openDoc(id){clearTimeout(tm);save();show(id)}
function addDoc(name,data){const id=uid();DB.docs[id]={name,data};openDoc(id)}
function mv(a,i,d){const j=i+d;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];rebuild()}
const btn=(t,f,c)=>h('button',{type:'button',class:c||'mini',onclick:f},t);
function field(label,val,on,kind){const i=kind==='area'?h('textarea'):h(kind==='color'?'input':'input',kind==='color'?{type:'color'}:kind==='range'?{type:'range'}:{});i.value=val??'';i.addEventListener('input',()=>{on(i.value);upd()});return h('div',{class:'field'},h('label',{},label),i)}
function group(t,...k){const d=h('details',{class:'grp'},h('summary',{},t),...k);d.open=open.has(t);d.addEventListener('toggle',()=>d.open?open.add(t):open.delete(t));return d}
let dragI=-1;
const addLine=(t,v)=>{t.value+=(t.value&&!t.value.endsWith('\n')?'\n':'')+v+' ';t.focus()};
function listEditor(k){const[la,lb,lc]=LISTS[k],arr=S[k];return group(S.titles[k]||DEF[k],...arr.map((it,i)=>{const c=lc?field(lc,it.c,v=>it.c=v,'area'):'';return h('div',{class:'card'},h('div',{class:'cardhd'},h('b',{},'#'+(i+1)),h('span',{class:'mini'},btn('↑',()=>mv(arr,i,-1)),btn('↓',()=>mv(arr,i,1)),btn('✕',()=>{arr.splice(i,1);rebuild()}))),field(la,it.a,v=>it.a=v),field(lb,it.b,v=>it.b=v),c,...(k==='exp'||k==='proj'?[h('div',{class:'field'},h('label',{},'Start a new bullet with:'),h('div',{class:'chips'},...VERBS.map(v=>btn(v,()=>{const t=c.lastChild;addLine(t,v);it.c=t.value;upd()}))))]:[]))}),btn('+ Add entry',()=>{arr.push({a:'',b:'',c:''});rebuild()},'add'))}
function linesEditor(k){const f=field(LINES[k],S[k],v=>S[k]=v,'area');return group(S.titles[k]||DEF[k],f,...(k==='skills'?[h('div',{class:'chips'},...['Technical Skills:','Soft Skills:','Tools & Technologies:'].map(c=>btn('+ '+c.slice(0,-1),()=>{const t=f.lastChild;addLine(t,c);S[k]=t.value;upd()})))]:[]))}
function rng(l,k,min,max,st,u){const f=field(l+': '+S[k]+u,S[k],v=>{S[k]=+v;f.firstChild.textContent=l+': '+v+u},'range');const r=f.lastChild;r.min=min;r.max=max;r.step=st;r.value=S[k];return f}
function sel(l,k,opts){const x=h('select');opts.forEach(([v,t])=>{const o=h('option',{value:v},t);if(S[k]===v)o.selected=true;x.append(o)});x.addEventListener('change',()=>{S[k]=x.value;upd()});return h('div',{class:'field'},h('label',{},l),x)}
const chips=(cur,ent,set)=>h('div',{class:'chips'},...ent.map(([k,t])=>btn(t,()=>set(k),'chip'+(cur===k?' on':''))));
function colSel(k){if(!TWO.includes(S.tpl)||k==='overview')return[];const x=h('select',{'aria-label':'Column',style:'flex:none;width:76px'});[['m','Main'],['s','Side']].forEach(([v,t])=>{const o=h('option',{value:v},t);if((S.col[k]||DEFCOL[k])===v)o.selected=true;x.append(o)});x.addEventListener('change',()=>{S.col[k]=x.value;upd()});return[x]}
function buildEditor(){
const fsel=h('select');Object.entries(FGROUP).forEach(([g,l])=>{const og=h('optgroup',{label:g});l.forEach(f=>{const o=h('option',{},f);if(f===S.font)o.selected=true;og.append(o)});fsel.append(og)});fsel.addEventListener('change',()=>{S.font=fsel.value;upd()});
const style=group('Template & style',chips(S.tpl,Object.entries(TPL),k=>{S.tpl=k;rebuild()}),...(TWO.includes(S.tpl)?[h('div',{class:'hint'},'Sidebar: Skills, Languages, Interests. Main column: all other sections. No divider line between columns; whitespace separates them. If the sidebar is empty the page becomes one full-width column.')]:[]),
 h('div',{class:'chips'},...SWATCH.map(c=>{const b=btn('',()=>{S.accent=c;rebuild()},'swatch');b.style.background=c;b.title=c;return b})),
 field('Custom accent colour',S.accent,v=>S.accent=v,'color'),h('div',{class:'field'},h('label',{},'Font (one family for the whole resume)'),fsel),
 rng('Body text','fs',10,11.5,.5,' pt'),rng('Name size','ns',16,24,1,' pt'),rng('Section heading size','hs',12,14,1,' pt'),rng('Section spacing','gap',6,28,1,' px'),
 h('div',{class:'field'},h('label',{},'Page margins (never below 0.5 in)'),chips(S.mg,Object.entries(MG).map(([k,v])=>[k,v[0]]),k=>{S.mg=k;rebuild()})),
 h('div',{class:'field'},h('label',{},'Line density'),chips(S.dens,Object.entries(DENS).map(([k,v])=>[k,v[0]]),k=>{S.dens=k;rebuild()})),
 sel('Page limit','pages',[['1','1 page (under 10 years’ experience)'],['2','2 pages (senior)']]),sel('Auto-fit to page limit','auto',[['on','On'],['off','Off']]));
const tune=group('Dividers & alignment',sel('Header alignment','ha',[['left','Left'],['center','Center'],['auto','Template default']]),sel('Section heading style','hc',[['auto','Uppercase'],['title','Title case']]),sel('Heading divider','dv',[['auto','Template default'],['none','None'],['line','Grey line'],['accent','Accent line']]),sel('Line after each section','sl',[['on','Show'],['off','Hide']]),sel('Bullet style','bul',[['disc','Dot'],['square','Square'],['dash','Dash'],['none','None']]),sel('Name','nc',[['normal','As typed'],['upper','UPPERCASE']]),btn('Reset these options',()=>{Object.assign(S,{ha:'left',hc:'auto',dv:'auto',sl:'on',bul:'disc',nc:'normal'});rebuild()},'add'));
const head=group('Header',field('Full name',S.name,v=>S.name=v),field('Professional title',S.title,v=>S.title=v),field('Phone',S.phone,v=>S.phone=v),field('Email',S.email,v=>S.email=v),field('Location',S.location,v=>S.location=v),field('Links (one per line)',S.links,v=>S.links=v,'area'));
const grp=k=>TWO.includes(S.tpl)&&SIDEKEYS.includes(k)?'s':'m';
const mvIn=(i,d)=>{let j=i+d;while(j>=0&&j<S.order.length&&grp(S.order[j])!==grp(S.order[i]))j+=d;if(j<0||j>=S.order.length)return;[S.order[i],S.order[j]]=[S.order[j],S.order[i]];rebuild()};
const mrow=k=>{const i=S.order.indexOf(k),sl=h('select',{'aria-label':'Label for '+DEF[k]});LABELS[k].forEach(t=>{const o=h('option',{},t);if((S.titles[k]||DEF[k])===t)o.selected=true;sl.append(o)});sl.addEventListener('change',()=>{S.titles[k]=sl.value;upd()});
 const dh=h('span',{class:'drag',draggable:'true',title:'Drag to reorder'},'⠿');dh.addEventListener('dragstart',e=>{dragI=i;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',k)});
 const row=h('div',{class:'row'+(S.hide[k]?' off':'')},dh,sl,btn('↑',()=>mvIn(i,-1)),btn('↓',()=>mvIn(i,1)),btn(S.hide[k]?'Show':'Hide',()=>{S.hide[k]=!S.hide[k];rebuild()}));
 row.addEventListener('dragover',e=>e.preventDefault());row.addEventListener('drop',e=>{e.preventDefault();const ok=dragI>=0&&dragI!==i&&grp(S.order[dragI])===grp(k);if(ok){const[x]=S.order.splice(dragI,1);S.order.splice(i,0,x)}dragI=-1;if(ok)rebuild()});return row};
const mgr=group('Sections: reorder, label, hide',...(TWO.includes(S.tpl)?[h('label',{class:'sublab'},'Sidebar (Skills, Languages, Interests)'),...S.order.filter(k=>grp(k)==='s').map(mrow),h('label',{class:'sublab'},'Main column'),...S.order.filter(k=>grp(k)==='m').map(mrow)]:S.order.map(mrow)));
const secs=Object.keys(DEF).map(k=>k==='overview'?group(S.titles[k]||DEF[k],field('Summary',S.overview,v=>S.overview=v,'area')):LISTS[k]?listEditor(k):linesEditor(k));
$('editor').replaceChildren(style,tune,head,mgr,...secs,jobGroup(),checkGroup())}
const lines=s=>(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
function ul(arr){const u=h('ul');arr.forEach(l=>u.append(h('li',{},l)));return u}
function section(k){let body;
 if(k==='overview'){if(!S.overview.trim())return null;body=h('p',{},S.overview)}
 else if(LISTS[k]){const a=S[k].filter(x=>x.a||x.c);if(!a.length)return null;body=h('div',{},...a.map(x=>{const j=h('div',{class:'job'},h('div',{class:'jh'},h('b',{},x.a),h('i',{},x.b)));const l=lines(x.c);if(l.length)j.append(k==='cert'?h('div',{class:'sub'},l.join(' · ')):ul(l));return j}))}
 else{const l=lines(S[k]).flatMap(x=>TWO.includes(S.tpl)&&(k==='lang'||k==='int')?x.split(',').map(y=>y.trim()).filter(Boolean):[x]);if(!l.length)return null;body=k==='achv'?ul(l):h('div',{},...l.map(x=>{const i=x.indexOf(':'),d=h('div',{class:'kv'});if(i>0&&i<36&&k==='skills')d.append(h('b',{},x.slice(0,i+1)),' '+x.slice(i+1).trim());else d.append(x);return d}))}
 return h('section',{class:'sec'},h('h2',{},S.titles[k]||DEF[k]),body)}
let E=S;
function paint(E){const p=$('resume'),st=(k,v)=>p.style.setProperty('--'+k,v);st('ff',FONTS[E.font]);st('fs',E.fs);st('ns',E.ns);st('hs',E.hs);st('gap',E.gap);st('lh',DENS[E.dens][1]);st('ps',DENS[E.dens][2]);st('ppx',MG[E.mg][1]+'px');st('ppy',MG[E.mg][1]+'px')}
function render(){const p=$('resume');document.documentElement.style.setProperty('--accent',S.accent);
 p.className='paper t-'+S.tpl+(S.ha!=='auto'?' ha-'+S.ha:'')+(S.hc==='title'?' hc-title':'')+(S.dv!=='auto'?' dv-'+S.dv:'')+(S.sl==='off'?' sl-off':'')+(S.bul&&S.bul!=='disc'?' bul-'+S.bul:'')+(S.nc==='upper'?' nc-up':'');
 const contact=[S.phone,S.email,S.location,...lines(S.links)].filter(Boolean).join('  |  ');
 const hd=h('div',{class:'hd'},h('h1',{class:'nm'},S.name),h('div',{class:'ttl'},S.title));if(contact)hd.append(h('div',{class:'ct'},contact));
 const two=TWO.includes(S.tpl),main=h('div',{class:'main'}),side=h('div',{class:'side'}),body=h('div',{class:'body'});
 S.order.filter(k=>!S.hide[k]).forEach(k=>{const x=section(k);if(!x)return;(two&&SIDEKEYS.includes(k)?side:main).append(x)});
 if(two&&side.children.length)body.append(h('div',{class:'cols'},main,side));else body.append(main);
 p.replaceChildren(hd,body);E={...S};paint(E);let note='A4 · single column · ATS-friendly';
 if(S.auto==='on'){const fits=()=>p.scrollHeight<=p.offsetWidth*1.4142*S.pages+2,pl=S.pages+' page'+(S.pages>1?'s':'');
  const steps=[()=>E.gap=Math.max(6,E.gap-4),()=>E.mg=E.mg==='std'?'cmp':E.mg,()=>E.dens='tight',()=>E.mg='nar',()=>E.fs=Math.max(10,E.fs-.5),()=>E.ns=Math.min(E.ns,20)];
  let n=0;for(const f of steps){if(fits())break;f();paint(E);n++}
  if(n)note=fits()?'Auto-fit tightened spacing and margins to keep '+pl+'.':'Still over '+pl+' at the tightest allowed settings. Shorten your content.'}
 $('fitmsg').textContent=note;$('pg').textContent='@page{size:A4;margin:'+MG[E.mg][1]+'px}'}
function migrate(j){if(j.job1===undefined)return j;const o={name:j.name,title:j.title,overview:j.overview,skills:j.skills,links:j.contact,phone:'',email:'',location:'',exp:[],edu:[]};for(let i=1;i<4;i++){if(j['job'+i])o.exp.push({a:j['job'+i],b:j['date'+i]||'',c:j['bullets'+i]||''});if(j['education'+i])o.edu.push({a:j['education'+i],b:j['eduDate'+i]||'',c:''})}return o}
$('resetBtn').onclick=()=>{S=clone(SAMPLE);rebuild()};
$('clearBtn').onclick=()=>{if(!confirm('Clear all content?'))return;S={...clone(SAMPLE),name:'',title:'',phone:'',email:'',location:'',links:'',overview:'',exp:[],proj:[],edu:[],cert:[],skills:'',lang:'',achv:''};rebuild()};
$('downloadBtn').onclick=()=>{const a=h('a',{href:URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:'application/json'})),download:'resume-content.json'});a.click();URL.revokeObjectURL(a.href)};
$('imp').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{S={...clone(SAMPLE),...migrate(JSON.parse(r.result))};rebuild()}catch(x){alert('That file is not valid resume data.')}};r.readAsText(f);e.target.value=''};
$('docSel').onchange=e=>openDoc(e.target.value);
$('newDoc').onclick=()=>{const n=prompt('Name for the new resume?','Resume '+(Object.keys(DB.docs).length+1));if(n)addDoc(n,{...clone(S),...clone(BLANK)})};
$('dupDoc').onclick=()=>addDoc(DB.docs[DB.cur].name+' copy',clone(S));
$('renDoc').onclick=()=>{const n=prompt('Rename resume',DB.docs[DB.cur].name);if(n){DB.docs[DB.cur].name=n;save();docs()}};
$('delDoc').onclick=()=>{if(Object.keys(DB.docs).length<2)return alert('Keep at least one resume.');if(!confirm('Delete “'+DB.docs[DB.cur].name+'”?'))return;delete DB.docs[DB.cur];show(Object.keys(DB.docs)[0])};
$('undoBtn').onclick=()=>jump(-1);$('redoBtn').onclick=()=>jump(1);
addEventListener('keydown',e=>{if(!(e.ctrlKey||e.metaKey)||/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName))return;const k=e.key.toLowerCase();if(k==='z'){e.preventDefault();jump(e.shiftKey?1:-1)}else if(k==='y'){e.preventDefault();jump(1)}});
$('pdfBtn').onclick=()=>{const t=document.title;document.title=(S.name||'Resume').replace(/\s+/g,'_')+'_Resume';window.print();setTimeout(()=>document.title=t,800)};
/* ===== Tools: ATS text view, keyword match, checker, zoom, page guide ===== */
function plain(){const o=[S.name,S.title,[S.phone,S.email,S.location,...lines(S.links)].filter(Boolean).join(' | '),''],ord=TWO.includes(S.tpl)?[...S.order.filter(k=>!SIDEKEYS.includes(k)),...S.order.filter(k=>SIDEKEYS.includes(k))]:S.order;
 ord.filter(k=>!S.hide[k]).forEach(k=>{const t=(S.titles[k]||DEF[k]).toUpperCase();
  if(k==='overview'){if(S.overview.trim())o.push(t,S.overview,'')}
  else if(LISTS[k]){const a=S[k].filter(x=>x.a||x.c);if(a.length){o.push(t);a.forEach(x=>{o.push(x.a+(x.b?' | '+x.b:''));lines(x.c).forEach(l=>o.push((k==='cert'?'':'- ')+l))});o.push('')}}
  else{const l=lines(S[k]);if(l.length)o.push(t,...(k==='achv'?l.map(x=>'- '+x):l),'')}});return o.join('\n').trim()}
const STOP=new Set('a an the and or of to in for with on at by from as is are be this that it we you your our will can have has had not but if their they them his her its who what which when where how all any more most other some such than then there these those through into over under about also across per etc using use used work experience ability strong skills years team'.split(' '));
function kw(t){const m={};(t.toLowerCase().match(/[a-z][a-z+#.\/-]{1,}/g)||[]).forEach(w=>{w=w.replace(/[.\/-]+$/,'');if(w.length>2&&!STOP.has(w))m[w]=(m[w]||0)+1});return m}
function matchBox(out){const jd=kw(S.jd||''),have=kw(plain()),top=Object.entries(jd).sort((a,b)=>b[1]-a[1]).slice(0,30).map(x=>x[0]);
 if(!top.length){out.replaceChildren(h('div',{class:'hint'},'Paste a job description to see which keywords your resume already covers.'));return}
 const hit=top.filter(w=>have[w]),miss=top.filter(w=>!have[w]);
 out.replaceChildren(h('div',{class:'tip'},'Keyword match: '+Math.round(hit.length/top.length*100)+'%'),h('div',{class:'chips'},...hit.map(w=>h('span',{class:'kw kwh'},w))),h('label',{class:'sublab'},'Missing from your resume'),h('div',{class:'chips'},...miss.map(w=>h('span',{class:'kw kwm'},w))))}
function jobGroup(){const out=h('div'),f=field('Paste the job description',S.jd,v=>{S.jd=v;matchBox(out)},'area');f.lastChild.style.minHeight='110px';matchBox(out);return group('Job match (keywords)',f,out)}
function checks(){const t=[],bl=[...S.exp,...S.proj].flatMap(x=>lines(x.c)),ov=S.overview.trim().split(/\s+/).filter(Boolean).length;
 if(!S.email||!S.phone)t.push('Add both an email and a phone number.');
 if(ov&&(ov<25||ov>70))t.push('Summary is '+ov+' words. Aim for 25 to 70.');
 if(bl.some(l=>/^(worked on|responsible for|helped|assisted|involved in|participated)/i.test(l)))t.push('Replace weak openers such as “Worked on” with action verbs.');
 if(bl.length&&!bl.some(l=>/\d/.test(l)))t.push('No numbers in your bullets. Add results where you can.');
 if(bl.some(l=>l.length>170))t.push('Some bullets run over 170 characters. Keep each to one or two lines.');
 if(!S.proj.some(x=>x.a))t.push('Add at least one project.');return t}
function checkGroup(){const out=h('div',{class:'tips'}),run=()=>{const t=checks();out.replaceChildren(...(t.length?t:['No issues found.']).map(x=>h('div',{class:'tip'+(t.length?' warn':'')},x)))};run();return group('ATS checker',out,btn('Run again',run,'add'))}
function view(){const p=$('resume'),w=p.offsetWidth,pg=w*1.4142;p.style.zoom=$('zoom').value/100;p.style.backgroundImage=$('guide').checked?'repeating-linear-gradient(to bottom,transparent 0,transparent '+(pg-2)+'px,#e4572e '+(pg-2)+'px,#e4572e '+pg+'px)':'none'}
$('txtBtn').onclick=()=>{$('txtOut').textContent=plain();$('txtDlg').showModal()};$('txtClose').onclick=()=>$('txtDlg').close();
$('txtCopy').onclick=()=>navigator.clipboard.writeText(plain()).then(()=>{$('txtCopy').textContent='Copied';setTimeout(()=>$('txtCopy').textContent='Copy',1200)},()=>{});
$('txtDl').onclick=()=>{const a=h('a',{href:URL.createObjectURL(new Blob([plain()],{type:'text/plain'})),download:(S.name||'resume').replace(/\s+/g,'_')+'.txt'});a.click();URL.revokeObjectURL(a.href)};
$('zoom').oninput=view;$('guide').onchange=view;addEventListener('resize',view);
docs();buildEditor();render();btns();view();