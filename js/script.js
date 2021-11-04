

// creiamo il nostro array di oggetti
// elementi dell'array:
    //   img
    //   titolo
    //   info
// creiamo un ciclo for dell'array
// stampiamo la card a schermo

const arrPeople = [
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO'
    }
    
       

]

console.log(arrPeople);

const teamCard = document.querySelector('.team-card');

console.log(teamCard);

for( let i = 0; i < arrPeople.length; i++){
    const people = arrPeople[i];
    console.log(people);

}
let html = '';
for( let i in arrPeople){
    html += `div${arrPeople[i]}`;
}
teamCard.innerHTML = html;
