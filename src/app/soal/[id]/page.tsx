"use client";

import { soalList } from "../data";
import JsCodeBlock from "@/components/JsCodeBlock";
import PhpCodeBlock from "@/components/PhpCodeBlock";
import Link from "next/link";
import { use } from "react";

export default function SoalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const index = parseInt(id) - 1;
    const soal = soalList[index];

    if (!soal) {
        return <p className="text-red-500">Soal tidak ditemukan</p>;
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">{soal.title}</h1>
                {/* 🔹 Button Back ke Home */}
                <Link
                    href="/"
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                    Back to Home
                </Link>
            </div>

            <p className="mb-4">{soal.desc}</p>

            {/* 🔹 Render dinamis */}
            {soal.jsCode && <JsCodeBlock code={soal.jsCode} run={soal.jsRun} />}
            {soal.phpCode && <PhpCodeBlock code={soal.phpCode} />}
            {soal.answer && (
                <pre className="p-4 bg-yellow-100 rounded text-gray-800 whitespace-pre-wrap">
                    {soal.answer}
                </pre>
            )}

            {/* Navigasi Prev / Next */}
            <div className="flex gap-4 mt-6 justify-center">
                {index > 0 && (
                    <Link
                        href={`/soal/${index}`}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                        Prev
                    </Link>
                )}
                {index < soalList.length - 1 && (
                    <Link
                        href={`/soal/${index + 2}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Next
                    </Link>
                )}
            </div>

            {/* Pagination Numbers */}
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {soalList.map((_, i) => (
                    <Link
                        key={i}
                        href={`/soal/${i + 1}`}
                        className={`px-3 py-1 rounded ${
                            i === index
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {i + 1}
                    </Link>
                ))}
            </div>
        </div>
    );
}
