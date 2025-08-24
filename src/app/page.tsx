"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function LandingPage() {
  return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-xl">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">
            Technical Test
          </h1>
          <h2 className="text-lg mb-6 text-gray-600">
            PT ORIX Indonesia Finance – 2025
          </h2>

          <p className="mb-4 text-gray-700 text-justify">
            Dalam pengerjaan test ini, saya menggunakan kombinasi{" "}
            <strong>JavaScript</strong> dan <strong>PHP</strong> dalam bentuk
            kode statis untuk setiap soal. Tujuannya agar solusi bisa langsung
            dijalankan dan dibaca tanpa setup framework backend yang kompleks.
          </p>

          <p className="mb-6 text-gray-700 text-justify">
            Sebenarnya saya terbiasa menggunakan <strong>Laravel</strong> untuk
            pengembangan backend. Namun menurut saya, memakai framework penuh
            seperti Laravel untuk menyelesaikan soal-soal algoritma dasar akan
            terasa <em>overkill</em>. Jadi di sini saya fokus menunjukkan
            kemampuan logika dan penguasaan sintaks PHP &amp; JavaScript.
          </p>

          <div className="flex justify-center gap-4 mb-6">
            <a
                href="https://github.com/dickysetiawan031000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
                href="https://www.linkedin.com/in/dickysetiawan03/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <Link
              href="/soal/1"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Check Test
          </Link>
        </div>
      </main>
  );
}
