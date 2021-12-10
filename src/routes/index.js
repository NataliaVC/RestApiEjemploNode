const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "name": "Natalia",
        "apellidos": "Vasquez Cala"

    };
    res.json(data);
});

module.exports = router;