import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, basename, extname } from 'path';

const inputDir = new URL('../src/images', import.meta.url).pathname.slice(1); // windows fix
const outputDir = inputDir;

const files = readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

for (const file of files) {
    const input = join(inputDir, file);
    const output = join(outputDir, basename(file, extname(file)) + '.webp');
    await sharp(input)
        .webp({ quality: 82 })
        .toFile(output);
    console.log(`✅  ${file}  →  ${basename(output)}`);
}
console.log('Done!');
