// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувь сагч
var scores = [0,0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0 ;
//  Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var diceNumber = Math.floor (Math.random() * 6) + 1;
// программ эхлэхэд бэлтгэе
window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";
 
var diceDom = document.querySelector(".dice")
diceDom.style.display = "none";
// Шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click",function(){
    // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
    var diceNumber = Math.floor (Math.random() * 6) + 1;
    // Шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.style.display = "block";
    //  Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";
    //Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
        // 1 ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // Энэ тоглогч нь ээлжидээ цуглуулсан оноог 0 болгоно
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
        // Үгүй бол идэвхтэй тоглогчийг ? болго.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);  
        // Улаан цэг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // Шоог түл алга болгоно
        diceDom.style.display = "none";
      }
    });
     