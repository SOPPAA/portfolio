/* =====================================================================
   works.js — รายการรูปผลงาน / ผ้า (ไฟล์นี้ไฟล์เดียวที่ต้องแก้เมื่อเพิ่มรูป)

   วิธีเพิ่มรูปใหม่
   1) วางไฟล์รูปในโฟลเดอร์ images/ (รูปผ้าอยู่ใน images/fabrics/)
   2) เพิ่ม 1 บรรทัดด้านล่าง รูปแบบ:
        {src:"images/ชื่อไฟล์.jpg",title:"ชื่อที่แสดงใต้รูป",collar:"คอวี",style:"กีฬา"},
   - collar / style / fabric ใส่ข้อความเดียว หรือหลายค่าเช่น ["คอกลม","คอวี"] ก็ได้
   - ไม่ใส่ก็ได้ — รูปจะไม่ขึ้นในหมวดนั้น
   - ชื่อหมวดต้องตรงกับ CONFIG.COLLARS / STYLES / FABRICS ใน index.html
   - 6 รูปแรกของรายการนี้จะแสดงในส่วน "ตัวอย่างผลงาน" หน้าแรก
   - อย่าลืมเครื่องหมายจุลภาค (,) ท้ายทุกบรรทัด และเปิด-ปิดเครื่องหมายคำพูด " ให้ครบ
   
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
  {src:"img-work/work-14.jpg",title:"ส.ร.บาร์เบอร์",collar:"คอปก",style:"กลุ่มเพื่อน"},
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
  {src:"images/fabrics/1-09.jpg",title:"ผ้าริ้วเงา",fabric:"ริ้วเงา"},
  // ตัวอย่าง: {src:"images/work-03.jpg",title:"ธงโบกทีมเยาวชน",style:"ธง / ป้ายผ้า"},
];

