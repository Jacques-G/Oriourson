////////////////////// PARAMETRE DE REQUETE URL //////////////////////

const str = window.location;
const url = new URL(str);
const idUrl = url.searchParams.get("orderId");
console.log(idUrl);

////////////////////// FUNCTIONS  //////////////////////

/*----------- Fonction pour gestion page Remerciement ----------*/
function orderPage(response, priceTeddies) {
    const thanksPage = document.getElementById('page_remerciements');
    const thanksDiv = document.createElement('div');
    thanksPage.appendChild(thanksDiv);
    thanksDiv.id ='thanks_div';
    thanksDiv.innerHTML = response.contact.firstName + ", </br> Nous te remercions pour ton achat, pour un montant de" + priceTeddies.reduce(calculator) + ' ' + "€. </br> Ton numéro de commande est le : " + response.orderId + ", garde le. Il te sera utile, lors d'éventuels échanges entre nous. </br> Toute l'équipe d'Oriourson te remercie et nous te souhaitons une belle journée.";
}

////////////////////// REQUETE //////////////////////
let recoverHttp = new XMLHttpRequest();
recoverHttp.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        const response = JSON.parse(this.responseText);
        orderPage(response);
    }
}
recoverHttp.open('GET', 'http://localhost:3000/api/teddies/order/' + idUrl);
recoverHttp.send();