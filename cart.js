//////////////////// CONSTANTES ////////////////////

const infoCart = document.getElementById('infoPanier');
const detailCart = document.getElementById('detailCommande');
const detailBuy = document.createElement('div');
detailCart.appendChild(detailBuy);

const teddiesAdded_json = localStorage.getItem('product');
const teddiesAdded = JSON.parse(teddiesAdded_json);

//////////////////// FUNCTIONS ////////////////////

/*----- fonction pour panier vide -----*/
const cartEmpty = function() {
    if(localStorage.length === 0) {
        detailCart.style.display = 'none';
        const divEmpty = document.createElement('div');
        infoCart.appendChild(divEmpty);
        divEmpty.id = 'alertCartEmpty';
        divEmpty.innerHTML = 'Votre Panier est vide';
        console.log(localStorage);
    }
}
/*------ fonction pour alimenter le tableau de commande -----*/

const myCommand = function() {
    
    for(let i in teddiesAdded) {
        const myDetail = document.createElement('div');
        detailBuy.appendChild(myDetail);
        myDetail.className = 'detailOursonAchat'
        const myDetailName = document.createElement('div');
        myDetail.appendChild(myDetailName);
        myDetailName.id = 'myDetailName';
        const figPictureCart = document.createElement('figure');
        myDetailName.appendChild(figPictureCart);
        figPictureCart.id= 'fig_pic_cart';
        const imgPictureCart = document.createElement('img');
        figPictureCart.appendChild(imgPictureCart);
        imgPictureCart.setAttribute('src', teddiesAdded[i].picture);
        console.log(teddiesAdded);
    
        const divNameCart = document.createElement('div');
        myDetailName.appendChild(divNameCart);
        divNameCart.id= 'div_name_cart';
        divNameCart.innerHTML = teddiesAdded[i].firstName;
        // Partie Choix Couleur
        const divColor = document.createElement('div');
        myDetail.appendChild(divColor);
        divColor.id = 'myDetailColor';
        divColor.innerHTML = teddiesAdded[i].color;

    
        //Partie Prix 
        const myDetailPrice = document.createElement('div');
        myDetail.appendChild(myDetailPrice);
        myDetailPrice.id = 'myDetailPrice';
        myDetailPrice.innerHTML = teddiesAdded[i].price + ' ' + '€';
    
    }
    // Partie Total Commande
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

    let priceTeddies = [];
    
    for(let i = 0 ; i < teddiesAdded.length ; i++) {
        priceTeddies.push(teddiesAdded[i].price);   
    }
    const calculator = (accumulator, currentValue) => accumulator + currentValue;
    totalPriceCalcul.innerHTML = priceTeddies.reduce(calculator) + ' ' + '€';
        
    
 
    const buttonEmptyCart = document.createElement('button');
    const divButton = document.createElement('div');
    detailCart.appendChild(divButton);
    divButton.id = 'divDelete';
    divButton.appendChild(buttonEmptyCart);
    buttonEmptyCart.id = 'deleteButton';
    buttonEmptyCart.setAttribute('type', 'submit');
    buttonEmptyCart.innerHTML = "Supprimer mon panier";

    buttonEmptyCart.addEventListener('click', function(e) {
        localStorage.clear();
        cartEmpty();
    })
        
}

/*----------- Fonction pour ajout Formulaire ----------*/
function addForm() {
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
    inputFirstName.setAttribute('pattern', '[A-Za-z]+');
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
    inputName.setAttribute('pattern', '[A-Za-z]+');
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
    inputCity.setAttribute('pattern', '[A-Za-z]+');
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
    confirmOrder.addEventListener('onClick', function(e) {
        //e.preventDefault();
        let contact = {
            firstName: inputFirstName.value,
            lastName: inputName.value,
            address: textAreaAddress.value,
            city: inputCity.value,
            email: inputEmail.value,
        };
        let products = [];
        for(let p = 0 ; p < teddiesAdded.length ; p++) {
        
            products.push(teddiesAdded[p].theId);
           
        }
        let toSend = {contact, products};
        sendPost('http://localhost:3000/api/teddies/order', toSend).then(function(response) {
            window.location.href='./thankyou.html?orderId=' + response.orderId;
            orderPage(response);
            
        }).catch(function(error) {
            console.log(error);
        })
    });
}

/*----------- Fonction pour gestion page Remerciement ----------*/
function orderPage(response, priceTeddies) {
    infoCart.removeChild(detailCart);
    const thanksPage = document.getElementById('page_remerciements');
    const thanksDiv = document.createElement('div');
    thanksPage.appendChild(thanksDiv);
    thanksDiv.id ='thanks_div';
    thanksDiv.innerHTML = response.contact.firstName + ", </br> Nous te remercions pour ton achat, pour un montant de" + priceTeddies.reduce(calculator) + ' ' + "€. </br> Ton numéro de commande est le : " + response.orderId + ", garde le. Il te sera utile, lors d'éventuels échanges entre nous. </br> Toute l'équipe d'Oriourson te remercie et nous te souhaitons une belle journée.";
}

//////////////////// PROMISE REQUETE POST ////////////////////
function sendPost(url, toSend){
    return new Promise((resolve, reject) => {
        let recovHttp= new XMLHttpRequest();
        recovHttp.open('POST', url);
        recovHttp.setRequestHeader('content-type', 'application/json');
        recovHttp.send(JSON.stringify(toSend));
        recovHttp.onreadystatechange = function() {
            if(this.readyState === XMLHttpRequest.DONE) {
                if(this.status >= 200 && this.status <= 300) {  
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('encore une erreur');
                }
            }
         
        }
    });
}

cartEmpty();
myCommand();
addForm();

