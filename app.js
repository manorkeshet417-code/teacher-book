'use strict';
/* =========================================================
   יומן המורה — v2
   Everything is stored locally in this browser (localStorage).
   ========================================================= */

// ---------- icons (SF-Symbols-like line icons) ----------
const IC = {
  home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.6c2 .7 3.2 2.5 3.6 5.4"/>',
  att:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 13 2 2 4-4"/>',
  grades:'<path d="M5 20V11M11 20V5M17 20v-6M3 20h18"/>',
  book:'<path d="M3 5.5c3-1.2 6-1.2 9 .7V20c-3-1.9-6-1.9-9-.7z"/><path d="M21 5.5c-3-1.2-6-1.2-9 .7V20c3-1.9 6-1.9 9-.7z"/>',
  diary:'<path d="M6 3h11a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"/><path d="M5 18a2 2 0 0 1 2-2h12M9 7h6M9 11h4"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  msg:'<path d="M4 5h16v11H9l-5 4z"/>',
  tools:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  report:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
  more:'<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  chev:'<path d="m15 6-6 6 6 6"/>',
  back:'<path d="m9 6 6 6-6 6"/>',
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  print:'<path d="M6 9V3h12v6M6 18H4v-7h16v7h-2"/><path d="M6 14h12v7H6z"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  shuffle:'<path d="M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3"/>',
  down:'<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  up:'<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
  warn:'<path d="M12 4 21 20H3z"/><path d="M12 10v4M12 17h.01"/>',
  cake:'<path d="M4 21h16M5 21v-8h14v8M5 16c2 1 3-1 4.7 0s3 1 4.6 0 3-1 4.7 0M12 13V9M12 5.5h.01"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
  dice:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 15h.01M15 9h.01M9 15h.01"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  ok:'<path d="m5 12 5 5 9-10"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  play:'<path d="M7 4v16l13-8z"/>', pause:'<path d="M7 4h3v16H7zM14 4h3v16h-3z"/>', reset:'<path d="M4 4v6h6"/><path d="M5 15a8 8 0 1 0 1.5-8.5L4 10"/>',
  note:'<path d="M4 4h16v12l-4 4H4z"/><path d="M16 20v-4h4M8 9h8M8 13h5"/>',
  wa:'<path d="M4 20l1.3-4A8 8 0 1 1 8.4 19z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z"/>',
};
const icon=(n,c='i')=>`<svg class="${c}" viewBox="0 0 24 24" aria-hidden="true">${IC[n]||''}</svg>`;

// ---------- constants ----------
const KEY='teacherBook.v2', OLD_KEY='teacherBook.v1';
const EV={
  absent:{n:'חיסור',c:'var(--red)'}, late:{n:'איחור',c:'var(--orange)'},
  disturb:{n:'הפרעה',c:'var(--pink)',neg:1}, nohw:{n:'חוסר ש״ב',c:'var(--brown)',neg:1},
  noequip:{n:'חוסר ציוד',c:'var(--teal)',neg:1}, phone:{n:'טלפון בשיעור',c:'var(--indigo)',neg:1},
  praise:{n:'ציון לשבח',c:'var(--green)',pos:1}, active:{n:'השתתפות פעילה',c:'var(--purple)',pos:1},
};
const BEHAVIOR=Object.keys(EV).filter(k=>k!=='absent'&&k!=='late');
const A_TYPES=['מבחן','בוחן','עבודה','בעל פה','פרויקט','מטלה'];
const CAL_TYPES={exam:{n:'מבחן',c:'var(--red)'},trip:{n:'טיול',c:'var(--green)'},meeting:{n:'אסיפת הורים',c:'var(--purple)'},event:{n:'אירוע',c:'var(--indigo)'},holiday:{n:'חופשה',c:'var(--orange)'}};
const DAYS=['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
const AV_COLORS=['#0066CC','#1E7B34','#B25000','#8944AB','#3634A3','#00708F','#C2185B','#8A5A00','#D70015','#5856D6'];
const CLASS_COLORS=['#0066CC','#1E7B34','#B25000','#8944AB','#C2185B','#00708F','#3634A3','#8A5A00'];
const DEFAULT_BELLS=[['08:00','08:45'],['08:50','09:35'],['09:55','10:40'],['10:45','11:30'],['11:50','12:35'],['12:40','13:25'],['13:35','14:20'],['14:25','15:10'],['15:15','16:00']];
const TAGS=['הארכת זמן','הקראה','לקות למידה','קשב וריכוז','מחונן','עולה חדש','תלמיד/ה מצטיין/ת','בעיה רפואית'];
const MSG_TPL={
  'כללי':'שלום {הורה}, רציתי לעדכן לגבי {תלמיד} מכיתה {כיתה}.',
  'חיסורים':'שלום {הורה}, רציתי לעדכן ש{תלמיד} חיסר/ה {חיסורים} פעמים לאחרונה. אשמח לשוחח.',
  'מחמאה':'שלום {הורה}, רציתי לשתף ש{תלמיד} מתפקד/ת מצוין בשיעורים! ממוצע נוכחי: {ממוצע}. כל הכבוד!',
  'תזכורת למבחן':'שלום {הורה}, תזכורת: בקרוב מבחן בכיתה {כיתה}. מומלץ ש{תלמיד} יתכונן/תתכונן.',
  'ציונים':'שלום {הורה}, הממוצע הנוכחי של {תלמיד} הוא {ממוצע}. אשמח לעדכן ולתאם שיחה במידת הצורך.',
};

// ---------- state ----------
function blank(){return {v:2,teacher:{name:'',school:'',subject:'',year:''},settings:{pass:55,absAlert:3,bells:DEFAULT_BELLS.map(b=>[...b])},
  classes:[],students:[],assessments:[],grades:{},events:[],lessons:[],homework:[],timetable:{},calendar:[],logs:[],messages:[],todos:[],seating:{}}}
function migrate(d){
  const b=blank(); d=Object.assign(b,d||{});
  d.teacher=Object.assign(blank().teacher,d.teacher); d.settings=Object.assign(blank().settings,d.settings);
  d.classes.forEach((c,i)=>{c.color=c.color||CLASS_COLORS[i%CLASS_COLORS.length]});
  d.students.forEach(s=>{s.tags=s.tags||[];s.first=s.first||'';s.last=s.last||''});
  d.assessments.forEach(a=>{a.type=a.type||'מבחן';a.weight=+a.weight||1;a.factor=+a.factor||0});
  d.homework.forEach(h=>{h.done=h.done||{}});
  d.v=2; return d;
}
function load(){
  try{const raw=localStorage.getItem(KEY)||localStorage.getItem(OLD_KEY);return migrate(raw?JSON.parse(raw):null)}catch(e){return blank()}
}
let S=load();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('השמירה נכשלה — אין מקום פנוי בדפדפן')}}

// ---------- helpers ----------
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad=n=>String(n).padStart(2,'0');
const iso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const today=()=>iso(new Date());
const addDays=(s,n)=>{const d=new Date(s+'T12:00');d.setDate(d.getDate()+n);return iso(d)};
const fmt=s=>s?s.split('-').reverse().join('/'):'';
const fmtShort=s=>s?`${+s.slice(8)}/${+s.slice(5,7)}`:'';
const dayName=s=>DAYS[new Date(s+'T12:00').getDay()];
const hebDate=d=>{try{return new Intl.DateTimeFormat('he-u-ca-hebrew',{day:'numeric',month:'long',year:'numeric'}).format(d)}catch(e){return ''}};
const longDate=d=>new Intl.DateTimeFormat('he-IL',{weekday:'long',day:'numeric',month:'long'}).format(d);
const cls=id=>S.classes.find(c=>c.id===id);
const stu=id=>S.students.find(s=>s.id===id);
const fullName=s=>s?`${s.first} ${s.last}`.trim():'';
const studentsOf=cid=>S.students.filter(s=>s.classId===cid).sort((a,b)=>(a.last+' '+a.first).localeCompare(b.last+' '+b.first,'he'));
const hash=s=>{let h=0;for(const c of s)h=(h*31+c.charCodeAt(0))|0;return Math.abs(h)};
const avatar=(s,size='')=>`<span class="av ${size}" style="background:${AV_COLORS[hash(s.id)%AV_COLORS.length]}" aria-hidden="true">${esc((s.first[0]||'')+(s.last[0]||''))}</span>`;
const classDot=c=>`<span class="av sm" style="background:${c.color}" aria-hidden="true">${esc(c.name.slice(0,2))}</span>`;
const pct=x=>x==null?'—':Math.round(x)+'%';
const round1=x=>Math.round(x*10)/10;
const median=a=>{if(!a.length)return null;const s=[...a].sort((x,y)=>x-y),m=s.length>>1;return s.length%2?s[m]:(s[m-1]+s[m])/2};
const subjects=()=>[...new Set(S.assessments.map(a=>a.subject).filter(Boolean))];
const waNum=p=>{let d=String(p||'').replace(/\D/g,'');if(d.startsWith('0'))d='972'+d.slice(1);return d};
const evName=t=>EV[t]?.n||t;
const gradeClass=g=>g==null||g===''?'':g<S.settings.pass?'g-fail':g>=90?'g-top':'';

// ---------- calculations ----------
function eff(a,g){return Math.min(100,Math.max(0,g+(+a.factor||0)))}
function studentAvg(sid,subject){
  const s=stu(sid);if(!s)return null;let sum=0,w=0;
  S.assessments.filter(a=>a.classId===s.classId&&(!subject||a.subject===subject)).forEach(a=>{
    const g=S.grades[a.id]?.[sid];if(g!=null&&g!==''){sum+=eff(a,g)*a.weight;w+=a.weight}});
  return w?round1(sum/w):null;
}
function heldLessons(cid){
  const keys=new Set();S.lessons.filter(l=>l.classId===cid).forEach(l=>keys.add(l.date+'|'+l.lesson));
  S.events.filter(e=>e.classId===cid&&(e.type==='absent'||e.type==='late')).forEach(e=>keys.add(e.date+'|'+e.lesson));
  return keys.size;
}
function evCount(sid,type){return S.events.filter(e=>e.studentId===sid&&e.type===type).length}
function attendancePct(sid){const s=stu(sid);const held=heldLessons(s.classId);if(!held)return null;return Math.max(0,100*(held-evCount(sid,'absent'))/held)}
function behaviorScore(sid){
  const ev=S.events.filter(e=>e.studentId===sid);let neg=0,pos=0;ev.forEach(e=>{if(EV[e.type]?.neg)neg++;if(EV[e.type]?.pos)pos++});
  if(!neg&&!pos)return 100;return Math.max(0,Math.min(100,100-neg*8+pos*4));
}
function hwRate(sid){
  const s=stu(sid);const hw=S.homework.filter(h=>h.classId===s.classId&&h.due<=today());if(!hw.length)return null;
  return 100*hw.filter(h=>h.done[sid]).length/hw.length;
}
function classAvg(cid){const v=studentsOf(cid).map(s=>studentAvg(s.id)).filter(x=>x!=null);return v.length?round1(v.reduce((a,b)=>a+b,0)/v.length):null}
function classAttendance(cid){const v=studentsOf(cid).map(s=>attendancePct(s.id)).filter(x=>x!=null);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null}
function atRisk(){
  const since=addDays(today(),-14);
  return S.students.map(s=>{
    const reasons=[];const avg=studentAvg(s.id);
    if(avg!=null&&avg<S.settings.pass)reasons.push(`ממוצע ${avg}`);
    const abs=evCount(s.id,'absent');if(abs>=S.settings.absAlert)reasons.push(`${abs} חיסורים`);
    const neg=S.events.filter(e=>e.studentId===s.id&&EV[e.type]?.neg&&e.date>=since).length;if(neg>=3)reasons.push(`${neg} אירועי משמעת בשבועיים`);
    return {s,reasons};
  }).filter(x=>x.reasons.length);
}
function ensureLesson(cid,date,lesson){
  let l=S.lessons.find(l=>l.classId===cid&&l.date===date&&+l.lesson===+lesson);
  if(!l){l={id:uid(),classId:cid,date,lesson:+lesson,topic:'',notes:''};S.lessons.push(l)}
  return l;
}
function currentLessonNo(){
  const now=new Date(),t=pad(now.getHours())+':'+pad(now.getMinutes());
  const i=S.settings.bells.findIndex(b=>t>=b[0]&&t<=b[1]);return i>=0?i+1:null;
}

