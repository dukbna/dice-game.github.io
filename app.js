// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувь сагч
var scores = [0,0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0 ;
//  Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor (Math.random() * 6) + 1;

window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
 
document.querySelector(".dice").style.display = "none";