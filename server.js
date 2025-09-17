const express = require("express");
const app = express();
const PORT = 3300;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test!");
});

let reviews = [
    {
        id: 1,
        filmid: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Spirited Away
        user: "Cristiano Ronaldo",
        rating: 9,
        comment: "Film animasi terbaik sepanjang masa Sepakbola!",
    },
    {
        id: 2,
        filmid: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Spirited Away
        user: "Kevin Maulana Atmaja",
        rating: 6,
        comment: "Mada kono sekai wa!",
    },
    {
        id: 3,
        filmid: "2baf70d1-42bb-4437-b551-e5fed5a87abe ", // Castle in the sky
        user: "M. Mufqi Fajar",
        rating: 8,
        comment: "Animasinya bagus membuat saya nostalgia! heheha",
    },
    {
        id: 4,
        filmid: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the sky
        user: "M. Abi Hafidh",
        rating: 9,
        comment: "Walaupun anime lama saya tetap suka!!!",
    },
];

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
