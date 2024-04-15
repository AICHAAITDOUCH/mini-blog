document.getElementById("lire").onclick = function () {
  var contenuCache = document.getElementById("contenu-cache");
  if (contenuCache.style.display === "none") {
    contenuCache.style.display = "block";
    document.getElementById("lire").innerText = "lire moins ";
  } else {
    contenuCache.style.display = "none";
    document.getElementById("lire").innerText = "lire plus ";
  }
};
document.getElementById("supprimer").onclick = function () {
  var container = document.getElementById("blog1");
  // container.innerHTML = "";
  container.remove();
};
// document.getElementById("modifier").onclick = function () {
//   var image = document.getElementsByTagName("img");
//   var new_image = document.getElementById("image").value;
//   image.style.backgroundImage = "url('new_image')";
// };
//masquer le formulair form_content//
var form = document.getElementById("form_content");
form.style.display = "none";
document.getElementById("write").onclick = function () {
  if (form.style.display === "none") {
    form.style.display = "flex";
  } else {
    form.style.display = "none";
  }
};

// document.getElementById("send").onclick = function () {

/* let content = document.getElementById("section_blogs");
  var nouvelElement = document.createElement("div");
  nouvelElement.classList.add("blog-card");
  nouvelElement.setAttribute("id", "blog1");

  var nouveldiv = document.createElement("div");
  nouveldiv.classList.add("blog-image");

  var input = document.getElementById("image");
  var file = input.files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    nouveldiv.style.backgroundImage = "url('" + event.target.result + "')";
    nouveldiv.style.backgroundPosition = "center";
    nouveldiv.style.backgroundRepeat = "no-repeat";
    nouveldiv.style.backgroundSize = "cover";
  };
  reader.readAsDataURL(file);

  nouvelElement.appendChild(nouveldiv);*/
// // Créer et configurer l'élément h1 pour le titre
/************************************************* */
// var nouveltitre = document.createElement("h1");
// nouveltitre.classList.add("blog-title");
// let titre = document.getElementById("titre").value;
// nouveltitre.textContent = titre;
// nouvelElement.appendChild(nouveltitre);
/************************************************* */
// // Créer et configurer l'élément p pour le par
/************************************************* */
// var newpargh = document.createElement("div");
// newpargh.classList.add("section1");
// var nouvelpragh = document.createElement("p");
// nouvelpragh.classList.add("blog-overview");
// let pargh = document.getElementById("title").value;
// nouvelpragh.textContent = pargh;
// newpargh.appendChild(nouvelpragh);
// nouvelElement.appendChild(newpargh);
// var article = document.createElement("div");
// article.classList.add("section2");
// var nouveldesc = document.createElement("p");
// nouveldesc.classList.add("blog-overview1");
// let pargh2 = document.getElementById("article").value;
// nouveldesc.textContent = pargh2;
// article.style.display = "none";
// article.appendChild(nouveldesc);
// nouvelElement.appendChild(article);
/**************************************** */
// let btn = document.createElement("button");
// btn.classList.add("btn dark");
// btn.setAttribute("id", "lire");
// nouvelElement.appendChild(btn);
// // Créer et configurer l'élément p pour le 2paragh
/**************************************************** */
// var bouton = document.createElement("button");
// bouton.textContent = "Lire Plus";
// bouton.classList.add("btn", "dark");
// bouton.setAttribute("id", "lire");
// nouvelElement.appendChild(bouton);
// var bouton2 = document.createElement("button");
// bouton2.textContent = "Supprimer";
// bouton2.classList.add("btn", "red");
// bouton2.setAttribute("id", "supprimer");
// bouton2.addEventListener("click", function () {
/***************************************************** */
// Assurez-vous que container fait référence à l'élément que vous souhaitez supprimer
/*************************************************************** */
// var container = document.getElementById("container");
// if (container) {
//   container.remove();
// } else {
//   console.log("Element à supprimer non trouvé");
// }
// });
// nouvelElement.appendChild(bouton2);
// content.appendChild(nouvelElement);
// close
// var cls = document.getElementById("form_content");
// if (cls.style.display === "flex") {
//   cls.style.display = "none";
// } else {
//   cls.style.display = "flex";
// }
// };

