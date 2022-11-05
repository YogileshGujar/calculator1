let a;
let main = () => {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  let operator = document.getElementById("operator").value;

  // let input1 =""
  // let input2 =5
  // let operator ="-";

 console.log(input1);
   
  

  let add = () => {
    a = input1 + input2;
    document.getElementById("result").innerText = a;
  };

  let sub = () => {
    a = input1 - input2;
    document.getElementById("result").innerText = a;
  };

  let mul = () => {
    a = input1 * input2;
    document.getElementById("result").innerText = a;
  };

  let div = () => {
    a = input1 / input2;
    document.getElementById("result").innerText = a;
  };

  let mod = () => {
    a = input1 % input2;
    document.getElementById("result").innerText = a;
  };

  if(isNaN(input1)|| isNaN(input2)|| operator==""){
    let b="Please follow Instructions";
    document.getElementById("result").innerText = b;
    return;
  }

  if (operator == "+") {
    document.getElementById("result").style.backgroundColor=" #348003";
    document.getElementById("result").style.color="white";
    add();
  } else if (operator == "-") {
    document.getElementById("result").style.backgroundColor=" #348003";
    document.getElementById("result").style.color="white";
    sub();
  } else if (operator == "*") {
    mul();
    document.getElementById("result").style.backgroundColor=" #348003";
    document.getElementById("result").style.color="white";
  } else if (operator == "/") {
    document.getElementById("result").style.backgroundColor=" #348003";
    document.getElementById("result").style.color="white";
    div();
  } else if (operator == "%") {
    document.getElementById("result").style.backgroundColor=" #348003";
    document.getElementById("result").style.color="white";
    mod();
  }

};

document.getElementById("cal").addEventListener("click", main);
// main();

let clear = () => {
  let input1 = (document.getElementById("input1").value = "");
  let input2 = (document.getElementById("input2").value = "");
  let operator = (document.getElementById("operator").value = "");
  let result=document.getElementById("result").innerText ="";
  if(result==""){
    document.getElementById("result").innerText ="You can use mi Again 'Thanks'";
    document.getElementById("result").style.backgroundColor="white";
    document.getElementById("result").style.color=" #348003";
  }
};

document.getElementById("clear").addEventListener("click", clear);
