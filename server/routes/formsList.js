const router = require('express').Router();
let form = require('../models/formsList');

router.route('/').get((req, res) => {
    Form.find()
        .then(forms => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const form = req.body.formName;

    const newForm = new Form({formName});

    newForm.save()
        .then(() => res.json('Form added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;