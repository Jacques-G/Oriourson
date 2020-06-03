/*---------- PAGE D ACCUEIL ----------*/

/*----- CONSTANTES -----*/
const fondPhotoOurson = document.getElementById('fond-photo-ourson');
const catalogue = document.getElementById('catalogue');

/*----- FUNCTIONS -----*/

function insertImageUrl(section, imageTeddies){ 
    const newFigure = document.createElement('figure');
    section.appendChild(newFigure);
    const newImg = document.createElement('img');
    newFigure.appendChild(newImg);
    newImg.setAttribute('src', imageTeddies);
}

function insertName(div, nameTeddies){
    const newH3 = document.createElement('h3');
    div.appendChild(newH3);
    newH3.innerHTML = nameTeddies;
}

function insertId(div, idTeddies){
    const newDiv2 = document.createElement('div');
    div.appendChild(newDiv2);
    newDiv2.className = 'id_ourson';
    const newP1 = document.createElement('p');
    newDiv2.appendChild(newP1);
    const newSpan = document.createElement('span');
    newP1.appendChild(newSpan);
    newSpan.innerHTML = "Numéro d'Id : ";
    const newP2 = document.createElement('p');
    newDiv2.appendChild(newP2);
    newP2.id = 'id_teddy';
    newP2.innerHTML = idTeddies;
}

function insertColor(div){
    const newP3 = document.createElement('p');
    div.appendChild(newP3);
    const newSpan2 = document.createElement('span');
    newP3.appendChild(newSpan2);
    newSpan2.innerHTML = "Couleur : Personnalisable";
}
function insertDescription(div, descriptionTeddies){
    const newP4 = document.createElement('p');
    div.appendChild(newP4);
    newP4.innerHTML = descriptionTeddies;
}
function insertPrice(div3, priceTeddies){
    const newDiv4 = document.createElement('div');
    div3.appendChild(newDiv4);
    newDiv4.className = 'prix_ourson';
    const newP5 = document.createElement('p');
    newDiv4.appendChild(newP5);
    newP5.innerHTML = priceTeddies;
}
function insertLienPerso(div3, idLienTeddies){
    const newDiv5 = document.createElement('div');
    div3.appendChild(newDiv5);
    newDiv5.className = 'ajout_panier';
    const newP6 = document.createElement('p');
    newDiv5.appendChild(newP6);
    const newA = document.createElement('a');
    newP6.appendChild(newA);
    newA.className = 'lien_page_product';
    newA.setAttribute('href', './product.html?id=' + idLienTeddies);
    newA.innerHTML = 'Personnaliser le !';
}



/*------ REQUETE GET -----*/
let recupHttp = new XMLHttpRequest();
recupHttp.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
        fondPhotoOurson.setAttribute('src', 'http://localhost:3000/images/teddy_5.jpg');
        for(let i = 0; i < response.length; i++) {
            const newSection = document.createElement('section');
            catalogue.appendChild(newSection);
            newSection.className = 'PartieOurson';
            insertImageUrl(newSection, response[i].imageUrl);
            const newDiv1 = document.createElement('div');
            newSection.appendChild(newDiv1);
            newDiv1.className = 'description_ourson';
            insertName(newDiv1, response[i].name);
            insertId(newDiv1, response[i]._id);
            insertColor(newDiv1);
            insertDescription(newDiv1, response[i].description);
            const newDiv3 = document.createElement('div');
            newSection.appendChild(newDiv3);
            newDiv3.className = 'tarifs';
            insertPrice(newDiv3, response[i].price + ' ' + '€');
            insertLienPerso(newDiv3, response[i]._id);
            
        }
    }
}
recupHttp.open('GET', 'http://localhost:3000/api/teddies');
recupHttp.send()
