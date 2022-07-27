const { Router } = require('express');
const Dog = require('../models/Dog');

// const router = Router();

module.exports = Router()
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const dog = await Dog.getById(req.params.id);
    console.log(dog);
    // const dog = dogs.find((dog) => dog.id === req.params.id);
    res.json(dog);
  })
  .get('/', async (req, res) => {
    const dogs = await Dog.getAll();
    const ids = dogs.map((dog) => ({ id: dog.id, name: dog.name }));
    res.json(ids);
  });

// module.exports = router;
