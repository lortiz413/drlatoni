/* Latoni site data (English) and interactions */
const T = {
 Surgery: [
  ["Breast Augmentation","Breast","p_augmentation","This cosmetic procedure increases natural breast size and restores volume lost over the years or after pregnancy. Choose silicone gel or saline implants, and during your orientation select from brands such as Mentor, Sientra or Natrelle.",[["Surgery","About 1 hour"],["Recovery","About 2 weeks"],["Implants","Silicone or saline"]]],
  ["Mastopexy","Breast","p_mastopexy","A breast lift, with or without implants, that rejuvenates your figure by tightening and reshaping the breast contour and reducing enlarged areolas, without increasing bust size.",[["Surgery","About 2 hours"],["Implants","Optional"]]],
  ["Breast Reduction","Breast","p_reduction","We remove excess fat, tissue and skin to reduce breast size based on your goals. The breast is lifted and, if needed, the areola reduced. It can help relieve back, neck and shoulder pain.",[["Surgery","About 2 hours"],["Insurance","May be covered"]]],
  ["Breast Cancer Reconstruction","Breast","p_reconstruction","Reconstructive surgery after a mastectomy or a lesion, using the same implant options as augmentation. From the very first consultation we offer support and compassionate care to guide you through each stage.",[["Implants","Gel, silicone or saline"],["Insurance","May be covered"]]],
  ["Gynecomastia","Breast","p_gynecomastia","A favorite among men. It eliminates excess breast tissue and fat, reduces the areola and defines the chest lines for a more masculine appearance.",[["For","Men"]]],
  ["Abdominoplasty","Body","p_abdominoplasty","The most comprehensive procedure for the abdomen. It removes excess skin and fat with liposuction, improves the shape of the navel, tightens the abdominal wall and rejuvenates the mons area.",[["Surgery","About 3 hours"],["Stay","One night recommended"]]],
  ["Mini Abdominoplasty","Body","p_miniabdominoplasty","After pregnancy, major weight loss or with age, the skin of the lower abdomen can sag. We remove the excess below the navel and, if necessary, restore firmness to the abdominal muscles.",[["Area","Below the navel"]]],
  ["Liposuction","Body","p_liposuction","Suction that refines your silhouette by reducing fat in the thighs, hips, buttocks, abdomen, waist, arms, back, inner knees, chest and neck. We treat only the areas you need and can combine it with other procedures for a more dramatic change.",[["Areas","Up to 10 zones"],["Combines","With other procedures"]]],
  ["Brazilian Butt Lift","Body","p_bbl","This popular procedure treats two areas at once. Fat removed from the waist is transferred to the buttocks, for a flatter stomach and smaller waist with fuller, firmer, more shapely glutes.",[["Areas","Waist and glutes"],["Technique","Your own fat"]]],
  ["Brachioplasty","Body","p_brachioplasty","Commonly known as an arm lift, it reshapes the underside of the upper arms when they sag and lose shape due to age, genetics or significant weight loss.",[["Area","Upper arms"]]],
  ["Face Lift","Face","p_facelift","It reduces the physical signs of aging in your face and neck without changing your original appearance. You'll look rejuvenated and relaxed, and it can be combined with other procedures.",[["Result","Rested, natural"],["Combines","Neck and brow lift"]]],
  ["Neck Lift","Face","p_necklift","Eliminates a double chin and excess skin or fat in the neck and jawline, improving the contour. It can be combined with a face lift and other rejuvenating procedures.",[["Area","Neck and jawline"]]],
  ["Brow Lift","Face","p_browlift","Reduces wrinkles and frown lines that make you look tired or worried. Raising sagging brows to a naturally alert position gives you a more youthful look.",[["Result","Brighter, alert eyes"]]],
  ["Blepharoplasty","Face","p_blepharoplasty","On the upper lid we remove excess tissue that can affect peripheral vision, so the eyes look larger and more alert. On the lower lid we remove the bags that make you look tired.",[["Areas","Upper and lower lids"]]],
  ["Rhinoplasty","Face","p_rhinoplasty","Commonly called a nose job, it can restore breathing function and refine the tip, bridge and nostril width of the nose.",[["Goals","Form and function"]]],
  ["Chin Augmentation","Face","p_chin","Reshapes or enhances the size of the chin to balance the jawline. It can be combined with rhinoplasty for naturally proportionate features.",[["Combines","With rhinoplasty"]]],
  ["Otoplasty","Face","p_otoplasty","Cosmetic ear surgery that reshapes, repositions or pins back the outer ear to correct congenital deformities or trauma, for more natural proportions.",[["Area","Outer ear"]]],
  ["Earlobe Repair","Face","p_earlobe","A simple, effective surgery that reshapes, resizes or repairs earlobes torn or stretched by heavy jewelry, gauges or trauma.",[["Also called","Lobuloplasty"]]],
  ["Facial Fat Injections","Face","p_fatinjection","Your own body fat restores facial volume and softens wrinkles and creases for a naturally smoother look. Minimal scarring is usually unnoticeable, and excess tissue is removed only when necessary.",[["Source","Your own fat"]]],
  ["Skin Cancer","Skin","p_skincancer","We understand the concerns of patients facing this disease. We offer genuine support at every phase, use techniques that protect your health, and our greatest satisfaction is removing the disease with minimal impact on your appearance.",[["Focus","Health and appearance"]]]
 ],
 Injectables: [
  ["Botox","Neuromodulators","i_botox","A medicine containing botulinum toxin type A is injected to relax facial muscles and smooth expression lines for temporary rejuvenation.",[["Type","Neuromodulator"]]],
  ["Dysport","Neuromodulators","i_dysport","A neuromodulator that temporarily diminishes wrinkles. Return for touch ups as needed to keep a relaxed, refreshed look.",[["Touch ups","Every 3 to 6 months"]]],
  ["Xeomin","Neuromodulators","i_xeomin","The fight against wrinkles has many allies. This prescription medication with botulinum toxin type A temporarily improves frown lines and smooths the skin for a refreshed look.",[["Type","Neuromodulator"]]],
  ["Fillers","Fillers","i_fillers","Hyaluronic acid facial fillers are recommended to treat scars and expression lines.",[["Base","Hyaluronic acid"]]],
  ["Juvéderm","Fillers","i_juvederm","Another hyaluronic acid facial filler to treat scars and expression lines. We recommend the best treatment for your condition, age and goals.",[["Base","Hyaluronic acid"]]],
  ["Volbella","Fillers","i_volbella","The ideal filler for fuller, natural looking lips. It also softens wrinkles and marionette lines around the mouth.",[["Area","Lips and mouth"]]],
  ["Voluma","Fillers","i_voluma","Restores cheek volume lost with age and adds firmness for a more youthful appearance.",[["Area","Cheeks"]]],
  ["Restylane Lyft","Fillers","i_restylane","Enhances cheek definition and corrects contour lines in people over 21, without affecting their natural look.",[["Area","Cheeks"],["Age","Over 21"]]],
  ["Sculptra","Collagen","i_sculptra","A synthetic, nontoxic, biodegradable filler that stimulates your body to generate collagen for younger looking skin. It has been in use for more than 40 years.",[["Works by","Building collagen"],["In use","40+ years"]]],
  ["Radiesse Hands","Collagen","i_radiesse","This treatment helps restore the youthful appearance of your hands.",[["Area","Hands"]]],
  ["Sclerotherapy","Veins","i_sclerotherapy","Improve the appearance of your legs by eliminating spider and varicose veins. We offer Asclera, an FDA approved option.",[["Product","Asclera"]]]
 ],
 Aesthetics: [
  ["Facials","Skin care","a_facials","A thorough cleansing removes impurities, pollution and oils that block pores. Facials help protect and prolong healthy skin, extending the results of your cosmetic treatments.",[["Benefit","Longer lasting results"]]],
  ["Blue Peel","Skin care","a_bluepeel","Our specialists use the highest quality products to remove dead layers of skin and reveal a healthier, more youthful you.",[["Result","Renewed skin"]]],
  ["Microdermabrasion","Skin care","a_microdermabrasion","A minimally invasive tool removes layers of skin to improve uneven pigmentation and sun damage and reduce the appearance of stretch marks.",[["Targets","Tone, texture, stretch marks"]]],
  ["IPL","Light","a_ipl","Light technology removes unwanted facial and body hair and skin discoloration. Treatments take place in a specially equipped room with trained professionals who protect your health and appearance.",[["Treats","Hair and pigmentation"]]],
  ["Obagi","Products","a_obagi","Every person's skin is different and needs a customized approach. We offer this line of professional products to keep your skin refreshed and young looking.",[["Type","Medical skincare"]]],
  ["DerMend","Products","a_dermend","For aging skin, DerMend treatments restore, rejuvenate and maintain a more youthful complexion.",[["For","Mature skin"]]]
 ]
};
const FAQ=[
 ["What is a FUE transplant?","The globally recognized FUE (Follicular Unit Extraction) method is the most advanced and least invasive follicle transplant technique available. It's done without incisions or stitches to avoid scarring, reduce discomfort and speed healing. Dr. Latoni acquired this technology so his patients have a quicker, more precise and less invasive experience."],
 ["How does FUE compare to traditional methods?","Traditional transplants remove a section of the scalp, require stitches and a six week recovery. FUE uses specially designed instruments and techniques to avoid scarring. Patients return to their normal routine after three to five days, and there's no need to cover the treated area."],
 ["Who is an ideal candidate?","Most people experiencing hair loss are candidates. It's ideal for athletes and professionals who can't take a long recovery, the preferred option for people with short hairstyles, and it can also hide scarring from a previous transplant."],
 ["Are the results different from a linear transplant?","The end results are very similar, without the scarring of the more invasive surgery. The biggest difference is the number of people involved and their skill: using micro surgical tools, the specialist extracts and grafts each follicle by hand, with precision."],
 ["Can FUE be used for women and men?","Yes. The procedure adapts to the natural hair growth of both."],
 ["Do I need to shave my head?","No. On people with long hair, only the donor area is shaved."],
 ["How do I know if I'm a good candidate?","Book a consultation with Dr. Latoni at (787) 831 1000 or (787) 831 1012."]
];

