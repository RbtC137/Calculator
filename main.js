let fomulaStr = "";
let result = 0;
const formulaArea = document.querySelector(".formula");
const resultArea = document.querySelector(".result");


const panelButtons = document.querySelectorAll(".panel-buttons")
reset();

panelButtons.forEach((e) => {
    e.addEventListener("click",calculateString);
})


function calculateString(){
    // console.log(this.innerText);
    const str = this.innerText;
    if(str === "="){
        fomulaStr = fomulaStr.replaceAll("X","*");
        fomulaStr = fomulaStr.replaceAll("÷","/");
        console.log(fomulaStr);
        result = eval(fomulaStr);
        resultArea.innerText=result??0;
    }else if (str === "C"){
        reset();
    }else{
        fomulaStr += this.innerText;
    }
    displayFormula();
}


function displayFormula() {
    formulaArea.innerText = fomulaStr;
}

function reset() {
    fomulaStr = "";
    result = 0;
    resultArea.innerText = result;
    displayFormula();
}