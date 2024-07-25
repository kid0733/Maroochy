window.onload = function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#heroSubtitle", {
        duration: 2,
        ease: "power1.in",
        y: 200,
        opacity: 0,
        scale: 0.5,
    });

    gsap.from("#heroTitle", {
        duration: 1,
        ease: "power2.in",
        opacity: 0,
        scale: 0.8,
        delay: 1.8,
    });

    gsap.to(".scroll-svg", {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "power1.inOut",
        scale: 0.8,
        yoyo: true,

    });

    gsap.from("#steps", {
        scale: 0.8,
        opacity:0,
        ease: "power7.in",
        scrollTrigger: {
            trigger: "#introText",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1
    });

    gsap.from("#introText", {
        scale: 0.8,
        opacity:0,
        ease: "power7.in",
        delay: 0.5,
        scrollTrigger: {
            trigger: "#introText",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1
    });
    gsap.from("#infoText", {
        scale: 0.8,
        opacity:0,
        ease: "power7.in",
        delay: 0.5,
        scrollTrigger: {
            trigger: "#infoText",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1
    });

    gsap.from("#roomCarousel", {
        scale: 0.8,
        opacity:0,
        ease: "power7.in",
        delay: 0.5,
        scrollTrigger: {
            trigger: "#roomCarousel",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        duration: 1
    });

    ScrollTrigger.create({
        start: "top top",
        onUpdate: (self) => {
            if (self.scroll() > 500) {
                gsap.to(".nav-container", {
                    backgroundColor: "rgba(4, 71, 80, 1)",
                    duration: 0.3,
                });
            } else {
                gsap.to(".nav-container", {
                    backgroundColor: "rgba(4, 71, 80, 0.2)",
                    duration: 0.3,
                });
            }
        }
    });
};

function toggleNav() {
    const navItems = document.querySelector('.nav-items');
    navItems.classList.toggle('show');
}

// Carousel

document.addEventListener('DOMContentLoaded', () => {
    const roomIntroSliderInner = document.querySelector('.room-intro-slider-inner');
    const items = document.querySelectorAll('.room-intro-slider-item');
    const prevButton = document.getElementById('room_intro_prev');
    const nextButton = document.getElementById('room_intro_next');
    let currentIndex = 0;

    const updateRoomIntroSlider = () => {
        const itemWidth = items[0].clientWidth;
        const offset = -currentIndex * itemWidth;
        roomIntroSliderInner.style.transform = `translateX(${offset}px)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        updateRoomIntroSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        updateRoomIntroSlider();
    });

    window.addEventListener('resize', updateRoomIntroSlider);
    updateRoomIntroSlider();
});