document.documentElement.classList.add("js");
const $=s=>document.querySelector(s);
const ES=window.ES||null;
let lang="en";
try{const q=new URLSearchParams(location.search).get("lang");const sv=localStorage.getItem("latoni_lang");lang=q||sv||((navigator.language||"").toLowerCase().startsWith("es")?"es":"en");}catch(e){}
if(!ES) lang="en";
const es=()=>lang==="es";
const catL=k=>es()?ES.cats[k]:k;
const grpL=g=>es()?(ES.groups[g]||g):g;
function item(k,i){const x=T[k][i];if(!es())return {n:x[0],d:x[3],s:x[4],g:x[1],img:x[2],en:x[0]};const y=ES.T[k][i];return {n:y[0],d:y[1],s:y[2],g:x[1],img:x[2],en:x[0]};}

/* ===== index ===== */
const ALL=[];Object.keys(T).forEach(k=>T[k].forEach((x,i)=>ALL.push([k,i])));
function renderIndex(){
  $("#cols").innerHTML=Object.keys(T).map(k=>{
    let last="",html=`<div class="col rv vis"><h3>${catL(k)}<span>${String(T[k].length).padStart(2,"0")}</span></h3>`;
    T[k].forEach((x,i)=>{if(x[1]!==last){html+=`<p class="g">${grpL(x[1])}</p>`;last=x[1];}
      const pos=ALL.findIndex(a=>a[0]===k&&a[1]===i);
      html+=`<button data-p="${pos}" data-img="img/${x[2]}.jpg">${item(k,i).n}</button>`;});
    return html+"</div>";}).join("");
}
const peek=$("#peek"),pimg=peek.querySelector("img");
let px=0,py=0,tx=0,ty=0,raf=0;
function loop(){px+=(tx-px)*.18;py+=(ty-py)*.18;peek.style.left=px+"px";peek.style.top=py+"px";raf=requestAnimationFrame(loop);}
$("#cols").addEventListener("mouseover",e=>{const b=e.target.closest("button[data-img]");if(!b)return;pimg.src=b.dataset.img;peek.classList.add("show");if(!raf)loop();});
$("#cols").addEventListener("mouseleave",()=>{peek.classList.remove("show");cancelAnimationFrame(raf);raf=0;});
$("#cols").addEventListener("mousemove",e=>{tx=e.clientX+150;ty=e.clientY;if(!px){px=tx;py=ty;}});
$("#cols").addEventListener("mouseout",e=>{if(!e.relatedTarget||!e.relatedTarget.closest||!e.relatedTarget.closest("button[data-img]"))peek.classList.remove("show");});

