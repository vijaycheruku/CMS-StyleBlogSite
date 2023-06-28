const router = require('express').Router();
const { Category, Product } = require('../../models');

//get all categories
router.get('/', (req, res) => {
  Category.findAll({
      include: [Product]
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(error);
      res.status(500).json(err);
    });
});

//get category by id
router.get('/:id', (req, res) => {
  Category.findOne({
      where: { id: req.params.id },
      include: [Product]
    })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.status(500).json(err);
    });;
});

//create a category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      res.status(500).json(err);
    });
});

//update category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
      where: { id: req.params.id }
    })
    .then(data => {
      res.json({ message: 'Category updated.' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//delete category
router.delete('/:id', (req, res) => {
  Category.destroy({
      where: { id: req.params.id }
    })
    .then(data => {
      res.json({ message: 'Category deleted.' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
