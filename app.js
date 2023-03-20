// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 1 гэж тэмдэглэе
var activePlayer = 0;
// Тоглогчдын цуглуулсан оноог хадгалах хувь сагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// программ эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
 
var diceDom = document.querySelector(".dice")
diceDom.style.display = "none";
// Шоог шидэх эвент листэнэр
document.querySelector(".btn-roll").addEventListener("click",function() {
    // 1-6 доторх санамсаргүй нэг тоо гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;
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
        switchToNextPlayer();
           }
    });
    //  HOLD Товчны эвент листенер
    document.querySelector(".btn-hold").addEventListener("click", function() {
        //  Уг тоглогчийн цуглуулсан ээлжний оноог глобал оноо нь дээр нь нэмж өгнө
        // if (activePlayer === 0) {
        //     scores [0] = scores[0] + roundScore;
        // } else {
        //     scores[1] = scores[1] + roundScore;
        // }

        scores[activePlayer] = scores[activePlayer] + roundScore;
        // Дэлгэц дээр оноог нь өөрчилнө
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        // Уг тоглогч хожсон эсэхийг оноо нь 100-с ихийг шалгах
        if (scores[activePlayer] >= 20) {
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        } else {
        switchToNextPlayer() ;
        // Тоглгчийн ээлжийг солино
        }
    });
    function switchToNextPlayer() {
        // Энэ тоглогч нь ээлжидээ цуглуулсан оноог 0 болгоно
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
        // Үгүй бол идэвхтэй тоглогчийг ? болго.
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);  
        // Улаан цэг шилжүүлэх
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        // Шоог түр алга болгоно
        diceDom.style.display = "none";
      }

    //   Шинэ тоглоом эхлүүлэх эвент листэнэр
    document.querySelector('.btn-new').addEventListener('click',function(){
        
    })