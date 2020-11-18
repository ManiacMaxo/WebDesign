const db = require('../util/db')

module.exports = class Person {
    constructor(name, description, picture, games) {
        this.name = name
        this.description = description
        this.picture = picture
        this.games = games
    }

    save() {
        return db
            .query(`INSERT INTO people (name, description, picture) VALUES ($1, $2, $3) RETURNING id`, [
                this.name,
                this.description,
                this.picture,
            ])
            .then((res) => {
                this.id = res.rows[0].id
                let values = []
                this.games.forEach((game) => {
                    values.append([this.id, game])
                })
                db.query(`INSERT INTO games VALUES $1`, values)
            })
    }

    static getAll() {
        return db.query(`SELECT * FROM people`)
    }

    static getById(id) {
        return db.query(`SELECT * FROM people WHERE id = $1`, [id])
    }

    static getByGame(game) {
        return db.query(`SELECT * FROM people JOIN games USING (id) WHERE game = $1`, [game])
    }

    static getGames(id) {
        return db.query(`SELECT * FROM games WHERE id = $1`, [id])
    }
}
