const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'activity.log');
const dataDirectoryPath = path.join(__dirname, 'data');

const getTimestamp = () => new Date().toISOString();

function createLogFile() {
  try {
    const firstMessage = `Assessment started at ${getTimestamp()}`;
    //synchronous writing
    fs.writeFileSync(logFilePath, firstMessage, 'utf8');
    console.log('Log file created (synchronous)');
  } catch (error) {
    console.error('Failed to create log file:', error.message);
  }
}
//asynchronous method
async function appendLog(message) {
  try {
    const entry = `[${getTimestamp()}] ${message}\n`;
    await fs.promises.appendFile(logFilePath, entry, 'utf8');
    console.log('Log entry appended (asynchronous)');
  } catch (error) {
    console.error('Failed to append log:', error.message);
  }
}
//reading and displaying all logs
async function readLogs() {
  try {
    const data = await fs.promises.readFile(logFilePath, 'utf8');
    console.log('Activity Log');
    console.log(data.trim() || 'No log found');
  } catch (error) {
    console.error('Failed to read logs:', error.message);
  }
}
// directory name data creating

function createDirectory() {
  try {
    if (!fs.existsSync(dataDirectoryPath)) {
      fs.mkdirSync(dataDirectoryPath, { recursive: true });
      console.log('Directory "data" created');
    } else {
      console.log('Directory "data" exists');
    }
  } catch (error) {
    console.error('Failed to create directory:', error.message);
  }
}

//listing files in curr directory
async function listFiles() {
  try {
    const files = await fs.promises.readdir(__dirname);
    console.log('Files in current directory:');
    files.forEach((file) => console.log(`- ${file}`));
  } catch (error) {
    console.error('Failed to list files:', error.message);
  }
}

async function runDemo() {
  createDirectory();
  createLogFile();
  await readLogs();
  await listFiles();
}

if (require.main === module) {
  runDemo();
}

module.exports = {
  createLogFile,
  appendLog,
  readLogs,
  createDirectory,
  listFiles,
};
