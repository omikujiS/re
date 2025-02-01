//職業
const JOBS = [
    "エンジニア", "デザイナー", "医者", "プログラマー", "料理人",
    "ジャーナリスト", "看護師", "歯科医師", "薬剤師", "保育士",
    "弁護士", "警察官", "消防士", "自衛官", "大工",
    "配管工", "ウェブデザイナー", "カメラマン", "翻訳家", "通訳",
    "サッカー選手", "野球選手", "ミュージシャン", "俳優", "美容師",
    "パティシエ", "ライター", "歌手", "漫画家", "教師",
    "アニメーター", "漁師", "農家", "ゲームデザイナー", "タクシー運転手",
    "キャビンアテンダント", "騎手", "スーツアクター", "管理栄養士", "政治家"
    
];
//アイテム
const LUCKY_ITEMS = [
    "赤いもの", "青いもの", "緑のもの", "おにぎり", "ケーキ", "寿司",
    "猫", "犬", "フクロウ", "星", "月", "花",
    "サッカーボール", "砂時計", "トランプ", "野球ボール", "梅おにぎり", "えんぴつ",
    "くま", "かいがら", "ふうりん", "とりのはね", "四つ葉のクローバー", "マグロ",
    "さんま", "オルゴール", "ボールペン", "1円玉", "千円札", "五千円札",
    "一万円札", "どんぐり", "松ぼっくり", "でかい石", "小さい石", "でかい枝",
    "小さい枝", "コップ", "カブトムシ", "クワガタ", "てんとうむし", "ちょうちょ",
    "めだまやき", "生たまご", "オムライス", "ざっそう", "ギター", "ドラム",
    "ベース", "ピアノ", "リコーダー", "ハーモニカ", "トライアングル", "絵具セット",
    "計算ドリル", "漢字ドリル", "ゲーム機", "マンガ", "小説", "絵本",
];
//職業画像
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
//アイテム画像
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

// 職業の解説
const JOB_DESCRIPTIONS = {


    "エンジニア": "テクノロジーを駆使して、システムやソフトウェアの開発に従事します。<br>技術的な問題を解決することが求められます。",
    "デザイナー": "視覚的なデザインを作成し、ブランドや製品を魅力的に表現します。<br>グラフィックやウェブ、インテリアなど、多岐にわたる分野で活躍します。",
    "医者": "患者を診察し、病気や怪我の治療を行います。<br>健康をサポートし、予防医療にも取り組みます。",
    "プログラマー": "コンピュータープログラムを開発し、<br>アプリケーションやシステムを作成します。<br>コードを書くことに特化し、ソフトウェアの機能を実現します。",
    "料理人": "食材を使って、美味しい料理を作り上げる職業です。<br>創造性と技術が求められます。",
    "ジャーナリスト": "ニュースや情報を調査し、報道する役割を担うメディアの専門家です。<br>真実を追求する責任があります。",
    "看護師": "患者のケアやサポートを行い、医師の指示に従って治療をサポートします。<br>患者の健康を守る重要な役割を担います。",
    "歯科医師": "患者の歯の健康を守り、虫歯や歯周病の治療を行います。<br>予防歯科にも力を入れ、健康な口腔環境を保ちます。",
    "薬剤師": "医師の処方に基づいて薬を調剤し、患者に服薬指導を行います。<br>薬の効果や副作用に関する知識が求められます。",
    "保育士": "子どもたちの保育や教育を行い、成長をサポートします。<br>日々の生活を見守りながら学びの場を提供します。",
    "弁護士": "法的な問題に関する相談を受け、訴訟の代理を行います。<br>法的なアドバイスを提供し、依頼者をサポートします。",
    "警察官": "社会の治安を守り、犯罪の予防や捜査を行います。<br>地域社会の安全を確保し、法律を守る役割を担います。",
    "消防士": "火災の消火や救助活動を行い、人命を守ります。<br>火災発生時に迅速に対応し、必要な機材を駆使して状況をコントロールします。",
    "自衛官": "国の防衛を担い、陸海空自衛隊で勤務します。<br>災害時や戦争時の対応も含め、安全保障を支える重要な職業です。",
    "大工": "木材を使って建物を作ったり、修理を行ったりします。<br>住宅や施設の建築、家具の製作も手がける技術職です。",
    "配管工": "水道やガスの配管を設置・修理します。<br>建物や施設に欠かせないインフラ整備を担当します。",
    "ウェブデザイナー": "ウェブサイトのデザインやレイアウトを作成します。<br>ユーザーが使いやすく、美しいサイトを設計する仕事です。",
    "カメラマン": "写真や映像を撮影し、記録として残します。<br>広告や報道、イベントなど、さまざまなシーンで撮影を行います。",
    "翻訳家": "異なる言語の文章を、他の言語に訳します。<br>正確に意味を伝えるため、言葉のニュアンスを理解することが求められます。",
    "通訳": "会話をリアルタイムで翻訳し、異なる言語の橋渡しを行います。<br>会議や国際的な場でのコミュニケーションをサポートします。",
    "サッカー選手": "プロのサッカー選手として、試合でプレーをします。<br>チームの一員として、技術と体力を駆使して試合に臨みます。",
    "野球選手": "プロの野球選手として、試合でプレーをします。<br>ピッチャーやバッターとして、試合の勝利を目指して戦います。",
    "ミュージシャン": "音楽を演奏・制作し、音楽活動を行います。<br>コンサートやアルバム制作を通じて、音楽で感動を提供します。",
    "俳優": "映画やテレビドラマ、舞台で演技を行います。<br>与えられた役を演じ、物語に命を吹き込みます。",
    "美容師": "髪をカット・カラーリングし、スタイリングを提供します。<br>お客様の髪型を整え、より魅力的に仕上げます。",
    "パティシエ": "ケーキやお菓子を作り、販売します。<br>見た目も美しく、味も楽しめるデザートを提供します。",
    "ライター": "記事やエッセイ、コンテンツを執筆します。<br>様々なジャンルで情報を伝える役割を担います。",
    "歌手": "音楽を歌い、パフォーマンスを行います。<br>ライブやアルバム制作を通じて、音楽の魅力を届けます。",
    "漫画家": "漫画を描き、物語を表現します。<br>絵と文字で読者を魅了する作品を創り出します。",
    "教師": "生徒に学問や技術を教え、成長をサポートします。<br>学校で知識を伝え、学びの場を提供します。",
    "アニメーター": "アニメーションを作成し、キャラクターやシーンを動かします。<br>映像制作において、物語をビジュアルで表現します。",
    "漁師": "海や川で魚を捕獲し、食材を供給します。<br>自然の中で働き、持続可能な漁業を実践します。",
    "農家": "作物を栽培し、農産物を収穫して販売します。<br>自然と向き合い、持続可能な農業を営む仕事です。",
    "ゲームデザイナー": "ゲームのコンセプトや設計を行い、プレイ体験を作り出します。<br>プレイヤーの楽しさを考えたゲームの制作に携わります。",
    "キャビンアテンダント": "航空機内で乗客の安全を確保しサービスの提供を行う。<br>接客、語学スキルが求められる。",
    "騎手": "馬に騎乗しレースで勝利を目指す職業。<br>厳しい減量管理や乗馬技術が必要。",
    "スーツアクター": "特撮やアクション作品で演じる俳優・<br>アクションやスタント技術が求められる・",
    "管理栄養士": "栄養の専門家として健康を支えるための指導を行う<br>主に学校などで働き食事計画などを作成する。",
    "政治家": "国や地方自治の制作を決定し福祉向上を目指す職業<br>選挙で選ばれ行政に関与する。",
};