// ---------- UI primitives ----------
function toast(msg,undo){
  document.querySelectorAll('.toast').forEach(t=>t.remove());
  const t=document.createElement('div');t.className='toast';t.setAttribute('role','status');
  t.innerHTML=`<span>${esc(msg)}</span>${undo?'<button>ביטול</button>':''}`;
  document.body.appendChild(t);
  if(undo)t.querySelector('button').onclick=()=>{undo();t.remove()};
  setTimeout(()=>t.remove(),undo?6000:2600);
}
function withUndo(msg,fn){const snap=JSON.stringify(S);fn();save();render();toast(msg,()=>{S=JSON.parse(snap);save();render();toast('בוטל')})}
function alertBox(title,msg,danger,onOk){
  const sc=document.createElement('div');sc.className='scrim';
  sc.innerHTML=`<div class="alert" role="alertdialog" aria-modal="true"><div class="ab"><b>${esc(title)}</b><p>${esc(msg)}</p></div><div class="aa"><button data-c>ביטול</button><button class="d" data-o>${esc(danger)}</button></div></div>`;
  document.body.appendChild(sc);
  sc.querySelector('[data-c]').onclick=()=>sc.remove();
  sc.querySelector('[data-o]').onclick=()=>{sc.remove();onOk()};
  sc.querySelector('[data-c]').focus();
}
let sheetStack=[];
function openSheet(title,body,{onSave,saveLabel='שמירה',wide,onMount,del}={}){
  const sc=document.createElement('div');sc.className='scrim';
  sc.innerHTML=`<div class="sheet ${wide?'wide':''}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="sheet-top"><div class="grabber"></div>
    <button class="btn plain" data-x>${onSave?'ביטול':'סגירה'}</button><b>${esc(title)}</b>${onSave?`<button class="btn plain" data-s style="font-weight:700">${esc(saveLabel)}</button>`:'<span style="width:60px"></span>'}</div>
    <form class="sheet-body" novalidate>${body}${del?`<div style="margin-top:18px"><button type="button" class="btn danger" data-del style="width:100%">${icon('trash')} ${esc(del.label)}</button></div>`:''}</form></div>`;
  // fix grabber position
  const top=sc.querySelector('.sheet-top');top.style.flexWrap='wrap';const gr=top.querySelector('.grabber');gr.style.flexBasis='100%';
  document.body.appendChild(sc);sheetStack.push(sc);
  const close=()=>{sc.remove();sheetStack=sheetStack.filter(x=>x!==sc)};
  sc.querySelector('[data-x]').onclick=close;
  sc.addEventListener('mousedown',e=>{if(e.target===sc)close()});
  const form=sc.querySelector('form');
  const submit=()=>{
    const bad=[...form.querySelectorAll('[required]')].find(i=>!i.value.trim());
    if(bad){bad.focus();bad.style.outline='2px solid var(--red)';return}
    if(onSave(collect(form),form)!==false){save();close();render()}
  };
  if(onSave){sc.querySelector('[data-s]').onclick=submit;form.onsubmit=e=>{e.preventDefault();submit()}}
  else form.onsubmit=e=>e.preventDefault();
  if(del)sc.querySelector('[data-del]').onclick=()=>{close();del.run()};
  form.querySelectorAll('[data-chips] .chip').forEach(ch=>ch.onclick=()=>{ch.classList.toggle('on');ch.setAttribute('aria-pressed',ch.classList.contains('on'))});
  onMount&&onMount(form,close);
  setTimeout(()=>(form.querySelector('[autofocus]')||form.querySelector('input:not([type=checkbox]),select,textarea'))?.focus(),50);
  return {close,form};
}
function collect(form){
  const d={};
  form.querySelectorAll('[name]').forEach(el=>{
    if(el.type==='checkbox')d[el.name]=el.checked;else d[el.name]=el.value.trim();
  });
  form.querySelectorAll('[data-chips]').forEach(g=>d[g.dataset.chips]=[...g.querySelectorAll('.chip.on')].map(c=>c.dataset.v));
  return d;
}
function F(label,name,value='',type='text',extra=''){
  if(type==='textarea')return `<label class="field"><span>${label}</span><textarea name="${name}" ${extra}>${esc(value)}</textarea></label>`;
  return `<label class="field"><span>${label}</span><input name="${name}" type="${type}" value="${esc(value)}" ${extra}></label>`;
}
function FS(label,name,value,options){
  return `<label class="field"><span>${label}</span><select name="${name}">${options.map(o=>{const[v,t]=Array.isArray(o)?o:[o,o];return `<option value="${esc(v)}" ${String(v)===String(value)?'selected':''}>${esc(t)}</option>`}).join('')}</select></label>`;
}
function FT(label,name,checked){return `<label class="field row" style="justify-content:space-between;background:var(--fill);border-radius:10px;padding:8px 12px"><span style="margin:0;color:var(--label);font-size:16px">${label}</span><input type="checkbox" class="toggle" name="${name}" ${checked?'checked':''}></label>`}
function FC(label,name,values,options){
  return `<div class="field"><span>${label}</span><div class="chips" data-chips="${name}">${options.map(o=>`<button type="button" class="chip ${values.includes(o)?'on':''}" style="${values.includes(o)?'':''}" data-v="${esc(o)}" aria-pressed="${values.includes(o)}">${esc(o)}</button>`).join('')}</div></div>`;
}
const classOpts=()=>S.classes.map(c=>[c.id,c.name]);
function classPicker(cid,cb){return `<select class="input" aria-label="בחירת כיתה" onchange="ui.classId=this.value;${cb||'render()'}">${S.classes.map(c=>`<option value="${c.id}" ${c.id===cid?'selected':''}>${esc(c.name)}</option>`).join('')}</select>`}
function seg(items,cur,fn){return `<div class="seg" role="tablist">${items.map(([v,t])=>`<button type="button" role="tab" aria-selected="${v===cur}" class="${v===cur?'on':''}" onclick="${fn}('${v}')">${t}</button>`).join('')}</div>`}
function empty(ic,title,text,btn){return `<div class="empty">${icon(ic)}<b>${title}</b><div>${text}</div>${btn||''}</div>`}
function download(name,text,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
function csv(rows){return '﻿'+rows.map(r=>r.map(x=>`"${String(x??'').replace(/"/g,'""')}"`).join(',')).join('\n')}
async function copyText(t){try{await navigator.clipboard.writeText(t);toast('הועתק')}catch(e){toast('ההעתקה לא הצליחה')}}

// ---------- UI state ----------
const ui={classId:null,date:today(),lesson:currentLessonNo()||1,classTab:'students',sort:'name',filter:'',subject:'',month:today().slice(0,7),tool:'random',calSel:null,
  picked:[],groups:null,timer:{total:300,left:300,run:false,h:null},msg:{tpl:'כללי',text:MSG_TPL['כללי'],to:'class',sel:[]},seatPick:null,diaryClass:'',reportClass:null};
function curClass(){if(!cls(ui.classId))ui.classId=S.classes[0]?.id||null;return ui.classId}

// ---------- navigation ----------
const NAV=[
  ['',[['home','home','ראשי']]],
  ['כיתה',[['classes','users','כיתות ותלמידים'],['attendance','att','נוכחות והתנהגות'],['grades','grades','ציונים'],['homework','book','שיעורי בית'],['diary','diary','יומן שיעורים']]],
  ['תכנון',[['timetable','clock','מערכת שעות'],['calendar','cal','לוח שנה']]],
  ['קשר וכלים',[['messages','msg','הודעות להורים'],['tools','tools','כלי כיתה'],['reports','report','דוחות']]],
  ['',[['settings','gear','הגדרות']]],
];
const TABS=[['home','home','ראשי'],['classes','users','כיתות'],['attendance','att','נוכחות'],['grades','grades','ציונים'],['more','more','עוד']];
function drawNav(view){
  const risk=atRisk().length;
  document.getElementById('nav').innerHTML=NAV.map(([g,items])=>`${g?`<div class="nav-group">${g}</div>`:''}${items.map(([v,ic,t])=>
    `<a href="#${v}" class="${v===view?'on':''}" ${v===view?'aria-current="page"':''}>${icon(ic)}<span>${t}</span>${v==='home'&&risk?`<span class="badge" aria-label="${risk} תלמידים דורשים תשומת לב">${risk}</span>`:''}</a>`).join('')}`).join('');
  const inMore=!['home','classes','attendance','grades'].includes(view);
  document.getElementById('tabbar').innerHTML=TABS.map(([v,ic,t])=>`<a href="#${v}" class="${v===view||(v==='more'&&inMore)?'on':''}">${icon(ic)}<span>${t}</span></a>`).join('');
  document.getElementById('who').textContent=[S.teacher.name,S.teacher.school].filter(Boolean).join(' · ')||'מורה';
}

// =========================================================
// VIEWS
// =========================================================
const V={};

// ----- Home -----
V.home=()=>{
  const now=new Date(),h=now.getHours();
  const greet=h<5?'לילה טוב':h<12?'בוקר טוב':h<17?'צהריים טובים':h<21?'ערב טוב':'לילה טוב';
  if(!S.classes.length)return `<div class="head"><div class="titles"><h1 class="large-title">${greet}${S.teacher.name?', '+esc(S.teacher.name):''}</h1><p class="subtitle">${longDate(now)} · ${hebDate(now)}</p></div></div>
   <div class="card">${empty('book','ברוך הבא ליומן המורה','כאן מנהלים כיתות, תלמידים, נוכחות, ציונים, שיעורי בית ועוד — הכול במקום אחד.',
   `<div class="row" style="justify-content:center"><button class="btn pri" onclick="editClass()">${icon('plus')} יצירת כיתה ראשונה</button><button class="btn" onclick="demo()">טעינת נתוני דוגמה</button></div>`)}</div>`;
  const t=today(),dow=now.getDay(),tt=S.timetable[dow]||{},cur=currentLessonNo();
  const nowT=pad(h)+':'+pad(now.getMinutes());
  const lessons=Object.entries(tt).map(([l,v])=>({l:+l,...v})).sort((a,b)=>a.l-b.l);
  const absToday=S.events.filter(e=>e.date===t&&e.type==='absent').length;
  const risk=atRisk();
  const in7=addDays(t,7),in14=addDays(t,14);
  const upcoming=[
    ...S.calendar.filter(e=>e.date>=t&&e.date<=in14).map(e=>({date:e.date,title:e.title,sub:(CAL_TYPES[e.type]?.n||'')+(e.classId?' · '+(cls(e.classId)?.name||''):''),c:CAL_TYPES[e.type]?.c})),
    ...S.assessments.filter(a=>a.date>=t&&a.date<=in14).map(a=>({date:a.date,title:a.title,sub:`${a.type} · ${cls(a.classId)?.name||''}`,c:'var(--accent)',href:'#grades'})),
    ...S.homework.filter(x=>x.due>=t&&x.due<=in7).map(x=>({date:x.due,title:x.text.slice(0,50),sub:`הגשת ש״ב · ${cls(x.classId)?.name||''}`,c:'var(--brown)',href:'#homework'})),
  ].sort((a,b)=>a.date.localeCompare(b.date)).slice(0,8);
  const md=t.slice(5);
  const bdays=S.students.filter(s=>s.birthday).map(s=>{const thisYear=t.slice(0,4)+'-'+s.birthday.slice(5);return {s,d:thisYear}}).filter(x=>x.d>=t&&x.d<=in7).sort((a,b)=>a.d.localeCompare(b.d));
  const todos=S.todos.filter(x=>!x.done).concat(S.todos.filter(x=>x.done).slice(-3));
  return `<div class="head"><div class="titles"><h1 class="large-title">${greet}${S.teacher.name?', '+esc(S.teacher.name):''}</h1><p class="subtitle">${longDate(now)} · ${hebDate(now)}</p></div>
    <div class="toolbar"><a class="btn pri" href="#attendance" onclick="quickAttendance()">${icon('att')} לרשום נוכחות</a></div></div>
  <div class="tiles">
    <a class="tile" href="#classes"><span class="t" style="color:var(--accent)">${icon('users')} תלמידים</span><b>${S.students.length}</b><span class="muted small">ב־${S.classes.length} כיתות</span></a>
    <a class="tile" href="#attendance"><span class="t" style="color:var(--red)">${icon('att')} חיסורים היום</span><b>${absToday}</b><span class="muted small">${S.lessons.filter(l=>l.date===t).length} שיעורים נרשמו</span></a>
    <a class="tile" href="#reports"><span class="t" style="color:var(--orange)">${icon('warn')} דורשים תשומת לב</span><b>${risk.length}</b><span class="muted small">לפי ציונים, חיסורים ומשמעת</span></a>
    <a class="tile" href="#homework"><span class="t" style="color:var(--brown)">${icon('book')} ש״ב פתוחים</span><b>${S.homework.filter(x=>x.due>=t).length}</b><span class="muted small">להגשה בהמשך</span></a>
  </div>
  <div class="grid g2">
    <section><h2>היום שלי</h2>
      <div class="list timeline">${lessons.length?lessons.map(x=>{const b=S.settings.bells[x.l-1]||['',''];const state=x.l===cur?'now':(b[1]&&nowT>b[1]?'past':'');const c=cls(x.classId);
        return `<a class="li ${state}" href="#attendance" onclick="ui.classId='${x.classId}';ui.date='${t}';ui.lesson=${x.l}"><div class="when"><b>${x.l}</b>${b[0]}</div>${c?classDot(c):''}<div class="main"><b>${esc(c?.name||'')} · ${esc(x.subject||'')}</b><span>${state==='now'?'עכשיו · ':''}${esc(x.room?'חדר '+x.room:'')} ${b[0]}–${b[1]}</span></div>${state==='now'?'<span class="now-dot"></span>':''}${icon('chev','i chev')}</a>`}).join('')
        :`<div class="li noav"><div class="main"><b>אין שיעורים במערכת ליום ${DAYS[dow]}</b><span>אפשר להוסיף ב<a href="#timetable">מערכת השעות</a></span></div></div>`}</div>
      <h2>משימות</h2>
      <div class="list">
        <form class="li noav" onsubmit="event.preventDefault();addTodo(this.t.value);this.t.value=''"><span style="color:var(--accent)">${icon('plus')}</span><input name="t" class="input" style="background:none;padding:0" placeholder="משימה חדשה…" aria-label="משימה חדשה"></form>
        ${todos.map(x=>`<div class="li noav"><button class="check ${x.done?'on':''}" onclick="toggleTodo('${x.id}')" aria-label="${x.done?'בטל סימון':'סמן כבוצע'}">${x.done?icon('ok'):''}</button><div class="main"><b style="${x.done?'text-decoration:line-through;color:var(--label-2)':''}">${esc(x.text)}</b></div><button class="btn plain icon" onclick="delTodo('${x.id}')" aria-label="מחיקה">${icon('x')}</button></div>`).join('')}
      </div>
    </section>
    <section>
      <h2>דורשים תשומת לב</h2>
      <div class="list">${risk.length?risk.slice(0,6).map(({s,reasons})=>`<a class="li" href="#student/${s.id}">${avatar(s)}<div class="main"><b>${esc(fullName(s))}</b><span>${esc(cls(s.classId)?.name||'')} · ${reasons.join(' · ')}</span></div>${icon('chev','i chev')}</a>`).join('')
        :`<div class="li noav"><div class="main"><b>הכול נראה טוב</b><span>אין תלמידים מתחת לסף כרגע</span></div><span style="color:var(--green)">${icon('ok')}</span></div>`}</div>
      <h2>בקרוב</h2>
      <div class="list">${upcoming.length?upcoming.map(u=>`<a class="li noav" href="${u.href||'#calendar'}"><div class="when num" style="width:46px;text-align:center"><b style="display:block;font-size:20px;color:${u.c}">${+u.date.slice(8)}</b><span class="small muted">${dayName(u.date)}</span></div><div class="main"><b>${esc(u.title)}</b><span>${esc(u.sub)}</span></div></a>`).join('')
        :'<div class="li noav"><div class="main"><b>אין אירועים בשבועיים הקרובים</b><span>אפשר להוסיף ב<a href="#calendar">לוח השנה</a></span></div></div>'}</div>
      ${bdays.length?`<h2>ימי הולדת השבוע 🎂</h2><div class="list">${bdays.map(({s,d})=>`<a class="li" href="#student/${s.id}">${avatar(s)}<div class="main"><b>${esc(fullName(s))}</b><span>${d===t?'היום!':dayName(d)+' '+fmtShort(d)} · ${esc(cls(s.classId)?.name||'')}</span></div>${icon('cake')}</a>`).join('')}</div>`:''}
    </section>
  </div>`;
};
function quickAttendance(){const dow=new Date().getDay(),cur=currentLessonNo();ui.date=today();if(cur){ui.lesson=cur;const x=S.timetable[dow]?.[cur];if(x)ui.classId=x.classId}}
function addTodo(t){if(!t.trim())return;S.todos.push({id:uid(),text:t.trim(),done:false});save();render();document.querySelector('input[name=t]')?.focus()}
function toggleTodo(id){const x=S.todos.find(t=>t.id===id);x.done=!x.done;save();render()}
function delTodo(id){withUndo('המשימה נמחקה',()=>S.todos=S.todos.filter(t=>t.id!==id))}

// ----- Classes -----
V.classes=()=>`<div class="head"><div class="titles"><h1 class="large-title">כיתות</h1><p class="subtitle">${S.classes.length} כיתות · ${S.students.length} תלמידים</p></div>
  <div class="toolbar"><button class="btn pri" onclick="editClass()">${icon('plus')} כיתה חדשה</button></div></div>
  ${S.classes.length?`<div class="list">${S.classes.map(c=>{const n=studentsOf(c.id).length,avg=classAvg(c.id),att=classAttendance(c.id);
    return `<a class="li" href="#class/${c.id}">${classDot(c)}<div class="main"><b>${esc(c.name)}${c.homeroom?' <span class="tag soft">חינוך</span>':''}</b><span>${n} תלמידים${c.subject?' · '+esc(c.subject):''}</span></div>
    <div class="end num"><span title="ממוצע">${avg??'—'}</span><span class="muted small">${pct(att)} נוכחות</span>${icon('chev','i chev')}</div></a>`}).join('')}</div>`
  :`<div class="card">${empty('users','אין עדיין כיתות','צור כיתה ראשונה ואז הוסף לה תלמידים.',`<button class="btn pri" onclick="editClass()">${icon('plus')} כיתה חדשה</button>`)}</div>`}`;

function editClass(id){
  const c=cls(id)||{color:CLASS_COLORS[S.classes.length%CLASS_COLORS.length]};
  openSheet(id?'עריכת כיתה':'כיתה חדשה',
    F('שם הכיתה','name',c.name||'','text','required placeholder="למשל ח׳2" autofocus')+
    F('מקצוע שאני מלמד/ת בכיתה','subject',c.subject||S.teacher.subject||'')+
    FT('אני מחנך/ת של הכיתה','homeroom',c.homeroom)+
    `<div class="field"><span>צבע</span><div class="chips" id="colors">${CLASS_COLORS.map(col=>`<button type="button" class="chip ${col===c.color?'on':''}" data-col="${col}" style="width:34px;height:34px;padding:0;border-radius:17px;background:${col};outline:${col===c.color?'3px solid var(--label)':'none'};outline-offset:2px" aria-label="צבע"></button>`).join('')}</div><input type="hidden" name="color" value="${c.color}"></div>`,
  {onMount:f=>f.querySelectorAll('[data-col]').forEach(b=>b.onclick=()=>{f.color.value=b.dataset.col;f.querySelectorAll('[data-col]').forEach(x=>x.style.outline='none');b.style.outline='3px solid var(--label)'}),
   onSave:d=>{if(id)Object.assign(c,d);else{const n={id:uid(),...d};S.classes.push(n);ui.classId=n.id;setTimeout(()=>location.hash='#class/'+n.id)}},
   del:id?{label:'מחיקת הכיתה',run:()=>alertBox(`למחוק את ${c.name}?`,'כל התלמידים, הציונים והאירועים של הכיתה יימחקו. אפשר לבטל מיד אחרי.','מחיקה',()=>withUndo('הכיתה נמחקה',()=>{
     const sids=new Set(studentsOf(id).map(s=>s.id));S.students=S.students.filter(s=>s.classId!==id);
     S.assessments.filter(a=>a.classId===id).forEach(a=>delete S.grades[a.id]);S.assessments=S.assessments.filter(a=>a.classId!==id);
     S.events=S.events.filter(e=>!sids.has(e.studentId));S.homework=S.homework.filter(h=>h.classId!==id);S.lessons=S.lessons.filter(l=>l.classId!==id);
     S.logs=S.logs.filter(l=>!sids.has(l.studentId));S.classes=S.classes.filter(x=>x.id!==id);location.hash='#classes'}))}:null});
}

// ----- Class detail -----
V.class=(id)=>{
  const c=cls(id);if(!c)return `<div class="card">${empty('users','הכיתה לא נמצאה','',`<a class="btn" href="#classes">לכל הכיתות</a>`)}</div>`;
  ui.classId=id;
  const st=studentsOf(id);
  let body='';
  if(ui.classTab==='students'){
    let list=st.filter(s=>!ui.filter||fullName(s).includes(ui.filter));
    const key={name:null,avg:s=>-(studentAvg(s.id)??-1),abs:s=>-evCount(s.id,'absent')}[ui.sort];
    if(key)list=[...list].sort((a,b)=>key(a)-key(b));
    body=`<div class="row" style="margin-bottom:12px"><input class="input grow" type="search" placeholder="סינון לפי שם" value="${esc(ui.filter)}" oninput="ui.filter=this.value;render();const i=document.querySelector('[data-f]');i.focus();i.setSelectionRange(99,99)" data-f aria-label="סינון">
      ${seg([['name','שם'],['avg','ממוצע'],['abs','חיסורים']],ui.sort,'setSort')}</div>
    ${list.length?`<div class="list">${list.map(s=>{const avg=studentAvg(s.id),abs=evCount(s.id,'absent');
      return `<a class="li" href="#student/${s.id}">${avatar(s)}<div class="main"><b>${esc(fullName(s))}</b><span>${s.tags.map(t=>esc(t)).join(' · ')||'&nbsp;'}</span></div>
      <div class="end num"><span class="${gradeClass(avg)}">${avg??'—'}</span><span class="small" style="color:${abs>=S.settings.absAlert?'var(--red)':'var(--label-2)'}">${abs} חיס׳</span>${icon('chev','i chev')}</div></a>`}).join('')}</div>`
    :`<div class="card">${empty('users',st.length?'לא נמצאו תלמידים':'אין תלמידים בכיתה',st.length?'נסה שם אחר':'הוסף תלמידים אחד אחד או הדבק רשימה שלמה.',st.length?'':`<div class="row" style="justify-content:center"><button class="btn pri" onclick="editStudent(null,'${id}')">${icon('plus')} תלמיד</button><button class="btn" onclick="bulkStudents('${id}')">הדבקת רשימה</button></div>`)}</div>`}`;
  }else if(ui.classTab==='seating')body=seatingView(c,st);
  else body=classStats(c,st);
  return `<div class="head"><div class="titles"><a href="#classes" class="small" style="text-decoration:none">${icon('back','i chev')} כיתות</a><h1 class="large-title">${esc(c.name)}</h1><p class="subtitle">${st.length} תלמידים${c.subject?' · '+esc(c.subject):''}${c.homeroom?' · כיתת חינוך':''}</p></div>
    <div class="toolbar"><button class="btn pri" onclick="editStudent(null,'${id}')">${icon('plus')} תלמיד</button><button class="btn" onclick="bulkStudents('${id}')">${icon('list')} הדבקת רשימה</button><button class="btn" onclick="importCSV('${id}')">${icon('up')} ייבוא CSV</button><button class="btn icon" onclick="editClass('${id}')" aria-label="עריכת כיתה">${icon('edit')}</button></div></div>
  <div style="margin-bottom:16px">${seg([['students','תלמידים'],['seating','מפת ישיבה'],['stats','סטטיסטיקה']],ui.classTab,'setClassTab')}</div>${body}`;
};
function setSort(v){ui.sort=v;render()}
function setClassTab(v){ui.classTab=v;render()}

function classStats(c,st){
  if(!st.length)return `<div class="card">${empty('grades','אין נתונים עדיין','הוסף תלמידים, ציונים ונוכחות.')}</div>`;
  const avgs=st.map(s=>studentAvg(s.id)).filter(x=>x!=null);
  const buckets=[[0,55,'0–54'],[55,65,'55–64'],[65,75,'65–74'],[75,85,'75–84'],[85,95,'85–94'],[95,101,'95–100']].map(([a,b,l])=>({l,n:avgs.filter(x=>x>=a&&x<b).length}));
  const mx=Math.max(1,...buckets.map(b=>b.n));
  const evs=Object.keys(EV).map(t=>({t,n:S.events.filter(e=>e.classId===c.id&&e.type===t).length}));
  const top=[...st].map(s=>({s,n:evCount(s.id,'absent')})).sort((a,b)=>b.n-a.n).slice(0,5);
  const best=[...st].map(s=>({s,a:studentAvg(s.id)})).filter(x=>x.a!=null).sort((a,b)=>b.a-a.a).slice(0,5);
  return `<div class="tiles">
    <div class="tile"><span class="t">ממוצע כיתתי</span><b>${classAvg(c.id)??'—'}</b></div>
    <div class="tile"><span class="t">חציון</span><b>${median(avgs)??'—'}</b></div>
    <div class="tile"><span class="t">נוכחות</span><b>${pct(classAttendance(c.id))}</b></div>
    <div class="tile"><span class="t">מתחת ל־${S.settings.pass}</span><b style="color:var(--red)">${avgs.filter(x=>x<S.settings.pass).length}</b></div></div>
  <div class="grid g2">
    <div class="card"><h2>התפלגות ממוצעים</h2><div class="bars" style="margin-bottom:24px">${buckets.map(b=>`<div style="height:${b.n/mx*100}%"><em>${b.n||''}</em><span>${b.l}</span></div>`).join('')}</div></div>
    <div class="card"><h2>אירועים בכיתה</h2>${evs.map(e=>`<div class="row" style="margin:6px 0"><span style="width:110px">${EV[e.t].n}</span><div class="meter grow"><i style="width:${Math.min(100,e.n/Math.max(1,...evs.map(x=>x.n))*100)}%;background:${EV[e.t].c}"></i></div><b class="num" style="width:30px;text-align:end">${e.n}</b></div>`).join('')}</div>
    <div class="card flush"><div style="padding:16px 16px 4px"><h2>הכי הרבה חיסורים</h2></div>${top.map(x=>`<a class="li" href="#student/${x.s.id}">${avatar(x.s,'sm')}<div class="main"><b>${esc(fullName(x.s))}</b></div><span class="num">${x.n}</span></a>`).join('')}</div>
    <div class="card flush"><div style="padding:16px 16px 4px"><h2>ממוצעים גבוהים</h2></div>${best.map(x=>`<a class="li" href="#student/${x.s.id}">${avatar(x.s,'sm')}<div class="main"><b>${esc(fullName(x.s))}</b></div><span class="num g-top">${x.a}</span></a>`).join('')||'<div class="li noav muted">אין ציונים</div>'}</div>
  </div>`;
}

function seatingView(c,st){
  const seat=S.seating[c.id]=S.seating[c.id]||{cols:6,map:{}};
  const placed=new Set(Object.values(seat.map));
  const n=Math.max(st.length,...Object.keys(seat.map).map(k=>+k+1),seat.cols*3);
  const rows=Math.ceil(n/seat.cols)+1,cells=rows*seat.cols;
  const unseated=st.filter(s=>!placed.has(s.id));
  return `<div class="card"><div class="row" style="margin-bottom:14px"><span class="muted grow small">לוחצים על תלמיד ואז על מקום כדי להושיב או להחליף.</span>
    <label class="row small">טורים <input class="input" type="number" min="2" max="10" value="${seat.cols}" style="width:70px" onchange="S.seating['${c.id}'].cols=Math.max(2,Math.min(10,+this.value));save();render()"></label>
    <button class="btn sm" onclick="shuffleSeats('${c.id}')">${icon('shuffle')} סידור אקראי</button><button class="btn sm danger" onclick="withUndo('המפה נוקתה',()=>S.seating['${c.id}'].map={})">ניקוי</button><button class="btn sm" onclick="window.print()">${icon('print')}</button></div>
    <div class="board">לוח</div>
    <div class="seats" style="grid-template-columns:repeat(${seat.cols},1fr)">${Array.from({length:cells},(_,i)=>{const s=stu(seat.map[i]);
      return `<div class="seat ${s?'full':''} ${ui.seatPick==='seat:'+i?'pick':''}" onclick="seatClick('${c.id}',${i})" role="button" tabindex="0">${s?avatar(s,'sm')+`<span>${esc(s.first)}<br>${esc(s.last)}</span>`:'<span class="muted">·</span>'}</div>`}).join('')}</div>
    ${unseated.length?`<h3 style="margin-top:18px">טרם הושבו (${unseated.length})</h3><div class="chips">${unseated.map(s=>`<button class="chip ${ui.seatPick==='stu:'+s.id?'on':''}" style="${ui.seatPick==='stu:'+s.id?'background:var(--accent)':''}" onclick="ui.seatPick='stu:${s.id}';render()">${esc(fullName(s))}</button>`).join('')}</div>`:''}</div>`;
}
function seatClick(cid,i){
  const m=S.seating[cid].map,p=ui.seatPick;
  if(p?.startsWith('stu:')){const sid=p.slice(4);Object.keys(m).forEach(k=>{if(m[k]===sid)delete m[k]});m[i]=sid;ui.seatPick=null}
  else if(p?.startsWith('seat:')){const j=+p.slice(5);const a=m[i],b=m[j];if(b)m[i]=b;else delete m[i];if(a)m[j]=a;else delete m[j];ui.seatPick=null}
  else if(m[i])ui.seatPick='seat:'+i;
  save();render();
}
function shuffleSeats(cid){
  const st=studentsOf(cid).map(s=>s.id).sort(()=>Math.random()-.5);
  withUndo('התלמידים סודרו מחדש',()=>{S.seating[cid].map={};st.forEach((id,i)=>S.seating[cid].map[i]=id)});
}

// ----- Students -----
function editStudent(id,classId){
  const s=stu(id)||{classId:classId||curClass(),tags:[]};
  openSheet(id?'עריכת תלמיד':'תלמיד חדש',
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('שם פרטי','first',s.first||'','text','required autofocus')}${F('שם משפחה','last',s.last||'')}</div>`+
    FS('כיתה','classId',s.classId,classOpts())+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('תעודת זהות','idNum',s.idNum||'','text','inputmode="numeric"')}${F('תאריך לידה','birthday',s.birthday||'','date')}</div>`+
    F('טלפון תלמיד','phone',s.phone||'','tel')+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('שם הורה','parentName',s.parentName||'')}${F('טלפון הורה','parentPhone',s.parentPhone||'','tel')}</div>`+
    F('אימייל הורה','parentEmail',s.parentEmail||'','email')+
    FC('התאמות ותגיות','tags',s.tags||[],TAGS)+
    F('הערות','notes',s.notes||'','textarea'),
  {onSave:d=>{if(id)Object.assign(s,d);else S.students.push({id:uid(),...d})},
   del:id?{label:'מחיקת התלמיד',run:()=>alertBox(`למחוק את ${fullName(s)}?`,'גם הציונים והאירועים שלו יימחקו.','מחיקה',()=>withUndo('התלמיד נמחק',()=>{
     S.students=S.students.filter(x=>x.id!==id);S.events=S.events.filter(e=>e.studentId!==id);S.logs=S.logs.filter(l=>l.studentId!==id);
     Object.values(S.grades).forEach(g=>delete g[id]);location.hash='#class/'+s.classId}))}:null});
}
function bulkStudents(cid){
  openSheet('הדבקת רשימת תלמידים',`<p class="muted small" style="margin-top:0">שם מלא בכל שורה: שם פרטי ואז שם משפחה. אפשר להעתיק עמודה מאקסל.</p>`+F('רשימה','list','','textarea','rows="10" autofocus placeholder="נועה כהן&#10;איתי לוי"'),
  {saveLabel:'הוספה',onSave:d=>{const lines=d.list.split('\n').map(x=>x.trim()).filter(Boolean);
    lines.forEach(line=>{const[first,...rest]=line.split(/\s+/);S.students.push({id:uid(),classId:cid,first,last:rest.join(' '),tags:[]})});toast(`נוספו ${lines.length} תלמידים`)}});
}
function importCSV(cid){
  const inp=document.createElement('input');inp.type='file';inp.accept='.csv,text/csv';
  inp.onchange=async()=>{const txt=(await inp.files[0].text()).replace(/^﻿/,'');const rows=txt.split(/\r?\n/).map(r=>r.split(/[,;\t]/).map(x=>x.replace(/^"|"$/g,'').trim())).filter(r=>r[0]);
    let start=/שם|name/i.test(rows[0]?.join(''))?1:0;let n=0;
    rows.slice(start).forEach(r=>{let first=r[0],last=r[1]||'';if(!r[1]&&first.includes(' ')){[first,...last]=first.split(/\s+/);last=last.join(' ')}
      S.students.push({id:uid(),classId:cid,first,last,idNum:r[2]||'',phone:r[3]||'',parentPhone:r[4]||'',tags:[]});n++});
    save();render();toast(`יובאו ${n} תלמידים`)};
  toast('קובץ CSV: שם פרטי, שם משפחה, ת״ז, טלפון, טלפון הורה');inp.click();
}

V.student=(id)=>{
  const s=stu(id);if(!s)return `<div class="card">${empty('users','התלמיד לא נמצא','',`<a class="btn" href="#classes">לכיתות</a>`)}</div>`;
  const c=cls(s.classId);
  const avg=studentAvg(id),att=attendancePct(id),beh=behaviorScore(id),hw=hwRate(id);
  const ev=S.events.filter(e=>e.studentId===id).sort((a,b)=>b.date.localeCompare(a.date)||b.lesson-a.lesson);
  const as=S.assessments.filter(a=>a.classId===s.classId).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  const gs=as.map(a=>({a,g:S.grades[a.id]?.[id]})).filter(x=>x.g!=null&&x.g!=='');
  const logs=S.logs.filter(l=>l.studentId===id).sort((a,b)=>b.date.localeCompare(a.date));
  const subjAvgs=subjects().map(sub=>({sub,v:studentAvg(id,sub)})).filter(x=>x.v!=null);
  const ring=(r,val,col)=>{const C=2*Math.PI*r,v=Math.max(0,Math.min(100,val??0));return `<circle class="ring-bg" cx="66" cy="66" r="${r}" stroke="${col}"/><circle class="ring-fg" cx="66" cy="66" r="${r}" stroke="${col}" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-v/100)}"/>`};
  const counts=Object.keys(EV).map(t=>({t,n:ev.filter(e=>e.type===t).length})).filter(x=>x.n);
  return `<div class="head"><div class="titles"><a href="#class/${s.classId}" class="small" style="text-decoration:none">${icon('back','i chev')} ${esc(c?.name||'')}</a>
    <div class="row" style="margin-top:6px">${avatar(s,'lg')}<div><h1 class="large-title" style="margin:0">${esc(fullName(s))}</h1><p class="subtitle" style="margin:0">${esc(c?.name||'')}${s.birthday?' · יום הולדת '+fmtShort(s.birthday):''}</p>
    ${s.tags.length?`<div class="chips" style="margin-top:6px">${s.tags.map(t=>`<span class="tag soft">${esc(t)}</span>`).join('')}</div>`:''}</div></div></div>
    <div class="toolbar"><button class="btn pri" onclick="addEvent('${id}')">${icon('plus')} אירוע</button><button class="btn" onclick="addLog('${id}')">${icon('note')} תיעוד</button>
      ${s.parentPhone?`<a class="btn icon" href="tel:${esc(s.parentPhone)}" aria-label="התקשרות להורה">${icon('phone')}</a><a class="btn icon" target="_blank" rel="noopener" href="https://wa.me/${waNum(s.parentPhone)}" aria-label="וואטסאפ להורה">${icon('wa')}</a>`:''}
      ${s.parentEmail?`<a class="btn icon" href="mailto:${esc(s.parentEmail)}" aria-label="מייל להורה">${icon('mail')}</a>`:''}
      <button class="btn icon" onclick="window.print()" aria-label="הדפסת דוח">${icon('print')}</button><button class="btn icon" onclick="editStudent('${id}')" aria-label="עריכה">${icon('edit')}</button></div></div>
  <div class="grid g2">
    <div class="card"><h2>תמונת מצב</h2><div class="rings">
      <svg viewBox="0 0 132 132" role="img" aria-label="ממוצע ${avg??'אין'}, נוכחות ${pct(att)}, התנהגות ${beh}">${ring(58,avg,'var(--accent)')}${ring(43,att??100,'var(--green)')}${ring(28,beh,'var(--orange)')}</svg>
      <div class="legend"><div><i style="background:var(--accent)"></i>ממוצע <b class="${gradeClass(avg)}">${avg??'—'}</b></div><div><i style="background:var(--green)"></i>נוכחות <b>${pct(att)}</b></div><div><i style="background:var(--orange)"></i>התנהגות <b>${beh}</b></div><div class="muted small">הגשת ש״ב: ${pct(hw)}</div></div>
    </div></div>
    <div class="card"><h2>מגמת ציונים</h2>${gs.length>1?spark(gs.map(x=>eff(x.a,x.g))):`<div class="muted">צריך לפחות שני ציונים כדי להציג מגמה.</div>`}
      ${subjAvgs.length>1?`<div class="chips" style="margin-top:10px">${subjAvgs.map(x=>`<span class="tag soft">${esc(x.sub)}: ${x.v}</span>`).join('')}</div>`:''}</div>
  </div>
  <div class="grid g2">
    <section><h2>ציונים</h2><div class="list">${gs.length?gs.map(({a,g})=>`<div class="li noav"><div class="main"><b>${esc(a.title)}</b><span>${esc(a.type)} · ${esc(a.subject||'')} · ${fmt(a.date)}${a.weight!==1?' · משקל '+a.weight:''}${a.factor?' · פקטור +'+a.factor:''}</span></div><b class="num ${gradeClass(eff(a,g))}" style="font-size:20px">${eff(a,g)}</b></div>`).join('')
      :'<div class="li noav"><div class="main"><b>אין ציונים עדיין</b></div></div>'}</div></section>
    <section><h2>פרטים</h2><div class="list">
      ${[['ת״ז',s.idNum],['טלפון',s.phone&&`<a href="tel:${esc(s.phone)}">${esc(s.phone)}</a>`],['הורה',s.parentName],['טלפון הורה',s.parentPhone&&`<a href="tel:${esc(s.parentPhone)}">${esc(s.parentPhone)}</a>`],['אימייל הורה',s.parentEmail&&`<a href="mailto:${esc(s.parentEmail)}">${esc(s.parentEmail)}</a>`]]
        .map(([k,v])=>`<div class="li noav" style="min-height:44px"><span class="muted" style="width:100px">${k}</span><div class="main">${v?(k==='ת״ז'||k==='הורה'?esc(v):v):'<span class="muted">—</span>'}</div></div>`).join('')}
      ${s.notes?`<div class="li noav"><div class="main"><b style="white-space:normal;font-weight:400">${esc(s.notes)}</b></div></div>`:''}</div></section>
  </div>
  <h2>נוכחות והתנהגות</h2>
  ${counts.length?`<div class="chips" style="margin-bottom:10px">${counts.map(x=>`<span class="tag" style="background:${EV[x.t].c}">${EV[x.t].n} · ${x.n}</span>`).join('')}</div>`:''}
  ${eventsList(ev,false)}
  <h2>תיעוד ושיחות</h2>
  <div class="list">${logs.length?logs.map(l=>`<div class="li noav"><div class="main"><b style="white-space:normal">${esc(l.text)}</b><span>${fmt(l.date)} · ${esc(l.kind)}</span></div><button class="btn plain icon" onclick="delLog('${l.id}')" aria-label="מחיקה">${icon('trash')}</button></div>`).join('')
    :`<div class="li noav"><div class="main"><b>אין תיעוד</b><span>תעד שיחות עם התלמיד וההורים</span></div><button class="btn sm" onclick="addLog('${id}')">${icon('plus')} תיעוד</button></div>`}</div>`;
};
function spark(vals){
  const W=400,H=110,p=8,mn=Math.min(40,...vals),mx=100;
  const pts=vals.map((v,i)=>[p+i*(W-2*p)/Math.max(1,vals.length-1),H-p-(v-mn)/(mx-mn)*(H-2*p)]);
  const passY=H-p-(S.settings.pass-mn)/(mx-mn)*(H-2*p);
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="מגמת ציונים: ${vals.join(', ')}" style="transform:scaleX(-1)">
    <line x1="0" x2="${W}" y1="${passY}" y2="${passY}" stroke="var(--red)" stroke-dasharray="4 4" opacity=".5"/>
    <polyline points="${pts.map(x=>x.join(',')).join(' ')}" fill="none" stroke="var(--accent)" stroke-width="2.5" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
    ${pts.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="var(--surface)" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join('')}</svg>`;
}
function eventsList(list,showStudent){
  if(!list.length)return `<div class="list"><div class="li noav"><div class="main"><b>אין אירועים</b></div></div></div>`;
  return `<div class="list">${list.slice(0,60).map(e=>{const s=stu(e.studentId);return `<div class="li ${showStudent?'':'noav'}">${showStudent&&s?avatar(s,'sm'):''}<span class="tag" style="background:${EV[e.type]?.c}">${evName(e.type)}</span>
    <div class="main"><b>${showStudent?`<a href="#student/${e.studentId}" style="color:inherit">${esc(fullName(s))}</a>`:fmt(e.date)+' · שיעור '+e.lesson}</b><span>${showStudent?fmt(e.date)+' · שיעור '+e.lesson+' · ':''}${esc(e.note||'')}</span></div>
    <button class="btn plain icon" onclick="delEvent('${e.id}')" aria-label="מחיקת אירוע">${icon('trash')}</button></div>`}).join('')}</div>`;
}
function delEvent(id){withUndo('האירוע נמחק',()=>S.events=S.events.filter(e=>e.id!==id))}
function addEvent(sid){
  const s=stu(sid);
  openSheet('אירוע חדש',`<p class="muted" style="margin-top:0">${esc(fullName(s))}</p>`+FS('סוג','type','praise',Object.entries(EV).map(([k,v])=>[k,v.n]))+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('תאריך','date',today(),'date')}${F('שיעור','lesson',currentLessonNo()||1,'number','min="0" max="12"')}</div>`+F('הערה','note',''),
  {onSave:d=>{S.events.push({id:uid(),studentId:sid,classId:s.classId,date:d.date,lesson:+d.lesson,type:d.type,note:d.note})}});
}
function addLog(sid){
  openSheet('תיעוד חדש',FS('סוג','kind','שיחה עם הורה',['שיחה עם הורה','שיחה אישית','פגישה','הערה','מעקב'])+F('תאריך','date',today(),'date')+F('מה היה','text','','textarea','required autofocus'),
  {onSave:d=>{S.logs.push({id:uid(),studentId:sid,...d})}});
}
function delLog(id){withUndo('התיעוד נמחק',()=>S.logs=S.logs.filter(l=>l.id!==id))}

