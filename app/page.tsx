"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-white to-blue-100 text-gray-900">
      {/* Profile Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
    
        
        {/* Fallback pakai img biasa */}
        <img
          src="/profil.png"
          alt="Foto Profil"
          width="150"
          height="150"
          className="rounded-full shadow-lg mt-4"
        />

        <h1 className="text-3xl font-bold mt-4">vidhilla nuristina</h1>
        <p className="text-lg text-gray-700">JURUSAN RPL</p>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Portofolio</h2>
          <p><strong>Nama:</strong> Vidi</p>
          <p><strong>Jurusan:</strong> Rpl</p>
          <p><strong>Tanggal Lahir:</strong> 2008</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 rounded-xl p-4 shadow">
              <Image
                src="/hm3.png"
                alt="Project 1"
                width={400}
                height={250}
                className="rounded-lg"
                unoptimized
              />
              <img
                src="/hm3.png"
                alt="Project 1"
                width="400"
                height="250"
                className="rounded-lg mt-2"
              />
              <h3 className="font-semibold mt-3">Project 1</h3>
              <p className="text-sm text-gray-600">kenangan saat uprak.</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 shadow">
              <Image
                src="/hm4.png"
                alt="Project 2"
                width={400}
                height={300}
                className="rounded-lg"
                unoptimized
              />
              <img
                src="/hm4.png"
                alt="Project 2"
                width="400"
                height="300"
                className="rounded-lg mt-2"
              />
              <h3 className="font-semibold mt-3">Project 2</h3>
              <p className="text-sm text-gray-600">kenangan saat cap 3 jri.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
