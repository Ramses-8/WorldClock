const express = require("express");
const cities = require("../../db/entities");

const router = express.Router();

router.get('/', async (req, res) => {
    const data = await cities.all()
    res.send(data);
});

router.get('/:id', async (req, res) => {
    const data = await cities.get(req.params.id)
    if (data) {
        res.status(200).send(data);
    } else {
        res.status(404).send("Id not found");
    }

});

module.exports = router;