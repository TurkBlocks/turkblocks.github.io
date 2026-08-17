/* =========================================================
   TÜRKBLOCKS
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;

const navbar =
    document.getElementById("navbar");

const preloader =
    document.getElementById("preloader");

const themeButton =
    document.getElementById("themeButton");

const themeIcon =
    document.getElementById("themeIcon");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const scrollTopButton =
    document.getElementById("scrollTop");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   PAGE LOADING
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        preloader.classList.add("hidden");

    }, 500);

});


/* =========================================================
   YEAR
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVBAR SCROLL
========================================================= */

function updateNavbar() {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const isOpen =
        mobileNavigation.classList.toggle("open");

    mobileMenuButton.classList.toggle(
        "open",
        isOpen
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

}


mobileMenuButton.addEventListener(
    "click",
    toggleMobileMenu
);


/* Menü linkine tıklanınca kapat */

document
    .querySelectorAll(".mobile-navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileNavigation.classList.remove("open");

            mobileMenuButton.classList.remove("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem("turkblocks-theme");

if (savedTheme === "light") {

    body.classList.add("light-theme");

    themeIcon.textContent = "☀";

}


function updateThemeIcon() {

    if (
        body.classList.contains("light-theme")
    ) {

        themeIcon.textContent = "☀";

    } else {

        themeIcon.textContent = "☾";

    }

}


themeButton.addEventListener(
    "click",
    () => {

        body.classList.toggle("light-theme");

        const isLight =
            body.classList.contains("light-theme");

        localStorage.setItem(
            "turkblocks-theme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();

    }
);


/* =========================================================
   SCROLL TOP
========================================================= */

function updateScrollTop() {

    if (window.scrollY > 500) {

        scrollTopButton.classList.add(
            "visible"
        );

    } else {

        scrollTopButton.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateScrollTop,
    { passive: true }
);


scrollTopButton.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

                revealObserver.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".desktop-navigation .nav-link"
    );


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            mobileNavigation.classList.remove(
                "open"
            );

            mobileMenuButton.classList.remove(
                "open"
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   CLOSE MOBILE MENU OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        const clickedInsideMenu =
            mobileNavigation.contains(
                event.target
            );

        const clickedButton =
            mobileMenuButton.contains(
                event.target
            );

        if (
            !clickedInsideMenu &&
            !clickedButton
        ) {

            mobileNavigation.classList.remove(
                "open"
            );

            mobileMenuButton.classList.remove(
                "open"
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateThemeIcon();
updateScrollTop();
updateActiveNavigation();
