const fs = require('fs');

const content = 'Hello, File System!';
const filename = 'example.txt';

fs.writeFile(filename, content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log(`Successfully wrote "${content}" to ${filename}`);
    }
});
