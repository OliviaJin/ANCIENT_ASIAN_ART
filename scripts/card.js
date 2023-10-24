const ancientAsianArt = {
    continent: "Asia",
    introduction: "The huge Asian continent has given birth to numerous types of art that predate anything seen in the West.",
    notableForms: ["pottery", "calligraphy", "painting", "sculpture"],
    majorInfluences: ["Buddhism", "Confucianism", "Taoism"],
    artStyles: ["Realism", "Abstract", "Impressionism", "Expressionism"],
    materials: ["ink", "paper", "silk", "bronze", "jade", "clay"],
    techniques: ["brush painting", "carving", "casting", "weaving"],
    preservation: ["museums", "galleries", "private collections", "temples"],
    countries: {
        China: {
            notableArtForms: ["pottery", "bronze sculpture", "jade carving", "lacquerware", "calligraphy"],
            dynasties: ["Han Dynasty", "Tang Dynasty", "Song Dynasty"],
            famousArtists: ["Zhang Zeduan", "Qi Baishi", "Zhang Daqian"],
            museums: ["The Palace Museum", "Shanghai Museum", "Terracotta Army Museum"]
        },
        Japan: {
            notableArtForms: ["ink painting", "calligraphy", "ceramics", "ukiyo-e prints"],
            periods: ["Nara Period", "Heian Period", "Edo Period"],
            famousArtists: ["Katsushika Hokusai", "Utagawa Hiroshige", "Tawaraya Sotatsu"],
            museums: ["Tokyo National Museum", "Adachi Museum of Art", "Ritsurin Garden"]
        },
        Korea: {
            notableArtForms: ["pottery", "painting", "calligraphy", "textiles"],
            periods: ["Three Kingdoms Period", "Goryeo Dynasty", "Joseon Dynasty"],
            famousArtists: ["Kim Hong-do", "Jeong Seon", "Shin Yun-bok"],
            museums: ["National Museum of Korea", "Leeum, Samsung Museum of Art", "Gyeongju National Museum"]
        }
    }
}

let quickTextShow = document.getElementById('quickName');
let paintImageShow = document.getElementById('paintPic');
const type = document.getElementById("type");
const btn = document.getElementById("submit");

let quickList = ['The Sixteen Luohans', 'Night-Shining White', 'Narcissus', 'Grooms and horses', 'Fisherman', 'Wind among the Trees on the Riverbank',
         'Acala with Consort Vishvavajri', 'Guru Dragpo','Chakrasamvara and consort Vajravarahi', 'Wang Xizhi watching geese'];
let paintImages = ['The Sixteen Luohans.png', 'Night-Shining White.png', 'Narcissus.png', 'Grooms and horses.png', 'Fisherman.png',
                'Wind among the Trees on the Riverbank.png', 'Acala with Consort Vishvavajri.png', 'Guru Dragpo.png','Chakrasamvara and consort Vajravarahi.png', 'Wang Xizhi watching geese.png'];
        

var cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');

     });
    });

var Quickcard = document.getElementById("quickCard")
quickCard.addEventListener('click', function () {

    let r = Math.floor(Math.random() * quickList.length);
     quickTextShow.innerText = quickList[r];
     paintImageShow.src = paintImages[r];
});

   