// 平均年収
const Nensyuu = [
    "450万円", "480万円", "1436万円", "425万円", "425万円",
    "400~500万円", "500万円", "920万円", "500万円", "380万円",
    "950万円", "700万円", "650万円", "420万円", "400万円",
    "418万円", "414万円", "350万円", "350万円", "415万円",
    "3218万円", "4468万円", "431万円", "???", "380万円",
    "340万円", "350万円", "???", "500万円", "380万円",
    "440万円", "500万円", "415万円", "480万円", "300万円",
    "534万円", "1000万円", "200～400万円", "350~450万円", "1500～2000万円"
];

function generateResult() {
    const randomJobIndex = Math.floor(Math.random() * JOBS.length);
    const randomItemIndex = Math.floor(Math.random() * LUCKY_ITEMS.length);
    //職業とアイテム
    document.getElementById('job').textContent = JOBS[randomJobIndex];
    document.getElementById('item').textContent = LUCKY_ITEMS[randomItemIndex];

    //解説
    document.getElementById('jobDescription').innerHTML = JOB_DESCRIPTIONS[JOBS[randomJobIndex]];

    // 年収を表示
    document.getElementById('jobSalary').textContent = `平均年収: ${Nensyuu[randomJobIndex]}`;

    document.getElementById('jobImage').src = JOB_IMAGES[randomJobIndex];
    document.getElementById('itemImage').src = ITEM_IMAGES[randomItemIndex];
}



function goBack() {
    window.history.back();
}

window.onload = generateResult;

// 戻るボタン前のページに戻る
function goBack() {
    window.history.back();
}

// 読み込み時におみくじ結果を生成
window.onload = generateResult;

// トップページに遷移（おみくじページから）
// おみくじ演出を開始し、遅延で表示
function startLottery() {
    // 重複クリックを防ぐ
    document.querySelector('.btn').disabled = true;

    // アニメを表示
    const lotteryAnimation = document.getElementById('lotteryAnimation');
    lotteryAnimation.style.display = 'flex';

    // 2秒後にアニメ終了し、結果ページに
    setTimeout(function () {
        // アニメを非表示にして結果ページに遷移
        lotteryAnimation.style.display = 'none';
        window.location.href = "result.html";
    }, 2000); // 2秒の遅延で遷移
}

function leftButtonClick(){
    window.location.href = "otanosimi.html";
}
