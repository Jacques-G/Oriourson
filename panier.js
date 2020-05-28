//////////////////// CONSTANTES ////////////////////

const infoCart = document.getElementById('infoPanier');
const detailCart = document.getElementById('detailCommande');
const detailBuy = document.createElement('div');
detailCart.appendChild(detailBuy);

//////////////////// RECUP DU LOCAL STORAGE ////////////////////

//////////////////// FUNCTIONS ////////////////////

/*----- fonction pour panier vide -----*/
const cartEmpty = function() {
    if(localStorage.length === 0) {
        detailCart.style.display = 'none';
        const divEmpty = document.createElement('div')
        infoCart.appendChild(divEmpty);
        divEmpty.id = 'alertCartEmpty';
        divEmpty.innerHTML = 'Votre Panier est vide';
        console.log(localStorage);
    }
}
/*------ fonction pour alimenter le tableau de commande -----*/

const myCommand = function() {
    for(let i = 0; i < localStorage.length; i++) {
    
        const myDetail = document.createElement('div');
        detailBuy.appendChild(myDetail);
        myDetail.className = 'detailOursonAchat'
        const myDetailName = document.createElement('div');
        myDetail.appendChild(myDetailName);
        myDetailName.id = 'myDetailName';
        myDetailName.innerHTML = localStorage.getItem('product', );
        
        const myDetailNumber = document.createElement('label');
        myDetail.appendChild(myDetailNumber);
        myDetailNumber.id = 'myDetailNumber';
        const mySelectNumber = document.createElement('select');
        myDetailNumber.appendChild(mySelectNumber);
        mySelectNumber.id ='selectNumberOrTeddies';
        
        const firstOption = document.createElement('option');
        mySelectNumber.appendChild(firstOption);
        firstOption.setAttribute('value', '1');
        firstOption.innerHTML = '1';

        const secondOption = document.createElement('option');
        mySelectNumber.appendChild(secondOption);
        secondOption.setAttribute('value', '2');
        secondOption.innerHTML = '2';

        const thirdOption = document.createElement('option');
        mySelectNumber.appendChild(thirdOption);
        thirdOption.setAttribute('value', '3');
        thirdOption.innerHTML = '3';

        const fourthOption = document.createElement('option');
        mySelectNumber.appendChild(fourthOption);
        fourthOption.setAttribute('value', '4');
        fourthOption.innerHTML = '4';

        const selectNumberOrTeddies = document.getElementById('selectNumberOrTeddies');
        selectNumberOrTeddies.addEventListener('change', function(e) {
            console.log(selectNumberOrTeddies.value);

        });
        const myDetailPrice = document.createElement('div');
        myDetail.appendChild(myDetailPrice);
        myDetailPrice.id = 'myDetailPrice';
        //myDetailPrice.innerHTML = (selectNumberOrTeddies.value*price) +'€';   // NE FONCTIONNE PAS POUR LE MOMENT
        //console.log(selectNumberOrTeddies.value*price);                         // NE FONCTIONNE PAS POUR LE MOMENT
    
    }
    
    const divTotal = document.createElement('div');
    detailCart.appendChild(divTotal);
    divTotal.id = 'divTotal';
    const totalPrice = document.createElement('div');
    divTotal.appendChild(totalPrice);
    totalPrice.id = 'totalPrice';
    totalPrice.innerHTML = 'Total de votre Commande : ';
    const totalPriceCalcul = document.createElement('div');
    divTotal.appendChild(totalPriceCalcul);
    totalPriceCalcul.id = 'totalPriceCalcul';
    totalPriceCalcul.innerHTML = '';

    const buttonCart = document.createElement('button');
    const divButton = document.createElement('div');
    detailCart.appendChild(divButton);
    divButton.id = 'divDelete';
    divButton.appendChild(buttonCart);
    buttonCart.id = 'deleteButton';
    buttonCart.setAttribute('type', 'submit');
    buttonCart.innerHTML = "Supprimer mon panier";

    buttonCart.addEventListener('click', function(e) {
        localStorage.clear();
        cartEmpty();
    })
}