/********** Start test Nouveau div****************** */
// Sélectionner le bouton "Ajouter un div"
var boutonAjouter = document.getElementById("send");

// Sélectionner le conteneur où les divs seront ajoutés
var conteneur = document.getElementById("section_blogs");

// Fonction pour ajouter un nouveau div avec un bouton "Supprimer"
function ajouterDiv() {
  // Créer un nouveau div
  var nouveauDiv = document.createElement("div");
  nouveauDiv.classList.add("blog-card");

  /***Start : Créer et récupérer le chemin de l'image à partir d'un champ de type fichier ***/
  // var nouveauDiv1 = document.createElement("div");
  // nouveauDiv1.classList.add("blog-image");
  // Récupérer le champ de type fichier (input)
  var inputImage = document.getElementById("image");

  // Vérifier si un fichier a été sélectionné
  if (inputImage.files && inputImage.files[0]) {
    var imageFile = inputImage.files[0]; // Récupérer le fichier sélectionné

    // Créer un objet FileReader pour lire le contenu du fichier
    var reader = new FileReader();

    // Définir la fonction de rappel pour le chargement de l'image
    reader.onload = function (e) {
      // Créer un élément d'image
      var image = document.createElement("img");
      image.src = e.target.result; // Spécifier l'URL de l'image à partir du résultat de FileReader
      //style image
      image.classList.add("blog-image");

      // Ajouter l'image au div
      // nouveauDiv.appendChild(image);
      // Placer l'image avant le titre dans le div
      nouveauDiv.insertBefore(image, nouveauDiv.firstChild); // Insérer l'image avant le premier enfant du div
    };

    // Lire le contenu du fichier en tant qu'URL de données (data URL)
    reader.readAsDataURL(imageFile);
  } else {
    console.log("Aucun fichier sélectionné.");
  }

  /***End : Créer et récupérer le chemin de l'image à partir d'un champ de type fichier ***/

  // Créer un titre pour le div
  var titre = document.createElement("h2");
  titre.textContent = document.getElementById("titre").value;
  // crréer un div 2 à l'intérieur de Nouveau div 1
  var nouveauDiv2 = document.createElement("div");
  nouveauDiv2.classList.add("section1");
  //Créer Paragraphe section1
  var paraSection1 = document.createElement("p");
  paraSection1.classList.add("blog-overview");
  paraSection1.textContent = document.getElementById("title").value;
  //créer un div 3 à l'interieur de nouveau div 1
  var nouveauDiv3 = document.createElement("div");
  nouveauDiv3.classList.add("section2");
  nouveauDiv3.style.display = "none";
  //Créer Paragraphe section2
  var paraSection2 = document.createElement("p");
  paraSection2.classList.add("blog-overview");
  paraSection2.textContent = document.getElementById("article").value;
  //Créer un bouton "Lire plus" pour div 1
  var boutonLirePlus = document.createElement("button");
  boutonLirePlus.textContent = "lire plus";
  boutonLirePlus.classList.add("btn", "dark");
  // Créer un gestionnaire d'événements pour le bouton "Lire plus"
  boutonLirePlus.addEventListener("click", function () {
    // Sélectionner la section 2 du div actuel
    var section2 = nouveauDiv.querySelector(".section2");

    // Vérifier si la section 2 est actuellement visible ou non
    if (section2.style.display === "none") {
      // Si la section 2 est cachée, l'afficher
      section2.style.display = "block";
      // Modifier le texte du bouton pour "Lire moins"
      boutonLirePlus.textContent = "Lire moins";
    } else {
      // Si la section 2 est visible, la cacher
      section2.style.display = "none";
      // Modifier le texte du bouton pour "Lire plus"
      boutonLirePlus.textContent = "Lire plus";
    }
  });
  //Créer un bouton "modifier" pour ce div 1 : modifier le contenu du blog

  // Créer un bouton "Supprimer" pour ce div1
  var boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "Supprimer";
  boutonSupprimer.classList.add("btn", "red");

  // Ajouter un gestionnaire d'événements au bouton "Supprimer"
  boutonSupprimer.addEventListener("click", function () {
    // Supprimer le parent du bouton, c'est-à-dire le div contenant ce bouton
    nouveauDiv.remove();
  });

  // Ajouter le titre au div
  nouveauDiv.appendChild(titre);
  ///Ajouter nouveauDiv2 au div1
  nouveauDiv.appendChild(nouveauDiv2);
  //Ajouter paragraphe section 1 au div2
  nouveauDiv2.appendChild(paraSection1);
  //Ajouter nouveauDiv3 au div1
  nouveauDiv.appendChild(nouveauDiv3);
  //Ajouter paragraphe section 2 au div3
  nouveauDiv3.appendChild(paraSection2);
  //Ajouter le bouton "lire plus"au div
  nouveauDiv.appendChild(boutonLirePlus);
  // Ajouter le bouton "Supprimer" au div
  nouveauDiv.appendChild(boutonSupprimer);

  // Ajouter le nouveau div au conteneur
  conteneur.appendChild(nouveauDiv);
  form.style.display = "none";
}

