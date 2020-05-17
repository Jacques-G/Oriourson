/*---------- PAGE D ACCUEIL ----------*/

/*----- CONSTANTES -----*/
const fondPhotoOurson = document.getElementById('fond-photo-ourson');

/*----- FUNCTIONS -----*/


/*------ REQUETTE GET -----*/
let recupHttp = new XMLHttpRequest();
recupHttp.onreadystatechange = function() {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
        /*---------- HEADER ----------*/
        fondPhotoOurson.setAttribute('src', 'http://localhost:3000/images/teddy_5.jpg');
        /*---------- PREMIER OURSON ----------*/
        for(let i = 0; i < response.length; i++) {

            const catalogue = document.getElementById('catalogue');
            const newSection = document.createElement('section');
            catalogue.appendChild(newSection);
            newSection.className = 'PartieOurson';
            const newFigure = document.createElement('figure');
            newSection.appendChild(newFigure);
            const newImg = document.createElement('img');
            newFigure.appendChild(newImg);
            newImg.setAttribute('src', response[i].imageUrl);
            const newDiv1 = document.createElement('div');
            newSection.appendChild(newDiv1);
            newDiv1.className = 'description_ourson';
            const newH3 = document.createElement('h3');
            newDiv1.appendChild(newH3);
            newH3.innerHTML = response[i].name;
            const newDiv2 = document.createElement('div');
            newDiv1.appendChild(newDiv2);
            newDiv2.className = 'id_ourson';
            const newP1 = document.createElement('p');
            newDiv2.appendChild(newP1);
            const newSpan = document.createElement('span');
            newP1.appendChild(newSpan);
            newSpan.innerHTML = "Numéro d'Id : ";
            const newP2 = document.createElement('p');
            newDiv2.appendChild(newP2);
            newP2.innerHTML = response[i]._id;
            const newP3 = document.createElement('p');
            newDiv1.appendChild(newP3);
            const newSpan2 = document.createElement('span');
            newP3.appendChild(newSpan2);
            newSpan2.innerHTML = "Couleur : Personnalisable";
            const newP4 = document.createElement('p');
            newDiv1.appendChild(newP4);
            newP4.innerHTML = response[i].description;
            const newDiv3 = document.createElement('div');
            newSection.appendChild(newDiv3);
            newDiv3.className = 'tarifs';
            const newDiv4 = document.createElement('div');
            newDiv3.appendChild(newDiv4);
            newDiv4.className = 'prix_ourson';
            const newP5 = document.createElement('p');
            newDiv4.appendChild(newP5);
            newP5.innerHTML = response[i].price + ' ' + '€';
            const newDiv5 = document.createElement('div');
            newDiv3.appendChild(newDiv5);
            newDiv5.className = 'ajout_panier';
            const newButton = document.createElement('button');
            newDiv5.appendChild(newButton);
            newButton.className = 'button__panier';
            newButton.setAttribute ('type', 'submit');
            newButton.innerHTML = 'Personnaliser le ! ';
        }
       
    }
}


recupHttp.open('GET', 'http://localhost:3000/api/teddies');
recupHttp.send();
