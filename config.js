/* --- FICHIER: config.js --- */

// --- 1. CONFIGURATION DU BOUTON TEST ---
// Mets 'true' pour voir le bouton, 'false' pour le cacher (quand tu enverras aux parents)
const AFFICHER_BOUTON_ADMIN = true; 

// --- 2. LES DATES CLÉS ---
const datesCalendrier = {
    jour1: new Date(2025, 11, 4), // 4 Décembre (11 = Décembre)
    jour2: new Date(2025, 11, 5)  // 5 Décembre
};

// --- 3. CRÉATION AUTOMATIQUE DU BOUTON ---
document.addEventListener('DOMContentLoaded', () => {
    if (AFFICHER_BOUTON_ADMIN) {
        let btn = document.createElement("button");
        // Le texte du bouton change selon l'état
        let modeActuel = localStorage.getItem('modeTestActif') === 'true';
        btn.innerHTML = modeActuel ? "🟢 MODE TEST ACTIVÉ (Cliquer pour désactiver)" : "🔴 Activer Mode Test";
        
        // Le style du bouton (en bas à droite, discret)
        btn.style.position = "fixed";
        btn.style.bottom = "10px";
        btn.style.right = "10px";
        btn.style.zIndex = "9999";
        btn.style.padding = "10px";
        btn.style.background = "white";
        btn.style.border = "2px solid black";
        btn.style.cursor = "pointer";
        btn.style.fontFamily = "Arial, sans-serif";

        // L'action quand on clique dessus
        btn.onclick = function() {
            if (modeActuel) {
                localStorage.setItem('modeTestActif', 'false');
                alert("Mode Test DÉSACTIVÉ. Retour à la réalité !");
            } else {
                localStorage.setItem('modeTestActif', 'true');
                alert("Mode Test ACTIVÉ. Tu peux tout voir !");
            }
            location.reload(); // On recharge la page pour appliquer
        };
        document.body.appendChild(btn);
    }
});

// --- 4. FONCTION POUR SAVOIR SI C'EST OUVERT ---
function estCeQueCestDebloque(nomDuJour) {
    // Si le bouton Test est activé, on dit OUI tout de suite
    if (localStorage.getItem('modeTestActif') === 'true') {
        return true; 
    }

    // Sinon, on vérifie la vraie date
    const dateCible = datesCalendrier[nomDuJour];
    const maintenant = new Date();
    
    if (!dateCible) return true; // Si pas de date, c'est ouvert
    return maintenant >= dateCible;
}