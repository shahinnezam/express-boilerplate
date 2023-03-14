var express = require('express');
const Media = require('../database/schemas/Media');
var router = express.Router();

// CREATE
// Create a new image post
router.post('/', (req, res) => {
  const createImage = async (req, res) => {
    console.log(req.body);
    const newimage = new Media({
      id: req.body.id,
      source: req.body.source,
      title: req.body.title,
      created_on: req.body.created_on,
    });
    try {
      await newimage.save();
      res.status(201).json(newimage);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
});

// READ
// Read all media
router.get('/', (req, res, next) => {
  const getMedia = async (req, res) => {
    try {
      const images = await Media.find();
      res.status(200).json(images);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
});

// Read a single media
router.get('/:id', (req, res) => {
  const getspecImage = async (req, res) => {
    const image = req.params.roll;
    try {
      const image = await Media.findOne({ roll: roll });
      res.status(200).json(image);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
});

// UPDATE
// Update a media with id
router.put('/:id', (req, res, next) => {});

// DELETE
// Delete a media with id
router.delete('/:id', (req, res, next) => {});

module.exports = router;
