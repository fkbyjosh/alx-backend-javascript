// Display welcome message
process.stdout.write('Welcome to ALX, what is your name?\n');

// Check if running interactively (TTY) or with piped input
if (process.stdin.isTTY) {
  // Interactive mode
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  // Piped input mode
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  // Handle exit event to show closing message for piped input
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
