const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const comments = require('../comments');

router.get('/', (req, res) => res.json(comments));

router.post('/', (req, res) => {
    const newComment = { ...req.body, id: uuid.v4() };

    if (!newComment.name || !newComment.comment) {
        return res.status(400).json({ msg: 'Please fill all fields.' });
    }

    comments.push(newComment);
    res.json(comments);
});

module.exports = router;