const db = require('../util/db')

module.exports = class Person {
    constructor(name, description, pictureURL, game) {
        this.name = name
        this.description = description
        this.pictureURL = pictureURL
        this.games = games
    }

    save() {
        return db
            .query(
                `INSERT INTO people (name, description, pictureURL) VALUES (?, ?, ?) RETURNING id`,
                [this.name, this.description, this.pictureURL]
            )
            .then((res) => {
                this.id = res.rows[0].id
                let values = []
                this.games.forEach((game) => {
                    values.append([this.id, game])
                })
                db.query(`INSERT INTO games VALUES ?`, values)
            })
    }

    static getAll() {
        return db.query(`SELECT * FROM people`)
    }

    static getById(id) {
        return db.query(`SELECT * FROM people WHERE id = ?`, [id])
    }

    static getByGame(game) {
        return db.query(
            `SELECT * FROM people JOIN games USING (id) WHERE game = ?`,
            [game]
        )
    }

    static getGames(id) {
        return db.query(`SELECT * FROM games WHERE id = ?`, [id])
    }
}
