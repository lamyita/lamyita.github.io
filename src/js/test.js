
  const start = document.getElementById("demarer");
  let sect = document.querySelectorAll(".sect");
  let quistion = document.querySelector(".quistions");
  const next = document.getElementById("suivant");
  const back = document.getElementById("precedent");
var conter = 0;
  
  /////// function for start test/////////////////////

  start.addEventListener("click", () => {
    sect[0].classList.add("affiche");
sect[1].classList.remove("affiche");
quistion.innerHTML =questions[0];
  });
  next.addEventListener("click", (e) =>{
  if(conter <questions.length -1){
    conter++;
  }
  question.innerHTML =questions[conter];
  e.preventDefault();
  });
  const questions = [
    `<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>
      <div class="answer-inputs">
        <div>
            <input type="radio" name="Q1"  id="Oui" value="Oui">
            <label for="Oui"><span>Oui</span> </label>
        </div>
        <div>
            <input type="radio" name="Q1" id="Non" value="Non">
            <label for="Non"><span>Non</span> </label>
        </div>
      </div>`,
    `<p class="form__question--c">Quelle est votre température corporelle ?</p>
    <div class="answer-inputs">
      <input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42">
      <span class="input-span">degrés</span></div>
    
  `,
    `<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p>
    <div class="answer-inputs">
      <div>
           <input type="radio" name="Q1"  id="Oui" value ="Oui">
           <label for="Oui"><span>Oui</span> </label>
      </div>
      <div>
           <input type="radio" name="Q1"  id="Non" value="Non"><label for="Non"><span>Non</span> </label>
      </div>
    </div>`,
  ];
  
  


  
