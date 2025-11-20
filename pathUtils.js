const path = require('path');

function getFileExtension(filePath) {
  return path.extname(filePath);
}

function joinPaths(...segments) {
  return path.join(...segments);
}

function getAbsolutePath(targetPath) {
  return path.resolve(targetPath);
}

function parseFilePath(filePath) {
  const parsed = path.parse(filePath);
  return {
    directory: parsed.dir,
    filename: parsed.name,
    extension: parsed.ext,
  };
}

module.exports = {
  getFileExtension,
  joinPaths,
  getAbsolutePath,
  parseFilePath,
};
