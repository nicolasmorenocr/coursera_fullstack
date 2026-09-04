const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'images/Index';
const outputDir = 'dist/images/Index';

// Crea la carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    sharp(inputPath)
        .png({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`✅ Comprimido: ${file}`))
        .catch((err) => console.error(`❌ Error en ${file}:`, err));
});