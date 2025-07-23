const { Router } = require('express');
const router = Router();

router.post('/users', () => {});
router.get('/users', () => {});
router.get('/users/:id', (req, res) => {});
router.patch('/users/:id', (req, res) => {});
router.delete('/users/:id', (req, res) => {});

router.post('/phones', () => {});
router.get('/phones', () => {});
router.get('/phones/:id', (req, res) => {});
router.patch('/phones/:id', (req, res) => {});
router.delete('/phones/:id', (req, res) => {});

module.exports = router;
