const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

// Leer el archivo Excel
const workbook = xlsx.readFile(path.join(__dirname, "secciones.xlsx"));
const sheetName = workbook.SheetNames[13];
const sheet = workbook.Sheets[sheetName];

// Convertir a arreglo de arreglos
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

// Agrupar secciones
let groupedSections = {};
let currentGroup = null;

for (let i = 1; i < data.length; i++) {
  const row = data[i];
  const group = row[0] || currentGroup; // Columna A
  const section = row[5]; // Columna F

  if (group != null) currentGroup = group;

  if (typeof section === "number") {
    if (!groupedSections[currentGroup]) {
      groupedSections[currentGroup] = [];
    }
    groupedSections[currentGroup].push(section);
  }
}

// Generar contenido plano: solo listas separadas por comas por línea
let output = "";
for (const arr of Object.values(groupedSections)) {
  output += `${arr.join(", ")}\n`;
}

// Guardar en archivo .txt
fs.writeFileSync("secciones.txt", output);
console.log("✅ Archivo 'secciones.txt' generado con solo los valores.");
