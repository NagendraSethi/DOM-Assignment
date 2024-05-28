const tooltipButton = document.getElementById('tooltipBtn');
const tooltip = document.getElementById('tooltip');

tooltipButton.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

tooltipButton.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});
