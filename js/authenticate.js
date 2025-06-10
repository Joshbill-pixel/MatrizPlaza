document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        const nameInput = form.querySelector("#name");
        const emailInput = form.querySelector("#email");
        const passwordInput = form.querySelector("#password");
        const addressInput = form.querySelector("#address");
        const submitButton = form.querySelector("button[type='submit']");

        // Create the error message element
        const errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.style.fontSize = "14px";
        errorMessage.style.marginTop = "10px";
        errorMessage.style.display = "none";

        // Insert error message in form (before submit button if found, otherwise at end)
        if (submitButton) {
            submitButton.parentNode.insertBefore(errorMessage, submitButton);
        } else {
            form.appendChild(errorMessage);
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let hasError = false;
            let errorText = "";

            const inputs = [nameInput, emailInput, passwordInput, addressInput].filter(Boolean);

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.border = "2px solid red";
                    hasError = true;
                } else {
                    input.style.border = "2px solid #ccc";
                }
            });

            if (emailInput) {
                const emailValue = emailInput.value.trim();
                if (
                    !emailValue.includes("@") ||
                    !emailValue.includes("gmail") ||
                    !emailValue.includes(".com")
                ) {
                    emailInput.style.border = "2px solid red";
                    errorText = "Email must include '@', 'gmail', and '.com'.";
                    hasError = true;
                }
            }

            if (hasError) {
                errorMessage.textContent = errorText || "All fields are required!";
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
                form.submit();
            }
        });

        // Reset borders on user typing
        [nameInput, emailInput, passwordInput, addressInput].filter(Boolean).forEach(input => {
            input.addEventListener("input", () => {
                input.style.border = "2px solid #ccc";
            });
        });
    });
});




// CARD CAROUSEL
document.addEventListener('DOMContentLoaded', function () {
    let multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, // Disable automatic sliding
        wrap: false, // Prevent wrapping at the end
      });

      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;

      document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });

      document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }
});

// Sort items
document.addEventListener("DOMContentLoaded", function () {
    // Handle number of items to show
    const showItemsLinks = document.querySelectorAll(".show-items a");

    showItemsLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            showItemsLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");

            const itemsToShow = this.getAttribute("data-value");
            console.log("Items to show:", itemsToShow);
            // Implement logic to update the displayed items based on 'itemsToShow'
        });
    });

    // Handle sorting
    const sortDropdown = document.getElementById("sort-options");
    sortDropdown.addEventListener("change", function () {
        const selectedSort = this.value;
        console.log("Sorting by:", selectedSort);
        // Implement logic to sort items based on 'selectedSort'
    });
});

// PRODUCT DETAILS
document.addEventListener("DOMContentLoaded", function () {
    const quantityElement = document.getElementById("quantity");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const sizeButtons = document.querySelectorAll(".size-btn");

    let quantity = 2; // Default quantity

    // Increase quantity
    increaseBtn.addEventListener("click", function () {
        quantity++;
        quantityElement.textContent = quantity;
    });

    // Decrease quantity
    decreaseBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
    
    // Size selection
    sizeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            sizeButtons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// STATE AND CITIES
const cityData = {
    "Abia": ["Umuahia", "Aba", "Ohafia", "Arochukwu", "Bende"],
    "Adamawa": ["Yola", "Mubi", "Numan", "Ganye", "Jimeta"],
    "Akwa Ibom": ["Uyo", "Eket", "Ikot Ekpene", "Oron", "Abak"],
    "Lagos": ["Ikeja", "Surulere", "Lekki", "Epe", "Badagry", "Ikorodu"],
    "Abuja": ["Garki", "Maitama", "Wuse", "Asokoro", "Gwagwalada"],
    "Kano": ["Kano City", "Sabon Gari", "Gwale", "Dala", "Fagge"],
    "Oyo": ["Ibadan", "Ogbomosho", "Oyo", "Iseyin", "Saki"],
    "Kaduna": ["Kaduna North", "Kaduna South", "Zaria", "Kafanchan", "Jema'a"],
    "Enugu": ["Enugu", "Nsukka", "Awgu", "Udi", "Oji River"],
    "Anambra": ["Awka", "Onitsha", "Nnewi", "Ekwulobia", "Aguata"],
    "Cross River": ["Calabar", "Ugep", "Obudu", "Ikom", "Ogoja"],
    "Delta": ["Asaba", "Warri", "Sapele", "Agbor", "Ughelli"],
    "Ebonyi": ["Abakaliki", "Afikpo", "Onueke", "Ezza", "Ishielu"],
    "Edo": ["Benin City", "Ekpoma", "Auchi", "Igueben", "Ubiaja"],
    "Bayelsa": ["Yenagoa", "Brass", "Ogbia", "Nembe", "Sagbama"],
    "Borno": ["Maiduguri", "Bama", "Konduga", "Gwoza", "Dikwa"],
    "Kogi": ["Lokoja", "Okene", "Idah", "Kabba", "Anyigba"],
    "Kwara": ["Ilorin", "Offa", "Omu-Aran", "Jebba", "Patigi"],
    "Ekiti": ["Ado-Ekiti", "Ikere", "Iyin", "Efon", "Emure"],
    "Nasarawa": ["Lafia", "Keffi", "Akwanga", "Nasarawa", "Doma"],
    "Niger": ["Minna", "Suleja", "Bida", "Kontagora", "Mokwa"],
    "Ogun": ["Abeokuta", "Ijebu-Ode", "Sagamu", "Ota", "Ilaro"],
    "Ondo": ["Akure", "Ondo", "Owo", "Ikare", "Okitipupa"],
    "Osun": ["Osogbo", "Ife", "Ilesa", "Ede", "Iwo"],
    "Oyo": ["Ibadan", "Ogbomosho", "Oyo", "Iseyin", "Saki"],
    "Plateau": ["Jos", "Barkin Ladi", "Pankshin", "Shendam", "Mangu"],
    "Rivers": ["Port Harcourt", "Bonny", "Eleme", "Omoku", "Degema", "Obio-Akpor"],
    "Sokoto": ["Sokoto", "Wurno", "Tambuwal", "Gwadabawa", "Illela"],
    "Taraba": ["Jalingo", "Wukari", "Gembu", "Bali", "Takum"],
    "Yobe": ["Damaturu", "Potiskum", "Gashua", "Nguru", "Geidam"],
    "Zamfara": ["Gusau", "Kaura Namoda", "Shinkafi", "Maru", "Anka"],
    "FCT": ["Garki", "Maitama", "Wuse", "Asokoro", "Gwagwalada"],
    "Bauchi": ["Bauchi", "Azare", "Misau", "Jama'are", "Darazo"],
    "Benue": ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala", "Vandeikya"],
};

function updateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;
    
    citySelect.innerHTML = '<option value="">Select City</option>';
    
    if (selectedState && cityData[selectedState]) {
        cityData[selectedState].forEach(city => {
            let option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// FLASH SALES
function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Set target end time (3 days from now)
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10);
futureDate.setHours(futureDate.getHours() + 22);
futureDate.setMinutes(futureDate.getMinutes() + 59);
futureDate.setSeconds(futureDate.getSeconds() + 60);

startCountdown(futureDate);


// PRODUCT DETAILS, KEY FEATURES AND SPECIFICATIONS
function openTab(event, tabId) {
    let i, tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Set default tab on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("productDetails").style.display = "block";
});