/* ===== drawer ===== */
const drawer=$("#drawer"),scrim=$("#scrim");let cur=0;
function openP(p){
  cur=(p+ALL.length)%ALL.length;const [k,i]=ALL[cur];const it=item(k,i);
  const w=it.n.split(" ");const t=w.length>1?w.slice(0,-1).join(" ")+" <em>"+w[w.length-1]+"</em>":"<em>"+it.n+"</em>";
  $("#dbody").innerHTML=`<div class="im"><img src="img/${it.img}.jpg" alt="${it.n}"></div><div class="tx"><p class="eyebrow">${catL(k)} · ${grpL(it.g)}</p><h3>${t}</h3><p class="muted">${it.d}</p><dl class="facts">${it.s.map(s=>`<div><dt>${s[0]}</dt><dd>${s[1]}</dd></div>`).join("")}</dl><div class="row"><a class="btn dark" href="#contact" data-book="${it.en}">${es()?ES.ui.book:"Schedule a consultation"}</a><div class="pn"><button data-go="-1" aria-label="Previous">←</button><button data-go="1" aria-label="Next">→</button></div></div></div>`;
  drawer.classList.add("open");scrim.classList.add("open");drawer.setAttribute("aria-hidden","false");peek.classList.remove("show");
}
function closeD(){drawer.classList.remove("open");scrim.classList.remove("open");drawer.setAttribute("aria-hidden","true");}
$("#cols").addEventListener("click",e=>{const b=e.target.closest("button[data-p]");if(b)openP(+b.dataset.p);});
drawer.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g){openP(cur+ +g.dataset.go);return;}if(e.target.closest("[data-book]"))closeD();});
$("#dx").onclick=closeD;scrim.onclick=closeD;
addEventListener("keydown",e=>{if(!drawer.classList.contains("open"))return;if(e.key==="Escape")closeD();if(e.key==="ArrowRight")openP(cur+1);if(e.key==="ArrowLeft")openP(cur-1);});

