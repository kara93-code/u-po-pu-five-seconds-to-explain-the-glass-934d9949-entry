// Five Seconds to Explain the Glass — Versi A, pilihan spesialis 26 Nov 07:43 WIB.
// Pilihan spesialis: logika kucing paling murni — gelasnya yang memulai duluan,
// kucing hanya membela diri, tanpa penyesalan sama sekali; twist "before it
// could attack" mendarat di kata terakhir; 99 karakter, paling bisa diucapkan
// dalam 5 detik. Versi C (mata-mata) ditolak karena konspirasi itu logika manusia
// yang dipakaikan ke kucing, bukan logika kucing sendiri; Versi B (landlord)
// ditolak karena penutupnya berupa perbandingan, bukan twist.
// Satu kalimat, tanpa minta maaf, tanpa pengakuan, tanpa gravitasi / tepi licin.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The glass stared at me first, so I knocked it off the table in self-defence before it could attack.";

const entry = ENTRY.trim();
// Gate lokal yang sama dengan gate server: 1-200 karakter, satu baris, dan
// tepat satu kalimat — satu tanda akhir kalimat di ujung, tanpa kalimat kedua.
const sentenceEnders = (entry.match(/[.!?]/g) ?? []).length;
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  sentenceEnders !== 1 ||
  !entry.endsWith(".")
) {
  throw new Error("Entry must be one sentence of 1-200 characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
