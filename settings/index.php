<?php
/*
 * TürkBlocks Ayarlar
 * PHP 7.4+
 *
 * Ayarlar tarayıcıda 1. parti cookie
 * olarak saklanır.
 */
?>
<!DOCTYPE html>
<html lang="tr">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>TürkBlocks — Ayarlar</title>

<link
    rel="preconnect"
    href="https://fonts.googleapis.com"
>

<link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
>

<link
    href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
    rel="stylesheet"
>

<style>

/* =========================
   TEMA DEĞİŞKENLERİ
========================= */

:root {

    --bg: #f7f7f8;

    --surface: #ffffff;

    --surface-hover: #f1f1f2;

    --border: rgba(0, 0, 0, .08);

    --text: #111111;

    --muted: #707074;

    --brand: #500000;

    --brand-hover: #680000;

    --shadow:
        0 20px 60px rgba(0, 0, 0, .08);
}


html[data-theme="dark"] {

    --bg: #080808;

    --surface: #111111;

    --surface-hover: #181818;

    --border: rgba(255, 255, 255, .08);

    --text: #ffffff;

    --muted: #99999d;

    --brand: #500000;

    --brand-hover: #700000;

    --shadow:
        0 20px 60px rgba(0, 0, 0, .35);
}


/* =========================
   GENEL
========================= */

* {
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    margin: 0;

    min-height: 100vh;

    background: var(--bg);

    color: var(--text);

    font-family:
        "Google Sans",
        Arial,
        sans-serif;

    transition:
        background .35s ease,
        color .35s ease;
}


button,
a {
    font-family: inherit;
}


/* =========================
   ÜST BAR
========================= */

.topbar {

    position: sticky;

    top: 0;

    z-index: 100;

    height: 70px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 34px;

    background: var(--bg);

    border-bottom:
        1px solid var(--border);

    animation:
        topbarIn .55s ease both;
}