/* ===== form select ===== */
const sel=$("#f-proc");
function fillSelect(){const keep=sel.value;
  sel.innerHTML=`<option value="">${es()?ES.ui.notsure:"Not sure yet, I'd like guidance"}</option>`+Object.keys(T).map(k=>`<optgroup label="${catL(k)}">${T[k].map((x,i)=>`<option value="${x[0]}">${item(k,i).n}</option>`).join("")}</optgroup>`).join("")+`<optgroup label="${es()?ES.ui.signature:"Exclusive"}"><option value="truSculpt">truSculpt</option><option value="SmartGraft® Hair Restoration">${es()?ES.ui.hair:"SmartGraft® Hair Restoration"}</option><option value="Narrow Band UVB">Narrow Band UVB</option></optgroup>`;
  sel.value=keep;}
document.addEventListener("click",e=>{const a=e.target.closest("[data-book]");if(a)sel.value=a.dataset.book;});

/* ===== truSculpt zones ===== */
const Z=["Abdomen","Waist","Buttocks","Thighs","Arms","Upper back","Neck"],on=new Set(["Abdomen","Waist"]);
function rz(){$("#zones").innerHTML=Z.map(z=>`<button class="zone" aria-pressed="${on.has(z)}" data-z="${z}">${es()?ES.zones[z]:z}</button>`).join("");
  const n=on.size;$("#znote").textContent=es()?(n?`${n} ${n===1?"área seleccionada":"áreas seleccionadas"} · Lo que sentirás: ligero calor, adormecimiento, cosquilleo.`:"Escoge las áreas que te gustaría tratar."):(n?`${n} ${n===1?"area":"areas"} selected · What you'll feel: slight warmth, numbness, tickling.`:"Choose the areas you'd like to treat.");}
