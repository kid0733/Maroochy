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
        duration: 15,
        repeat: -1,
        ease: "power1.in",
        scale: 0.8,
        opacity: 0.3,
    });
    
    gsap.from("#steps", {
        scale: 0.8,
        opacity:0,
        ease: "power7.in",
        scrollTrigger: {
            trigger: "#introText",
            start: "top 90%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
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
            start: "top 90%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
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
            start: "top 90%", // when the top of the element is 80% from the top of the viewport
            end: "bottom 20%", // when the bottom of the element is 20% from the top of the viewport
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


//ROOM CAROUSEL

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