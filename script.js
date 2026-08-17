const header =
    document.querySelector(".site-header");

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const themeButton =
    document.getElementById("themeButton");

const revealElements =
    document.querySelectorAll(".reveal");

const year =
    document.getElementById("year");


/* YIL */

year.textContent =
    new Date().getFullYear();


/* HEADER */

function updateHeader() {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);

updateHeader();


/* MOBİL MENÜ */

menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("open");

    }
);


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    });


/* TEMA */

const savedTheme =
    localStorage.getItem(
        "turkblocks-theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeButton.textContent = "☀";

}


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        const isDark =
            document.body.classList.contains(
                "dark"
            );

        themeButton.textContent =
            isDark ? "☀" : "☾";

        localStorage.setItem(
            "turkblocks-theme",
            isDark ? "dark" : "light"
        );

    }
);


/* YUMUŞAK GİRİŞ ANİMASYONLARI */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
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

    observer.observe(element);

});


/* ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            mobileMenu.classList.remove(
                "open"
            );

        }

    }
);
