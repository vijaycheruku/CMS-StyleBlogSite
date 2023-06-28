const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//read all tag
router.get('/', (req, res) => {
  Tag.findAll({
      include: [Product]
    })
    .then(data => res.json(data))
    .catch(err => {
      res.status(500).json(err);
    });
});

//get a tag by id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Product]
  })
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

//create a tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      res.status(500).json(err);
    });
});

//update tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
      where: { id: req.params.id }
    })
    .then(data => {
      res.json({ message: 'Tag updated.' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//delete tag by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: { id: req.params.id }
  })
  .then(data => {
      res.json({ message: 'Tag deleted.' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
