
document.addEventListener("DOMContentLoaded", () => {

    const sceneFinale = document.getElementById("sceneFinale");
    const sceneRetour = document.getElementById("sceneRetour");
    const btnInfiniment = document.getElementById("btnInfiniment");

    const chanson = new Audio("audios/chanson_finale.mp3");
    chanson.volume = 0;

    // THIS FUNCTION MUST BE CALLED FROM YOUR OLD SCRIPT (after voix.onended)
    window.afficherCadeauOuvert = function() {
        document.body.classList.add("cadeau-ouvert");
        sceneFinale.classList.remove("hidden");
    };

    // When user clicks the gold button
    btnInfiniment.addEventListener("click", () => {

        // Fade in song
        chanson.play();
        let v = 0;
        const fade = setInterval(() => {
            v += 0.02;
            if (v >= 1) {
                v = 1;
                clearInterval(fade);
            }
            chanson.volume = v;
        }, 120);

        // At the end of the song → hide scene + show return
        chanson.onended = () => {
            sceneFinale.classList.add("hidden");
            sceneRetour.classList.remove("hidden");
        };
    });

});
