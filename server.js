const app = require('./src/app');
const connectDB = require('./src/config/db');

// Connect to the database and start the server
connectDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
