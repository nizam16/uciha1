/* ===========================
   CONFIG
=========================== */

const CONFIG = {
    whatsapp: "https://emely8966.royaltykendal.me/i/86449d38-b402-3bf2-ba95-84c36923232c",
    telegram: "https://marilie2360.royaltykendal.me/i/3ca21a51-9520-32e6-8718-dd95bb7dfaa0",
    tinder: "https://francisca1843.royaltykendal.me/i/b8518078-7d78-369c-8d40-361b58c297fc"
};

/* ===========================
   SET LINK
=========================== */

document.getElementById("btnWhatsapp").href = CONFIG.whatsapp;
document.getElementById("btnTelegram").href = CONFIG.telegram;
document.getElementById("btnTinder").href = CONFIG.tinder;

/* ===========================
   DETECT LANGUAGE
=========================== */

let lang = navigator.language.toLowerCase();

if (lang.startsWith("pt")) {
    lang = "pt";
} else if (lang.startsWith("es")) {
    lang = "es";
} else {
    lang = "en";
}

/* ===========================
   TRANSLATION
=========================== */

if (typeof translations !== "undefined" && translations[lang]) {

    const t = translations[lang];

    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;

    document.getElementById("verifiedText").textContent = t.verified;

    document.getElementById("waText").textContent = t.whatsapp;
    document.getElementById("tgText").textContent = t.telegram;
    document.getElementById("tinderText").textContent = t.tinder;

    document.getElementById("feature1").textContent = t.feature1;
    document.getElementById("feature2").textContent = t.feature2;
    document.getElementById("feature3").textContent = t.feature3;

    document.getElementById("redirectMessage").textContent = t.message;

    document.getElementById("continueBtn").textContent = t.continue;
    document.getElementById("cancelBtn").textContent = t.cancel;

    document.getElementById("footerText").textContent = t.footer;
}

/* ===========================
   COUNTDOWN
=========================== */

let seconds = 3;

const countdown = document.getElementById("countdown");
const progress = document.getElementById("progressBar");

countdown.textContent = seconds;
progress.style.width = "100%";

let interval = setInterval(function(){

    seconds--;

    if(seconds >= 0){

        countdown.textContent = seconds;

        progress.style.width = (seconds / 3) * 100 + "%";

    }

    if(seconds <= 0){

        clearInterval(interval);

        countdown.textContent = "✓";

        progress.style.width = "0%";

        if(typeof translations !== "undefined"){

            document.getElementById("redirectMessage").textContent =
            translations[lang].ready;

        }

    }

},1000);

/* ===========================
   CONTINUE BUTTON
=========================== */

document.getElementById("continueBtn").addEventListener("click",function(){

    if(CONFIG.whatsapp !== ""){

        window.open(CONFIG.whatsapp,"_blank");

    }

});

/* ===========================
   CANCEL BUTTON
=========================== */

document.getElementById("cancelBtn").addEventListener("click",function(){

   if(CONFIG.whatsapp !== ""){

        window.open(CONFIG.whatsapp,"_blank");

    }

});