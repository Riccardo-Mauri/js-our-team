const container = document.getElementById('Member-info-container');
//creo un array di oggetti per inserire i dati del Team
const OurTeam = 
[
    {
        //prima persona 
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        image : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        //seconda persona 
        name : 'Angela Caroll',
        role : 'Chief Editor',
        image : 'angela-caroll-chief-editor.jpg'
    },
    {
        //terza persona 
        name : 'Walter Gordon',
        role : 'Office Manager',
        image : 'walter-gordon-office-manager.jpg'
    },
    {
        //quarta persona 
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        image : 'angela-lopez-social-media-manager.jpg'
    },
    {
        //quinta persona 
        name : 'Scott Estrada',
        role : 'Developer',
        image : 'scott-estrada-developer.jpg'
    },
    {
        //sesta persona 
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        image : 'barbara-ramos-graphic-designer.jpg'
    }
];
//stampo in console i membri del team con nome/ruolo/immagine E li inserisco nel HTML/DOM
OurTeam.forEach(function(membri) {
    console.log("Name: " + membri.name + ", Role: " + membri.role + ", Image: " + membri.image);
    memberInfo = document.createElement('p');
    memberInfo.textContent = "Name: " + membri.name + ", Role: " + membri.role + ", Image: " + membri.image;
    container.appendChild(memberInfo);
});
