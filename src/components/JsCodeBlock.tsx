"use client";

import { useState } from "react";

type JsCodeBlockProps = {
    code: string;
    run: () => unknown;
};

export default function JsCodeBlock({ code, run }: JsCodeBlockProps) {
    const [result, setResult] = useState<string>("");

    function handleRun() {
        try {
            const output = run();
            setResult(Array.isArray(output) ? output.join(", ") : String(output));
        } catch (err: unknown) {
            if (err instanceof Error) {
                setResult("Error: " + err.message);
            } else {
                setResult("Unknown error");
            }
        }
    }

    return (
        <div className="mb-4">
            <pre className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto">
                {code}
            </pre>

            <button
                onClick={handleRun}
                className="px-3 py-1 bg-blue-600 text-white rounded"
            >
                Run JS
            </button>

            {result && (
                <pre className="bg-gray-100 p-3 rounded mt-2 whitespace-pre-wrap">
                    {result}
                </pre>
            )}
        </div>
    );
}
