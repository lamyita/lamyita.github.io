
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

//////////////////////// les question dans le tableau suivant
  const questions = [

'<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="reponse-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
  '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="reponse-inputs"><div> <input type="radio" name="Q10" id="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" id="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" id="Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
  '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="reponse-inputs""> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
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
  ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="reponse-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
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

}
if(conter == 0){
  back.classList.add("affiche");
} 
question.innerHTML = questions[conter];
advanceBar(conter);

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
//////////////displayResult///////////////
displayResult.addEventListener("click", (e) =>{
  sect[1].classList.add("affiche");
  sect[2].classList.remove("affiche");
  e.preventDefault();
});