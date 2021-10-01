const router = require('express').Router();
const Contact = require('../model/contact');
const User = require('../model/user');
const jwt = require('jsonwebtoken');

//All contacts
router.get('/', async (req, res) => {
    try {
        //const user = jwt.decode(req.headers.authorization).user_id;
        //const contacts = await User.findOne({ _id: user }, 'contacts').populate('contacts');
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Contact by ID
router.get('/:id', async (req, res) => {
    try {
        //const user = jwt.decode(req.headers.authorization).user_id;

        //const isUserHaveContact = await User.findOne({ _id: user, contacts: { $in: [req.params.id] } });
        /*
        if (isUserHaveContact) {
            const contact = await Contact.findById({ _id: req.params.id });
            res.status(200).json(contact);
        } else res.status(404).send('Contact didn\'t find.');
        */
       const contact = await Contact.findOne({ _id: req.params.id });
       res.status(200).json(contact);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Create Contact
router.post('/', async (req, res) => {
    try {
        const { name, email, address, jobPosition, phone, mobile, website,
            taxID, contactType, parentID } = req.body;

        //const user = jwt.decode(req.headers.authorization).user_id;

        const contact = await Contact.create({
            name, email, address, jobPosition, phone, mobile, website,
            taxID, contactType, parentID
        });

        //await User.findByIdAndUpdate(user, { $push: { contacts: contact._id } }, { new: true });

        res.status(201).json(contact);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Update Contact
router.patch('/:id', async (req, res) => {
    try {
        //const user = await jwt.decode(req.headers.authorization).user_id;

        /*const isUserHaveContact = await User.findOne({ _id: user, contacts: { $in: [req.params.id] } });
        if (isUserHaveContact) {
            const contact = await Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(200).json(contact);
        } else res.status(404).send('Contact didn\'t find.');*/
        const contact = await Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json(contact);

    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Delete Contact
router.delete('/:id', async (req, res) => {
    try {
        /*const user = await jwt.decode(req.headers.authorization).user_id;

        const isUserHaveContact = await User.findOne({ _id: user, contacts: { $in: [req.params.id] } });
        if (isUserHaveContact) {
            await User.updateOne({ _id: user }, { $pull: { contacts: req.params.id } });
            const contact = await Contact.findOneAndDelete({ _id: req.params.id });

            res.status(200).json(contact);
        } else res.status(404).send('Contact didn\'t find.');*/
        const contact = await Contact.findOneAndDelete({ _id: req.params.id });

        res.status(200).json(contact);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
