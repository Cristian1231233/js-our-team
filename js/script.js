

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
        foto: 'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor'
    },
    {
        foto: 'img/walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager'
    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager'
    },
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Scott Extrada',
        ruolo: 'Developer'
    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer'
    },
    
       

]



const teamContainer = document.querySelector('.team-container');
//const cardImg = document.querySelector('.card-image');

let html = '';
for( let i = 0; i < arrPeople.length; i++){
    const people = arrPeople[i];
    console.log(people);
    html += `
    <div class="team-card">
        <div class="card-image">
            <img
            src="${people.foto}"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${people.nome}</h3>
            <p>${people.ruolo}</p>
        </div>
    </div>
    `;
}

teamContainer.innerHTML = html;
