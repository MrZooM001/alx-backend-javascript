const express = require("express");
const fs = require("fs");


const app = express();
const port = 1245;
const dbFile = process.argv.length > 2 ? process.argv[2] : "";

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error("Cannot load the database"));
  }

  if (path) {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(new Error("Cannot load the database"));
      }
      if (data) {
        const resultParts = [];
        const studentGroups = {};
        const lines = data.toString("utf-8").trim().split("\n");
        const dbField = lines[0].split(",");
        const studentNames = dbField.slice(0, dbField.length - 1);

        for (const line of lines.slice(1)) {
          if (line.trim() === "") continue;

          const record = line.split(",");
          const values = record.slice(0, record.length - 1);
          const field = record[record.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentNames.map((name, index) => [name, values[index]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups)
          .reduce((previous, current) => (previous || []).length + current.length);

        resultParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          resultParts.push([
            `Number of students in ${field}: ${group.length}.`,
            "List:",
            group.map((student) => student.firstname).join(", ")
          ].join(" "));
        }

        resolve(resultParts.join("\n"));
      }
    });
  }
});

app.get("/", (_, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (_, res) => {
  const response = ["This is the list of our students"];

  countStudents(dbFile).then((report) => {
    response.push(report);
    const text = response.join("\n");
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", text.length);
    res.statusCode = 200;
    res.write(Buffer.from(text));
  }).catch((err) => {
    response.push(err instanceof Error ? err.message : err.toString());
    const text = response.join("\n");
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", text.length);
    res.statusCode = 200;
    res.write(Buffer.from(text));
  });
});

app.listen(port, () => {
  console.log(`more complex express server is listening on: http://localhost:${port}`);
});

module.exports = app;
