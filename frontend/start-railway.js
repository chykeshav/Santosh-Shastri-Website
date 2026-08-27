const { spawn } = require('child_process');
const path = require('path');

// Get port from environment or default to 3000
const port = process.env.PORT || 3000;

console.log(`🚀 Starting Santosh Shastri Frontend on port ${port}`);
console.log(`📁 Serving from: ${path.join(__dirname, 'dist')}`);

// Start the serve command
const serve = spawn('npx', ['serve', '-s', 'dist', '-l', port], {
  stdio: 'inherit',
  cwd: __dirname
});

serve.on('error', (err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});

serve.on('close', (code) => {
  console.log(`🔴 Server process exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully');
  serve.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully');
  serve.kill('SIGINT');
});