const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `DB connected: ${conn.connection.host}`.cyan.underline.green
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
