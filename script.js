"use strict";

/* ==================================================
   TÜRKBLOCKS - SCRIPT
   ================================================== */


/* ==================================================
   ELEMENTLER
   ================================================== */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const yearElement = document.querySelector("#year");


/* ==================================================
   MOBİL MENÜ
   ================================================== */

function openMenu() {

    if (!menuButton || !mobileMenu) {
        return;
    }

    mobileMenu.classList.add("open");

    menuButton.classList.add("active");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü kapat"
    );
}


function closeMenu() {

    if (!menuButton || !mobileMenu) {
        return;
    }

    mobileMenu.classList.remove("open");

    menuButton.classList.remove("active");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü aç"
    );
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


/* ==================================================
   MENÜ BUTONU
   ================================================== */

if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMenu
    );

}


/* ==================================================
   MOBİL MENÜ LİNKLERİ
   ================================================== */

mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            closeMenu();

        }
    );

});


/* ==================================================
   ESC TUŞU
   ================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


/* ==================================================
   EKRAN BOYUTU DEĞİŞİNCE
   ================================================== */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 950
        ) {

            closeMenu();

        }

    }
);


/* ==================================================
   DIŞARI TIKLAYINCA MENÜYÜ KAPAT
   ================================================== */

document.addEventListener(
    "click",
    (event) => {

        if (
            !mobileMenu ||
            !menuButton
        ) {
            return;
        }


        const clickedInsideMenu =
            mobileMenu.contains(event.target);


        const clickedButton =
            menuButton.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedButton
        ) {

            closeMenu();

        }

    }
);


/* ==================================================
   OTOMATİK YIL
   ================================================== */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==================================================
   SAYFA İÇİ LİNKLER
   ================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });


                closeMenu();

            }
        );

    });


/* ==================================================
   SAYFA YÜKLENDİ
   ================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        closeMenu();

    }
);
