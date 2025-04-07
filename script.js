document.getElementById('music-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ranking = document.getElementById('ranking').value;
    const feedback = document.getElementById('feedback');
    const shakeEffect = document.body;

    if (ranking >= 1 && ranking <= 10) {
        const shakeIntensity = ranking / 10;
        
        if (shakeIntensity > 0) {
            shakeEffect.classList.add('shake');
        }

        feedback.innerHTML = `<p>Your track has been submitted and ranked a ${ranking}!</p>`;
        
        setTimeout(() => {
            shakeEffect.classList.remove('shake');
        }, 500);
    }
});