// ----- Attendance -----
V.attendance=()=>{
  const cid=curClass();if(!cid)return noClasses('נוכחות');
  const st=studentsOf(cid);
  const lessonEv=S.events.filter(e=>e.classId===cid&&e.date===ui.date&&+e.lesson===+ui.lesson);
  const has=(sid,t)=>lessonEv.some(e=>e.studentId===sid&&e.type===t);
  const L=S.lessons.find(l=>l.classId===cid&&l.date===ui.date&&+l.lesson===+ui.lesson);
  const abs=lessonEv.filter(e=>e.type==='absent').length,late=lessonEv.filter(e=>e.type==='late').length;
  const tt=S.timetable[new Date(ui.date+'T12:00').getDay()]?.[ui.lesson];
  return `<div class="head"><div class="titles"><h1 class="large-title">נוכחות</h1><p class="subtitle">${dayName(ui.date)} ${fmt(ui.date)} · שיעור ${ui.lesson}${tt?' · '+esc(tt.subject||''):''}</p></div>
    <div class="toolbar"><button class="btn" onclick="allPresent()">${icon('ok')} כולם נוכחים</button></div></div>
  <div class="card row">
    ${classPicker(cid)}
    <div class="row" style="gap:4px"><button class="btn icon" onclick="ui.date=addDays(ui.date,-1);render()" aria-label="יום קודם">${icon('back')}</button><input class="input" type="date" value="${ui.date}" onchange="ui.date=this.value||today();render()" aria-label="תאריך"><button class="btn icon" onclick="ui.date=addDays(ui.date,1);render()" aria-label="יום הבא">${icon('chev')}</button></div>
    <select class="input" onchange="ui.lesson=+this.value;render()" aria-label="שיעור">${S.settings.bells.map((b,i)=>`<option value="${i+1}" ${i+1===+ui.lesson?'selected':''}>שיעור ${i+1} · ${b[0]}</option>`).join('')}</select>
    <input class="input grow" placeholder="נושא השיעור" value="${esc(L?.topic||'')}" onchange="setTopic(this.value)" aria-label="נושא השיעור" style="min-width:180px">
  </div>
  <div class="tiles">
    <div class="tile"><span class="t" style="color:var(--green)">נוכחים</span><b>${st.length-abs}</b></div>
    <div class="tile"><span class="t" style="color:var(--red)">חסרים</span><b>${abs}</b></div>
    <div class="tile"><span class="t" style="color:var(--orange)">מאחרים</span><b>${late}</b></div>
    <div class="tile"><span class="t">נרשם</span><b style="font-size:17px;padding-top:8px">${L||lessonEv.length?'✓ השיעור נשמר':'עדיין לא'}</b></div>
  </div>
  ${st.length?`<div class="list att">${st.map(s=>{const a=has(s.id,'absent'),l=has(s.id,'late');
    return `<div class="li">${avatar(s)}<div class="main"><b><a href="#student/${s.id}" style="color:inherit;text-decoration:none">${esc(fullName(s))}</a></b></div>
      <div class="att-state" role="group" aria-label="נוכחות"><button class="p ${!a&&!l?'on':''}" onclick="setAtt('${s.id}','p')" aria-pressed="${!a&&!l}" title="נוכח">נ</button><button class="l ${l?'on':''}" onclick="setAtt('${s.id}','l')" aria-pressed="${l}" title="איחור">א</button><button class="a ${a?'on':''}" onclick="setAtt('${s.id}','a')" aria-pressed="${a}" title="חיסור">ח</button></div>
      <div class="att-extra">${BEHAVIOR.map(t=>`<button class="chip ${has(s.id,t)?'on':''}" style="${has(s.id,t)?'background:'+EV[t].c:''}" aria-pressed="${has(s.id,t)}" onclick="toggleEv('${s.id}','${t}')">${EV[t].n}</button>`).join('')}</div></div>`}).join('')}</div>
    <p class="muted small">נ = נוכח · א = איחור · ח = חיסור. תגיות ההתנהגות נשמרות לשיעור הזה.</p>`
  :`<div class="card">${empty('users','אין תלמידים בכיתה','',`<a class="btn pri" href="#class/${cid}">להוספת תלמידים</a>`)}</div>`}`;
};
function setTopic(v){ensureLesson(ui.classId,ui.date,ui.lesson).topic=v;save();toast('נושא השיעור נשמר')}
function setAtt(sid,st){
  const cid=ui.classId;ensureLesson(cid,ui.date,ui.lesson);
  S.events=S.events.filter(e=>!(e.studentId===sid&&e.date===ui.date&&+e.lesson===+ui.lesson&&(e.type==='absent'||e.type==='late')));
  if(st!=='p')S.events.push({id:uid(),studentId:sid,classId:cid,date:ui.date,lesson:+ui.lesson,type:st==='a'?'absent':'late',note:''});
  save();render();
}
function toggleEv(sid,t){
  ensureLesson(ui.classId,ui.date,ui.lesson);
  const i=S.events.findIndex(e=>e.studentId===sid&&e.date===ui.date&&+e.lesson===+ui.lesson&&e.type===t);
  if(i>=0)S.events.splice(i,1);else S.events.push({id:uid(),studentId:sid,classId:stu(sid).classId,date:ui.date,lesson:+ui.lesson,type:t,note:''});
  save();render();
}
function allPresent(){withUndo('כולם סומנו נוכחים',()=>{ensureLesson(ui.classId,ui.date,ui.lesson);S.events=S.events.filter(e=>!(e.classId===ui.classId&&e.date===ui.date&&+e.lesson===+ui.lesson&&(e.type==='absent'||e.type==='late')))})}

