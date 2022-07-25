const { Router } = require('express');
const { dogs } = require('../../data/dogs');
const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param:', req.params.id);
    const dog = dogs.find((dog) => dog.id === req.params.id);
    res.json(dog);
  })
  .get('/', (req, res) => {
    console.log(dogs);
    const ids = dogs.map((dog) => ({ id: dog.id, name: dog.name }));
    console.log(ids);
    res.json(ids);
  });

module.exports = router;
