const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    unique: true,
  },
  source: {
    file: { type: Buffer, required: true },
    filename: { type: String, required: true },
    mimetype: { type: String, required: true },
  },
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: mongoose.SchemaTypes.Date,
    required: true,
    default: new Date(),
  },
});

module.exports = mongoose.model('medias', MediaSchema);
