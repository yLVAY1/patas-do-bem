import { minify } from 'html-minifier-terser';
import { readFile, writeFile } from 'node:fs/promises';
for (const name of ['index.html', 'cadastro.html']) {
  const path = `dist/${name}`;
  const html = await readFile(path, 'utf8');
  await writeFile(path, await minify(html, { collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: true }));
}
