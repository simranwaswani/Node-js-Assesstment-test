const fs = require("fs");
const fsPromises = fs.promises;

// --- Callback Version ---
function processFileCallback(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) return callback(err);

    const output = "processed-" + filename;

    fs.writeFile(output, data.toUpperCase(), "utf8", (err) => {
      if (err) return callback(err);
      callback(null, "Callback processed file saved to " + output);
    });
  });
}

// --- Promise Version ---
function processFilePromise(filename) {
  const output = "processed-" + filename;

  return fsPromises
    .readFile(filename, "utf8")
    .then((data) => fsPromises.writeFile(output, data.toUpperCase()))
    .then(() => "Promise processed file saved to " + output);
}

// --- Async / Await Version ---
async function processFileAsync(filename) {
  const output = "processed-" + filename;

  const data = await fsPromises.readFile(filename, "utf8");
  await fsPromises.writeFile(output, data.toUpperCase());
  return "Async/Await processed file saved to " + output;
}

// --- Demo ---
async function demo() {
  const filename = "input.txt";

  // ensure file exists
  if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, "Node.js async patterns.", "utf8");
  }

  // Callback
  processFileCallback(filename, (err, message) => {
    if (err) return console.log("Callback Error:", err.message);
    console.log(message);
  });

  // Promise
  processFilePromise(filename)
    .then((msg) => console.log(msg))
    .catch((err) => console.log("Promise Error:", err.message));

  // Async/Await
  try {
    const msg = await processFileAsync(filename);
    console.log(msg);
  } catch (err) {
    console.log("Async/Await Error:", err.message);
  }
}

demo();
