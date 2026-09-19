"use strict";

/*
 * TürkBlocks — GitHub Games Loader
 *
 * GitHub Pages üzerinde çalışır.
 * Oyun listesi GitHub Contents API üzerinden alınır.
 * PCK indirme bağlantıları GitHub RAW üzerinden oluşturulur.
 */


/* =========================================================
   GITHUB AYARLARI
   ========================================================= */

// DEĞİŞTİRME:
// TürkBlocks oyun deposu
const GITHUB_API =
    "https://api.github.com/repos/TurkBlocks/TurkBlocksGamesDepo/contents/";

// DEĞİŞTİRME:
// RAW GitHub adresi
const GITHUB_RAW =
    "https://raw.githubusercontent.com/TurkBlocks/TurkBlocksGamesDepo/main/";


/* =========================================================
   SAYFA ELEMANLARI
   ========================================================= */

const gameList = document.getElementById("game-list");
const gameCount = document.getElementById("game-count");


/* =========================================================
   SAYFA BAŞLADIĞINDA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    loadGames();
});


/* =========================================================
   OYUNLARI GITHUB'DAN AL
   ========================================================= */

async function loadGames() {

    try {

        showLoading();

        const response = await fetch(GITHUB_API, {
            headers: {
                "Accept": "application/vnd.github+json"
            }
        });

        if (!response.ok) {
            throw new Error(
                "GitHub API HTTP " + response.status
            );
        }

        const files = await response.json();


        /*
         * Sadece .pck dosyalarını alıyoruz.
         */
        const games = files.filter(file => {

            return (
                file.type === "file" &&
                file.name.toLowerCase().endsWith(".pck")
            );

        });


        /*
         * Oyun sayısını göster.
         */
        gameCount.textContent =
            `${games.length} oyun`;


        /*
         * Hiç oyun yoksa.
         */
        if (games.length === 0) {

            showMessage(
                "Henüz oyun bulunmuyor."
            );

            return;
        }


        /*
         * Oyun listesini oluştur.
         */
        renderGames(games);

    } catch (error) {

        console.error(
            "TürkBlocks oyun yükleme hatası:",
            error
        );

        gameCount.textContent =
            "Oyunlar yüklenemedi";

        showMessage(
            "Oyunlar yüklenirken bir hata oluştu."
        );
    }
}


/* =========================================================
   OYUNLARI EKRANA YAZ
   ========================================================= */

function renderGames(games) {

    gameList.innerHTML = "";

    games.forEach(game => {

        /*
         * Dosya adındaki .pck uzantısını kaldır.
         */
        const gameName = game.name
            .replace(/\.pck$/i, "");


        /*
         * RAW bağlantısını oluştur.
         *
         * Örnek:
         * test.pck
         *
         * ↓
         *
         * https://raw.githubusercontent.com/
         * TurkBlocks/TurkBlocksGamesDepo/main/test.pck
         */
        const rawUrl =
            GITHUB_RAW +
            encodeURIComponent(game.name);


        /*
         * Oyun kartı
         */
        const card =
            document.createElement("article");

        card.className = "game-card";


        /*
         * Oyun bilgileri
         */
        const info =
            document.createElement("div");

        info.className = "game-info";


        const title =
            document.createElement("h3");

        title.textContent = gameName;


        const fileName =
            document.createElement("p");

        fileName.textContent =
            game.name;


        info.appendChild(title);
        info.appendChild(fileName);


        /*
         * Görüntüle butonu
         */
        const button =
            document.createElement("a");

        button.className = "game-button";

        button.href = rawUrl;

        button.textContent =
            "Görüntüle";

        /*
         * Tarayıcının PCK'yı yeni sekmede
         * açmasını / indirmesini sağlar.
         */
        button.target = "_blank";

        button.rel =
            "noopener noreferrer";


        /*
         * Kartı oluştur.
         */
        card.appendChild(info);
        card.appendChild(button);

        gameList.appendChild(card);

    });
}


/* =========================================================
   YÜKLENİYOR MESAJI
   ========================================================= */

function showLoading() {

    gameList.innerHTML = `
        <div class="loading">
            Oyunlar yükleniyor...
        </div>
    `;
}


/* =========================================================
   MESAJ GÖSTER
   ========================================================= */

function showMessage(message) {

    gameList.innerHTML = "";

    const element =
        document.createElement("div");

    element.className =
        "empty-message";

    element.textContent =
        message;

    gameList.appendChild(element);
}
