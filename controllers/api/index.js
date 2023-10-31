const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const exampleRoutes = require('./exampleRoutes');

router.use('/users', exampleRoutes);
router.use('/posts', exampleRoutes);

module.exports = router;
