const colorChangeBtn=document.getElementById("colorChangeBtn");

colorChangeBtn.addEventListener('click', ()=>{
    document.body.style.backgroundColor=getRandomColor();
})

function getRandomColor(){
    const letters="123456789Abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}