"use client";
import { useState } from "react";

export default function JsCodeBlock({ code, run }) {
    const [result, setResult] = useState("");

    return (
        <div className="mb-4">
      <pre className="bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto">
        {code}
      </pre>
            <button
                onClick={() => setResult(run())}
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
