import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Contacts route 1');
});

// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
});

// Get a contact by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
});

// to-do: add post, put, and delete routers

export default router;