// ----- Grades -----
V.grades=()=>{
  const cid=curClass();if(!cid)return noClasses('ציונים');
  const st=studentsOf(cid);
  const subs=[...new Set(S.assessments.filter(a=>a.classId===cid).map(a=>a.subject).filter(Boolean))];
  if(ui.subject&&!subs.includes(ui.subject))ui.subject='';
  const as=S.assessments.filter(a=>a.classId===cid&&(!ui.subject||a.subject===ui.subject)).sort((a,b)=>(a.date||'').localeCompare(b.date||''));
  return `<div class="head"><div class="titles"><h1 class="large-title">ציונים</h1><p class="subtitle">${as.length} מבחנים ומטלות · Enter עובר לתלמיד הבא</p></div>
    <div class="toolbar"><button class="btn pri" onclick="editAssessment(null,'${cid}')">${icon('plus')} מבחן / מטלה</button><button class="btn" onclick="exportGrades('${cid}')">${icon('down')} ייצוא לאקסל</button></div></div>
  <div class="card row">${classPicker(cid)}${subs.length>1?`<select class="input" onchange="ui.subject=this.value;render()" aria-label="מקצוע"><option value="">כל המקצועות</option>${subs.map(x=>`<option ${x===ui.subject?'selected':''}>${esc(x)}</option>`).join('')}</select>`:''}</div>
  ${!st.length?`<div class="card">${empty('users','אין תלמידים בכיתה','',`<a class="btn pri" href="#class/${cid}">להוספת תלמידים</a>`)}</div>`
  :!as.length?`<div class="card">${empty('grades','אין עדיין מבחנים','הוסף מבחן, בוחן או עבודה ואז הזן ציונים בטבלה.',`<button class="btn pri" onclick="editAssessment(null,'${cid}')">${icon('plus')} מבחן / מטלה</button>`)}</div>`
  :`<div class="card flush"><div class="tbl-wrap"><table>
    <thead><tr><th class="sticky-col">תלמיד</th>${as.map(a=>`<th class="c"><a href="javascript:void 0" onclick="editAssessment('${a.id}')" style="text-decoration:none;font-size:13px;color:var(--label)">${esc(a.title)}</a><br><span style="font-weight:400">${esc(a.type)} · ${fmtShort(a.date)}${a.weight!==1?' · ×'+a.weight:''}${a.factor?' · +'+a.factor:''}</span></th>`).join('')}<th class="c">ממוצע</th></tr></thead>
    <tbody>${st.map((s,r)=>{const avg=studentAvg(s.id,ui.subject||undefined);return `<tr><td class="sticky-col"><a href="#student/${s.id}" style="color:var(--label);text-decoration:none" class="row">${avatar(s,'sm')}${esc(fullName(s))}</a></td>
      ${as.map((a,c)=>{const g=S.grades[a.id]?.[s.id];return `<td class="c"><input class="gin ${gradeClass(g==null?null:eff(a,g))}" inputmode="numeric" data-r="${r}" data-c="${c}" value="${g??''}" aria-label="ציון של ${esc(fullName(s))} ב${esc(a.title)}" onchange="setGrade('${a.id}','${s.id}',this)" onkeydown="gradeKey(event,this)" onfocus="this.select()"></td>`}).join('')}
      <td class="c num" id="avg-${s.id}"><b class="${gradeClass(avg)}">${avg??'—'}</b></td></tr>`}).join('')}
    ${[['ממוצע','avg'],['חציון','med'],['נכשלים','fail']].map(([n,k])=>`<tr><td class="sticky-col"><b>${n}</b></td>${as.map(a=>`<td class="c num" id="${k}-${a.id}">${colStat(a,st,k)}</td>`).join('')}<td></td></tr>`).join('')}
    </tbody></table></div></div>`}`;
};
function colStat(a,st,k){
  const v=st.map(s=>S.grades[a.id]?.[s.id]).filter(x=>x!=null&&x!=='').map(g=>eff(a,g));
  if(!v.length)return '—';
  if(k==='avg')return round1(v.reduce((x,y)=>x+y,0)/v.length);
  if(k==='med')return median(v);
  const f=v.filter(x=>x<S.settings.pass).length;return `<span style="color:${f?'var(--red)':'var(--label-2)'}">${f}</span>`;
}
function setGrade(aid,sid,el){
  const raw=el.value.trim();S.grades[aid]=S.grades[aid]||{};
  if(raw===''){delete S.grades[aid][sid]}else{const v=Number(raw);if(isNaN(v)){el.value=S.grades[aid][sid]??'';toast('ציון חייב להיות מספר');return}S.grades[aid][sid]=Math.max(0,Math.min(100,Math.round(v)));el.value=S.grades[aid][sid]}
  save();
  const a=S.assessments.find(x=>x.id===aid),st=studentsOf(a.classId);
  el.className='gin '+gradeClass(S.grades[aid][sid]==null?null:eff(a,S.grades[aid][sid]));
  const avg=studentAvg(sid,ui.subject||undefined);const ac=document.getElementById('avg-'+sid);if(ac)ac.innerHTML=`<b class="${gradeClass(avg)}">${avg??'—'}</b>`;
  ['avg','med','fail'].forEach(k=>{const c=document.getElementById(k+'-'+aid);if(c)c.innerHTML=colStat(a,st,k)});
}
function gradeKey(e,el){
  if(e.key==='Enter'||e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();const r=+el.dataset.r+(e.key==='ArrowUp'?-1:1);
    const n=document.querySelector(`.gin[data-r="${r}"][data-c="${el.dataset.c}"]`);if(n){el.dispatchEvent(new Event('change'));n.focus()}else el.blur()}
}
function editAssessment(id,cid){
  const a=S.assessments.find(x=>x.id===id)||{classId:cid,subject:cls(cid)?.subject||S.teacher.subject,date:today(),weight:1,factor:0,type:'מבחן'};
  openSheet(id?'עריכת מבחן':'מבחן / מטלה חדשה',
    F('שם','title',a.title||'','text','required autofocus placeholder="למשל מבחן בשברים"')+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${FS('סוג','type',a.type,A_TYPES)}${F('מקצוע','subject',a.subject||'')}</div>`+
    F('תאריך','date',a.date,'date')+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('משקל בממוצע','weight',a.weight,'number','min="0" step="0.5"')}${F('פקטור (נקודות בונוס)','factor',a.factor||0,'number','min="0" max="50"')}</div>`,
  {onSave:d=>{d.weight=+d.weight||1;d.factor=+d.factor||0;if(id)Object.assign(a,d);else S.assessments.push({id:uid(),classId:cid,...d})},
   del:id?{label:'מחיקת המבחן',run:()=>withUndo('המבחן נמחק',()=>{S.assessments=S.assessments.filter(x=>x.id!==id);delete S.grades[id]})}:null});
}
function exportGrades(cid){
  const st=studentsOf(cid),as=S.assessments.filter(a=>a.classId===cid);
  download(`ציונים-${cls(cid).name}.csv`,csv([['תלמיד',...as.map(a=>a.title),'ממוצע'],...st.map(s=>[fullName(s),...as.map(a=>{const g=S.grades[a.id]?.[s.id];return g==null?'':eff(a,g)}),studentAvg(s.id)??''])]),'text/csv');
}

