document.addEventListener('DOMContentLoaded', function () {
    const records = [
        { id: 1, title: "Lana Del Rey – Born To Die (Deluxe Edition)", price: 7490, image: "img/newcatalog/Lana Del Rey – Born To Die (Deluxe Edition).jpg"},
        { id: 2, title: "Queen – Bohemian Rhapsody (The Original Soundtrack)", price: 6990, image: "img/newcatalog/Queen – Bohemian Rhapsody (The Original Soundtrack).jpg"},
        { id: 3, title: "Cigarettes After Sex – Cigarettes After Sex", price: 4990, image: "img/newcatalog/Cigarettes After Sex – Cigarettes After Sex.jpg"},
        { id: 4, title: "Tame Impala – The Slow Rush", price: 5990, image: "img/newcatalog/Tame Impala – The Slow Rush.jpg"},
        { id: 5, title: "Ludovico Einaudi – Reimagined Vol. 1 & 2", price: 6490, image: "img/newcatalog/Ludovico Einaudi – Reimagined Vol. 1 & 2.jpg"},
        { id: 6, title: "Jungle – For Ever", price: 5790, image: "img/newcatalog/Jungle – For Ever.jpg"},
        { id: 7, title: "Tame Impala – Currents", price: 6290, image: "img/newcatalog/Tame Impala – Currents.jpg"},
        { id: 8, title: "The Weeknd – The Highlights", price: 7990, image: "img/newcatalog/The Weeknd – The Highlights.jpg"},
        { id: 9, title: "Pink Floyd – The Dark Side of the Moon", price: 3990, image: "img/newcatalog/Pink Floyd – The Dark Side of the Moon.jpg"},
        { id: 10, title: "Various Artists – Shrek (Black Vinyl)", price: 9990, image: "img/newcatalog/Various Artists – Shrek (Black Vinyl).jpg"},
        { id: 11, title: "Кино – Последний Герой", price: 6790, image: "img/newcatalog/Кино – Последний Герой.jpg"},
        { id: 12, title: "Magdalena Bay – A Little Rhythm And A Wicked Feeling (Translucent Cobalt Vinyl)", price: 6990, image: "img/newcatalog/Magdalena Bay – A Little Rhythm And A Wicked Feeling.jpg"},
        { id: 13, title: "Ludovico Einaudi – Cinema", price: 7990, image: "img/newcatalog/Ludovico Einaudi – Cinema.jpg"},
        { id: 14, title: "Kendrick Lamar – good kid, m.A.A.d city", price: 3690, image: "img/newcatalog/Kendrick Lamar – good kid, m.A.A.d city.jpg"},
        { id: 15, title: "Tame Impala – Lonerism", price: 4490, image: "img/newcatalog/Tame Impala – Lonerism.jpg"},
        { id: 16, title: "Tame Impala – Innerspeaker", price: 4590, image: "img/newcatalog/Tame Impala – Innerspeaker.jpg"}
    ];

    const itemsPerLoad = 4;
    let displayedItems = 0;

    const container = document.getElementById('catalog-container');
    const loadMoreBtn = document.getElementById('load-more');
    const foundCount = document.querySelector('.found-count');

    function updateFoundCount() {
        foundCount.textContent = `Найдено: ${records.length}`;
    }

    function createRecordCard(record) {
        const card = document.createElement('div');
        card.classList.add('block-3__item');
        card.innerHTML = `
            <img src="${record.image}" alt="${record.title}" class="block-3__image">
            <h3 class="block-3__name">${record.title}</h3>
            <p class="block-3__price">${record.price} руб</p>
            <div class="block-3__buttons">
                <a href="tovar.php" class="block-3__btn block-3__btn--details">ПОДРОБНЕЕ</a>
                <a href="#" class="block-3__btn block-3__btn--cart">В КОРЗИНУ</a>
            </div>
        `;
        return card;
    }

    function displayRecords(start, count) {
        const end = Math.min(start + count, records.length);
        for (let i = start; i < end; i++) {
            const card = createRecordCard(records[i]);
            container.appendChild(card);
        }
        displayedItems = end;
        if (displayedItems >= records.length) {
            loadMoreBtn.classList.add('hidden');
            loadMoreBtn.style.display = 'none';
        }
    }

    updateFoundCount();
    displayRecords(0, 8);

    loadMoreBtn.addEventListener('click', function (event) {
        displayRecords(displayedItems, itemsPerLoad);
    });
});
