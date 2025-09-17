# Proyek API Ulasan Film - Kelompok 2

## Anggota kelompok

- Kevin Maulana Atmaja (36245830)
- Cristiano Ronaldo (362458302008)
- Muhammad Mufqi Fajar (362458302067)
- Muhammad Abi Hafidh (362458302056)

## Deskripsi Proyek

API ini adalah layanan internal untuk mengelola ulasan film dari studio Ghibli, dengan data film yang di referensikan dari Ghibli API Publik.

## Cara menjalankan Proyek

1.Clone repostory ini: 'git clone https://github.com/KevinMaulanaAtmaja/api-ulasan-film.git'
2.Masuk ke direktory: 'cd api-ulasan-film'
3.Install dependensi: 'npm install'
4.Jalankan server: 'node server.js'
server akan berjalan di ‘http://localhost:3300‘.

## Daftar Endpoint

- 'GET /status': Cek status API.
- 'GET /reviews': Mengambil semua ulasan.
- 'GET /reviews/:id': Mengambil ulasan spesifik.
- 'POST /reviews': Membuat ulasan baru.
- 'PUT /reviews/:id': Memperbarui ulasan.
- 'DELETE /reviews/:id': Menghapus ulasan.
