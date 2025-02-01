// アイテムの情報
const LUCKY_ITEMS = [
    "赤いもの", "青いもの", "緑のもの", "おにぎり", "ケーキ", "寿司",
    "猫", "犬", "フクロウ", "星", "月", "花",
    "サッカーボール", "砂時計", "トランプ", "野球ボール", "梅おにぎり", "えんぴつ",
    "くま", "かいがら", "ふうりん", "とりのはね", "四つ葉の<br>クローバー", "マグロ",
    "さんま", "オルゴール", "ボールペン", "1円玉", "千円札", "五千円札",
    "一万円札", "どんぐり", "松ぼっくり", "でかい石", "小さい石", "でかい枝",
    "小さい枝", "コップ", "カブトムシ", "クワガタ", "てんとうむし", "ちょうちょ",
    "めだまやき", "生たまご", "オムライス", "ざっそう", "ギター", "ドラム",
    "ベース", "ピアノ", "リコーダー", "ハーモニカ", "トライアングル", "絵具セット",
    "計算ドリル", "漢字ドリル", "ゲーム機", "マンガ", "小説", "絵本",
];

const ITEM_IMAGES = [
    "items/赤.png", "items/青.png", "items/緑.png", "items/おにぎり.png", "items/ケーキ.png", "items/寿司.png",
    "items/猫.png", "items/犬.png", "items/フクロウ.png", "items/星.png", "items/月.png", "items/花.png",
    "items/サッカーボール.png", "items/砂時計.png", "items/トランプ.png", "items/野球ボール.png", "items/梅おにぎり.png", "items/えんぴつ.png",
    "items/くま.png", "items/かいがら.png", "items/ふうりん.png", "items/とりのはね.png", "items/四つ葉のクローバー.png", "items/マグロ.png",
    "items/さんま.png", "items/オルゴール.png", "items/ボールペン.png", "items/1円玉.png", "items/千円札.png", "items/五千円札.png",
    "items/一万円札.png", "items/どんぐり.png", "items/松ぼっくり.png", "items/でかい石.png", "items/小さい石.png", "items/でかい枝.png",
    "items/小さい枝.png", "items/コップ.png", "items/カブトムシ.png", "items/クワガタ.png", "items/てんとうむし.png", "items/ちょうちょ.png",
    "items/めだまやき.png", "items/生たまご.png", "items/オムライス.png", "items/ざっそう.png", "items/ギター.png", "items/ドラム.png",
    "items/ベース.png", "items/ピアノ.png", "items/リコーダー.png", "items/ハーモニカ.png", "items/トライアングル.png", "items/絵具セット.png",
    "items/計算ドリル.png", "items/漢字ドリル.png", "items/ゲーム機.png", "items/マンガ.png", "items/小説.png", "items/絵本.png"
];

// 職業の情報
const JOBS = [
    "エンジニア", "デザイナー", "医者", "プログラマー", "料理人",
    "ジャーナリスト", "看護師", "歯科医師", "薬剤師", "保育士",
    "弁護士", "警察官", "消防士", "自衛官", "大工",
    "配管工", "ウェブ<br>デザイナー", "カメラマン", "翻訳家", "通訳",
    "サッカー選手", "野球選手", "ミュージシャン", "俳優", "美容師",
    "パティシエ", "ライター", "歌手", "漫画家", "教師",
    "アニメーター", "漁師", "農家", "ゲーム<br>デザイナー", "タクシー運転手",
    "キャビン<br>アテンダント", "騎手", "スーツアクター", "管理栄養士", "政治家"
];

const JOB_IMAGES = [
    "jobs/エンジニア.png", "jobs/デザイナー.png", "jobs/医者.png", "jobs/プログラマー.png", "jobs/料理人.png",
    "jobs/ジャーナリスト.png", "jobs/看護師.png", "jobs/歯科医師.png", "jobs/薬剤師.png", "jobs/保育士.png",
    "jobs/弁護士.png", "jobs/警察官.png", "jobs/消防士.png", "jobs/自衛官.png", "jobs/大工.png",
    "jobs/配管工.png", "jobs/ウェブデザイナー.png", "jobs/カメラマン.png", "jobs/翻訳家.png", "jobs/通訳.png",
    "jobs/サッカー選手.png", "jobs/野球選手.png", "jobs/ミュージシャン.png", "jobs/俳優.png", "jobs/美容師.png",
    "jobs/パティシエ.png", "jobs/ライター.png", "jobs/歌手.png", "jobs/漫画家.png", "jobs/教師.png",
    "jobs/アニメーター.png", "jobs/漁師.png", "jobs/農家.png", "jobs/ゲームデザイナー.png", "jobs/タクシー運転手.png",
    "jobs/キャビンアテンダント.png", "jobs/騎手.png", "jobs/スーツアクター.png", "jobs/管理栄養士.png", "jobs/政治家.png"
];

// 現在のページ番号
let currentItemPage = 0;
let currentJobPage = 0;

// 1ページに表示するアイテム数
const ITEMS_PER_PAGE = 4;
const JOBS_PER_PAGE = 4; // 職業のページ数も同様に設定

