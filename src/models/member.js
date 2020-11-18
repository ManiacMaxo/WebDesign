const db = require('../util/db')

module.exports = class Member {
    constructor(email, pass) {
        this.email = email
        this.pass = pass
    }

    save() {
        return db
            .query(`INSERT INTO members (email, pass) VALUES ($1, $2) RETURNING id`, [this.email, this.pass])
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static getById(id) {
        return db.query(`SELECT * FROM members WHERE id = $1`, [id])
    }
}
