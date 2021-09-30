const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  contacts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Contact'
    }
  ],
  token: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
