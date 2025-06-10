// IMAGE CAROUSEL
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-image");
    const indicators = document.querySelectorAll(".indicator");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Auto-play functionality
    let autoplay = setInterval(nextImage, 5000); // Change image every 5 seconds

    // Event listeners
    nextButton.addEventListener("click", () => {
        clearInterval(autoplay);
        nextImage();
    });

    prevButton.addEventListener("click", () => {
        clearInterval(autoplay);
        prevImage();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            clearInterval(autoplay);
            currentIndex = index;
            showImage(index);
        });
    });
});

let index = 0;
const visibleCards = 4;
const carousel = document.getElementById('carousel_cards');
const totalCards = document.querySelectorAll('.carousel-card').length;

const maxIndex = Math.floor((totalCards - 1) / visibleCards) - 1; 

function moveCarousel(direction) {
    index += direction;

    // Prevent going beyond limits
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    // Move by 5 cards at a time
    const moveDistance = index * (100 / visibleCards) * visibleCards;
    carousel.style.transform = `translateX(-${moveDistance}%)`;

    // Enable/Disable buttons at the limits
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === maxIndex;
}

// Initial button state
document.getElementById('prevBtn').disabled = true;

// // FLASH SALES
// function startCountdown(targetDate) {
//     function updateCountdown() {
//         const now = new Date().getTime();
//         const timeLeft = targetDate - now;

//         if (timeLeft <= 0) {
//             document.getElementById("days").innerText = "00";
//             document.getElementById("hours").innerText = "00";
//             document.getElementById("minutes").innerText = "00";
//             document.getElementById("seconds").innerText = "00";
//             clearInterval(countdownInterval);
//             return;
//         }

//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         document.getElementById("days").innerText = String(days).padStart(2, '0');
//         document.getElementById("hours").innerText = String(hours).padStart(2, '0');
//         document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
//         document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
//     }

//     updateCountdown();
//     const countdownInterval = setInterval(updateCountdown, 1000);
// }

// // Set target end time (3 days from now)
// const futureDate = new Date();
// futureDate.setDate(futureDate.getDate() + 10);
// futureDate.setHours(futureDate.getHours() + 22);
// futureDate.setMinutes(futureDate.getMinutes() + 59);
// futureDate.setSeconds(futureDate.getSeconds() + 60);

// startCountdown(futureDate);

// // FAQ 
// document.querySelectorAll('.faq-question').forEach((question) => {
//     question.addEventListener('click', () => {
//         const faqItem = question.parentElement;

//         // Close all other FAQ items (optional behavior)
//         document.querySelectorAll('.faq-item').forEach((item) => {
//             if (item !== faqItem) {
//                 item.classList.remove('active');
//             }
//         });

//         // Toggle current FAQ item
//         faqItem.classList.toggle('active');
//     });
// });


