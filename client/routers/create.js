const express = require('express')
const router = express.Router()

router.get('/person', (req, res, next) => {
    fields = [
        {
            name: 'name',
            required: true,
            type: 'text',
        },
        {
            name: 'description',
            required: true,
            type: 'text',
        },
        {
            name: 'pictureURL',
            required: true,
            type: 'text',
        },
        {
            name: 'age',
            required: true,
            type: 'number',
        },
        {
            name: 'country',
            required: true,
            type: 'text',
        },
        {
            name: 'games',
            required: true,
            type: 'text',
        },
    ]

    res.render('form', {
        action: 'person',
        title: 'add person',
        fields: fields,
    })
})

router.post('/person')

module.exports = router
