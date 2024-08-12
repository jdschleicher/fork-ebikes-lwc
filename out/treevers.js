'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const fs = require('fs');
const path = require('path');
function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, arrayOfFiles);
        } else {
            arrayOfFiles.push(filePath);
        }
    });
    return arrayOfFiles;
}
// Usage
const directoryPath = 'force-app/main/default/objects';
const allFiles = getAllFiles(directoryPath);
console.log(allFiles);
//# sourceMappingURL=treevers.js.map
