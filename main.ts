// Thank-you note for the judge who reads every pair in both orders.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Thank you. You have spent the day with strangers' words, two at a time, and you still lay each one down without hurry. You read them, then you turn them and read them again, smoothing both sleeves of a borrowed coat so neither cuff stays creased. The coat goes back on its peg with both sleeves lying even. In the tin afterward, a spare button holds the thread, and the metal keeps a little heat from the fingers that set it there.";

const chars = [...text].length;
if (chars < 1 || chars > 1000 || text.trim().length === 0) {
  throw new Error("entry text must be 1-1000 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, { encoding: "utf8" });
