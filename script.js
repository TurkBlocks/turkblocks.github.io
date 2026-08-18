document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    function openMenu() {
        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.add("active");
        mobileMenu.classList.add("open");

        menuToggle.setAttribute("aria-expanded", "true");
        mobileMenu.setAttribute("aria-hidden", "false");

        document.body.classList.add("menu-open");
    }


    function closeMenu() {
        if (!menuToggle || !mobileMenu) return;

        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");

        document.body.classList.remove("menu-open");
    }


    function toggleMenu() {
        if (!mobileMenu) return;

        if (mobileMenu.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    /* =====================================================
       MENU BUTTON
       ===================================================== */

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }


    /* =====================================================
       CLOSE AFTER CLICKING A MOBILE LINK
       ===================================================== */

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener("click", event => {

        if (!mobileMenu || !menuToggle) return;

        const menuIsOpen = mobileMenu.classList.contains("open");

        if (!menuIsOpen) return;

        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            closeMenu();
        }

    });


    /* =====================================================
       DESKTOP'TA MENÜYÜ TEMİZLE
       ===================================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 950) {
            closeMenu();
        }

    });


    /* =====================================================
       ANCHOR LINKS
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE SECTION
       ===================================================== */

    const sections = document.querySelectorAll("main section[id]");

    const desktopLinks = document.querySelectorAll(
        '.main-nav a[href^="#"]'
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const id = entry.target.getAttribute("id");

                    desktopLinks.forEach(link => {

                        const linkTarget =
                            link.getAttribute("href");

                        link.classList.toggle(
                            "active",
                            linkTarget === `#${id}`
                        );

                    });

                });

            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0
            }
        );


        sections.forEach(section => {
            observer.observe(section);
        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });


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
       PAGE READY
       ===================================================== */

    document.documentElement.classList.add("js-ready");

});
