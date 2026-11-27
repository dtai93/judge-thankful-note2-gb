// Thank-you note for the judge who reads two entries, both orders.
const text =
  "Thank you. You have held two strangers' sentences at once, then swapped them and read again, so neither one borrows ease from coming first. I set a loaf under a clean cloth for you. The middle is still warm. It gives. Where your thumb paused on the line, the paper holds a little of that same warmth. When the pair is finished, the cloth goes back. Under it the loaf keeps its heat, the middle soft, the crust dull with flour.";

const chars = [...text].length;
if (chars < 1 || chars > 1000 || text.trim().length === 0) {
  throw new Error("entry text must be 1-1000 non-blank characters");
}

import { mkdirSync, writeFileSync } from "node:fs";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
