// ex 1
let btn = document.querySelector(".bnt");
let inp = document.querySelector(".inpt");
let ps = document.querySelector(".ps");
btn.addEventListener("click", () => {
  let inpt = inp.value;

  switch (inpt) {
    case "Понеділок":
      ps.textContent = "Понеділок";
      break;
    case "Вівторок":
      ps.textContent = "Вівторок";
      break;
    case "Середа":
      ps.textContent = "Середа";
      break;
    case "Четвер":
      ps.textContent = "Четвер";
      break;
    case "П'ятниця":
      ps.textContent = "П'ятниця";
      break;
  }
});
// ex 3
let bt = document.querySelector(".bt");
let ip = document.querySelector(".ip");
let d = document.querySelector(".d");
btn.addEventListener("click", () => {
  let ipt = ip.value;

  switch (ipt) {
    case "Вересень" || "Жовтень" || "Листопад":
      d.textContent = "Пора року - Осінь";
      break;
    case "Січень" || "Лютий" || "Грудень":
      d.textContent = "Пора року - Зима";
      break;
    case "Березень" || "Квітень" || "Травень":
      d.textContent = "Пора року - Весна";
      break;
    case "Червень" || "Липень" || "Серпень":
     d.textContent = "Пора року - Літо";
      break;
  }
});

// ex 4
let b = document.querySelector(".b");
let ind = document.querySelector(".in");
let h1 = document.querySelector(".s");
b.addEventListener("click", () => {
  let input = ind.value;
  switch (input) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      h1.textContent = '31';
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      h1.textContent = '30';
      break;
    case 1:
        h1.textContent = '28/29';
      break;
  }
});

// ex 5
let Btn = document.querySelector(".Btn");
let Inpt = document.querySelector(".Inpt");
let p = document.querySelector(".P");
Btn.addEventListener("click", () => {
    let inpt = Inpt.value;
  
    switch (inpt) {
      case "Червоний":
        p.textContent = "Червоний - Стоп!";
        break;
      case "Зелений":
        p.textContent = "Зелений - Йти!";
        break;
      case "Жовтий":
        p.textContent = "Жовтий - Чекати!";
        break;
    }
  });

// ex 6
let div = document.querySelector(".BtnDivide");
let mult = document.querySelector(".BtnMult");
let sub = document.querySelector(".BtnMin");
let sum = document.querySelector(".BtnSumma");

let inpA = document.querySelector(".InpA");
let inpB = document.querySelector(".InpB");

function Operate(A,B,Operator){
  switch(Operator){
    case "/":
      if(B == 0){
        return "Can't divide by Zero";
      }else{
        return A / B;
      }
      break;

    case "+":
      return A + B;
      break;
    case "-":
      return A - B;
      break;
    case "*":
      return A * B;
      break;
  };
}

div.addEventListener("click", () => 
alert(Operate(inpA.value, inpB.value,"/"))
)

sum.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "+"))
);

sub.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "-"))
);

mult.addEventListener("click", () =>
  alert(Operate(inpA.value, inpB.value, "*"))
);