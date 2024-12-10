const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const path = require('path');
const Data = require('./models/Data');

require('dotenv').config(); 

const app = express();


app.use(cors());
app.use(express.json());
async function feedDataToModel() {
  // Path to your JSON file
  const filePath = path.join(__dirname, 'jsondata.json');

  try {
    // Read JSON file
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    // Insert data into MongoDB using Mongoose model
    const insertedData = await Data.insertMany(jsonData);
    console.log('Data inserted successfully:', insertedData.length, 'documents inserted.');

  } catch (error) {
    console.error('Error feeding data to model:', error);
  } 
}


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected',()=>{
  console.log("connected to mongodb")
})
feedDataToModel();
// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