// ----- Homework -----
V.homework=()=>{
  const cid=curClass();if(!cid)return noClasses('שיעורי בית');
  const st=studentsOf(cid);
  const list=S.homework.filter(h=>h.classId===cid).sort((a,b)=>b.due.localeCompare(a.due));
  const t=today();
  return `<div class="head"><div class="titles"><h1 class="large-title">שיעורי בית</h1><p class="subtitle">${list.filter(h=>h.due>=t).length} פתוחים · ${list.length} בסך הכול</p></div>
    <div class="toolbar"><button class="btn pri" onclick="editHw(null,'${cid}')">${icon('plus')} שיעורי בית</button></div></div>
  <div class="card row">${classPicker(cid)}</div>
  ${list.length?`<div class="list">${list.map(h=>{const done=st.filter(s=>h.done[s.id]).length;const late=h.due<t;
    return `<div class="li noav hw-item" onclick="hwSheet('${h.id}')"><div class="main"><b>${esc(h.text)}</b><span>${esc(h.subject||'')} · ניתן ${fmtShort(h.date)} · להגשה ${dayName(h.due)} ${fmtShort(h.due)}${late?' · הסתיים':''}</span></div>
    <div class="end"><span class="num">${done}/${st.length}</span><div class="meter" style="width:60px"><i style="width:${st.length?done/st.length*100:0}%;background:var(--green)"></i></div>${icon('chev','i chev')}</div></div>`}).join('')}</div>`
  :`<div class="card">${empty('book','אין שיעורי בית לכיתה','הוסף משימה ועקוב מי הגיש.',`<button class="btn pri" onclick="editHw(null,'${cid}')">${icon('plus')} שיעורי בית</button>`)}</div>`}`;
};
function editHw(id,cid){
  const h=S.homework.find(x=>x.id===id)||{classId:cid,date:today(),due:addDays(today(),2),subject:cls(cid)?.subject||S.teacher.subject,done:{}};
  openSheet(id?'עריכת שיעורי בית':'שיעורי בית חדשים',F('מה צריך לעשות','text',h.text||'','textarea','required autofocus')+F('מקצוע','subject',h.subject||'')+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('ניתן בתאריך','date',h.date,'date')}${F('להגשה עד','due',h.due,'date')}</div>`,
  {onSave:d=>{if(id)Object.assign(h,d);else S.homework.push({id:uid(),classId:cid,done:{},...d})},
   del:id?{label:'מחיקה',run:()=>withUndo('שיעורי הבית נמחקו',()=>S.homework=S.homework.filter(x=>x.id!==id))}:null});
}
function hwSheet(id){
  const h=S.homework.find(x=>x.id===id),st=studentsOf(h.classId);
  const body=()=>`<p style="margin-top:0"><b>${esc(h.text)}</b><br><span class="muted small">להגשה ${fmt(h.due)}</span></p>
    <div class="row" style="margin-bottom:10px"><button type="button" class="btn sm" data-all>סימון כולם</button><button type="button" class="btn sm" data-missing>${icon('warn')} רישום חוסר ש״ב לחסרים</button><span class="grow"></span><button type="button" class="btn sm" data-edit>${icon('edit')} עריכה</button></div>
    <div class="list" style="box-shadow:none">${st.map(s=>`<div class="li" data-s="${s.id}">${avatar(s,'sm')}<div class="main"><b>${esc(fullName(s))}</b></div><button type="button" class="check ${h.done[s.id]?'on':''}" aria-label="הגיש">${h.done[s.id]?icon('ok'):''}</button></div>`).join('')}</div>`;
  const {form,close}=openSheet('מי הגיש?',body(),{onMount:(f,close)=>bind(f,close)});
  function bind(f,close){
    f.querySelectorAll('[data-s]').forEach(r=>r.onclick=()=>{const sid=r.dataset.s;h.done[sid]=!h.done[sid];if(!h.done[sid])delete h.done[sid];save();f.innerHTML=body();bind(f,close);render()});
    f.querySelector('[data-all]').onclick=()=>{st.forEach(s=>h.done[s.id]=true);save();f.innerHTML=body();bind(f,close);render()};
    f.querySelector('[data-edit]').onclick=()=>{close();editHw(id)};
    f.querySelector('[data-missing]').onclick=()=>{const miss=st.filter(s=>!h.done[s.id]);if(!miss.length)return toast('כולם הגישו');
      miss.forEach(s=>{if(!S.events.some(e=>e.studentId===s.id&&e.type==='nohw'&&e.date===h.due))S.events.push({id:uid(),studentId:s.id,classId:h.classId,date:h.due,lesson:0,type:'nohw',note:h.text.slice(0,40)})});
      save();close();render();toast(`נרשם חוסר ש״ב ל־${miss.length} תלמידים`)};
  }
}

// ----- Lesson diary -----
V.diary=()=>{
  if(!S.classes.length)return noClasses('יומן שיעורים');
  const list=S.lessons.filter(l=>!ui.diaryClass||l.classId===ui.diaryClass).sort((a,b)=>b.date.localeCompare(a.date)||b.lesson-a.lesson);
  return `<div class="head"><div class="titles"><h1 class="large-title">יומן שיעורים</h1><p class="subtitle">כל שיעור שרשמת בו נוכחות או נושא</p></div>
   <div class="toolbar"><button class="btn pri" onclick="editLesson()">${icon('plus')} שיעור</button></div></div>
  <div class="card row"><select class="input" onchange="ui.diaryClass=this.value;render()" aria-label="סינון כיתה"><option value="">כל הכיתות</option>${S.classes.map(c=>`<option value="${c.id}" ${c.id===ui.diaryClass?'selected':''}>${esc(c.name)}</option>`).join('')}</select></div>
  ${list.length?`<div class="list">${list.slice(0,200).map(l=>{const c=cls(l.classId);const ab=S.events.filter(e=>e.classId===l.classId&&e.date===l.date&&+e.lesson===+l.lesson&&e.type==='absent').length;
    return `<div class="li" onclick="editLesson('${l.id}')">${c?classDot(c):''}<div class="main"><b>${esc(l.topic||'ללא נושא')}</b><span>${dayName(l.date)} ${fmt(l.date)} · שיעור ${l.lesson} · ${esc(c?.name||'')}${l.notes?' · '+esc(l.notes):''}</span></div><div class="end"><span class="small">${ab} חסרים</span>${icon('chev','i chev')}</div></div>`}).join('')}</div>`
  :`<div class="card">${empty('diary','היומן ריק','כשתרשום נוכחות או נושא שיעור — הוא יופיע כאן.')}</div>`}`;
};
function editLesson(id){
  const l=S.lessons.find(x=>x.id===id)||{classId:ui.diaryClass||curClass(),date:today(),lesson:currentLessonNo()||1};
  openSheet(id?'עריכת שיעור':'שיעור חדש',FS('כיתה','classId',l.classId,classOpts())+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('תאריך','date',l.date,'date')}${F('שיעור','lesson',l.lesson,'number','min="0" max="12"')}</div>`+
    F('נושא','topic',l.topic||'','text','autofocus')+F('הערות / מה לזכור לשיעור הבא','notes',l.notes||'','textarea')+
    (id?`<a class="btn" style="width:100%" href="#attendance" onclick="ui.classId='${l.classId}';ui.date='${l.date}';ui.lesson=${l.lesson};document.querySelector('.scrim')?.remove()">${icon('att')} פתיחת הנוכחות של השיעור</a>`:''),
  {onSave:d=>{d.lesson=+d.lesson;if(id)Object.assign(l,d);else S.lessons.push({id:uid(),...d})},
   del:id?{label:'מחיקת השיעור מהיומן',run:()=>withUndo('השיעור נמחק',()=>S.lessons=S.lessons.filter(x=>x.id!==id))}:null});
}

