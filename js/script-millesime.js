/* -------------------------------------------------- */
/* PAGE LETTRE (lettre.html) */
/* -------------------------------------------------- */

function initLettrePage() {
    const enveloppe = document.getElementById("enveloppe");

    enveloppe.addEventListener("click", () => {
        // Clique = passage à la page histoire
        window.location.href = "histoire.html";
    });
}

/* -------------------------------------------------- */
/* PAGE HISTOIRE (histoire.html) */
/* -------------------------------------------------- */

function initHistoirePage() {
    const phrase = document.getElementById("phrase-final");
    const btn = document.getElementById("btnStartClip");

    // Apparition du texte
    setTimeout(() => {
        phrase.style.opacity = 1;
    }, 500);

    // Apparition du bouton
    setTimeout(() => {
        btn.style.display = "inline-block";
        btn.style.opacity = 1;
    }, 1800);

    // Clic = passage au clip
    btn.addEventListener("click", () => {
        window.location.href = "clip.html";
    });
}

/* -------------------------------------------------- */
/* PAGE CLIP (clip.html) */
/* -------------------------------------------------- */

function initClipPage() {

    const slides = document.querySelectorAll(".slide");
    const finalMsg = document.getElementById("final-message");
    const musique = document.getElementById("musique");

    /* === TIMINGS EXACTS REÇUS DE STÉPHANIE ===
       Décalage intro = +7 sec appliqué
       clip06 supprimé / clip08 supprimé
       clip015 ajouté après clip07
       clip05 revient juste avant la fin
       ========================================== */

    const timings = [
        7,          // 0 - clip01
        22,         // 1 - clip02
        38,         // 2 - clip03
        52,         // 3 - clip04
        67,         // 4 - clip05

        79.807,     // 5 - clip07
        94.053,     // 6 - clip015

        106.139,    // 7 - clip09
        117.332,    // 8 - clip10

        131.500,    // 9 - clip11
        153.767,    // 10 - clip12

        188.842,    // 11 - clip05 revient (refrain final)
        200.289,    // 12 - clip13 (image code "on vous aime")

        999         // 13 - garder la dernière image
    ];


    /* ----- Affichage des slides ----- */
    function showSlide(i) {
        slides.forEach((s, idx) => {
            s.classList.toggle("active", idx === i);
        });
    }

    // Première image
    showSlide(0);

    /* ----- Lecture audio + fallback clic ----- */
    musique.play().catch(() => {
        document.addEventListener("click", () => musique.play(), { once: true });
    });

    /* ----- Synchronisation audio -> images ----- */
    musique.addEventListener("timeupdate", () => {
        const t = musique.currentTime;

        // Trouve la slide à afficher
        for (let i = timings.length - 1; i >= 0; i--) {
            if (t >= timings[i]) {
                showSlide(i);
                break;
            }
        }

        // Affichage du message final 2 sec après le code
        if (t >= timings[12] + 2) {
            finalMsg.style.opacity = 1;
        }
    });
}
