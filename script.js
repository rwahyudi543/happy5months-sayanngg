/* ==========================================
   HAPPY 5 MONTHS PREMIUM
   SCRIPT PART 1
========================================== */

const typingText =
`Hai Sayangg... 🤍

Happy 5 Months yaa.

Terima kasih sudah hadir di hidupku.

Terima kasih sudah menjadi alasan kenapa aku tersenyum setiap hari.

Semoga kita terus berjalan bersama.

Aku akan selalu memilih kamu.

Hari ini.

Besok.

Dan semoga selamanya... ❤️`;

const letterText =
`Happy 5 Months Sayangg 🤍

Terima kasih sudah menjadi bagian terindah dalam hidupku.

Mungkin kita tidak selalu sempurna.

Mungkin kita pernah berbeda pendapat.

Tapi setiap hari aku selalu belajar untuk menjadi seseorang yang lebih baik untukmu.

Aku ingin menjadi tempat ternyamanmu.

Tempat kamu pulang.

Tempat kamu bercerita.

Tempat kamu merasa dicintai.

Aku sayang kamu lebih dari yang bisa dijelaskan oleh kata-kata.

I Love You More ❤️`;

let i = 0;
let j = 0;

/* Loading */
window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        typeOpening();

    },3000);

};

/* Typing Opening */

function typeOpening(){

    if(i < typingText.length){

        document.getElementById("typing").innerHTML += typingText.charAt(i);

        i++;

        setTimeout(typeOpening,40);

    }

}

/* Buka Surat */

document.getElementById("openLetter").onclick = function(){

    document.querySelector(".letter").style.display="block";

    typeLetter();

}

/* Typing Surat */

function typeLetter(){

    if(j < letterText.length){

        document.getElementById("loveLetter").innerHTML += letterText.charAt(j);

        j++;

        setTimeout(typeLetter,35);

    }

}

/* Hati */

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🤍";

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration = (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,300);

/* Mawar */

function createRose(){

    const rose = document.createElement("div");

    rose.className="rose";

    rose.innerHTML="🌹";

    rose.style.left=Math.random()*100+"vw";

    rose.style.animationDuration=(7+Math.random()*4)+"s";

    document.body.appendChild(rose);

    setTimeout(()=>{

        rose.remove();

    },11000);

}

setInterval(createRose,900);

/* Meteor */

function meteor(){

    const m=document.createElement("div");

    m.className="meteor";

    m.style.top=Math.random()*250+"px";

    m.style.left=(window.innerWidth+200)+"px";

    document.body.appendChild(m);

    setTimeout(()=>{

        m.remove();

    },2000);

}

setInterval(meteor,6000);
/* ==========================================
   SCRIPT PART 2
========================================== */

/* Membuat bintang */

for(let i=0;i<200;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    document.getElementById("stars").appendChild(star);

}

/* Countdown */

const targetDate = new Date("2026-02-23T00:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = now - targetDate;

    if(diff<=0)return;

    const days=Math.floor(diff/(1000*60*60*24));

    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));

    const seconds=Math.floor((diff%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

/* Hati saat layar disentuh */

document.addEventListener("click",function(e){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.animationDuration="3s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

});

/* Tombol Ending */

document.getElementById("lastPage").onclick=function(){

    document.getElementById("ending").style.display="block";

    launchFireworks();

}

/* Firework sederhana */

function launchFireworks(){

    for(let i=0;i<80;i++){

        const spark=document.createElement("div");

        spark.style.position="fixed";

        spark.style.width="6px";

        spark.style.height="6px";

        spark.style.borderRadius="50%";

        spark.style.background=`hsl(${Math.random()*360},100%,70%)`;

        spark.style.left="50%";

        spark.style.top="50%";

        spark.style.pointerEvents="none";

        spark.style.transition="all 1.8s ease-out";

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.style.transform=`translate(${(Math.random()-0.5)*900}px, ${(Math.random()-0.5)*900}px)`;

            spark.style.opacity="0";

        },50);

        setTimeout(()=>{

            spark.remove();

        },2000);

    }

}