/*----------- Fonction pour ajout Formulaire ----------*/
function addForm(data) {
    const myBask = document.getElementById('monPanier');
    const divInformForm = document.createElement('div');
    myBask.appendChild(divInformForm);
    divInformForm.id = 'div_inform_form';
    const paragraphInform = document.createElement('p');
    divInformForm.appendChild(paragraphInform);
    paragraphInform.id = 'paragraph_inform';
    paragraphInform.innerHTML = "Pour pouvoir valider votre commande, merci de remplir tous les champs.";
    const myForm = document.createElement('form');
    myBask.appendChild(myForm);
    myForm.id = 'my_form';
    // AJOUT DU FORM PRENOM
    const divFormFirstName = document.createElement('div');
    myForm.appendChild(divFormFirstName);
    divFormFirstName.id = 'div_form_first_name';
    const labelFirstName = document.createElement('label');
    divFormFirstName.appendChild(labelFirstName);
    labelFirstName.setAttribute('for', 'prénom');
    labelFirstName.innerHTML = 'Prénom :*'
    const inputFirstName = document.createElement('input');
    divFormFirstName.appendChild(inputFirstName);
    inputFirstName.setAttribute('type', 'text')
    inputFirstName.setAttribute('id', 'firstname')
    inputFirstName.setAttribute('required', '');
    inputFirstName.addEventListener('change', function(e) {
        console.log(inputFirstName.value);
    })
    // AJOUT DU FORM NOM
    const divFormName = document.createElement('div');
    myForm.appendChild(divFormName);
    divFormName.id = 'div_form_name';
    const labelName = document.createElement('label');
    divFormName.appendChild(labelName);
    labelName.setAttribute('for', 'name');
    labelName.innerHTML = 'Nom :*'
    const inputName = document.createElement('input');
    divFormName.appendChild(inputName);
    inputName.setAttribute('type', 'text')
    inputName.setAttribute('id', 'lastname')
    inputName.setAttribute('required', '');
    inputName.addEventListener('change', function(e) {
        console.log(inputName.value);
    })
    // AJOUT DU FORM ADRESSE
    const divFormAddress = document.createElement('div');
    myForm.appendChild(divFormAddress);
    divFormAddress.id = 'div_form_address';
    const labelAdress = document.createElement('label');
    divFormAddress.appendChild(labelAdress);
    labelAdress.setAttribute('for', 'adresse');
    labelAdress.innerHTML = 'Adresse :*'
    const textAreaAddress = document.createElement('textarea');
    divFormAddress.appendChild(textAreaAddress);
    textAreaAddress.setAttribute('type', 'text')
    textAreaAddress.setAttribute('id', 'address')
    textAreaAddress.setAttribute('required', '');
    textAreaAddress.addEventListener('change', function(e) {
        console.log(textAreaAddress.value);
    })
    // AJOUT DU FORM VILLE
    const divFormCity = document.createElement('div');
    myForm.appendChild(divFormCity);
    divFormCity.id = 'div_form_city';
    const labelCity = document.createElement('label');
    divFormCity.appendChild(labelCity);
    labelCity.setAttribute('for', 'ville');
    labelCity.innerHTML = 'Ville :*'
    const inputCity = document.createElement('input');
    divFormCity.appendChild(inputCity);
    inputCity.setAttribute('type', 'text')
    inputCity.setAttribute('id', 'city')
    inputCity.setAttribute('required', '');
    inputCity.addEventListener('change', function(e) {
        console.log(inputCity.value);
    })
    // AJOUT DU FORM EMAIL
    const divFormEmail = document.createElement('div');
    myForm.appendChild(divFormEmail);
    divFormEmail.id = 'div_form_email';
    const labelEmail = document.createElement('label');
    divFormEmail.appendChild(labelEmail);
    labelEmail.setAttribute('for', 'email');
    labelEmail.innerHTML = 'Email :*'
    const inputEmail = document.createElement('input');
    divFormEmail.appendChild(inputEmail);
    inputEmail.setAttribute('type', 'email')
    inputEmail.setAttribute('id', 'emailAd')
    inputEmail.setAttribute('required', '');
    inputEmail.addEventListener('change', function(e) {
        console.log(inputEmail.value);
    })
    const divConfirm = document.createElement('div');
    myForm.appendChild(divConfirm);
    divConfirm.id = 'div_confirm';
    const buttonConfirmOrder = document.createElement('button');
    divConfirm.appendChild(buttonConfirmOrder);
    buttonConfirmOrder.id = 'confirm_order';
    buttonConfirmOrder.setAttribute('type', 'submit');
    buttonConfirmOrder.innerHTML = 'Valider ma commande';

    const confirmOrder = document.getElementById('confirm_order');
    confirmOrder.addEventListener('click', function(e) {
    e.preventDefault();
    let contact = {
        firstName: inputFirstName.value,
        lastName: inputName.value,
        address: textAreaAddress.value,
        city: inputCity.value,
        email: inputEmail.value,
    };
    let products = [];
    for(let product = 0 ; product < localStorage.length ; product++) {
        products.push(localStorage.getItem('product'));
    }
    let data = {contact, products};
    sendPost('http://localhost:3000/api/teddies/order', data).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    })
});
}
myCommand();
addForm();


    
//////////////////// PROMISE REQUETE POST ////////////////////
function sendPost(url, data){
    return new Promise((resolve, reject) => {
        let recovHttp= new XMLHttpRequest();
        recovHttp.open('POST', url);
        recovHttp.setRequestHeader('content-type', 'aplication/json');
        recovHttp.send(JSON.stringify(data));
        recovHttp.onreadystatechange = function() {
            if(this.readyState == XMLHttpRequest.DONE & this.status == 200) {
                    resolve(JSON.parse(this.responseText));
            } else {
                reject(recovHttp);
            }
            
        }
    })
}

