const fs = require('fs');
const path = require('path');

const target1 = '`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/';
const target2 = '${import.meta.env.VITE_API_URL || "http://localhost:5000"}/';
const target3 = '${import.meta.env.VITE_API_URL || "http://localhost:5000"}';

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
            if (file === 'config.js') continue;
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            if (content.includes(target1) || content.includes(target2) || content.includes(target3)) {
                content = content.replace(/\$\{import\.meta\.env\.VITE_API_URL \|\| "http:\/\/localhost:5000"\}/g, '${API_URL}');
                modified = true;
            }
            
            if (modified) {
                // Calculate relative path for import
                let relPath = path.relative(path.dirname(fullPath), path.join(__dirname, 'src', 'config.js')).replace(/\\/g, '/');
                if (!relPath.startsWith('.')) relPath = './' + relPath;
                
                const importStmt = `import { API_URL } from "${relPath}";\n`;
                if (!content.includes('import { API_URL }')) {
                    const lines = content.split('\n');
                    let lastImport = -1;
                    for (let i = 0; i < lines.length; i++) {
                        if (lines[i].startsWith('import ')) {
                            lastImport = i;
                        }
                    }
                    if (lastImport !== -1) {
                        lines.splice(lastImport + 1, 0, importStmt.trim());
                    } else {
                        lines.unshift(importStmt.trim());
                    }
                    content = lines.join('\n');
                }
                
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'src'));
