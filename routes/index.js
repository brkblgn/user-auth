const router = require('express').Router();
const auth = require('../middleware/auth');
const { createDummy } = require('../config/faker');

router.get('/', auth, (req, res) => res.send('Welcome User'));

// Register Login Routes
router.use('/', require('./users'));

// Contact Routes
router.use('/contacts/', require('./contacts'));

router.get('/createdummy', async (req, res) => {
    await createDummy(10);
    res.send('done.');
});

module.exports = router;