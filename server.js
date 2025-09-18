const express = require("express");
const app = express();
const PORT = 3300;

app.use(express.json());

let reviews = [
  {
    id: 1,
    filmid: "12cfb892-aac0-4c5b-94af-521852e46d6a", // Grave of the Fireflies
    user: "Cristiano Ronaldo",
    rating: 9,
    comment: "Film animasi terbaik sepanjang masa Sepakbola!",
  },
  {
    id: 2,
    filmid: "12cfb892-aac0-4c5b-94af-521852e46d6a", // Grave of the Fireflies
    user: "Kevin Maulana Atmaja",
    rating: 6,
    comment: "Mada kono sekai wa!",
  },
  {
    id: 3,
    filmid: "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the sky
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

// status
app.get("/status", (req, res) => {
    res.json({ status: "Server running on port http://localhost:3300" });
});

// get
app.get("/reviews", (req, res) => {
  res.json(reviews);
});

// get id
app.get("/reviews/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const review = reviews.find((r) => r.id === id);
  if (!review) {
    return res.status(404).json({ error: "Review tidak ditemukan" });
  }
  res.json(review);
});

// post
app.post("/reviews", (req, res) => {
  const { filmid, user, rating, comment } = req.body;
  if (!filmid || !user || !rating || !comment) {
    return res.status(400).json({ error: "Semua field harus diisi" });
  }
  const newId = reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1;
  const newReview = { id: newId, filmid, user, rating, comment };
  reviews.push(newReview);
  res.status(201).json({ message: "Review berhasil ditambahkan", data: newReview });
});

// update by id
app.put("/reviews/:id", (req, res) => {
    const reviewId = parseInt(req.params.id);
    const reviewIndex = reviews.findIndex((r) => r.id === reviewId);

    if (reviewIndex === -1) {
        return res.status(404).json({ message: "Review tidak ditemukan" });
    }

    const { filmid, user, rating, comment } = req.body;

    if (!filmid || !user || !rating || !comment) {
        return res.status(400).json({ message: "Semua field (filmid, user, rating, comment) harus diisi untuk diperbarui" });
    }

    const updatedReview = { id: reviewId, filmid, user, rating, comment };
    reviews[reviewIndex] = updatedReview;
    res.status(200).json({ message: "Review berhasil diperbarui", data: updatedReview });
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
