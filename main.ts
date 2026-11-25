import { mkdirSync, writeFileSync } from "node:fs";

// One sentence about the best meal I ever had: rendang at my
// grandmother's house in Bukittinggi, eaten straight from the pot.
const sentence =
  "Di dapur nenek di Bukittinggi, rendang dari kuali hitam itu empuk sampai seratnya lepas, santan pedasnya menempel di bibir, dan asap kayu dari tungku masih tercium sampai sekarang.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, sentence, "utf8");
