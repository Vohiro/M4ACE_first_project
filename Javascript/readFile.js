const fs = require('fs');

const filename = 'example.txt';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:');
        console.log(data);
    }
});
