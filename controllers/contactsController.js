const Contact = require('../models/Contact');

// GET all
const getAllContacts = async (req, res) => {
    try {
        //#swagger.tags=['Users']
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET by ID
const getContactById = async (req, res) => {
    try {
        //#swagger.tags=['Users']
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createContact = async (req, res) => {
    try {
        //#swagger.tags=['Contact']
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !birthday) {
            return res.status(400).json({ message: "All required fields must be filled" });
        }

        const response = await Contact.create({
            firstName,
            lastName,
            email,
            favoriteColor,
            birthday
        });

        res.status(201).json(response);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
}

// PUT Upadate cntact
const updateContact = async (req, res) => {
    try {
        //#swagger.tags=['Contact']
        const contactId = req.params.id;

        // Update only fields provided in req.body
        const updatedContact = await Contact.findByIdAndUpdate(
            contactId,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json(updatedContact);

    } catch (err) {
        res.status(500).json({ message: err.message });
    };
}


// PUT Upadate cntact
const deleteContact = async (req, res) => {
    try {
        //#swagger.tags=['Contact']
        const contactId = req.params.id;

        const deletedContact = await Contact.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(204).send();

    } catch (err) {
        res.status(500).json({ message: err.message });
    };
}

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};