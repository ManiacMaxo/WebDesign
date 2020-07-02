const db = require('../util/db')

module.exports = class Application {
    constructor(name, email, twitter, youtube, game, age) {
        this.name = name
        this.email = email
        this.twitter = twitter
        this.youtube = youtube
        this.game = game
        this.age = age
    }

    save() {
        return db
            .query(
                `INSERT INTO applications (name, email, twitter, youtube, game, age) VALUES (?, ?, ?, ?, ?, ?) RETURNING id`,
                [
                    this.name,
                    this.email,
                    this.twitter,
                    this.youtube,
                    this.game,
                    this.age,
                ]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static getAll() {
        return db.query(`SELECT * FROM applications`)
    }

    static getByAge(age) {
        return db.query(`SELECT * FROM applications WHERE age = ?`, [age])
    }

    static getByGame(game) {
        return db.query(`SELECT * FROM applications WHERE game = ?`, [game])
    }
}
