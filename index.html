/* =========================================================
   TÜRKBLOCKS
   SCRIPT
========================================================= */


/* ELEMENTLER */

const loader =
    document.getElementById("pageLoader");

const navbar =
    document.getElementById("navbar");

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const mobileToggle =
    document.getElementById("mobileToggle");

const mobileNav =
    document.getElementById("mobileNav");

const scrollTop =
    document.getElementById("scrollTop");

const year =
    document.getElementById("year");


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 450);

});


/* =========================================================
   YEAR
========================================================= */

year.textContent =
    new Date().getFullYear();


/* =========================================================
   NAVBAR
========================================================= */

function navbarScroll() {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    navbarScroll,
    { passive: true }
);

navbarScroll();


/* =========================================================
   MOBILE MENU
========================================================= */

mobileToggle.addEventListener(
    "click",
    () => {

        mobileToggle.classList.toggle("open");

        mobileNav.classList.toggle("open");

    }
);


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileToggle.classList.remove(
                    "open"
                );

                mobileNav.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "turkblocks-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeIcon.textContent = "☀";

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        const light =
            document.body.classList.contains(
                "light"
            );

        themeIcon.textContent =
            light ? "☀" : "☾";

        localStorage.setItem(
            "turkblocks-theme",
            light ? "light" : "dark"
        );

    }
);


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

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
   SCROLL TOP
========================================================= */

function updateScrollTop() {

    if (window.scrollY > 450) {

        scrollTop.classList.add(
            "visible"
        );

    } else {

        scrollTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateScrollTop,
    { passive: true }
);


scrollTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a"
    );


function updateActiveNav() {

    let current = "home";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        if (
            window.scrollY >= top
        ) {

            current =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

updateActiveNav();


/* =========================================================
   ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            mobileToggle.classList.remove(
                "open"
            );

            mobileNav.classList.remove(
                "open"
            );

        }

    }
);
