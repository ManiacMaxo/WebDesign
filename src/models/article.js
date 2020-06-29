const db = require('../db')

module.exports = class Article {
    constructor(name, body, thumbnailURL, author) {
        this.name = name
        this.body = body
        this.thumbnailURL = thumbnailURL
        this.author = author
    }

    save() {
        return db
            .query(
                `INSERT INTO articles (name, body, thumbnailURL, author) VALUES ($1, $2, $3, $4) RETURNING id`,
                [this.name, this.body, this.thumbnailURL, this.author]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static getById(id) {
        return db.query(`SELECT * FROM articles WHERE id = %1`, [id])
    }
}
