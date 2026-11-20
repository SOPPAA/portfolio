/* =====================================================================
   works.js — รายการรูปผลงาน / ผ้า (ไฟล์นี้ไฟล์เดียวที่ต้องแก้เมื่อเพิ่มรูป)

   วิธีเพิ่มรูปใหม่
   1) วางไฟล์รูปในโฟลเดอร์ images/ (รูปผ้าอยู่ใน images/fabrics/)
   2) เพิ่ม 1 บรรทัดด้านล่าง รูปแบบ:
        {src:"images/ชื่อไฟล์.jpg",title:"ชื่อที่แสดงใต้รูป",collar:"คอวี",style:"กีฬา"},
   - collar / style / fabric ใส่ข้อความเดียว หรือหลายค่าเช่น ["คอกลม","คอวี"] ก็ได้
   - ไม่ใส่ก็ได้ — รูปจะไม่ขึ้นในหมวดนั้น
   - ชื่อห��วดต้องตรงกับ CONFIG.COLLARS / STYLES / FABRICS ใน index.html
   - 6 รูปแรกของรายการนี้จะแสดงในส่วน "ตัวอย่างผลงาน" หน้าแรก
   - อย่าลืมเครื่องหมายจุลภาค (,) ท้ายทุกบรรทัด และเปิด-ปิดเครื่องหมายคำพูดให้ครบ

   ===================================================================== */

var WORKS=[
  /* หมวดหมู่ — ตัวอย่างเสื้อ */
  {src:"img-work/work-01.jpg",title:"ชุดฟุตบอล PERWIRA · แขนสโลป",collar:"คอวี",style:"กีฬา"},
  {src:"img-work/work-02.jpg",title:"เสื้อเพื่อนรวมทีม · แขนสโลป",collar:"คอปก",style:"กลุ่มเพื่อน"},
  {src:"img-work/work-03.jpg",title:"เสื้อทีมธกส.ปัตตานี",collar:"คอปก",style:"องค์กร"},
  {src:"img-work/work-04.jpg",title:"ทีมฟุตบอล กรมทหารราบที่ 153",collar:"คอกลม",style:"กีฬา"},
  {src:"img-work/work-05.jpg",title:"Cinta ilmu Camping",collar:"คอกลม",style:"แคมป์ปิ้ง"},
  {src:"img-work/work-06.jpg",title:"Pattani Van Club",collar:"คอปก",style:"กลุ่มเพื่อน"},
  {src:"img-work/work-07.jpg",title:"B'hang Van U-turn",collar:"คอปก",style:"กลุ่มเพื่อน"},
  {src:"img-work/work-08.jpg",title:"Penjana Cup",collar:"คอวีปก",style:"กีฬา"},
  {src:"img-work/work-09.jpg",title:"Penjana Cup",collar:"คอวี Muslimah",style:"กีฬา"},
  {src:"img-work/work-10.jpg",title:"Pustaka Meang · แขนสโลป",collar:"คอวี",style:"กีฬา"},
  {src:"img-work/work-11.jpg",title:"Printam/2026",collar:"คอปก",style:"อิสลามิก"},
  {src:"img-work/work-12.jpg",title:"Cinta alam",collar:"คอกลม",style:"แคมป์ปิ้ง"},
  {src:"img-work/work-13.jpg",title:"Sukan Pemuda",collar:"อื่นๆ",style:"Team set"},
  {src:"img-work/work-14.jpg",title:"ส.ร.บาร์เบอร์",collar:"คอป��",style:"กลุ่มเพื่อน"},
  {src:"img-work/work-15.png",title:"Maal Hijrah",collar:"อื่นๆ",style:"Team set"},
  {src:"img-work/work-16.jpg",title:"Mochsi Cha",collar:"คอวี",style:"ทีมงาน"},
  {src:"img-work/work-17.png",title:"Sukan Tadika",collar:"อื่นๆ",style:"Team set"},
  {src:"img-work/work-18.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-19.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-20.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-21.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-22.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-23.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-24.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-25.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-26.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-27.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-28.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-29.jpg",title:" ",collar:" ",style:" "},
  {src:"img-work/work-30.jpg",title:" ",collar:" ",style:" "},
  /* หมวดหมู่ — ชนิดผ้า */
  {src:"images/fabrics/1-01.jpg",title:"ผ้าไมโครเรียบ",fabric:"ไมโครเรียบ"},
  {src:"images/fabrics/1-02.jpg",title:"ผ้าเม็ดข้าวโพด",fabric:"เม็ดข้าวโพด"},
  {src:"images/fabrics/1-03.jpg",title:"ผ้ารังผึ่ง/หกเหลี่ยม",fabric:"หกเหลี่ยม/รังผึ้ง"},
  {src:"images/fabrics/1-04.jpg",title:"ผ้าลูกกอล์ฟ",fabric:"ลูกกอล์ฟ"},
  {src:"images/fabrics/1-05.jpg",title:"ผ้าจุติไมโคร",fabric:"จุติไมโคร"},
  {src:"images/fabrics/1-06.jpg",title:"ผ้าดาวกระจาย",fabric:"ดาวกระจาย"},
  {src:"images/fabrics/1-07.jpg",title:"ผ้าเม็ดข้าวสาร",fabric:"เม็ดข้าวสาร"},
  {src:"images/fabrics/1-08.jpg",title:"ผ้าตาราง",fabric:"ผ้าตาราง"},
  {src:"images/fabrics/1-09.jpg",title:"ผ้าริ้วเงา",fabric:"ผ้าริ้วเงา"},
  // ตัวอย่าง: {src:"images/work-03.jpg",title:"ธงโบกทีมเยาวชน",style:"ธง / ป้ายผ้า"},
];

