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

   