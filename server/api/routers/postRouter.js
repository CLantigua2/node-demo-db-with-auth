const { getPosts, getPostsByUserId } = require('../helpers/');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const posts = await getPosts();
        if (posts) {
            return res.status(200).json(posts)
        } else {
            return res.status(400).json({ message: 'posts dont exist' });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const posts = await getPostsByUserId(id);
        if (posts) {
            return res.status(200).json(posts)
        } else {
            return res.status(400).json({ message: 'posts dont exist' });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }
})

module.exports = router;