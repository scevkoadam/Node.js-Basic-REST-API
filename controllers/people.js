let {people} = require('../data')
let newPeople = people
let newPerson = {id: -1, name: "newName"}

const getPeople = (req, res) => {
  res.status(200).json({success: true, data: people})
}

const findPersonByName = (req, res) => {
  const {name} = req.body
  let person = people.find((person) => person.name === name)

  if (!person) {
    return res.status(400).json({success: false, msg: `Sorry, no such person with name ${req.body.name}.`})
  }
  res.status(201).send({success: true, person: name})
}

const findPersonById = (req, res) => {
  const {id} = req.params
  let person = people.find((person) => person.id === Number(id))
  
  if (!person) {
    return res.status(400).json({success: false, msg: `Sorry, no such person with id ${req.params.id}.`})
  } 
  
  const name = person.name
  res.status(201).send({success: true, id: id, person: name})
}

const updatePerson = (req, res) => {
  const {id} = req.params
  const {name} = req.body

  let person = people.find((person) => person.id === Number(id))

  if (!person) {
    newPerson.id = Number(id)
    newPerson.name = name
    newPeople.push(newPerson)
    newPerson = {id: -1, name: "newName"}
  } else {
    newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
  }

  people = newPeople
  res.status(200).json({success: true, data: people})
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({success: false, msg: `Wrong ID! No such person with id ${req.params.id}.`})
  }
  newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  people = newPeople
  return res.status(200).json({success: true, data: people})
}


module.exports = {
  getPeople,
  findPersonByName,
  findPersonById,
  updatePerson,
  deletePerson
}
