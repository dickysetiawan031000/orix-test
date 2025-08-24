export const soalList = [
    {
        title: "Soal 1",
        desc:
            "Pseudocode validasi input: panjang 8, hanya huruf/angka, minimal 1 huruf besar & 1 angka.",
        answer:
            [
                "Pseudocode:",
                "READ s",
                "IF length(s) != 8 THEN RETURN \"Invalid\"",
                "IF s contains non-alphanumeric THEN RETURN \"Invalid\"",
                "IF s does not contain at least one uppercase letter THEN RETURN \"Invalid\"",
                "IF s does not contain at least one digit THEN RETURN \"Invalid\"",
                "RETURN \"Valid\"",
            ].join("\n"),
    },

    {
        title: "Soal 2",
        desc:
            "Pisahkan array ke 2 grup berdasar pola: 3^k dan 2*3^k. Dasar logika: bagi terus dengan 3 sampai tidak bisa. Hasil 1 ⇒ 3^k, hasil 2 ⇒ 2*3^k.",
        jsCode: `const arr = [3, 9, 27, 81, 2, 6, 18, 54];

// Group A = 3^k
const groupA = arr.filter(x => {
  let v = x;
  while (v % 3 === 0) v /= 3;
  return v === 1;
});

// Group B = 2*3^k
const groupB = arr.filter(x => {
  let v = x;
  while (v % 3 === 0) v /= 3;
  return v === 2;
});

console.log("GroupA:", groupA);
console.log("GroupB:", groupB);`,
        jsRun: () => {
            const arr = [3, 9, 27, 81, 2, 6, 18, 54];
            const groupA = arr.filter((x) => {
                let v = x;
                while (v % 3 === 0) v /= 3;
                return v === 1;
            });
            const groupB = arr.filter((x) => {
                let v = x;
                while (v % 3 === 0) v /= 3;
                return v === 2;
            });
            return `GroupA: ${groupA.join(", ")} | GroupB: ${groupB.join(", ")}`;
        },
        phpCode: `<?php
$arr = [3, 9, 27, 81, 2, 6, 18, 54];

$groupA = array_filter($arr, function($x) {
    while ($x % 3 == 0) $x /= 3;
    return $x == 1;
});

$groupB = array_filter($arr, function($x) {
    while ($x % 3 == 0) $x /= 3;
    return $x == 2;
});

print_r($groupA);
print_r($groupB);
?>`,
    },

    {
        title: "Soal 3",
        desc:
            "Semua programmer bisa membuat bug. Beberapa programmer bisa memperbaiki bug. Andi adalah programmer. Apakah bisa dipastikan Andi bisa memperbaiki bug?",
        answer:
            "Tidak bisa dipastikan Andi bisa memperbaiki bug. (Premis hanya menyatakan 'beberapa', bukan 'semua'.)",
    },

    {
        title: "Soal 4",
        desc:
            "Query: tampilkan semua order dengan nilai total > rata-rata total semua order.",
        answer: "SELECT * FROM orders WHERE total > (SELECT AVG(total) FROM orders)",
    },

    {
        title: "Soal 5",
        desc: "Query: tampilkan semua produk yang belum pernah terjual.",
        answer: "SELECT p.* FROM products p WHERE NOT EXISTS (SELECT 1 FROM sales s WHERE s.product_id = p.id)"
    },

    {
        title: "Soal 6",
        desc:
            "Fungsi yang mencetak pola angka menurun: n=5 → 55555, 4444, 333, 22, 1; n=9 → dari 9 sampai 1.",
        jsCode: `function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    console.log(String(i).repeat(i));
  }
}
printPattern(5);
printPattern(9);`,
        jsRun: () => {
            const lines = [];
            for (let i = 5; i >= 1; i--) lines.push(String(i).repeat(i));
            return lines.join("\n");
        },

        phpCode: `<?php
function printPattern($n) {
    for ($i=$n; $i>=1; $i--) {
        echo str_repeat((string)$i, $i) . "\\n";
    }
}
printPattern(5);
printPattern(9);
?>`,
    },

    {
        title: "Soal 7",
        desc:
            "Fungsi penentu tahun kabisat (contoh: 2021 → Bukan tahun kabisat; 2020 → Tahun kabisat).",
        jsCode: `function isLeapYear(y) {
  return (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
}
console.log(2021, isLeapYear(2021) ? "Tahun kabisat" : "Bukan tahun kabisat");
console.log(2020, isLeapYear(2020) ? "Tahun kabisat" : "Bukan tahun kabisat");`,
        jsRun: () => {
            const isLeapYear = (y: number) =>
                y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);

            return [
                `2021 → ${isLeapYear(2021) ? "Tahun kabisat" : "Bukan tahun kabisat"}`,
                `2020 → ${isLeapYear(2020) ? "Tahun kabisat" : "Bukan tahun kabisat"}`
            ].join("\n");
        },
        phpCode: `<?php
function isLeapYear($y) {
    return ($y % 400 == 0) || ($y % 4 == 0 && $y % 100 != 0);
}
echo "2021 → " . (isLeapYear(2021) ? "Tahun kabisat" : "Bukan tahun kabisat") . " | ";
echo "2020 → " . (isLeapYear(2020) ? "Tahun kabisat" : "Bukan tahun kabisat");
?>`,
    },

    {
        title: "Soal 8",
        desc: "Cetak deret Fibonacci sebanyak n.",
        jsCode: `function fibonacci(n){
  const out = [];
  let a = 0, b = 1;
  for (let i=0; i<n; i++){
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}
console.log(fibonacci(5).join(" "));
console.log(fibonacci(10).join(" "));`,
        jsRun: () => {
            const fib = (n: number): number[] => {
                const out: number[] = [];
                let a = 0,
                    b = 1;
                for (let i = 0; i < n; i++) {
                    out.push(a);
                    [a, b] = [b, a + b];
                }
                return out;
            };

            return `n=5 → ${fib(5).join(" ")}\n` +
                `n=10 → ${fib(10).join(" ")}`;
        },

        phpCode: `<?php
function fibonacci($n){
    $out = [];
    $a = 0; $b = 1;
    for ($i=0; $i<$n; $i++){
        $out[] = $a;
        $tmp = $a + $b;
        $a = $b;
        $b = $tmp;
    }
    return $out;
}
echo "n=5 → " . implode(" ", fibonacci(5)) . " | n=10 → " . implode(" ", fibonacci(10));
?>`,
    },

    {
        title: "Soal 9",
        desc:
            "SQL: tentukan Grade tiap mahasiswa. Final score = 20% Quiz + 30% UTS + 40% UAS + 10% Absence. Mapping Grade: A/B/C/D/E.",
        answer:
            "SELECT sm.NIM, sm.Name,\n" +
            "  CASE\n" +
            "    WHEN final_score >= 81.00 THEN 'A'\n" +
            "    WHEN final_score >= 71.00 THEN 'B'\n" +
            "    WHEN final_score >= 51.00 THEN 'C'\n" +
            "    WHEN final_score >= 41.00 THEN 'D'\n" +
            "    ELSE 'E'\n" +
            "  END AS Grade\n" +
            "FROM (\n" +
            "  SELECT sm.NIM, sm.Name,\n" +
            "    (0.20 * sa.QUIZ_VALUE\n" +
            "     + 0.30 * sa.UTS_VALUE\n" +
            "     + 0.40 * sa.UAS_VALUE\n" +
            "     + 0.10 * sa.ABSENCE_VALUE) AS final_score\n" +
            "  FROM STUDENT_MASTER sm\n" +
            "  INNER JOIN STUDENT_ACHIVEMENT sa ON sa.NIM = sm.NIM\n" +
            ") t;"
    },

    {
        title: "Soal 10",
        desc:
            "SQL: kelompokkan mahasiswa berdasarkan kategori IPK. Kategori: <2.00 = Below, 2.00–2.99 = Good, 3.00–4.00 = Very Good.",
        answer:
            "SELECT\n" +
            "  CASE\n" +
            "    WHEN IPK < 2.00 THEN 'Below'\n" +
            "    WHEN IPK >= 2.00 AND IPK < 3.00 THEN 'Good'\n" +
            "    WHEN IPK >= 3.00 AND IPK <= 4.00 THEN 'Very Good'\n" +
            "    ELSE 'Unknown'\n" +
            "  END AS IPK_Category,\n" +
            "  COUNT(*) AS Total_Students\n" +
            "FROM STUDENT_MASTER\n" +
            "GROUP BY\n" +
            "  CASE\n" +
            "    WHEN IPK < 2.00 THEN 'Below'\n" +
            "    WHEN IPK >= 2.00 AND IPK < 3.00 THEN 'Good'\n" +
            "    WHEN IPK >= 3.00 AND IPK <= 4.00 THEN 'Very Good'\n" +
            "    ELSE 'Unknown'\n" +
            "  END;"
    },

];
