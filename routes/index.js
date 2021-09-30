const router = require('express').Router();
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => res.send('Welcome User'));

// Register Login Routes
router.use('/', require('./users'));

// Contact Routes
router.use('/contact/', require('./contacts'));

module.exports = router;