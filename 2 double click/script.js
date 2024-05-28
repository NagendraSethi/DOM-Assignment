const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('dblclick', () => {
    if (toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
    } else {
        toggleText.style.display = 'none';
    }
});
