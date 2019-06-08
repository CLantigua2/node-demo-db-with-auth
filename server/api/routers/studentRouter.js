const { getStudents, getStudent } = require('../helpers');
const router = require('express').Router();
const { restricted } = require('../../config/restricted');

router.get('/', async (req, res) => {
    try {
        const Students = await getStudents()
        if (Students) {
            return res.status(200).json(Students)
        } else {
            res.status(400).send({ message: 'Students not found' })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).send(err)
    }

})

router.get('/:id', restricted, (req, res) => {
    getStudent(req.params.id)
        .then(Student => {
            res.status(200).json(Student);
        })
        .catch(err => {
            res.status(500).json({ error: 'server done broke', err })
        })
})

module.exports = router;