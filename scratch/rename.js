import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace "Jeevora Foundation"
  content = content.replace(/Jeevora Foundation/g, 'Sanjeevora Vidya Mission');
  
  // Replace "Sanjeevora" but carefully avoid "Sanjeevora Vidya Mission"
  // We can use a regex with negative lookahead
  content = content.replace(/Sanjeevora(?!\s+Vidya\s+Mission)/g, 'Sanjeevora Vidya Mission');
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Done replacing.');
