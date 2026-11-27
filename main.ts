// Thank-you note for the judge who reads every pair in both orders.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "Thank you. You have carried other people's words all day, two at a time, and you still set them down without a crease. You read one, then the other, then you turn the pair and read them again, easing both sleeves of a borrowed coat until the cuffs lie level. The coat hangs on its peg, sleeves even, the walk already over. In the tin, a spare button keeps its thread, and a little warmth stays in the metal where your fingers left it.";

const chars = [...text].length;
if (chars < 1 || chars > 1000 || text.trim().length === 0) {
  throw new Error("entry text must be 1-1000 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, { encoding: "utf8" });
