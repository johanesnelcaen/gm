let currentStep = 1;
const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const formSteps = document.querySelectorAll('.form-step');

function updateProgress() {
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
            step.classList.add('completed');
        } else {
            step.classList.remove('active');
            step.classList.remove('completed');
        }
    });

    const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progressPercent}%`;

    formSteps.forEach((formStep, index) => {
        if (index === currentStep - 1) {
            formStep.classList.add('active');
        } else {
            formStep.classList.remove('active');
        }
    });
}

function moveStep(step) {
    currentStep += step;
    if (currentStep < 1) {
        currentStep = 1;
    } else if (currentStep > steps.length) {
        currentStep = steps.length;
    }
    updateProgress();
}

updateProgress();

document.getElementById('multi-step-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animation de soumission
    this.style.opacity = '0';
    this.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        this.innerHTML = '<p>Merci pour votre soumission !</p>';
        this.style.opacity = '1';
    }, 500);
});
