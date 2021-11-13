const express = require('express')
const router = express.Router()

const {
  getPeople,
  findPersonByName,
  findPersonById,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

router.get('/', getPeople)
router.post('/', findPersonByName)
router.post('/:id', findPersonById)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

//router.route('/').get(getPeople).post(findPerson)
//router.route('/postman').post(findPersonPostman)
//router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router