/* --- Carousel หน้าแรก: สุ่มเรียงรูปที่มีชื่อจาก WORKS ทั้งหมด --- */
document.addEventListener("DOMContentLoaded",function(){
  var host=document.getElementById("hero");
  if(!host||!Array.isArray(WORKS))return;

  var slides=WORKS.filter(function(work){
    return work&&typeof work.src==="string"&&work.src.trim()&&typeof work.title==="string"&&work.title.trim();
  });
  /* Fisher–Yates: สุ่มลำดับทั้งชุดทุกครั้งที่โหลดหน้า */
  for(var i=slides.length-1;i>0;i--){
    var j=Math.floor(Math.random()*(i+1)),temp=slides[i];slides[i]=slides[j];slides[j]=temp;
  }
  if(!slides.length){host.textContent="ยังไม่มีรูปผลงานในแกลเลอรี่";return;}

  var style=document.createElement("style");
  style.textContent=""+
    ".hero-carousel{position:relative;width:100%;max-width:500px;aspect-ratio:4/3;margin:auto;border:3px solid var(--card);border-radius:20px;overflow:hidden;background:var(--card);box-shadow:0 18px 40px #0003;isolation:isolate}"+
    ".hero-carousel .carousel-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .65s ease;cursor:zoom-in}"+
    ".hero-carousel .carousel-image.active{opacity:1}"+
    ".hero-carousel .carousel-caption{position:absolute;left:0;right:0;bottom:0;padding:48px 18px 16px;color:#fff;background:linear-gradient(transparent,#000b);font-size:14px;font-weight:500;pointer-events:none}"+
    ".hero-carousel .carousel-controls{position:absolute;left:12px;right:12px;top:50%;display:flex;justify-content:space-between;align-items:center;transform:translateY(-50%);pointer-events:none}"+
    ".hero-carousel button{pointer-events:auto;width:40px;height:40px;border:1px solid #ffffff99;border-radius:50%;background:#123f1bcc;color:#fff;font:inherit;font-size:22px;line-height:1;cursor:pointer;display:grid;place-items:center}"+
    ".hero-carousel button:hover{background:#123f1b}"+
    ".hero-carousel button:focus-visible{outline:3px solid #fff;outline-offset:3px}"+
    ".hero-carousel .carousel-status{position:absolute;right:12px;top:12px;padding:4px 10px;border-radius:99px;background:#123f1bcc;color:#fff;font-size:12px}"+
    ".hero-carousel .carousel-toggle{position:absolute;left:12px;top:12px;width:36px;height:36px;font-size:15px}"+
    "@media(max-width:800px){.hero-carousel{width:min(100%,500px);aspect-ratio:4/3}}"+
    "@media(prefers-reduced-motion:reduce){.hero-carousel .carousel-image{transition:none}}";
  document.head.appendChild(style);

  host.className="hero-carousel";
  host.setAttribute("role","region");
  host.setAttribute("aria-roledescription","carousel");
  host.setAttribute("aria-label","ตัวอย่างผลงานจากแกลเลอรี่");
  host.setAttribute("tabindex","0");

  var image=document.createElement("img");
  image.className="carousel-image active";
  image.alt="";
  image.draggable=false;
  image.addEventListener("click",function(){if(typeof openLb==="function")openLb(image.src);});
  var caption=document.createElement("div");caption.className="carousel-caption";caption.setAttribute("aria-live","polite");
  var status=document.createElement("div");status.className="carousel-status";status.setAttribute("aria-hidden","true");
  var controls=document.createElement("div");controls.className="carousel-controls";
  var previous=document.createElement("button");previous.type="button";previous.setAttribute("aria-label","รูปก่อนหน้า");previous.textContent="‹";
  var next=document.createElement("button");next.type="button";next.setAttribute("aria-label","รูปถัดไป");next.textContent="›";
  controls.append(previous,next);
  var toggle=document.createElement("button");toggle.type="button";toggle.className="carousel-toggle";toggle.setAttribute("aria-label","หยุดเลื่อนภาพ");toggle.textContent="Ⅱ";
  host.replaceChildren(image,caption,status,controls,toggle);

  var current=0,timer=null,paused=false,hovered=false,focused=false;
  var reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function render(){
    if(!slides.length){caption.textContent="ยังไม่มีรูปผลงานในแกลเลอรี่";image.hidden=true;status.textContent="0 / 0";return;}
    image.hidden=false;image.src=slides[current].src;image.alt=slides[current].title;
    caption.textContent=slides[current].title;status.textContent=(current+1)+" / "+slides.length;
    previous.hidden=slides.length<2;next.hidden=slides.length<2;toggle.hidden=slides.length<2;
  }
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  function start(){
    stop();
    if(slides.length>1&&!paused&&!hovered&&!focused&&!reduceMotion&&!document.hidden){
      timer=setInterval(function(){current=(current+1)%slides.length;render();},5000);
    }
  }
  function move(delta){current=(current+delta+slides.length)%slides.length;render();start();}
  previous.addEventListener("click",function(){move(-1);});
  next.addEventListener("click",function(){move(1);});
  toggle.addEventListener("click",function(){
    paused=!paused;
    toggle.textContent=paused?"▶":"Ⅱ";
    toggle.setAttribute("aria-label",paused?"เล่นภาพอัตโนมัติ":"หยุดเลื่อนภาพ");
    start();
  });
  host.addEventListener("mouseenter",function(){hovered=true;stop();});
  host.addEventListener("mouseleave",function(){hovered=false;start();});
  host.addEventListener("focusin",function(){focused=true;stop();});
  host.addEventListener("focusout",function(event){if(!host.contains(event.relatedTarget)){focused=false;start();}});
  host.addEventListener("keydown",function(event){
    if(event.key==="ArrowLeft"){event.preventDefault();move(-1);}
    if(event.key==="ArrowRight"){event.preventDefault();move(1);}
  });
  document.addEventListener("visibilitychange",start);
  var touchX=null;
  host.addEventListener("touchstart",function(event){touchX=event.changedTouches[0].clientX;},{passive:true});
  host.addEventListener("touchend",function(event){
    if(touchX===null)return;
    var distance=event.changedTouches[0].clientX-touchX;
    if(Math.abs(distance)>45)move(distance<0?1:-1);
    touchX=null;
  },{passive:true});
  image.addEventListener("error",function(){
    slides.splice(current,1);
    if(current>=slides.length)current=0;
    render();start();
  });
  render();start();
});
