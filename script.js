var TO="ksvarun49@gmail.com",G="https://github.com/Varunks-21/",mode="hire";
function $(i){return document.getElementById(i)}
function el(t,c,h){var x=document.createElement(t);if(c)x.className=c;if(h!=null)x.textContent=h;return x}
var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
$("ph").classList.add("on");
/* theme */
$("th").onclick=function(){var d=document.documentElement,cur=d.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");d.setAttribute("data-theme",cur==="dark"?"light":"dark")};
/* architecture */
var A={"Edge AI pipeline":[
["Sensors and cameras","Cameras, microphones and sensors capture the process being monitored."],
["Edge device","NVIDIA Jetson Orin Nano, BeagleBone AI-64 or Raspberry Pi 4 runs the models on the device."],
["YOLOv8 inference","Defect and component-level detection for PCBs, eye gaze detection and object detection."],
["Sensor fusion","Sound and sensor signals are fused for motor health. Fault classification runs only after the fused signal crosses a threshold."],
["Traceability","Rework traceability, audit logging and monitoring output for Industry 4.0 manufacturing."]],
"Railway firmware":[
["CEU","The Central Evaluator Unit sends Track Data Responses to the Station Master panel."],
["Comms drivers","MibSPI, I2C and Ethernet (EMAC with lwIP) drivers, built with HALCoGen and Code Composer Studio."],
["TMS570LC4354","Embedded C firmware on the TI safety microcontroller for the Station Master panel."],
["RTI schedules","Multiple RTI schedules run periodic tasks independently, so time-critical IO-expander control pulses stay apart from the main application schedule."],
["Panel I/O","TLC6C5748 LED drivers (5 devices, 40 tracks, chip-select) and an MCP23S17 SPI IO-expander driver in development."],
["Startup safety","Startup safety logic follows a defined startup safety flow."]]};
var cu="Edge AI pipeline";
function arch(){var f=$("fl");f.textContent="";var n=A[cu];n.forEach(function(x,i){var b=el("button","nd",x[0]);b.setAttribute("aria-pressed","false");b.onclick=function(){[].forEach.call(f.querySelectorAll(".nd"),function(y){y.setAttribute("aria-pressed","false")});b.setAttribute("aria-pressed","true");$("inf").textContent=x[1]};f.appendChild(b);if(i<n.length-1)f.appendChild(el("span","ar","→"))});f.firstChild.click()}
Object.keys(A).forEach(function(k){var b=el("button","chip",k);b.setAttribute("role","tab");b.setAttribute("aria-selected",k===cu);b.onclick=function(){cu=k;[].forEach.call($("at").children,function(y){y.setAttribute("aria-selected","false")});b.setAttribute("aria-selected","true");arch()};$("at").appendChild(b)});arch();
/* builds */
var P=[
{t:"CEL UMSDAC Station Master Panel – Embedded Firmware",c:"fw",s:"Jun 2026",e:"Present",k:202606,g:["TMS570","Embedded C","lwIP","RTI"],b:["TMS570LC4354 firmware for communication between the Central Evaluator Unit and the Station Master panel.","MibSPI, I2C and EMAC (lwIP) drivers, LED and IO-expander drivers, RTI task scheduling and startup safety logic.","Built with CCS and HALCoGen, verified with a logic analyzer and Docklight."]},
{t:"AI-Spec2Code",c:"ai",s:"Updated Jun 2026",k:202606,g:["Python","AI","Embedded"],b:["AI tool that converts Software Design Documents into implementation-ready embedded projects.","Generates hardware recommendations and controller selection from the design document. Private repository."]},
{t:"PCB Fault Detection and Rework Traceability System",c:"ai",s:"Nov 2025",e:"Jun 2026",k:202511,g:["YOLOv8","Jetson","AOI","Industry 4.0"],b:["YOLOv8 on NVIDIA Jetson upgrading an AOI system to defect and component-level detection.","DataMatrix decoding, real-time defect detection, audit logging and cloud-based traceability. Private repository."]},
{t:"Predictive Maintenance of Li-ion Battery",c:"ai",s:"Nov 2025",e:"Jun 2026",k:202511,g:["Raspberry Pi","INA226","TMP117","Python"],b:["AI-based battery monitoring on Raspberry Pi with INA226 and TMP117 sensors.","Predicts state of charge, state of health, remaining useful life, runtime and faults in real time. Private repository."]},
{t:"Motor Pump Audio – Predictive Maintenance",c:"ai",s:"Nov 2025",e:"Jun 2026",k:202511,g:["Sensor fusion","Audio","Python"],b:["Motor health monitoring using sound and sensor fusion.","Fault classification triggers only after the fused signal crosses a set threshold. Private repository."]},
{t:"Eye Gaze Detection with YOLOv8n",c:"ai",s:"Nov 2025",e:"Jun 2026",k:202511,g:["YOLOv8n","Edge AI","Python"],r:"eye-gaze-detection-yolov8n",b:["Real-time eye movement and gaze detection on edge devices, part of the Edge AI industrial proofs of concept."]},
{t:"Indoor Air Quality Monitoring System",c:"iot",s:"Updated May 2026",k:202605,g:["Sensors","Classification","Jupyter"],r:"Indoor-Air-Quality-Monitoring-system",b:["Classifies indoor air quality hazard levels from gas concentrations, temperature, humidity and particulate matter."]},
{t:"Signal Conditioning for Thermal Mass Flow Sensor",c:"an",s:"Feb 2025",e:"May 2025",k:202502,g:["Analog","PCB","Data logging"],r:"Signal-conditioning-for-thermal-mass-flow-sensor",b:["Analog circuits for sensor calibration and real-time data logging, with PCB testing and validation.","Built during the CMTI Bengaluru internship."]},
{t:"Smart Agribot with Raspberry Pi and Telegram",c:"iot",s:"Nov 2024",e:"Jan 2025",k:202411,g:["YOLOv5","Raspberry Pi","Telegram"],b:["Smart irrigation and Pi Camera weed detection using YOLOv5.","Automated spraying and remote control through Telegram."]},
{t:"Coal Mining Safety System",c:"iot",s:"Jun 2024",e:"Sep 2024",k:202406,g:["IoT","Ubidots","Sensors"],b:["Gas and fire detection with live underground environmental monitoring on Ubidots."]},
{t:"Smart Home Automation System",c:"iot",s:"Jun 2024",e:"Sep 2024",k:202406,g:["RFID","Ubidots","Telegram"],b:["Lighting, motor control and RFID-based smart doors with remote access through Ubidots and Telegram.","4th place at the BGS ACU National Hackathon."]}];
var X=[
{t:"Firmware Engineer (Edge AI and Embedded) – Mindteck, Bangalore",s:"Nov 2025",e:"Present",b:["Railway firmware on TI TMS570: MibSPI, I2C, EMAC with lwIP, RTI scheduling and startup safety logic.","YOLOv8 edge AI proofs of concept on Jetson, BeagleBone and Raspberry Pi for Industry 4.0."]},
{t:"Intern, Sensor and Vision Technology – CMTI, Bengaluru",s:"Feb 2025",e:"May 2025",b:["Thermal mass flow sensor calibration, data logging, analog circuits and PCB testing."]},
{t:"Intern, Embedded and IoT Systems – Loginware, Hassan",s:"Oct 2023",e:"Nov 2023",b:["IoT systems with NodeMCU and Raspberry Pi, integrating hardware and software."]},
{t:"Intern, Satellite Technology – ISRO Master Control Facility, Hassan",s:"Sep 2022",e:"Oct 2022",b:["Satellite telemetry, tracking and control systems."]}];
function card(p){var li=el("li"),c=el("div","cd");c.appendChild(el("p","dt",p.e?p.s+" – "+p.e:p.s));c.appendChild(el("h3",0,p.t));
p.b.forEach(function(x){c.appendChild(el("p","x",x))});
if(p.g){var t=el("div","tg");t.style.margin="10px 0 0";p.g.forEach(function(g){t.appendChild(el("span","t",g))});c.appendChild(t)}
if(p.r){var a=el("a",0,"View repository on GitHub");a.href=G+p.r;a.target="_blank";a.rel="noopener noreferrer";a.style.display="inline-block";a.style.marginTop="8px";c.appendChild(a)}
li.appendChild(c);return li}
var C=[["all","All"],["ai","Edge AI and vision"],["fw","Firmware"],["iot","IoT and embedded"],["an","Analog and sensors"]],fc="all";
function draw(){var o=$("tl");o.textContent="";P.filter(function(p){return fc==="all"||p.c===fc}).sort(function(a,b){return b.k-a.k}).forEach(function(p){o.appendChild(card(p))})}
C.forEach(function(c){var b=el("button","chip",c[1]);b.setAttribute("aria-pressed",c[0]==="all");b.onclick=function(){fc=c[0];[].forEach.call($("ch").children,function(y){y.setAttribute("aria-pressed","false")});b.setAttribute("aria-pressed","true");draw()};$("ch").appendChild(b)});draw();
X.forEach(function(p){$("ex").appendChild(card(p))});
/* contact dialog */
var dlg=$("dlg");
function openD(){$("cn").textContent="";dlg.showModal()}
[].forEach.call(document.querySelectorAll("[data-hire]"),function(b){b.onclick=openD});
$("x").onclick=function(){dlg.close()};
dlg.addEventListener("click",function(ev){if(ev.target===dlg)dlg.close()});
[].forEach.call(document.querySelectorAll(".cp"),function(b){b.onclick=function(){var v=b.getAttribute("data-copy");function ok(){$("cn").textContent="Copied: "+v}function no(){$("cn").textContent="Select and copy: "+v}
try{navigator.clipboard.writeText(v).then(ok,no)}catch(e){no()}}});
/* FOTA */
$("fota").onclick=function(){var p=0,s=$("fs");var iv=setInterval(function(){p+=RM?100:8;if(p>=100){clearInterval(iv);s.textContent="Resume download started.";var a=document.createElement("a");a.href="assets/Varun_K_S_N26.pdf";a.download="Varun_K_S_N26.pdf";document.body.appendChild(a);a.click();a.remove()}else s.textContent="Preparing resume… "+p+"%"},90)};
/* terminal */
var Q={"Tech stack":"Edge AI: YOLOv8 and YOLOv5 on Jetson Orin Nano, BeagleBone AI-64 and Raspberry Pi 4. Firmware: Embedded C on TI TMS570 and RM46xx, STM32, with MibSPI, I2C, EMAC and lwIP.",
"Current role":"Firmware Engineer at Mindteck, Bangalore, since Nov 2025. Railway firmware on TMS570 plus YOLOv8 edge AI proofs of concept.",
"Top achievement":"1st place at the Mindteck Global Mind AI-thon 2026 with an Industry 4.0 project, within months of joining.",
"Best project":"PCB Fault Detection and Rework Traceability: YOLOv8 on Jetson with DataMatrix decoding, audit logging and traceability.",
"Notice period":"30 days.","Salary":"Depends on the role and current market standards.","Relocation":"Yes, open to relocation."};
var lg=$("lg");function say(c,t){var d=el("div",c,t);lg.appendChild(d);lg.scrollTop=lg.scrollHeight}
say(0,"System init… I am Edge-V. Select a query to fetch recruiter data.");
Object.keys(Q).forEach(function(k){var b=el("button","chip",k);b.onclick=function(){say("u","> "+k);say(0,Q[k])};$("qs").appendChild(b)});
var hb=el("button","chip","Contact");hb.onclick=function(){say("u","> Contact");say(0,"Opening contact details…");openD()};$("qs").appendChild(hb);
function resetT(){lg.textContent="";say(0,"System init… I am Edge-V. Select a query to fetch recruiter data.")}
$("tb").onclick=function(){var o=$("tp").classList.toggle("open");$("tb").setAttribute("aria-expanded",o);if(!o)resetT()};

(function(){var b=$("boot"),v=$("vcc"),done=false;function go(){if(done)return;done=true;$("bs").textContent="> SYSTEM NOMINAL.";setTimeout(function(){b.classList.add("gone");try{sessionStorage.setItem("booted","1")}catch(e){}},RM?0:450)}
try{if(sessionStorage.getItem("booted")||RM){b.classList.add("gone");done=true}}catch(e){}
v.oninput=function(){if(+v.value>=96)go()};$("skip").onclick=go})();
(function(){if(RM||!matchMedia("(hover:hover)").matches)return;var cur=null;function clr(c){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}
document.addEventListener("pointermove",function(ev){var c=ev.target.closest&&ev.target.closest(".tl .cd");if(cur&&cur!==c)clr(cur);cur=c;if(!c)return;var r=c.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width,y=(ev.clientY-r.top)/r.height;c.style.setProperty("--ry",((x-.5)*10).toFixed(2)+"deg");c.style.setProperty("--rx",((.5-y)*8).toFixed(2)+"deg");c.style.setProperty("--mx",(x*100)+"%");c.style.setProperty("--my",(y*100)+"%")});
document.addEventListener("pointerleave",function(){if(cur)clr(cur);cur=null})})();
(function(){var o=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");o.unobserve(x.target)}})},{threshold:.08});[].forEach.call(document.querySelectorAll("section,.cd"),function(x){x.classList.add("rv");o.observe(x)})})();
(function(){var t=document.querySelector(".role");if(!t||RM)return;var s=t.textContent;t.textContent="";var i=0,c=el("span","cur","▌"),n=document.createTextNode("");t.append(n,c);var iv=setInterval(function(){n.nodeValue=s.slice(0,++i);if(i>=s.length)clearInterval(iv)},28)})();
