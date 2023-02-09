const userAlert = document.getElementById('monBouton');
const ul = document.getElementById('maListe'); 

userAlert.addEventListener('click', function () {
    // alert("Salut ca farte")
    p.textContent = 'Je suis un paragraphe modifié';
    let li = document.createElement('li');
    li.textContent = 'Nouvel Element';
    ul.appendChild(li);
})

const p = document.getElementById('monParagraphe');

p.addEventListener('mouseover', function () {
    p.style.fontSize = '20px';
    p.style.color = 'blue';
})
