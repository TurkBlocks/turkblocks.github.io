document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    const year = document.getElementById("year");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    function openMenu() {

        if (!menuButton || !mobileMenu) {
            return;
        }

        menuButton.classList.add("active");
        mobileMenu.classList.add("open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        document.body.classList.add("menu-open");
    }


    function closeMenu() {

        if (!menuButton || !mobileMenu) {
            return;
        }

        menuButton.classList.remove("active");
        mobileMenu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");
    }


    function toggleMenu() {

        if (!mobileMenu) {
            return;
        }

        if (mobileMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }

    }


    /* =====================================================
       MENU BUTTON
       ===================================================== */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            toggleMenu
        );

    }


    /* =====================================================
       MOBILE LINKS
       ===================================================== */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                closeMenu();
            }

        }
    );


    /* =====================================================
       CLICK OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (!mobileMenu || !menuButton) {
                return;
            }

            if (!mobileMenu.classList.contains("open")) {
                return;
            }

            const insideMenu =
                mobileMenu.contains(event.target);

            const insideButton =
                menuButton.contains(event.target);

            if (!insideMenu && !insideButton) {
                closeMenu();
            }

        }
    );


    /* =====================================================
       WINDOW RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (window.innerWidth > 1000) {
                closeMenu();
            }

        }
    );


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }


    /* =====================================================
       EXTERNAL LINKS
       ===================================================== */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(link => {

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    });


    /* =====================================================
       ESCAPE HASH JUMP
       ===================================================== */

    if (window.location.hash) {

        window.setTimeout(() => {

            const target =
                document.querySelector(
                    window.location.hash
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }, 100);

    }

});
