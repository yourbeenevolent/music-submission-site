document.getElementById('music-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ranking = document.getElementById('ranking').value;
    const feedback = document.getElementById('feedback');
    const shakeEffect = document.body;  // Apply the shake effect to the whole body
    
    // Handle the screen shake effect based on ranking
    if (ranking >= 1 && ranking <= 10) {
        const shakeIntensity = ranking / 10;  // Intensity is scaled from 0 to 1
        
        // Apply a shake effect proportional to the ranking
        if (shakeIntensity > 0) {
            shakeEffect.classList.add('shake');
        }
        
        // Show feedback
        feedback.innerHTML = `<p>Your track has been submitted and ranked a ${ranking}!</p>`;
        
        // Reset animation after it completes
        setTimeout(() => {
            shakeEffect.classList.remove('shake');
        }, 500);  // Match this duration to the animation time
    }
});
