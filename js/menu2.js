const hamburger = document.getElementById('hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navbarLinks.classList.toggle('active');
    navbarLinks.style.transition = 'transform 0.5s ease-in-out';
});


const closeBtn = document.querySelector('.menu-close');

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navbarLinks.classList.remove('active');
    hamburger.classList.remove('active');
});

// FAQ 
document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Close all other FAQ items (optional behavior)
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Toggle current FAQ item
        faqItem.classList.toggle('active');
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const toggleBtn = document.querySelectorAll(".dropdown-toggle");
//     const dropdownMenu = document.querySelectorAll(".dropdown-menu");

//     toggleBtn.addEventListener("click", function () {
//         dropdownMenu.classList.toggle("show");
//     });

//     // Close dropdown if clicked outside
//     document.addEventListener("click", function (event) {
//         if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
//             dropdownMenu.classList.remove("show");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".user-dropdown");

    dropdowns.forEach(dropdown => {
        const toggleBtn = dropdown.querySelector(".dropdown-toggle");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        // Toggle dropdown on button click
        toggleBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent bubbling
            dropdownMenu.classList.toggle("show");

            // Close all other open dropdowns
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove("show");
                }
            });
        });

        // Close if clicking outside
        document.addEventListener("click", function (event) {
            if (!dropdown.contains(event.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    // Select all product images inside product cards
    const productImages = document.querySelectorAll(".product-card img");

    // Loop through each product image and add event listener
    productImages.forEach((image) => {
        image.addEventListener("click", function () {
            window.location.href = "web/product_details_user.html";
        });
    });
});
