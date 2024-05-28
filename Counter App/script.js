const decreBtn = document.getElementById("decrement_btn");
const increBtn = document.getElementById("increment_btn");
const displayValue = document.getElementById("display_value");
const resetBtn = document.getElementById("reset_btn");

decreBtn.addEventListener("click",()=>{
    const value=Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText=value-1;
    }else{
        alert("Negative value not allowed");
    }
});

increBtn.addEventListener("click",()=>{
    let value=Number(displayValue.innerText);
    if(value>=10){
        alert("10+ vlaue is not allowed!")
    }else{
        displayValue.innerText=value+1;
        console.log(value);
    }
});

resetBtn.addEventListener("click", ()=>{
    displayValue.innerText=0;
})