import db from '../db'

export class Person {
    constructor(name, description, picturelURL, position) {
        this.name = name
        this.description = description
        this.picturelURL = picturelURL
        this.position = position
    }

    save() {
        return db
            .query(
                `INSERT INTO people (name, description, picturelURL, position) VALUES ($1, $2, $3, $4) RETURNING id`,
                [this.name, this.description, this.picturelURL, this.position]
            )
            .then((res) => {
                this.id = res.rows[0].id
            })
    }

    static getById(id) {
        return db.query(`SELECT * FROM people WHERE id = %1`, [id])
    }

    static getByPosition(position) {
        return db.query(`SELECT * FROM people WHERE position = %1`, [position])
    }
}
