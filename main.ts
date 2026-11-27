// Thank-you note for the judge who reads two entries, both orders.
const text =
  "Thank you. You held two strangers' lines together, then traded their places and read again, so neither one took ease from coming first. I left a loaf under a clean cloth for you. The middle is still warm. It gives. Where your thumb rested, the paper keeps a little of that heat. When the pair is done, the cloth goes back over the loaf. Under it the crumb stays soft, the crust quiet with flour, and the heat does not leave.";

const chars = [...text].length;
if (chars < 1 || chars > 1000 || text.trim().length === 0) {
  throw new Error("entry text must be 1-1000 non-blank characters");
}

import { mkdirSync, writeFileSync } from "node:fs";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
