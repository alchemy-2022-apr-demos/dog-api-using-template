const { Router } = require("express");

const dogs = [
  { id: "1", name: "Benny", age: 7 },
  { id: "2", name: "Finley", age: 4 },
];

const router = Router();

router
  .get("/:id", (req, res) => {
    console.log("id param:", req.params.id);
    const dog = dogs.find((dog) => dog.id === req.params.id);
    res.json(dog);
  })
  .get("/", (req, res) => {
    res.json(dogs);
  });

module.exports = router;