// ----- Timetable -----
V.timetable=()=>{
  if(!S.classes.length)return noClasses('מערכת שעות');
  const dow=new Date().getDay(),days=[0,1,2,3,4,5];
  let total=0;days.forEach(d=>total+=Object.keys(S.timetable[d]||{}).length);
  return `<div class="head"><div class="titles"><h1 class="large-title">מערכת שעות</h1><p class="subtitle">${total} שעות שבועיות · לוחצים על משבצת כדי לערוך</p></div>
    <div class="toolbar"><button class="btn" onclick="window.print()">${icon('print')} הדפסה</button></div></div>
  <div class="card flush"><div class="tbl-wrap"><table><thead><tr><th class="sticky-col">שיעור</th>${days.map(d=>`<th class="c" style="${d===dow?'color:var(--accent)':''}">${DAYS[d]}</th>`).join('')}</tr></thead><tbody>
  ${S.settings.bells.map((b,i)=>{const l=i+1;return `<tr><td class="sticky-col"><b>${l}</b> <span class="muted small">${b[0]}</span></td>${days.map(d=>{const v=S.timetable[d]?.[l];const c=v&&cls(v.classId);
    return `<td class="c" style="cursor:pointer;padding:4px;${d===dow?'background:var(--accent-fill)':''}" onclick="editSlot(${d},${l})" tabindex="0" onkeydown="if(event.key==='Enter')editSlot(${d},${l})">${c?`<div style="border-radius:8px;padding:6px;background:${c.color};color:#fff"><b>${esc(c.name)}</b><br><span class="small">${esc(v.subject||'')}${v.room?' · '+esc(v.room):''}</span></div>`:'<span class="muted">+</span>'}</td>`}).join('')}</tr>`}).join('')}
  </tbody></table></div></div>`;
};
function editSlot(day,l){
  const v=S.timetable[day]?.[l]||{classId:curClass(),subject:''};
  if(!v.subject)v.subject=cls(v.classId)?.subject||S.teacher.subject||'';
  openSheet(`יום ${DAYS[day]} · שיעור ${l}`,FS('כיתה','classId',v.classId,classOpts())+F('מקצוע','subject',v.subject||'')+F('חדר','room',v.room||''),
  {onSave:d=>{S.timetable[day]=S.timetable[day]||{};S.timetable[day][l]=d},
   del:S.timetable[day]?.[l]?{label:'ניקוי המשבצת',run:()=>withUndo('המשבצת נוקתה',()=>delete S.timetable[day][l])}:null});
}

// ----- Calendar -----
function calItems(date){
  return [...S.calendar.filter(e=>e.date===date).map(e=>({t:e.title,c:CAL_TYPES[e.type]?.c||'var(--indigo)',sub:CAL_TYPES[e.type]?.n,id:e.id,cls:e.classId})),
    ...S.assessments.filter(a=>a.date===date).map(a=>({t:a.title,c:'var(--accent)',sub:a.type,cls:a.classId})),
    ...S.homework.filter(h=>h.due===date).map(h=>({t:'ש״ב: '+h.text,c:'var(--brown)',sub:'הגשה',cls:h.classId}))];
}
V.calendar=()=>{
  const [y,m]=ui.month.split('-').map(Number);
  const first=new Date(y,m-1,1),start=new Date(first);start.setDate(1-first.getDay());
  const name=new Intl.DateTimeFormat('he-IL',{month:'long',year:'numeric'}).format(first);
  const t=today();const cells=[];
  for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);cells.push(d)}
  return `<div class="head"><div class="titles"><h1 class="large-title">${name}</h1><p class="subtitle">${hebDate(first).split(' ').slice(1).join(' ')}</p></div>
   <div class="toolbar"><button class="btn icon" onclick="moveMonth(-1)" aria-label="חודש קודם">${icon('back')}</button><button class="btn" onclick="ui.month=today().slice(0,7);render()">היום</button><button class="btn icon" onclick="moveMonth(1)" aria-label="חודש הבא">${icon('chev')}</button><button class="btn pri" onclick="editCal(null,'${t}')">${icon('plus')} אירוע</button></div></div>
  <div class="cal">${DAYS.map(d=>`<div class="dh">${d.slice(0,3)}</div>`).join('')}
  ${cells.map(d=>{const s=iso(d),items=calItems(s);return `<div class="${d.getMonth()!==m-1?'out':''} ${s===t?'today':''}" onclick="daySheet('${s}')" tabindex="0" role="button" aria-label="${fmt(s)}, ${items.length} אירועים" onkeydown="if(event.key==='Enter')daySheet('${s}')"><span class="d">${d.getDate()}</span>${items.slice(0,3).map(x=>`<span class="ev" style="background:${x.c}">${esc(x.t)}</span>`).join('')}${items.length>3?`<span class="small muted">+${items.length-3}</span>`:''}</div>`}).join('')}</div>
  <div class="chips" style="margin-top:12px">${Object.values(CAL_TYPES).map(x=>`<span class="tag" style="background:${x.c}">${x.n}</span>`).join('')}<span class="tag" style="background:var(--accent)">מבחן במערכת הציונים</span><span class="tag" style="background:var(--brown)">הגשת ש״ב</span></div>`;
};
function moveMonth(n){const[y,m]=ui.month.split('-').map(Number);const d=new Date(y,m-1+n,1);ui.month=iso(d).slice(0,7);render()}
function daySheet(date){
  const items=calItems(date);
  const {close}=openSheet(`${dayName(date)} ${fmt(date)}`,`<p class="muted" style="margin-top:0">${hebDate(new Date(date+'T12:00'))}</p>
    <div class="list" style="box-shadow:none">${items.length?items.map(x=>`<div class="li noav" ${x.id?`data-e="${x.id}"`:''}><span class="tag" style="background:${x.c}">${esc(x.sub||'')}</span><div class="main"><b>${esc(x.t)}</b><span>${esc(cls(x.cls)?.name||'כל הכיתות')}</span></div>${x.id?icon('chev','i chev'):''}</div>`).join(''):'<div class="li noav muted">אין אירועים ביום הזה</div>'}</div>
    <button type="button" class="btn pri" style="width:100%" data-add>${icon('plus')} הוספת אירוע</button>`,
  {onMount:(f,close)=>{f.querySelector('[data-add]').onclick=()=>{close();editCal(null,date)};f.querySelectorAll('[data-e]').forEach(r=>r.onclick=()=>{close();editCal(r.dataset.e)})}});
}
function editCal(id,date){
  const e=S.calendar.find(x=>x.id===id)||{date,type:'exam',classId:''};
  openSheet(id?'עריכת אירוע':'אירוע חדש',F('כותרת','title',e.title||'','text','required autofocus')+
    `<div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${FS('סוג','type',e.type,Object.entries(CAL_TYPES).map(([k,v])=>[k,v.n]))}${F('תאריך','date',e.date,'date')}</div>`+
    FS('כיתה','classId',e.classId,[['','כל הכיתות'],...classOpts()])+F('הערות','notes',e.notes||'','textarea'),
  {onSave:d=>{if(id)Object.assign(e,d);else S.calendar.push({id:uid(),...d})},
   del:id?{label:'מחיקת האירוע',run:()=>withUndo('האירוע נמחק',()=>S.calendar=S.calendar.filter(x=>x.id!==id))}:null});
}

