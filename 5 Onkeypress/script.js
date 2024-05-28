const textInput=document.getElementById('textInput');
const charCount=document.getElementById('charCounter');

textInput.addEventListener('keypress', ()=>{
    charCount.innerText=`${textInput.value.length + 1} characters`
})