//Javascript code for the calculator app

const output= document.querySelector('#output');
const btns= document.querySelectorAll('.btn');

for (let i=0;i<btns.length;i++){
    btns[i].addEventListener('click', handleClick);
}

function handleClick(){
    const text= this.innerText;
    if (text === "AC"){
        output.innerText= '';
        return;
    }
    if (text === "DEL"){
        output.innerText= output.innerText.slice(0,-1);
        return;
    }
    if (text === "="){
        output.innerText= eval(output.innerText);
        return;
    }
    output.innerText= output.innerText+text;
    return;
}