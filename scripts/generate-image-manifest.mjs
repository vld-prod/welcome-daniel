import fs from "node:fs";

const directory = "images";
const extensions = /\.(jpe?g|png|gif|webp|avif|svg|bmp|tiff?)$/i;

const files = fs
  .readdirSync(directory, { withFileTypes: true, encoding: "utf8" })
  .filter((entry) => entry.isFile() && extensions.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, "ru", { sensitivity: "base" }));

fs.writeFileSync("images.json", JSON.stringify(files, null, 2) + "\n");
console.log(`Generated images.json with ${files.length} file(s).`);
