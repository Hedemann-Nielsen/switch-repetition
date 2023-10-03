


   // Opgave 1. 
//Lav et program, der tager et tal som input fra brugeren og bruger en switch-sætning til at vise en besked baseret på tallet. For eksempel, hvis brugeren indtaster 1, skal programmet vise "Du indtastede ét", hvis brugeren indtaster 2, skal programmet vise "Du indtastede to", og så videre. 
const talIndput = document.getElementById("talIndput");
const showElement = document.getElementById("showNumber");
const sendButn = document.getElementById("Send");


sendButn.addEventListener("click", () => {
    let number = talIndput.value;
    
    
  switch (number) {
     case "1":
        showElement.innerText = `Du indtastede Et.`
        console.log(`Du indtastede Et.`);
         break;
     case "2":
        showElement.innerText = `Du indtastede To.`

        console.log(`Du indtastede To`);
        break;
     case "3":
        showElement.innerText = `Du indtastede Tre.`

            console.log(`Du indtastede Tre`);  
        break;
    case "4":
        showElement.innerText = `Du indtastede Fire.`

          console.log(`Du indtastede Fire`);  
       break;
    case "5":
        showElement.innerText = `Du indtastede Fem.`

            console.log(`Du indtastede Fem`);  
       break;
     default:
      showElement.innerText = `Du har ikke indtastet et tal imellem 1 og 5.`

       console.log(`Du har ikke indtastet et tal imellem 1 og 5`);
 }
 
});

// Opgave 2. 
//Skriv et program, der tager en streng som input fra brugeren og bruger en switch-sætning til at kontrollere, om strengen repræsenterer en hverdag eller en weekenddag. Hvis brugeren indtaster "Mandag", "Tirsdag", "Onsdag", "Torsdag" eller "Fredag", skal programmet vise "Det er en hverdag". Hvis brugeren indtaster "Lørdag" eller "Søndag", skal programmet vise "Det er en weekenddag".
const inputTekst = document.getElementById("skrivEnDag");
const ugeValgBtn = document.getElementById("SendDag");
const udskrivDag = document.getElementById("showDay");
ugeValgBtn.addEventListener("click", () => {
    //  let expr = 'Papayas';
    let ugedag = inputTekst.value
 switch (ugedag) {
   
   case 'Mandag':
   case 'Tirsdag':
   case 'Onsdag':
   case 'Torsdag':
   case 'Fredag': 
     console.log('Du har valgt en hverdag');
     udskrivDag.innerText = "Du har valgt en hverdag"
     break;
   case 'Lørdag':
   case 'Søndag':
     console.log('Du har valgt en weekenddag');
     udskrivDag.innerText = "Du har valgt en weekenddag"

     break;
   default:
    udskrivDag.innerText = "Du har ikke skrevet en gyldig uge dag"

     console.log(`Du har ikke skrevet en gyldig uge dag`);
 }
});

// Opgave 3 - ekstra opgave
// udskiv et billede i af den valgte bil i dommen
const biler = document.getElementById('cars');

biler.addEventListener("change", () => {
    
    let value = biler.value;
    //biler.value;
    switch (value) {
    case "volvo":
        createVolvo();
        break;
    case "saab":
        createSaab();
        break;
    case "fiat":
        createFiat();
        break;
    case "audi":
        createAudi();
        break;

    default:
        console.log(`Du har ikke valgt en bil`);
    }

    });
    
    const showTheCar = document.getElementById('showCar');


    function createVolvo() {
        clearShowCar();
        let volvoImage = document.createElement('img');
        volvoImage.src = "./assets/images/volvo.jpg";
        volvoImage.style.width = "50%";
        volvoImage.style.height = "50%"
        showCar.appendChild(volvoImage);
}

function createSaab() {
    clearShowCar();
    let saabImage = document.createElement('img');
    saabImage.src = "./assets/images/saab.jpg";
    saabImage.style.width = "50%";
    saabImage.style.height = "50%";

    showCar.appendChild(saabImage);
}

function createFiat() {
    clearShowCar();
    let fiatImage = document.createElement('img');
    fiatImage.src = "./assets/images/fiat.jpg";
    fiatImage.style.width = "50%";
    fiatImage.style.height = "50%";

    showCar.appendChild(fiatImage);
}

function createAudi() {
    clearShowCar();
    let audiImage = document.createElement('img');
    audiImage.src = "../assets/images/audi.jpg";
    audiImage.style.width = "50%";
    audiImage.style.height = "50%";
    showCar.appendChild(audiImage);
}

function clearShowCar() {
    showTheCar.innerText="";
}