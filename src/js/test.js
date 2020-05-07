
  const start = document.getElementById("demarer");
  let sect = document.querySelectorAll(".sect");
  let question = document.querySelector(".questions");
  const next = document.getElementById("suivant");
  const back = document.getElementById("precedent");
  var conter = 0;
 var resultat = [];
  var displayResult = document.getElementById("result");
  let advance = document.getElementById("advance");
  let displayNumb = document.getElementById("displayNumb");
  let valeur = 1;
let repeat = document.getElementById("repeter")
//////////////////////// les question dans le tableau suivant
  const questions = [

    '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="reponse-inputs""> <input type="number" id="reponce1" placeholder="15 - 120" min="15" max="120"><span class="input-span">Age</span></div><br><br></br>',

'<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="reponse-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="reponse-inputs"><div> <input type="radio" name="Q10" id="Bien" value ="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" id="Assez bien"  value ="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" id="Fatigué(e)" value ="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" id="Très fatigué" value = "Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
  // '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="reponse-inputs""> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
  '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p><div  class="reponse-inputs""><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
  '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p> <div  class="reponse-inputs""><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
  '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Êtes-vous diabétique ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  ' <p class="form__question--trois">Êtes-vous enceinte ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
  '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui" class = "ajout-marg"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non" class = "ajout-marg" ><label for="Non"><span>Non</span> </label></div></div>',
];

