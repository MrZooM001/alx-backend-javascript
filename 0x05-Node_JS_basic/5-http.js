const http = require('http');
const fs = require('fs');

const app = http.createServer();
const dbFile = proces.argv.length > 2 ? proces.argv[2] : '';

const countStudents = (path) => new promise((resolve, reject) => {
    if (!path) {
        reject(new Error('Cannot load the database'));
    }

    if (path) {
        fs.readFile(path, (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            }

            if (data) {
                const parts = [];
                const lines = data.toString('utf-8').trim().split('\n');
                const 
            }
        });
    }
});







app.listen(1245, 'localhost', () => {
    process.stdout.write('small HTTP server is listening on: http://localhost:1245\n');
});

module.exports = app;
