const image=document.getElementById('image');

image.addEventListener('mouseover',()=>{
    image.style.trasform='scale(1.2)';
})
image.addEventListener('mouseout',()=>{
    image.style.trasform='scale(1)';
})