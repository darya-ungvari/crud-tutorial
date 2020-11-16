const BASE_URL = 'http://localhost:4040';
function fetchBooks(args) {
    return fetch(`${BASE_URL}/books`)
    .then(r => r.json());
};

function fetchBookById(bookId) {
    return fetch(`${BASE_URL}/books/${bookId}`)
    .then(r => r.json());
};

fetchBooks();
fetchBookById(2);
fetchBookById(5);

