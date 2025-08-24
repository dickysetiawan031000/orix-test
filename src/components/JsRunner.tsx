"use client";

import { useState } from "react";

export default function JsRunner({ run }: { run: () => any }) {
    const [output, setOutput] = useState<string | null>(null);
    const [show, setShow] = useState(false);

    function handleRun() {
        try {
            const result = run();
            setOutput(Array.isArray(result) ? result.join(", ") : String(result));
            setShow(true); // tampilkan hasil
        } catch (err: any) {
            setOutput("Error: " + err.message);
            setShow(true);
        }
    }

    return (
        <div className="mt-4">
            {!show ? (
                <button
                    onClick={handleRun}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Run JS
                </button>
            ) : (
                <div>
                    <button
                        onClick={() => setShow(false)}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                    >
                        Hide JS
                    </button>
                    <p className="mt-2 p-2 bg-gray-100 rounded text-gray-800">
                        Hasil: {output}
                    </p>
                </div>
            )}
        </div>
    );
}
