window.onload = () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetValue = parseInt(entry.target.getAttribute("data-target"), 10);
                let currentValue = 0;
                const progressBar = entry.target;

                const interval = setInterval(() => {
                    if (currentValue >= targetValue) {
                        clearInterval(interval);
                    } else {
                        currentValue++;
                        progressBar.value = currentValue;
                    }
                }, 1); 
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(progress => {
        observer.observe(progress);
    });

    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.style.borderColor = 'green';
            } else {
                this.style.borderColor = 'red';
            }
        });
    });    
};
