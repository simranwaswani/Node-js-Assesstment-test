const chalk = require("chalk");

// Simple welcome message
function welcome(user = "Developer") {
  console.log(chalk.green("Welcome, " + user + "!"));
}

// Simple info message
function info(message) {
  console.log(chalk.blue("Info: " + message));
}

// Simple warning message
function warning(message) {
  console.log(chalk.yellow("Warning: " + message));
}

// Simple error message
function error(message) {
  console.log(chalk.red("Error: " + message));
}

// Simple menu
function showMenu() {
  console.log(chalk.cyan("1.") + " Start new project");
  console.log(chalk.cyan("2.") + " View activity log");
  console.log(chalk.cyan("3.") + " Update configuration");
  console.log(chalk.cyan("4.") + " Exit");
}

// Demo
welcome("Node Explorer");
info("Fetching configuration...");
warning("Low disk space.");
error("Database connection failed.");
showMenu();
