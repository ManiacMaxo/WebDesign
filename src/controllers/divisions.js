const Person = require('../models/person')

exports.getAllPlayers = (req, res, next) => {
    Person.getAll().then((result) => {
        return res.render('division', { title: 'All', players: result.rows })
    })
}

exports.getByGame = (req, res, next) => {
    if (req.params.game === 'all') {
        return res.redirect('/divisions')
    }
    Person.getByGame(req.params.game).then((result) => {
        return res.render('division', { title: result.rows[0].game, players: result.rows })
    })
}
