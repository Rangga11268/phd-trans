import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, extname, parse } from "path";

const dirs = [
  "public/assets/img",
  "public/assets/img/fasilitas",
];

for (const dir of dirs) {
  const files = readdirSync(dir);
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
    const fullPath = join(dir, file);
    const name = parse(file).name;
    const outPath = join(dir, `${name}.webp`);
    if (file === "logonobg.png") {
      console.log(`Skip ${fullPath} - already has webp`);
      continue;
    }
    console.log(`Converting ${fullPath} -> ${outPath}`);
    await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);
  }
}

console.log("Done!");
