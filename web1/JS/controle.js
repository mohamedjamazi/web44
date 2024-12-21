function controleRecherche(ChampRecherche) {
    if (ChampRecherche.value.length < 4) {
        alert("Le texte saisi doit contenir au moins 4 caractères.");
        ChampRecherche.focus();
        ChampRecherche.select();
        return false;
    }
    return true;
}
function controleMDP(mdp) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!regex.test(mdp.value)) {
        alert(
            "Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, un chiffre et un caractère spécial."
        );
        mdp.focus();
        return false;
    }
    return true;
}
function validationInscription(mdp1, mdp2, check1, check2) {
    if (!controleMDP(mdp1)) return false;

    if (mdp1.value !== mdp2.value) {
        alert("Les mots de passe doivent être identiques.");
        mdp2.focus();
        return false;
    }
    if (!check1.checked && !check2.checked) {
        alert("Vous devez vous abonner à au moins une newsletter.");
        return false;
    }
    return true;
}