// ----- Messages -----
function fillTpl(text,s){
  return text.replace(/\{תלמיד\}/g,fullName(s)).replace(/\{הורה\}/g,s.parentName||'הורה יקר').replace(/\{כיתה\}/g,cls(s.classId)?.name||'')
    .replace(/\{ממוצע\}/g,studentAvg(s.id)??'—').replace(/\{חיסורים\}/g,evCount(s.id,'absent')).replace(/\{מורה\}/g,S.teacher.name||'');
}
V.messages=()=>{
  const cid=curClass();if(!cid)return noClasses('הודעות');
  const st=studentsOf(cid),M=ui.msg;
  const rec=M.to==='class'?st:st.filter(s=>M.sel.includes(s.id));
  return `<div class="head"><div class="titles"><h1 class="large-title">הודעות להורים</h1><p class="subtitle">כותבים פעם אחת — נשלח לכל הורה בוואטסאפ עם השם של הילד</p></div></div>
  <div class="grid g2">
   <div class="card">
    <div class="row" style="margin-bottom:12px">${classPicker(cid)}${seg([['class','כל הכיתה'],['sel','בחירה']],M.to,'setMsgTo')}</div>
    ${M.to==='sel'?`<div class="chips" style="margin-bottom:12px">${st.map(s=>`<button class="chip ${M.sel.includes(s.id)?'on':''}" style="${M.sel.includes(s.id)?'background:var(--accent)':''}" onclick="toggleMsgSel('${s.id}')">${esc(fullName(s))}</button>`).join('')}</div>`:''}
    <label class="field"><span>תבנית</span><select onchange="ui.msg.tpl=this.value;ui.msg.text=MSG_TPL[this.value];render()">${Object.keys(MSG_TPL).map(k=>`<option ${k===M.tpl?'selected':''}>${k}</option>`).join('')}</select></label>
    <label class="field"><span>ההודעה</span><textarea id="msgText" rows="6" oninput="ui.msg.text=this.value;updMsgPreview()">${esc(M.text)}</textarea></label>
    <div class="chips" style="margin-bottom:6px">${['{תלמיד}','{הורה}','{כיתה}','{ממוצע}','{חיסורים}','{מורה}'].map(p=>`<button class="chip" onclick="insPh('${p}')">${p}</button>`).join('')}</div>
    <p class="muted small">לחיצה על משתנה מוסיפה אותו להודעה. הוא יוחלף אוטומטית בפרטי כל תלמיד.</p>
   </div>
   <div><h2>נמענים (${rec.length})</h2><div class="list" id="msgPrev">${msgPreview(rec)}</div>
    <div class="row"><button class="btn" onclick="copyAllMsgs()">${icon('copy')} העתקת הכול</button><button class="btn" onclick="logMsgs()">${icon('ok')} שמירה בהיסטוריה</button></div></div>
  </div>
  ${S.messages.length?`<h2 style="margin-top:20px">היסטוריה</h2><div class="list">${S.messages.slice(-15).reverse().map(m=>`<div class="li noav"><div class="main"><b>${esc(m.text.slice(0,90))}</b><span>${fmt(m.date)} · ${esc(cls(m.classId)?.name||'')} · ${m.count} נמענים</span></div></div>`).join('')}</div>`:''}`;
};
function msgPreview(rec){
  if(!rec.length)return '<div class="li noav muted">בחר נמענים</div>';
  return rec.map(s=>{const t=fillTpl(ui.msg.text,s);return `<div class="li">${avatar(s,'sm')}<div class="main"><b>${esc(fullName(s))}${s.parentName?' · '+esc(s.parentName):''}</b><span>${esc(t)}</span></div>
    ${s.parentPhone?`<a class="btn sm" target="_blank" rel="noopener" href="https://wa.me/${waNum(s.parentPhone)}?text=${encodeURIComponent(t)}">${icon('wa')} שליחה</a>`:'<span class="small muted">אין טלפון</span>'}</div>`}).join('');
}
function msgRecipients(){const st=studentsOf(curClass());return ui.msg.to==='class'?st:st.filter(s=>ui.msg.sel.includes(s.id))}
function updMsgPreview(){document.getElementById('msgPrev').innerHTML=msgPreview(msgRecipients())}
function setMsgTo(v){ui.msg.to=v;render()}
function toggleMsgSel(id){const a=ui.msg.sel;const i=a.indexOf(id);i>=0?a.splice(i,1):a.push(id);render()}
function insPh(p){const ta=document.getElementById('msgText');const s=ta.selectionStart;ta.value=ta.value.slice(0,s)+p+ta.value.slice(ta.selectionEnd);ui.msg.text=ta.value;ta.focus();ta.selectionStart=ta.selectionEnd=s+p.length;updMsgPreview()}
function copyAllMsgs(){copyText(msgRecipients().map(s=>`${fullName(s)} (${s.parentPhone||'—'}):\n${fillTpl(ui.msg.text,s)}`).join('\n\n'))}
function logMsgs(){S.messages.push({id:uid(),date:today(),classId:curClass(),text:ui.msg.text,count:msgRecipients().length});save();render();toast('נשמר בהיסטוריה')}

// ----- Tools -----
V.tools=()=>{
  const cid=curClass();
  const tabs=seg([['random','תלמיד אקראי'],['groups','חלוקה לקבוצות'],['timer','טיימר']],ui.tool,'setTool');
  let body='';
  if(ui.tool==='timer'){
    const T=ui.timer,m=Math.floor(T.left/60),s=T.left%60;
    body=`<div class="card" style="text-align:center"><div class="timer num" id="timerText" aria-live="off">${pad(m)}:${pad(s)}</div>
      <div class="meter" style="max-width:420px;margin:10px auto 20px"><i id="timerBar" style="width:${T.total?T.left/T.total*100:0}%;background:${T.left<=10?'var(--red)':'var(--accent)'}"></i></div>
      <div class="row" style="justify-content:center;margin-bottom:16px"><button class="btn pri" onclick="timerToggle()" style="min-width:120px">${icon(T.run?'pause':'play')} ${T.run?'עצירה':'התחלה'}</button><button class="btn" onclick="timerSet(ui.timer.total)">${icon('reset')} איפוס</button></div>
      <div class="chips" style="justify-content:center">${[1,2,3,5,10,15,20,30].map(n=>`<button class="chip" onclick="timerSet(${n*60})">${n} דק׳</button>`).join('')}</div></div>`;
  }else if(!cid)body=noClasses('כלי כיתה');
  else if(ui.tool==='random'){
    const st=studentsOf(cid);const left=st.filter(s=>!ui.picked.includes(s.id));
    body=`<div class="card row">${classPicker(cid,"ui.picked=[];render()")}<span class="grow"></span><span class="muted small">${left.length} שעוד לא נבחרו</span><button class="btn sm" onclick="ui.picked=[];render()">${icon('reset')} מההתחלה</button></div>
      <div class="card" style="text-align:center;padding:30px 18px"><div class="picker-name" id="pickName" aria-live="polite">${ui.picked.length?esc(fullName(stu(ui.picked.at(-1)))):'?'}</div>
      <button class="btn pri" style="height:50px;padding:0 30px;font-size:17px;border-radius:25px;margin-top:10px" onclick="pickRandom()" ${st.length?'':'disabled'}>${icon('dice')} בחירת תלמיד</button></div>
      ${ui.picked.length?`<h3>נבחרו</h3><div class="chips">${ui.picked.map(id=>`<span class="tag soft">${esc(fullName(stu(id)))}</span>`).join('')}</div>`:''}`;
  }else{
    const g=ui.groups;
    body=`<div class="card row">${classPicker(cid,"ui.groups=null;render()")}<label class="row">מספר קבוצות <input class="input" id="gN" type="number" min="2" max="20" value="${g?.n||4}" style="width:80px"></label>
      <button class="btn pri" onclick="makeGroups()">${icon('shuffle')} חלוקה</button>${g?`<button class="btn" onclick="copyGroups()">${icon('copy')} העתקה</button>`:''}</div>
      ${g?`<div class="grid g3">${g.list.map((grp,i)=>`<div class="card"><h3>קבוצה ${i+1}</h3>${grp.map(id=>{const s=stu(id);return s?`<div class="row" style="margin:6px 0">${avatar(s,'sm')}${esc(fullName(s))}</div>`:''}).join('')}</div>`).join('')}</div>`:''}`;
  }
  return `<div class="head"><div class="titles"><h1 class="large-title">כלי כיתה</h1><p class="subtitle">עוזרים קטנים לשיעור עצמו</p></div></div><div style="margin-bottom:16px">${tabs}</div>${body}`;
};
function setTool(v){ui.tool=v;render()}
function pickRandom(){
  const st=studentsOf(curClass());let left=st.filter(s=>!ui.picked.includes(s.id));if(!left.length){ui.picked=[];left=st}
  const win=left[Math.floor(Math.random()*left.length)];const el=document.getElementById('pickName');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce){ui.picked.push(win.id);render();return}
  let i=0;const iv=setInterval(()=>{el.textContent=fullName(st[Math.floor(Math.random()*st.length)]);if(++i>14){clearInterval(iv);ui.picked.push(win.id);render()}},60);
}
function makeGroups(){
  const n=Math.max(2,Math.min(20,+document.getElementById('gN').value||4));
  const ids=studentsOf(curClass()).map(s=>s.id).sort(()=>Math.random()-.5);
  const list=Array.from({length:n},()=>[]);ids.forEach((id,i)=>list[i%n].push(id));ui.groups={n,list};render();
}
function copyGroups(){copyText(ui.groups.list.map((g,i)=>`קבוצה ${i+1}: `+g.map(id=>fullName(stu(id))).join(', ')).join('\n'))}
function timerSet(sec){const T=ui.timer;clearInterval(T.h);T.run=false;T.total=sec;T.left=sec;render()}
function timerToggle(){
  const T=ui.timer;if(T.run){clearInterval(T.h);T.run=false;render();return}
  if(T.left<=0)T.left=T.total;T.run=true;render();
  T.h=setInterval(()=>{T.left--;const el=document.getElementById('timerText');
    if(el){el.textContent=pad(Math.floor(T.left/60))+':'+pad(T.left%60);const b=document.getElementById('timerBar');b.style.width=T.left/T.total*100+'%';b.style.background=T.left<=10?'var(--red)':'var(--accent)'}
    if(T.left<=0){clearInterval(T.h);T.run=false;beep();toast('⏰ הזמן נגמר');render()}},1000);
}
function beep(){try{const a=new AudioContext();[0,.35,.7].forEach(t=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=880;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.2,a.currentTime+t);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+t+.3);o.start(a.currentTime+t);o.stop(a.currentTime+t+.3)})}catch(e){}}

// ----- Reports -----
V.reports=()=>{
  if(!S.classes.length)return noClasses('דוחות');
  const cid=curClass(),st=studentsOf(cid),c=cls(cid);
  const rows=st.map(s=>{const avg=studentAvg(s.id);const r=atRisk().find(x=>x.s.id===s.id);
    return {s,avg,att:attendancePct(s.id),abs:evCount(s.id,'absent'),late:evCount(s.id,'late'),neg:S.events.filter(e=>e.studentId===s.id&&EV[e.type]?.neg).length,pos:S.events.filter(e=>e.studentId===s.id&&EV[e.type]?.pos).length,hw:hwRate(s.id),
      status:r?'בסיכון':avg!=null&&avg>=90?'מצטיין':'תקין'}});
  const stColor={'בסיכון':'var(--red)','מצטיין':'var(--green)','תקין':'var(--label-2)'};
  return `<div class="head"><div class="titles"><h1 class="large-title">דוח כיתתי</h1><p class="subtitle">${esc(c.name)} · ${fmt(today())}${S.teacher.name?' · '+esc(S.teacher.name):''}</p></div>
    <div class="toolbar"><button class="btn" onclick="exportReport('${cid}')">${icon('down')} ייצוא לאקסל</button><button class="btn pri" onclick="window.print()">${icon('print')} הדפסה</button></div></div>
  <div class="card row no-print">${classPicker(cid)}</div>
  <div class="tiles"><div class="tile"><span class="t">ממוצע</span><b>${classAvg(cid)??'—'}</b></div><div class="tile"><span class="t">נוכחות</span><b>${pct(classAttendance(cid))}</b></div>
    <div class="tile"><span class="t" style="color:var(--red)">בסיכון</span><b>${rows.filter(r=>r.status==='בסיכון').length}</b></div><div class="tile"><span class="t" style="color:var(--green)">מצטיינים</span><b>${rows.filter(r=>r.status==='מצטיין').length}</b></div></div>
  <div class="card flush"><div class="tbl-wrap"><table><thead><tr><th class="sticky-col">תלמיד</th><th class="c">ממוצע</th><th class="c">נוכחות</th><th class="c">חיסורים</th><th class="c">איחורים</th><th class="c">משמעת</th><th class="c">חיובי</th><th class="c">ש״ב</th><th class="c">מצב</th></tr></thead><tbody>
  ${rows.map(r=>`<tr><td class="sticky-col"><a href="#student/${r.s.id}" style="color:var(--label);text-decoration:none">${esc(fullName(r.s))}</a></td><td class="c num ${gradeClass(r.avg)}"><b>${r.avg??'—'}</b></td><td class="c num">${pct(r.att)}</td><td class="c num">${r.abs}</td><td class="c num">${r.late}</td><td class="c num">${r.neg}</td><td class="c num">${r.pos}</td><td class="c num">${pct(r.hw)}</td><td class="c"><span class="tag" style="background:${stColor[r.status]}">${r.status}</span></td></tr>`).join('')}
  </tbody></table></div></div>`;
};
function exportReport(cid){
  download(`דוח-${cls(cid).name}.csv`,csv([['תלמיד','ממוצע','נוכחות %','חיסורים','איחורים','אירועי משמעת','חיובי','הגשת ש״ב %'],
    ...studentsOf(cid).map(s=>[fullName(s),studentAvg(s.id)??'',attendancePct(s.id)==null?'':Math.round(attendancePct(s.id)),evCount(s.id,'absent'),evCount(s.id,'late'),S.events.filter(e=>e.studentId===s.id&&EV[e.type]?.neg).length,S.events.filter(e=>e.studentId===s.id&&EV[e.type]?.pos).length,hwRate(s.id)==null?'':Math.round(hwRate(s.id))])]),'text/csv');
}