// Ajouter un gestionnaire d'événements au bouton "Ajouter un div"
boutonAjouter.addEventListener("click", ajouterDiv);

// Ajouter un événement de soumission au formulaire de publication
const addPostForm = document.getElementById('form_content');
// addPostForm.addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const text = postText.value.trim();
//   console.log("text => ", text);
//   if (text === '') return;
  
//   displayPost(text);
  
//   // Enregistrer le message dans le stockage local
//   const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
//   console.log("SavedPosts => ", savedPosts);
//   savedPosts.push(text);
//   console.log("SavedPosts => ", savedPosts);
//   localStorage.setItem('posts', JSON.stringify(savedPosts));
  
//   // Réinitialiser le champ de texte après la publication
//   postText.value = '';
// });


/********** End test Nouveau div****************** */

const postForm = document.getElementById('post-form');
    const postText = document.getElementById('post-text');
    const postsSection = document.getElementById('posts');

    // Chargement des messages sauvegardés dans le stockage local lors du chargement de la page
    document.addEventListener('DOMContentLoaded', function() {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.forEach(post => {
            displayPost(post);
        });
    });

    // Fonction pour afficher un message sur la page
    function displayPost(text) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = text;
        postsSection.appendChild(postElement);
    }

    // Ajouter un événement de soumission au formulaire de publication
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const text = postText.value.trim();
        console.log("text => ", text);
        if (text === '') return;
        
        displayPost(text);
        
        // Enregistrer le message dans le stockage local
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        console.log("SavedPosts => ", savedPosts);
        savedPosts.push(text);
        console.log("SavedPosts => ", savedPosts);
        localStorage.setItem('posts', JSON.stringify(savedPosts));
        
        // Réinitialiser le champ de texte après la publication
        postText.value = '';
    });


    
   
// $('.images').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
// slick
const caroursel = document.querySelector(".caroursel"); 
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const dragStart = (e) =>{
isDragStart =true;
prevPageX=e.pageX;
prevScrollLeft= caroursel.scrollLeft ;
}
const dragging=(e) =>{
if(!isDragStart) return;
e.preventDefault();
let positionDiff =e.pageX-prevPageX;
caroursel.scrollLeft=prevScrollLeft - positionDiff;
}
const dragStop =() =>{
isDragStart = false;
}
caroursel.addEventListener("mousedown",dragStart);
caroursel.addEventListener("mousemove",dragging);
caroursel.addEventListener("mouseup",dragStop); 