$("#zones").onclick=e=>{const b=e.target.closest(".zone");if(!b)return;const z=b.dataset.z;on.has(z)?on.delete(z):on.add(z);rz();};

/* ===== faq ===== */
function faq(){const F=es()?ES.FAQ:FAQ;$("#faq").innerHTML=F.map((f,i)=>`<details${i===0?" open":""}><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");}

/* ===== form ===== */
$("#form").addEventListener("submit",e=>{e.preventDefault();const n=$("#f-name").value.trim(),p=$("#f-phone").value.trim(),ok=$("#ok");ok.hidden=false;
  if(!n||!p){ok.textContent=es()?ES.ui.missing:"Please add your name and phone number so our team can call you.";(n?$("#f-phone"):$("#f-name")).focus();return;}
  const o=document.querySelector("input[name=office]:checked").value;
  ok.textContent=es()?ES.ui.thanks(n.split(" ")[0],o):`Thank you, ${n.split(" ")[0]}. (Design preview: once the site is live, this request goes straight to the ${o} office.)`;});

/* ===== language ===== */
const EN_TITLE=document.title;
document.querySelectorAll("[data-es]").forEach(el=>el.dataset.en=el.innerHTML);
function applyLang(l){
  lang=(l==="es"&&ES)?"es":"en";
  try{localStorage.setItem("latoni_lang",lang);}catch(e){}
  document.documentElement.lang=lang;document.title=es()?ES.title:EN_TITLE;
  document.querySelectorAll("[data-es]").forEach(el=>{el.innerHTML=es()?el.dataset.es:el.dataset.en;});
  $("#f-msg").placeholder=es()?ES.ui.placeholder:"What would you like to achieve?";
  document.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.lang===lang));
  renderIndex();fillSelect();rz();faq();
  if(drawer.classList.contains("open"))openP(cur);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
applyLang(lang);

/* ===== horizontal chapters ===== */
const ex=$("#exclusive"),track=$("#track"),xbar=$("#xbar");
const wide=()=>matchMedia("(min-width:981px)").matches;
function sizeEx(){if(!wide()){ex.style.height="";track.style.transform="";return;}
  const dist=track.scrollWidth-track.parentElement.clientWidth;ex.style.height=(innerHeight+dist)+"px";}
function moveEx(){if(!wide())return;const r=ex.getBoundingClientRect();const dist=ex.offsetHeight-innerHeight;
  const p=Math.min(1,Math.max(0,-r.top/dist||0));track.style.transform=`translate3d(${-p*(track.scrollWidth-track.parentElement.clientWidth)}px,0,0)`;xbar.style.transform=`scaleX(${p})`;}
addEventListener("resize",()=>{sizeEx();moveEx();});
addEventListener("load",()=>{sizeEx();moveEx();});
sizeEx();

/* anchors inside the horizontal track */
document.querySelectorAll('a[href="#trusculpt"],a[href="#hair"],a[href="#skin"]').forEach(a=>a.addEventListener("click",e=>{
  if(!wide())return;e.preventDefault();const idx=["#trusculpt","#hair","#skin"].indexOf(a.getAttribute("href"));
  const dist=ex.offsetHeight-innerHeight;scrollTo({top:ex.offsetTop+dist*(idx/2)});}));

/* ===== rail state + reveal ===== */
const links=[...document.querySelectorAll(".rail nav a")];
function onS(){moveEx();let best=null,bt=-1e9;links.forEach(a=>{const s=$(a.getAttribute("href"));if(!s)return;const t=s.getBoundingClientRect().top;if(t<innerHeight*.4&&t>bt){bt=t;best=a;}});links.forEach(a=>a.classList.toggle("on",a===best));}
addEventListener("scroll",onS,{passive:true});onS();
const io=new IntersectionObserver(ents=>ents.forEach(en=>{if(en.isIntersecting){en.target.classList.add("vis");io.unobserve(en.target);}}),{rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const v=$("#heroVideo");if(matchMedia("(prefers-reduced-motion: reduce)").matches){v.removeAttribute("autoplay");v.pause();}