// ----- More (mobile) -----
V.more=()=>`<h1 class="large-title">עוד</h1><div class="list" style="margin-top:16px">${NAV.flatMap(([,i])=>i).filter(([v])=>!['home','classes','attendance','grades'].includes(v)).map(([v,ic,t])=>`<a class="li" href="#${v}"><span class="av sm" style="background:var(--accent)">${icon(ic)}</span><div class="main"><b>${t}</b></div>${icon('chev','i chev')}</a>`).join('')}</div>`;

// ----- Settings -----
V.settings=()=>{
  const used=(JSON.stringify(S).length/1024).toFixed(0);
  return `<div class="head"><div class="titles"><h1 class="large-title">הגדרות</h1></div></div>
  <div class="grid g2">
   <form class="card" onsubmit="event.preventDefault();saveTeacher(this)"><h2>הפרטים שלי</h2>
    ${F('שם המורה','name',S.teacher.name)}${F('בית ספר','school',S.teacher.school)}${F('מקצוע עיקרי','subject',S.teacher.subject)}${F('שנת לימודים','year',S.teacher.year,'text','placeholder="תשפ״ז"')}
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:0 10px">${F('ציון עובר','pass',S.settings.pass,'number','min="0" max="100"')}${F('התראה מחיסור מספר','absAlert',S.settings.absAlert,'number','min="1"')}</div>
    <button class="btn pri">שמירה</button></form>
   <form class="card" onsubmit="event.preventDefault();saveBells(this)"><h2>זמני צלצולים</h2>
    ${S.settings.bells.map((b,i)=>`<div class="row" style="margin-bottom:6px"><b style="width:60px">שיעור ${i+1}</b><input class="input" type="time" name="s${i}" value="${b[0]}" aria-label="התחלת שיעור ${i+1}"><span>–</span><input class="input" type="time" name="e${i}" value="${b[1]}" aria-label="סוף שיעור ${i+1}"></div>`).join('')}
    <button class="btn pri" style="margin-top:8px">שמירת הזמנים</button></form>
  </div>
  <div class="card"><h2>גיבוי ונתונים</h2><p class="muted" style="margin-top:0">כל המידע נשמר רק בדפדפן הזה (${used} KB). כדי לא לאבד אותו — מורידים גיבוי מדי פעם, ואפשר לשחזר אותו גם במחשב אחר.</p>
   <div class="row"><button class="btn pri" onclick="download('גיבוי-יומן-המורה-${today()}.json',JSON.stringify(S),'application/json')">${icon('down')} הורדת גיבוי</button>
   <button class="btn" onclick="restore()">${icon('up')} שחזור מגיבוי</button>
   <button class="btn" onclick="demo()">טעינת נתוני דוגמה</button>
   <button class="btn danger" onclick="alertBox('למחוק את כל המידע?','כל הכיתות, התלמידים והציונים יימחקו מהדפדפן הזה. כדאי להוריד גיבוי קודם.','מחיקת הכול',()=>withUndo('כל המידע נמחק',()=>{S=blank()}))">${icon('trash')} מחיקת הכול</button></div></div>
  <p class="muted small" style="text-align:center">יומן המורה · גרסה 2 · עובד גם בלי אינטרנט ונשמר במכשיר</p>`;
};
function saveTeacher(f){const d=collect(f);S.teacher={name:d.name,school:d.school,subject:d.subject,year:d.year};S.settings.pass=+d.pass||55;S.settings.absAlert=+d.absAlert||3;save();render();toast('נשמר')}
function saveBells(f){S.settings.bells=S.settings.bells.map((b,i)=>[f['s'+i].value||b[0],f['e'+i].value||b[1]]);save();render();toast('הזמנים נשמרו')}
function restore(){
  const inp=document.createElement('input');inp.type='file';inp.accept='.json,application/json';
  inp.onchange=async()=>{try{const d=JSON.parse(await inp.files[0].text());if(!d||!Array.isArray(d.classes))throw 0;withUndo('הגיבוי שוחזר',()=>{S=migrate(d)})}catch(e){toast('הקובץ הזה לא גיבוי תקין')}};
  inp.click();
}
function noClasses(what){return `<h1 class="large-title">${what}</h1><div class="card" style="margin-top:16px">${empty('users','צריך קודם כיתה','צור כיתה והוסף תלמידים — ואז אפשר להתחיל.',`<button class="btn pri" onclick="editClass()">${icon('plus')} כיתה חדשה</button>`)}</div>`}

// ----- Demo data -----
function demo(){
  const go=()=>withUndo('נטענו נתוני דוגמה',()=>{
    S=blank();S.teacher={name:'המורה',school:'',subject:'מתמטיקה',year:'תשפ״ז'};
    const names=['נועה כהן','איתי לוי','מאיה מזרחי','יונתן פרץ','תמר ביטון','עומר אברהם','שירה דהן','אורי פרידמן','ליה אזולאי','דניאל גבאי','רוני שלום','אביגיל חדד','יואב אוחיון','הילה בן דוד','אדם קליין','נגה ששון'];
    const t=today();
    ['ז׳1','ח׳3','ט׳2'].forEach((cn,ci)=>{const c={id:uid(),name:cn,homeroom:ci===0,color:CLASS_COLORS[ci],subject:'מתמטיקה'};S.classes.push(c);
      names.slice(0,12+ci*2).forEach((n,i)=>{const[f,l]=n.split(' ');S.students.push({id:uid(),classId:c.id,first:f,last:l||'',idNum:'',phone:'',parentName:'',parentPhone:i%3===0?'050-0000000':'',parentEmail:'',birthday:i===2?'2013-'+t.slice(5):'',tags:i===4?['הארכת זמן']:i===7?['קשב וריכוז']:[],notes:''})});
      const st=studentsOf(c.id);const skill={};st.forEach(s=>skill[s.id]=50+Math.random()*45);
      [['מבחן פתיחה','מבחן',-60,2],['בוחן שברים','בוחן',-40,1],['עבודה בקבוצות','עבודה',-25,1],['מבחן אמצע','מבחן',-10,2]].forEach(([title,type,off,w])=>{
        const a={id:uid(),classId:c.id,title,type,subject:'מתמטיקה',date:addDays(t,off),weight:w,factor:0};S.assessments.push(a);S.grades[a.id]={};
        st.forEach(s=>S.grades[a.id][s.id]=Math.round(Math.max(30,Math.min(100,skill[s.id]+(Math.random()*20-10)))))});
      S.assessments.push({id:uid(),classId:c.id,title:'מבחן סוף פרק',type:'מבחן',subject:'מתמטיקה',date:addDays(t,5+ci),weight:2,factor:0});
      for(let d=-12;d<=0;d++){const day=addDays(t,d);const dw=new Date(day+'T12:00').getDay();if(dw>4)continue;
        S.lessons.push({id:uid(),classId:c.id,date:day,lesson:ci+2,topic:['שברים','משוואות','גאומטריה','אחוזים','חזרה למבחן'][Math.abs(d)%5],notes:''});
        st.forEach(s=>{const r=Math.random();if(r<.05)S.events.push({id:uid(),studentId:s.id,classId:c.id,date:day,lesson:ci+2,type:'absent',note:''});else if(r<.08)S.events.push({id:uid(),studentId:s.id,classId:c.id,date:day,lesson:ci+2,type:'late',note:''});
          const b=Math.random();if(b<.03)S.events.push({id:uid(),studentId:s.id,classId:c.id,date:day,lesson:ci+2,type:'disturb',note:''});else if(b<.07)S.events.push({id:uid(),studentId:s.id,classId:c.id,date:day,lesson:ci+2,type:'praise',note:''})})}
      const hw1={id:uid(),classId:c.id,date:addDays(t,-3),due:addDays(t,-1),subject:'מתמטיקה',text:'עמוד 42 תרגילים 1–6',done:{}};st.forEach(s=>{if(Math.random()<.8)hw1.done[s.id]=true});
      S.homework.push(hw1,{id:uid(),classId:c.id,date:t,due:addDays(t,2),subject:'מתמטיקה',text:'דף עבודה באחוזים',done:{}});
      for(let d=0;d<5;d++){S.timetable[d]=S.timetable[d]||{};S.timetable[d][ci*2+1+(d%2)]={classId:c.id,subject:'מתמטיקה',room:String(10+ci)}}
    });
    const weak=S.students[1];S.events.push(...[1,2,3].map(i=>({id:uid(),studentId:weak.id,classId:weak.classId,date:addDays(t,-i),lesson:2,type:'absent',note:''})));
    S.calendar.push({id:uid(),date:addDays(t,8),title:'אסיפת הורים',type:'meeting',classId:''},{id:uid(),date:addDays(t,12),title:'טיול שנתי',type:'trip',classId:S.classes[0].id});
    S.todos.push({id:uid(),text:'להכין מבחן סוף פרק',done:false},{id:uid(),text:'להתקשר להורים של איתי',done:false});
    S.logs.push({id:uid(),studentId:weak.id,date:addDays(t,-1),kind:'שיחה עם הורה',text:'דיברנו על החיסורים. האמא תעקוב.'});
    location.hash='#home';
  });
  if(S.students.length)alertBox('לטעון נתוני דוגמה?','המידע הנוכחי יוחלף בנתוני דוגמה. אפשר לבטל מיד אחרי.','טעינה',go);else go();
}

// =========================================================
// Router, search, keyboard
// =========================================================
let lastRoute='';
function render(){
  const raw=location.hash.slice(1)||'home';const[v,arg]=raw.split('/');
  const view=V[v]?v:'home';
  const nav=view==='student'||view==='class'?'classes':view;
  document.getElementById('main').innerHTML=V[view](arg);
  drawNav(nav);
  const title={home:'ראשי',classes:'כיתות',class:cls(arg)?.name,student:fullName(stu(arg))}[view]||NAV.flatMap(([,i])=>i).find(x=>x[0]===view)?.[2]||'';
  document.title=(title?title+' · ':'')+'יומן המורה';
  if(raw!==lastRoute){window.scrollTo(0,0);if(lastRoute)document.getElementById('main').focus({preventScroll:true});lastRoute=raw;
    if(ui.timer.run&&view!=='tools'){/* keep running in background */}}
}
window.addEventListener('hashchange',render);

// global search
const q=document.getElementById('q'),qres=document.getElementById('qres');
document.getElementById('qi').outerHTML=icon('search');
document.querySelector('.brand .mark').innerHTML=icon('book');
let qSel=0;
function searchResults(t){
  t=t.trim();if(!t)return[];
  const r=[...S.classes.filter(c=>c.name.includes(t)).map(c=>({h:'#class/'+c.id,html:classDot(c)+`<span>${esc(c.name)}</span>`})),
    ...S.students.filter(s=>fullName(s).includes(t)||(s.idNum||'').includes(t)).map(s=>({h:'#student/'+s.id,html:avatar(s,'sm')+`<span>${esc(fullName(s))} <span class="muted small">${esc(cls(s.classId)?.name||'')}</span></span>`}))];
  return r.slice(0,8);
}
function drawSearch(){const r=searchResults(q.value);qres.hidden=!q.value.trim();qres.innerHTML=r.length?r.map((x,i)=>`<a href="${x.h}" class="${i===qSel?'sel':''}">${x.html}</a>`).join(''):'<div style="padding:12px" class="muted">לא נמצא</div>'}
q.addEventListener('input',()=>{qSel=0;drawSearch()});
q.addEventListener('keydown',e=>{const r=searchResults(q.value);
  if(e.key==='ArrowDown'){qSel=Math.min(r.length-1,qSel+1);drawSearch();e.preventDefault()}
  if(e.key==='ArrowUp'){qSel=Math.max(0,qSel-1);drawSearch();e.preventDefault()}
  if(e.key==='Enter'&&r[qSel]){location.hash=r[qSel].h;q.value='';qres.hidden=true;q.blur()}
  if(e.key==='Escape'){q.value='';qres.hidden=true;q.blur()}});
qres.addEventListener('click',()=>{q.value='';qres.hidden=true});
document.addEventListener('click',e=>{if(!e.target.closest('.search'))qres.hidden=true});
document.addEventListener('keydown',e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();q.focus()}
  if(e.key==='Escape'&&sheetStack.length){sheetStack.at(-1).querySelector('[data-x]').click()}
  if(e.key==='Escape'){document.querySelector('.alert')?.closest('.scrim')?.remove()}
});

render();
