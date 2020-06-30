const db = require('../db')

module.exports = class Article {
    constructor(name, body, thumbnailURL, news, authorid) {
        this.name = name
        this.body = body
        this.thumbnailURL = thumbnailURL
        this.news = news
        this.authorid = authorid
    }

    save() {
        return db
            .query(
                `INSERT INTO articles (name, body, thumbnailURL, authorid) VALUES ($1, $2, $3, $4, $5) RETURNING id`,
                [
                    this.name,
                    this.body,
                    this.thumbnailURL,
                    this.news,
                    this.authorid,
                ]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static getById(id) {
        return db.query(`SELECT * FROM articles WHERE id = ?`, [id])
    }

    static getByName(name) {
        return db.query(`SELECT * FROM articles WHERE name = ?`, [name])
    }

    static getNews() {
        return db.query(`SELECT * FROM articles WHERE news = 1`)
    }

    static getAll() {
        return db.query(`SELECT * FROM articles`)
    }
}
