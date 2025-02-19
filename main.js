// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Loader Animation Timeline
const loaderTimeline = gsap.timeline();

// Initial loading animation
window.addEventListener('load', () => {
    // Animate letters
    const letters = document.querySelectorAll('.letter');
    
    loaderTimeline
        // Animate each letter
        .to(letters, {
            duration: 0.8,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "back.out(1.7)"
        })
        // Animate the line
        .to('.loader-line', {
            duration: 1.5,
            width: '100%',
            ease: "power4.inOut"
        }, "-=0.5")
        // Hold the animation
        .to({}, {
            duration: 1
        })
        // Fade out loader
        .to('.loader-wrapper', {
            duration: 1,
            opacity: 0,
            scale: 0.9,
            ease: "power2.inOut",
            onComplete: () => {
                document.body.classList.remove('loading');
                document.querySelector('.loader-wrapper').style.display = 'none';
            }
        })
        // Fade in main content
        .fromTo('.main-content', 
            {
                opacity: 0,
                visibility: 'visible',
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }
        );

    // Animate titles with a custom effect
    const titles = document.querySelectorAll('.animate-title');
    titles.forEach((title, index) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1.2,
            opacity: 0,
            y: 100,
            rotationX: -45,
            transformOrigin: "0% 50% -50",
            ease: "power4.out",
            delay: index * 0.2
        });
    });

    // Animate regular text elements
    const animateTexts = document.querySelectorAll('.animate-text');
    animateTexts.forEach((text, index) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            opacity: 0,
            y: 30,
            ease: "power3.out",
            delay: index * 0.1
        });
    });

    // Main content animations
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });

    // Form animations with staggered reveal
    const formElements = document.querySelectorAll('.form-group');
    gsap.from(formElements, {
        scrollTrigger: {
            trigger: "#duty-form",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('duty-form');
    const formContainer = document.querySelector('.form-container');
    const successMessage = document.querySelector('.success-message');
    const dismissBtn = document.querySelector('.dismiss-btn');
    const emailInput = document.querySelector('input[type="email"]');
    const submittedEmail = document.querySelector('.submitted-email');

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message and hide form
        formContainer.classList.add('hide');
        successMessage.classList.remove('hide');
        submittedEmail.textContent = emailInput.value;
    });

    // Dismiss button
    dismissBtn.addEventListener('click', function() {
        // Hide success message and show form
        formContainer.classList.remove('hide');
        successMessage.classList.add('hide');
        form.reset();
    });
});

