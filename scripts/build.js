const fs = require("node:fs");
const path = require("node:path");

const distDir = path.join(__dirname, "..", "dist");

fs.mkdirSync(distDir, { recursive: true });

const html = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CI build artifact</title>
  </head>
  <body>
    <h1>Build OK</h1>
    <p>Artifact généré par GitHub Actions.</p>
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), html, "utf8");

// eslint-disable-next-line no-console
console.log(`Generated ${path.join("dist", "index.html")}`);

