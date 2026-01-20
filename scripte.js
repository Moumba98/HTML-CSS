
const formulaire = document.getElementById ('MonFormulaire');
const nomSaisie = document.getElementById('nomTaper');
const mailTaper = document.getElementById('EmailTaper');

const nomChanger = document.getElementById("afficheNom");
const mailChanger = document.getElementById("afficheEmail");
const emailvalid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulaire.addEventListener('submit', function (evenement){

        evenement.preventDefault();

    const valeurNom = nomSaisie.value;
    const valeurEmail = mailTaper.value;

        if (valeurNom === "" || !emailvalid.test(valeurEmail)){
        
            alert("Veuillez remplir le nom et saisir un email valide (ex: nom@domaine.com)");

        } else{

            // affichage 

            nomChanger.textContent = 'NOM : ' + valeurNom;
            mailChanger.textContent = 'MAIL : ' + valeurEmail;

            console.log("Validation réussie ! Profil mis à jour.");

        
        }

})