// ギャラリーの要素
const itemGallery = document.querySelector('.gallery');
const jobGallery = document.querySelector('.job-gallery');
const leftItemArrow = document.querySelector('.left-arrow');
const rightItemArrow = document.querySelector('.right-arrow');
const leftJobArrow = document.querySelector('.job-left-arrow');
const rightJobArrow = document.querySelector('.job-right-arrow');

// アイテムをページごとに表示
function renderItems() {
    const start = currentItemPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const itemsToShow = LUCKY_ITEMS.slice(start, end);
    const imagesToShow = ITEM_IMAGES.slice(start, end);

    itemGallery.innerHTML = '';
    itemsToShow.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = 
            `<img src="${imagesToShow[index]}" alt="${item}">` +
            `<p>${item}</p>`;
        itemGallery.appendChild(itemDiv);
    });

    // ページ数の修正
    const totalPages = Math.ceil(LUCKY_ITEMS.length / ITEMS_PER_PAGE);
    leftItemArrow.disabled = currentItemPage === 0;
    rightItemArrow.disabled = currentItemPage === totalPages - 1;
}

// 職業をページごとに表示
function renderJobs() {
    const start = currentJobPage * JOBS_PER_PAGE;
    const end = start + JOBS_PER_PAGE;
    const jobsToShow = JOBS.slice(start, end);
    const imagesToShow = JOB_IMAGES.slice(start, end);

    jobGallery.innerHTML = '';
    jobsToShow.forEach((job, index) => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job-item';
        jobDiv.innerHTML = 
            `<img src="${imagesToShow[index]}" alt="${job}">` +
            `<p>${job}</p>`;
        jobGallery.appendChild(jobDiv);
    });

    // ページ数の修正
    const totalPages = Math.ceil(JOBS.length / JOBS_PER_PAGE);
    leftJobArrow.disabled = currentJobPage === 0;
    rightJobArrow.disabled = currentJobPage === totalPages - 1;
}

// ページを前に進める（アイテム）
function scrollLeftItems() {
    if (currentItemPage > 0) {
        currentItemPage--;
        renderItems();
    }
}

// ページを次に進める（アイテム）
function scrollRightItems() {
    const totalPages = Math.ceil(LUCKY_ITEMS.length / ITEMS_PER_PAGE);
    if (currentItemPage < totalPages - 1) {
        currentItemPage++;
        renderItems();
    }
}

// ページを前に進める（職業）
function scrollLeftJobs() {
    if (currentJobPage > 0) {
        currentJobPage--;
        renderJobs();
    }
}

// ページを次に進める（職業）
function scrollRightJobs() {
    const totalPages = Math.ceil(JOBS.length / JOBS_PER_PAGE);
    if (currentJobPage < totalPages - 1) {
        currentJobPage++;
        renderJobs();
    }
}

// 初期化
renderItems();
renderJobs();

// アイテムをクリックして画像を拡大表示するためのモーダル関連のコード

let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("modalCaption");

// 画像をモーダルで表示
function openModal(imageSrc, caption) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = caption;
}

// モーダルを閉じる
function closeModal() {
    modal.style.display = "none";
}

// アイテムをページごとに表示
function renderItems() {
    const start = currentItemPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const itemsToShow = LUCKY_ITEMS.slice(start, end);
    const imagesToShow = ITEM_IMAGES.slice(start, end);

    itemGallery.innerHTML = '';
    itemsToShow.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = 
            `<img src="${imagesToShow[index]}" alt="${item}" onclick="openModal('${imagesToShow[index]}', '${item}')">` +
            `<p>${item}</p>`;
        itemGallery.appendChild(itemDiv);
    });

    // ページ数の修正
    const totalPages = Math.ceil(LUCKY_ITEMS.length / ITEMS_PER_PAGE);
    leftItemArrow.disabled = currentItemPage === 0;
    rightItemArrow.disabled = currentItemPage === totalPages - 1;
}

// 職業をページごとに表示
function renderJobs() {
    const start = currentJobPage * JOBS_PER_PAGE;
    const end = start + JOBS_PER_PAGE;
    const jobsToShow = JOBS.slice(start, end);
    const imagesToShow = JOB_IMAGES.slice(start, end);

    jobGallery.innerHTML = '';
    jobsToShow.forEach((job, index) => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job-item';
        jobDiv.innerHTML = 
            `<img src="${imagesToShow[index]}" alt="${job}" onclick="openModal('${imagesToShow[index]}', '${job}')">` +
            `<p>${job}</p>`;
        jobGallery.appendChild(jobDiv);
    });

    // ページ数の修正
    const totalPages = Math.ceil(JOBS.length / JOBS_PER_PAGE);
    leftJobArrow.disabled = currentJobPage === 0;
    rightJobArrow.disabled = currentJobPage === totalPages - 1;
}



// 初期化
renderItems();
renderJobs();

// 戻るボタン
function goBack() {
    window.history.back();
}


// 戻るボタン
function goBack() {
    window.history.back();
}
