function displayRamens() {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(ramens => {
            ramens.forEach(ramen => {
                const img = document.createElement('img');
                img.src = ramen.image;
                img.alt = ramen.name;
                document.querySelector('#ramen-menu').appendChild(img);
                img.addEventListener('click', () => handleClick(ramen));
            });
        });
}

function handleClick(ramen) {
    document.querySelector('#ramen-detail img').src = ramen.image;
    document.querySelector('#ramen-detail h2').textContent = ramen.name;
    document.querySelector('#ramen-detail h3').textContent = ramen.restaurant;
    document.querySelector('#rating-display').textContent = ramen.rating;
    document.querySelector('#comment-display').textContent = ramen.comment;
}

function addSubmitListener() {
    document.querySelector('#new-ramen').addEventListener('submit', (e) => {
        e.preventDefault();
        const newRamen = {
            name: e.target['name'].value,
            restaurant: e.target['restaurant'].value,
            image: e.target['image'].value,
            rating: e.target['rating'].value,
            comment: e.target['comment'].value
        };
        addRamenToMenu(newRamen);
    });
}

function addRamenToMenu(ramen) {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    document.querySelector('#ramen-menu').appendChild(img);
    img.addEventListener('click', () => handleClick(ramen));
}
function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);

function displayRamens() {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(ramens => {
            ramens.forEach(ramen => {
                const img = document.createElement('img');
                img.src = ramen.image;
                img.alt = ramen.name;
                document.querySelector('#ramen-menu').appendChild(img);
                img.addEventListener('click', () => handleClick(ramen));
            });
            handleClick(ramens[0]);
        });
}

document.querySelector('#edit-ramen').addEventListener('submit', (e) => {
    e.preventDefault();
    const newRating = e.target['new-rating'].value;
    const newComment = e.target['new-comment'].value;
    document.querySelector('#rating-display').textContent = newRating;
    document.querySelector('#comment-display').textContent = newComment;
});

function deleteRamen(id) {
    fetch(`http://localhost:3000/ramens/${id}`, { method: 'DELETE' })
        .then(() => {

        });
}