var displaymessage = [
  ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
  `téléconsultation ou médecin généraliste ou visite à domicile  préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” 
 `,
  `appel 141 `,
  ` téléconsultation ou médecin généraliste ou visite à domicile  `,
  `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
  `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
 `,
  ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,

];
 
  
  /////// function for start test/////////////////////

  
start.addEventListener("click", () => {
sect[0].classList.add("affiche");
sect[1].classList.remove("affiche");
question.innerHTML = questions[0]; 
back.classList.add("affiche")
next.setAttribute("disabled", "disabled");

displayNumb.innerHTML = valeur + "/" + questions.length;
advanceBar(conter);
recovery();
});
//////////////////////advanceBar////////////////////
advanceBar = (e) =>{
  advance.setAttribute("value", e + 1);

};
  next.addEventListener("click", (e) =>{
  if(conter < questions.length -1){
    conter++;
    valeur ++;
  }
  ///////in the last quiz display result/////
  if(conter == questions.length -1){
    next.classList.add("affiche");
    displayResult.classList.remove("affiche");
  }
  question.innerHTML = questions[conter];
  e.preventDefault();
  back.classList.remove("affiche")

  ///// remove next ////////////////
  next.setAttribute("disabled", "disabled");
  displayNumb.innerHTML = valeur + "/" + questions.length;
  advanceBar(conter);
  recovery();

  });
   back.addEventListener("click", (e) => {
    displayResult.classList.add("affiche");
    next.classList.remove("affiche");


if(conter > 0){ 
conter--;
valeur--;
}
if(conter == 0){
  back.classList.add("affiche");
} 
question.innerHTML = questions[conter];
advanceBar(conter);
displayNumb.innerHTML = valeur + "/" + questions.length;

e.preventDefault();
recovery();
} );

recovery = () => {
 let reponse = document.querySelectorAll(".reponse-inputs input");

  for (let i = 0; i < reponse.length; i++) {
    reponse[i].addEventListener("change", () => {

        resultat.splice(conter, 1, reponse[i].value);
        suivant.removeAttribute("disabled");
   
    });
  }
};
/////////////////////////////////displayResult///////////////////////////////////////////////////
displayResult.addEventListener("click", (e) =>{
  sect[1].classList.add("affiche");
  sect[2].classList.remove("affiche");
  e.preventDefault();
  // resultFactor();
  treatmentResponse();
  Algorithme();
  resultFactor();
});
////////////////repeat test again //////
repeat.addEventListener("click", (e) => {
  sect[2].classList.add("affiche");
  sect[1].classList.remove("affiche");
conter = 0;
valeur = 1;
next.classList.remove("affiche");
back.classList.add("affiche");
displayResult.classList.add("affiche");
question.innerHTML = questions[0];
advanceBar(conter, valeur);
arrMajorFactor = [];
arrMinorFactor = [];
arrPrognosticFactor = [];
arrSymptom = [];
displayNumb.innerHTML = valeur + "/" + questions.length;

  e.preventDefault();

})
///////////////////////////////////////////AlGORITHME///////////////////////////////////////

var arrSymptom = [];
var arrPrognosticFactor = [];
var arrMinorFactor = [];
var arrMajorFactor=[];

var resultSymptom = 0;
var resultPrognostic = 0;
var resultMinor = 0;
var resultMajor = 0;


treatmentResponse = () =>{
  
  for (let i = 0; i < resultat.length; i++) {

  if (i == 0){
    arrPrognosticFactor.push(resultat[i]);
    
  }
if (i == 2){
  arrMinorFactor.push(resultat[i]);
  arrMajorFactor.push(resultat[i]);
}  else if (i >= 11 && i <= 21) {


  arrPrognosticFactor.push(resultat[i]);


  }  else if (i == 8 || i == 9) {
    arrMajorFactor.push(resultat[i]);
  } else if (i == 7 || i ==10) {
    arrMinorFactor.push(resultat[i]);
  }
  if (i >= 1 && i <= 10) {
    arrSymptom.push(resultat[i]);
  }
}
};
resultFactor = () =>{
  for (let i = 0; i <arrSymptom.length; i++){
    if (arrSymptom[i] == "Oui"){
      resultSymptom++;
    }
  }
  for (let i = 0; i < arrPrognosticFactor.length; i++){
if ( arrPrognosticFactor[i] >=70|| arrPrognosticFactor[i] == "Oui"){
resultPrognostic++;
}
  }
  for (let i=0; i<arrMinorFactor.length; i++){
    if(
      arrMinorFactor[i] >=39 ||
      arrMinorFactor[i] == "Oui" ||
      arrMinorFactor[i] == "Très fatigué" ||
      arrMinorFactor[i] == " fatigué"
    ){
      resultMinor++;
    }
  }
  for (let i =0; i<arrMajorFactor.length; i++){
    if ( arrMajorFactor[i] <= 35.4 || arrMajorFactor[i] == "Oui"){
      resultMajor++;
    }
  }
};
let lastmessage = document.getElementById("affichageResult");
Algorithme = () => {
  if (
    resultat[1] == "Oui"|| 
    (resultat[3] == "Oui" && resultat [5] == "Oui")||
    (resultat[3] == "Oui" && resultat [4] == "Oui")||
    (resultat [1] == "Oui" && resultat[6] == "Oui")

  )  {
if (arrPrognosticFactor == 0){
  if (arrMajorFactor == 0 &&
    arrMinorFactor == 0 &&
    resultat [0] < 50
    ){
      lastmessage.innerText = displaymessage[0];
    } else if (
      resultMajor == 0 && 
      resultMinor >= 1 && 
      (resultat[0] >=50 || resultat[0] <=69)
    ){
      lastmessage.innerText = displaymessage[1];
    }
}else {
  if (arrMajorFactor == 0 && arrMinorFactor <= 1){
    lastmessage.innerText = displaymessage [1];
  } else if (resultMajor == 0 && resultMinor >= 2){
    lastmessage.innerText = displaymessage[2];
  }
}
if (resultMajor >= 1){
  lastmessage.innerText = displaymessage[2];
}
  }
  else if (resultat [1] == "Oui" && resultat [3] == "Oui"){
    if (arrPrognosticFactor == 0){

      if ( arrMajorFactor == 0 && arrMinorFactor >= 1){
        lastmessage.innerText = displaymessage[3];
      }
    }else {
      if (arrMajorFactor == 0 && arrMinorFactor <= 1){
        lastmessage.innerText = displaymessage[3];
      } else if (arrMajorFactor == 0 && arrMinorFactor > 1){
        lastmessage.innerText = displaymessage[2];
      }
    }
    if (arrMajorFactor >0){
      lastmessage.innerText = displaymessage[2];
    } 
  }else if (
    resultat[1] == "Oui" ||
    resultat[3] == "Oui" ||
    resultat[4] == "Oui" ||
    resultat[5] == "Oui"
  ){
    if (resultMajor == 0 && resultMinor == 0){
      lastmessage.innerText = displaymessage[4];
    } else {
      if ( arrPrognosticFactor > 0){
        lastmessage.innerText = displaymessage[4] + " " + displaymessage[2];
      }
    }
  } else if (arrSymptom == 0){
    lastmessage.innerText = displaymessage[5];
  } else if (resultat[0] <15){
    lastmessage.innerText = displaymessage[6];


  }
};
//   for (let i = 0; i < arrSymptom.length; i++ ){
//     if (
//       arrSymptom[i] == "Oui")
 
//     resultSymptom++;
//   }
//   for (let i = 0; i < arrSymptom.length; i++ ){
//     if(
//       arrPrognosticFactor[i]  >= 70 || arrPrognosticFactor[i] == "Oui";
//     )
//     resultPrognostic++;
//   }
//   for ( let i = 0; i < arrMajorFactor; i++){
//     if ( arrMajorFactor[i] == "Oui"){
//       resultMajor++;
//     }
//     for( let i = 0; i < arrMinorFactor; i++){
//       if ( arrMinorFactor[i] == "Très fatigué" ||arrMinorFactor[i] == "fatigué"){
//         resultMinor++;
//       }
//     }
//   //   // if (tabfacteurMajeur[i] <= 35.4 || tabfacteurMajeur[i] == "Oui") {

//   // }
// };

// MessageDisplayed = [
//   ` nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. `,
//   `téléconsultation ou médecin généraliste ou visite à domicile  préciser “appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.” 
//  `,
//   `appel 141 `,
//   ` téléconsultation ou médecin généraliste ou visite à domicile  `,
//   `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute`,
//   `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil. 
//  `,
//   ` Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. `,
// ];

