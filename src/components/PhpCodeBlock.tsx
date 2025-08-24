"use client";

import { useState } from "react";

export default function PhpCodeBlock({ code }: { code: string }) {
    const [show, setShow] = useState(false);

    return (
        <div className="mt-4">
            <button
                onClick={() => setShow(!show)}
                className="px-4 py-2 bg-green-600 text-white rounded"
            >
                {show ? "Hide PHP" : "Show PHP"}
            </button>

            {show && (
                <pre className="mt-2 p-2 bg-gray-900 text-green-200 rounded overflow-x-auto text-sm">
          {code}
        </pre>
            )}
        </div>
    );
}
