import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const films = [
    {
      id: 1,
      namaFilm: "Kemah Terlarang Kesurupan Massal",
      genre: "Horor",
      durasi: "100 menit",
      tanggalTayang: "10 Oktober 2024",
      sutradara: "Ginanti Rona",
      gambar: "https://cdn.idntimes.com/content-images/post/20240814/img-8893-5c072b5076e8283a2d586daae223d03b.jpeg",
      sinopsis: "Diangkat dari kisah nyata, film ini menceritakan kejadian kesurupan massal yang dialami siswa-siswi di Yogyakarta. Sebuah perkemahan berubah menjadi teror setelah seorang siswa kerasukan."
    },
    {
      id: 2,
      namaFilm: "Pulau Hantu",
      genre: "Horor, Thriller",
      durasi: "110 menit",
      tanggalTayang: "10 Oktober 2024",
      sutradara: "Ferry Pei Irawan",
      gambar: "https://cdn.rri.co.id/berita/Padang/o/1726553948741-Pulau-Hantu/ol2dnp8e6p1qg09.jpeg",
      sinopsis: "Reboot dari trilogi populer tahun 2000-an, mengisahkan sekelompok remaja yang terjebak di pulau misterius setelah kapal mereka terdampar. Mereka harus bertahan hidup dari ancaman di pulau berhantu."
    },
    {
      id: 3,
      namaFilm: "Start Up Never Give Up",
      genre: "Drama, Inspiratif",
      durasi: "95 menit",
      tanggalTayang: "10 Oktober 2024",
      sutradara: "Daniel Tito",
      gambar: "https://www.marketeers.com/_next/image/?url=https%3A%2F%2Fimagedelivery.net%2F2MtOYVTKaiU0CCt-BLmtWw%2F6a4e21ae-a029-4f12-8682-3175ba151900%2Fw%3D1266&w=1920&q=75",
      sinopsis: "Film ini mengisahkan perjuangan dua saudara dalam membangun sebuah startup berbasis aplikasi transportasi online. Mereka menghadapi berbagai tantangan untuk mencapai kesuksesan."
    }
  ];

  const [search, setSearch] = useState("");

  const filterdata = films.filter((f) =>
    f.namaFilm.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="my-6">
        <div className="w-full flex justify-center">
          <input type="text" className="border-black border-solid text-center" value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex w-full gap-6 justify-center">
          {filterdata.map((f) => (
            <div key={f.id} className="flex flex-col justify-center gap-3 items-center">
              <h1 className="font-bold text-2xl">{f.namaFilm}</h1>
              <img src={f.gambar} alt="" className="w-96 h-96" />
              <button className="border-1 border-black bg-indigo-600 w-44 rounded-lg" onClick={(e) => {
                e.preventDefault();
                alert(`
                ${f.id}
                ${f.namaFilm}
                ${f.genre}
                ${f.durasi}
                ${f.tanggalTayang}
                ${f.sutradara}
                ${f.sinopsis}

                `)
              }}>lihat selengkapnya</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
