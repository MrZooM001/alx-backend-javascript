const http = require('http');
const fs = require('fs');


const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
    if (!path) {
        reject(new Error('Cannot load the database'));
    }

    if (path) {
        fs.readFile(path, (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            }
            if (data) {
                const resultParts = [];
                const studentGroups = {};
                const lines = data.toString('utf-8').trim().split('\n');
                const dbField = lines[0].split(',');
                const studentNames = dbField.slice(0, dbField.length - 1);

                for (const line of lines.slice(1)) {
                    if (line.trim() === '') continue;

                    const record = line.split(',');
                    const values = record.slice(0, record.length - 1);
                    const field = record[record.length - 1];
                    if (!Object.keys(studentGroups).includes(field)) {
                        studentGroups[field] = [];
                    }
                    // eslint-disable-next-line max-len
                    const studentEntries = studentNames.map((name, index) => [name, values[index]]);
                    studentGroups[field].push(Object.fromEntries(studentEntries));
                }

                const totalStudents = Object.values(studentGroups)
                    .reduce((previous, current) => (previous || []).length + current.length);

                resultParts.push(`Number of students: ${totalStudents}`);
                for (const [field, group] of Object.entries(studentGroups)) {
                    resultParts.push([
                        `Number of students in ${field}: ${group.length}.`,
                        'List:',
                        group.map((student) => student.firstname).join(', ')
                    ].join(' '));
                }

                resolve(resultParts.join('\n'));
            }
        });
    }
});

const SERVER_ROUTE_HANDLERS = [
    {
        route: '/',
        handler(_, res) {
            const text = 'Hello Holberton School!';

            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', text.length);
            res.statusCode = 200;
            res.write(Buffer.from(text));
        },
    },
    {
        route: '/students',
        handler(_, res) {
            const response = ['This is the list of our students'];

            countStudents(DB_FILE).then((report) => {
                response.push(report);
                const text = response.join('\n');
                res.setHeader('Content-Type', 'text/plain');
                res.setHeader('Content-Length', text.length);
                res.statusCode = 200;
                res.write(Buffer.from(text));
            }).catch((err) => {
                response.push(err instanceof Error ? err.message : err.toString());
                const text = response.join('\n');
                res.setHeader('Content-Type', 'text/plain');
                res.setHeader('Content-Length', text.length);
                res.statusCode = 200;
                res.write(Buffer.from(text));
            });
        },
    }
];

app.on('request', (req, res) => {
    for (const routeHandler of SERVER_ROUTE_HANDLERS) {
        if (routeHandler.route === req.url) {
            routeHandler.handler(req, res);
            break;
        }
    }
});

app.listen(1245, 'localhost', () => {
    process.stdout.write(`small HTTP server is listening on: http://localhost:1245\n`);
});

module.exports = app;
