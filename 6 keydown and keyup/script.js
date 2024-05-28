const keyLoggerInput = document.getElementById('keyLoggerInput');
const logOutput = document.getElementById('logOutput');

keyLoggerInput.addEventListener('keydown',(event)=>{
    logOutput.textContent +=`key down: ${event.key}\n`
})
keyLoggerInput.addEventListener('keyup',(event)=>{
    logOutput.textContent +=`key up: ${event.key}\n`
})