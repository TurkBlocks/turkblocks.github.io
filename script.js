"use strict";

/*
 * TürkBlocks - script.js
 * Ana sayfadaki etkileşimler
 */


/* =========================================
   ELEMENTLER
========================================= */

const siteHeader =
    document.getElementById("siteHeader");

const themeButton =
    document.getElementById("themeButton");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");

const yearElement =
    document.getElementById("year");

const revealElements =
    document.querySelectorAll(".reveal");


/* =========================================
   YIL
========================================= */

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================================
   HEADER SCROLL
========================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 20) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }
}

window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);

updateHeader();


/* =========================================
   MOBİL MENÜ
========================================= */

function openMobileMenu() {

    if (!mobileNavigation || !mobileMenuButton) {
        return;
    }

    mobileNavigation.classList.add("open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );
}


function closeMobileMenu() {

    if (!mobileNavigation || !mobileMenuButton) {
        return;
    }

    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );
}


function toggleMobileMenu() {

    if (!mobileNavigation) {
        return;
    }

    if (
        mobileNavigation.classList.contains("open")
    ) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }
}


if (mobileMenuButton) {

    mobileMenuButton.addEventListener(
        "click",
        toggleMobileMenu
    );

}


/* Mobil menü bağlantıları */

if (mobileNavigation) {

    const mobileLinks =
        mobileNavigation.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });

}


/* =========================================
   ESC İLE MENÜYÜ KAPAT
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================
   DIŞARI TIKLAYINCA MENÜYÜ KAPAT
========================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !mobileNavigation ||
            !mobileMenuButton
        ) {
            return;
        }

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

            closeMobileMenu();

        }

    }
);


/* =========================================
   TEMA
========================================= */

const THEME_KEY =
    "turkblocks-theme";


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        if (themeButton) {
            themeButton.textContent = "☀";
            themeButton.setAttribute(
                "aria-label",
                "Açık temaya geç"
            );
        }

    } else {

        document.body.classList.remove("dark");

        if (themeButton) {
            themeButton.textContent = "☾";
            themeButton.setAttribute(
                "aria-label",
                "Koyu temaya geç"
            );
        }

    }
}


/* Kayıtlı temayı oku */

let savedTheme = null;

try {

    savedTheme =
        localStorage.getItem(
            THEME_KEY
        );

} catch (error) {

    savedTheme = null;

}


/* Sistem temasını kontrol et */

const systemPrefersDark =
    window.matchMedia &&
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;


if (savedTheme === "dark") {

    applyTheme("dark");

} else if (savedTheme === "light") {

    applyTheme("light");

} else if (systemPrefersDark) {

    applyTheme("dark");

} else {

    applyTheme("light");

}


/* Tema düğmesi */

if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            const newTheme =
                isDark ? "light" : "dark";

            applyTheme(newTheme);

            try {

                localStorage.setItem(
                    THEME_KEY,
                    newTheme
                );

            } catch (error) {

                /* localStorage kullanılamıyorsa
                   tema yine çalışmaya devam eder. */

            }

        }
    );

}


/* =========================================
   YUMUŞAK REVEAL ANİMASYONLARI
========================================= */

if (
    "IntersectionObserver" in window &&
    revealElements.length > 0
) {

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
                threshold: 0.12,
                rootMargin: "0px 0px -30px 0px"
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    /*
     * IntersectionObserver desteklenmiyorsa
     * içerikler görünmez kalmasın.
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
   ANCHOR GEÇİŞLERİ
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

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
                    document.querySelector(
                        targetId
                    );

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


/* =========================================
   EKRAN BOYUTU DEĞİŞİNCE
========================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================
   SAYFA YÜKLENDİ
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateHeader();

    }
);
