const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { 
  getAllContacts, 
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactsController');

// GET all contacts
router.get('/', getAllContacts);

// GET single contact by ID
router.get('/:id', getContactById);

// POST to create a contact
router.post('/', createContact);

// PUT to update a single contact
router.put('/:id', updateContact);

// DELETE to delete a single contact
router.delete('/:id', deleteContact);

module.exports = router;
