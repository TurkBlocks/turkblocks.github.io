"use strict";

/*
 * TürkBlocks - script.js
 * Sade ve gerekli JavaScript.
 * Tema seçimi YOKTUR.
 * Tema, işletim sisteminin tercihine CSS tarafından göre otomatik belirlenir.
 */


/* =========================================
   YIL
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   HEADER SCROLL
========================================= */

const header = document.querySelector(".site-header");

function updateHeader() {
    if (!header) return;

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


/* =========================================
   MOBİL MENÜ
========================================= */

const menuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


function openMenu() {

    if (!mobileNavigation || !menuButton) {
        return;
    }

    mobileNavigation.classList.add("open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü kapat"
    );

    document.body.classList.add(
        "menu-open"
    );
}


function closeMenu() {

    if (!mobileNavigation || !menuButton) {
        return;
    }

    mobileNavigation.classList.remove("open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Menüyü aç"
    );

    document.body.classList.remove(
        "menu-open"
    );
}


function toggleMenu() {

    if (!mobileNavigation) {
        return;
    }

    if (
        mobileNavigation.classList.contains(
            "open"
        )
    ) {
        closeMenu();
    } else {
        openMenu();
    }
}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        toggleMenu
    );

}


/* =========================================
   MOBİL LİNKLER
========================================= */

if (mobileNavigation) {

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });

}


/* =========================================
   ESC İLE MENÜ KAPATMA
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    }
);


/* =========================================
   MENÜ DIŞINA TIKLAMA
========================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !mobileNavigation ||
            !menuButton
        ) {
            return;
        }

        if (
            !mobileNavigation.classList.contains(
                "open"
            )
        ) {
            return;
        }

        const clickedMenu =
            mobileNavigation.contains(
                event.target
            );

        const clickedButton =
            menuButton.contains(
                event.target
            );

        if (
            !clickedMenu &&
            !clickedButton
        ) {
            closeMenu();
        }

    }
);


/* =========================================
   EKRAN BOYUTU
========================================= */

window.addEventListener(
    "resize",
    () => {

        /*
         * Masaüstüne dönüldüğünde
         * mobil menüyü kapat.
         */

        if (window.innerWidth > 950) {
            closeMenu();
        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    revealElements.length > 0 &&
    "IntersectionObserver" in window
) {

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
                threshold: 0.12,
                rootMargin:
                    "0px 0px -35px 0px"
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(
                element
            );

        }
    );

} else {

    /*
     * Eski tarayıcılarda içerik
     * görünmez kalmasın.
     */

    revealElements.forEach(
        element => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================
   DIŞ LİNKLER
========================================= */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );


externalLinks.forEach(link => {

    /*
     * Güvenlik için target="_blank"
     * bağlantılarına noopener ekle.
     */

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});


/* =========================================
   SAYFA YÜKLENDİ
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();

    }
);