@keyframes topbarIn {

    from {

        opacity: 0;

        transform:
            translateY(-12px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}


.brand {

    display: flex;

    align-items: center;

    gap: 12px;

    color: var(--text);

    text-decoration: none;

    font-size: 19px;

    font-weight: 700;

    letter-spacing: -.4px;
}


.brand img {

    width: 38px;

    height: 38px;

    object-fit: contain;

    border-radius: 10px;
}


.back {

    padding:
        9px 13px;

    border-radius: 10px;

    color: var(--muted);

    text-decoration: none;

    font-size: 14px;

    transition:
        color .2s ease,
        background .2s ease,
        transform .2s ease;
}


.back:hover {

    color: var(--text);

    background:
        var(--surface-hover);

    transform:
        translateX(-2px);
}


/* =========================
   ANA ALAN
========================= */

.container {

    width:
        min(760px, calc(100% - 36px));

    margin: 0 auto;

    padding:
        70px 0 100px;
}


.heading {

    margin-bottom: 32px;

    animation:
        headingIn .7s
        cubic-bezier(.2,.8,.2,1)
        both;
}


@keyframes headingIn {

    from {

        opacity: 0;

        transform:
            translateY(20px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}


.heading h1 {

    margin: 0;

    font-size:
        clamp(42px, 7vw, 58px);

    line-height: 1;

    letter-spacing: -2.5px;
}


.heading p {

    max-width: 600px;

    margin:
        14px 0 0;

    color: var(--muted);

    font-size: 16px;

    line-height: 1.6;
}


/* =========================
   AYAR KARTI
========================= */

.settings-card {

    padding: 26px;

    background: var(--surface);

    border:
        1px solid var(--border);

    border-radius: 20px;

    box-shadow: var(--shadow);

    animation:
        cardIn .7s
        .08s
        cubic-bezier(.2,.8,.2,1)
        both;
}


@keyframes cardIn {

    from {

        opacity: 0;

        transform:
            translateY(25px)
            scale(.98);
    }

    to {

        opacity: 1;

        transform:
            translateY(0)
            scale(1);
    }
}


.setting {

    padding:
        4px 0 24px;
}


.setting:last-child {

    padding-bottom: 0;
}


.setting-title {

    margin: 0;

    font-size: 19px;

    font-weight: 600;

    letter-spacing: -.3px;
}


.setting-description {

    margin:
        7px 0 18px;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.5;
}


/* =========================
   TEMA SEÇENEKLERİ
========================= */

.theme-options {

    display: grid;

    gap: 9px;
}


.theme-option {

    width: 100%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding:
        15px 17px;

    border:
        1px solid var(--border);

    border-radius: 13px;

    background:
        var(--surface-hover);

    color: var(--text);

    cursor: pointer;

    text-align: left;

    font-size: 15px;

    transition:
        transform .22s ease,
        border-color .22s ease,
        background .22s ease,
        box-shadow .22s ease;
}


.theme-option:hover {

    transform:
        translateX(3px);

    border-color:
        rgba(80, 0, 0, .45);
}


.theme-option.active {

    border-color:
        var(--brand);

    background:
        rgba(80, 0, 0, .10);

    box-shadow:
        0 5px 20px
        rgba(80, 0, 0, .08);
}


.option-left {

    display: flex;

    align-items: center;

    gap: 12px;
}


.option-dot {

    width: 9px;

    height: 9px;

    border-radius: 50%;

    background:
        var(--muted);

    transition:
        background .2s ease,
        transform .2s ease,
        box-shadow .2s ease;
}


.theme-option.active
.option-dot {

    background:
        var(--brand);

    transform:
        scale(1.2);

    box-shadow:
        0 0 0 5px
        rgba(80, 0, 0, .10);
}


.check {

    width: 20px;

    height: 20px;

    display: flex;

    align-items: center;

    justify-content: center;

    border:
        1px solid var(--border);

    border-radius: 50%;

    color: transparent;

    font-size: 12px;

    transition:
        background .2s ease,
        border-color .2s ease,
        color .2s ease;
}


.theme-option.active
.check {

    background:
        var(--brand);

    border-color:
        var(--brand);

    color: white;
}


/* =========================
   BİLGİ
========================= */

.cookie-info {

    margin-top: 16px;

    padding:
        13px 15px;

    border-radius: 12px;

    background:
        var(--surface-hover);

    color: var(--muted);

    font-size: 12px;

    line-height: 1.5;
}


/* =========================
   MOBİL
========================= */

@media (max-width: 700px) {

    .topbar {

        padding:
            0 17px;
    }


    .container {

        padding-top:
            45px;
    }


    .settings-card {

        padding:
            21px;
    }

}

</style>

</head>


<body>


<header class="topbar">


    <a
        class="brand"
        href="/"
    >

        <img
            src="https://turkblocks.gamer.gd/logo/6642781985798787256865186887954381688697668781534687987679868154396796545368967453.png"
            alt="TürkBlocks"
        >

        <span>
            TÜRKBLOCKS
        </span>

    </a>


    <a
        class="back"
        href="/"
    >
        Oyunlara dön
    </a>


</header>


<main class="container">


    <section class="heading">

        <h1>
            Ayarlar
        </h1>

        <p>
            TürkBlocks deneyimini
            kendine göre özelleştir.
        </p>

    </section>


    <section class="settings-card">


        <!-- TEMA -->

        <div class="setting">

            <h2 class="setting-title">
                Tema
            </h2>

            <p class="setting-description">
                TürkBlocks'un görünümünü
                seç. Otomatik seçenek,
                cihazının sistem temasını
                takip eder.
            </p>


            <div class="theme-options">


                <button
                    class="theme-option"
                    type="button"
                    data-theme="auto"
                >

                    <span class="option-left">

                        <span class="option-dot"></span>

                        <span>
                            Otomatik (Varsayılan)
                        </span>

                    </span>

                    <span class="check">
                        ✓
                    </span>

                </button>


                <button
                    class="theme-option"
                    type="button"
                    data-theme="light"
                >

                    <span class="option-left">

                        <span class="option-dot"></span>

                        <span>
                            Aydınlık
                        </span>

                    </span>

                    <span class="check">
                        ✓
                    </span>

                </button>


                <button
                    class="theme-option"
                    type="button"
                    data-theme="dark"
                >

                    <span class="option-left">

                        <span class="option-dot"></span>

                        <span>
                            Karanlık
                        </span>

                    </span>

                    <span class="check">
                        ✓
                    </span>

                </button>


            </div>


            <div class="cookie-info">

                Tema tercihin bu cihazda
                birinci taraf çerez olarak
                saklanır.

            </div>

        </div>


    </section>


</main>


<script>

/*
 * =========================
 * COOKIE OKUMA
 * =========================
 */

function getCookie(name) {

    var cookies =
        document.cookie.split("; ");

    for (
        var i = 0;
        i < cookies.length;
        i++
    ) {

        var parts =
            cookies[i].split("=");

        var key =
            parts.shift();

        if (key === name) {

            return decodeURIComponent(
                parts.join("=")
            );
        }
    }

    return null;
}


/*
 * =========================
 * COOKIE YAZMA
 * =========================
 */

function setCookie(
    name,
    value,
    days
) {

    if (!days) {
        days = 365;
    }


    var expires =
        new Date();


    expires.setTime(
        expires.getTime() +
        days * 86400000
    );


    document.cookie =
        name + "=" +
        encodeURIComponent(value) +
        "; expires=" +
        expires.toUTCString() +
        "; path=/; SameSite=Lax";
}


/*
 * =========================
 * TEMA UYGULAMA
 * =========================
 */

function applyTheme(theme) {

    if (theme === "dark") {

        document.documentElement
            .setAttribute(
                "data-theme",
                "dark"
            );

        return;
    }


    if (theme === "light") {

        document.documentElement
            .setAttribute(
                "data-theme",
                "light"
            );

        return;
    }


    /*
     * AUTO
     */

    var prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    document.documentElement
        .setAttribute(
            "data-theme",
            prefersDark
                ? "dark"
                : "light"
        );
}


/*
 * =========================
 * AKTİF BUTON
 * =========================
 */

function updateButtons(theme) {

    var buttons =
        document.querySelectorAll(
            ".theme-option"
        );


    for (
        var i = 0;
        i < buttons.length;
        i++
    ) {

        var buttonTheme =
            buttons[i]
                .getAttribute(
                    "data-theme"
                );


        if (
            buttonTheme === theme
        ) {

            buttons[i]
                .classList
                .add("active");

        } else {

            buttons[i]
                .classList
                .remove("active");
        }

    }
}


/*
 * =========================
 * BAŞLANGIÇ
 * =========================
 */

var savedTheme =
    getCookie("tb_theme");


if (!savedTheme) {

    savedTheme = "auto";
}


applyTheme(savedTheme);

updateButtons(savedTheme);


/*
 * =========================
 * TEMA DEĞİŞTİR
 * =========================
 */

var themeButtons =
    document.querySelectorAll(
        ".theme-option"
    );


for (
    var i = 0;
    i < themeButtons.length;
    i++
) {

    themeButtons[i]
        .addEventListener(
            "click",
            function () {

                var theme =
                    this.getAttribute(
                        "data-theme"
                    );


                /*
                 * Aynı cookie:
                 *
                 * tb_theme
                 *
                 * Ana sayfa da bunu okuyor.
                 */

                setCookie(
                    "tb_theme",
                    theme,
                    365
                );


                applyTheme(theme);

                updateButtons(theme);

            }
        );
}


/*
 * =========================
 * SİSTEM TEMASI
 * =========================
 *
 * Sadece AUTO seçilmişse
 * sistem değişikliğini takip et.
 */

var mediaQuery =
    window.matchMedia(
        "(prefers-color-scheme: dark)"
    );


mediaQuery.addEventListener(
    "change",
    function () {

        var theme =
            getCookie("tb_theme");


        if (
            !theme ||
            theme === "auto"
        ) {

            applyTheme("auto");
        }

    }
);

</script>


</body>

</html>