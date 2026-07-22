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
