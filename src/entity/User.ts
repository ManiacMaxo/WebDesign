import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Article } from './Article'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    picture: string

    @Column()
    age: number

    @OneToMany(() => Article, (article) => article.author)
    articles: Article[]
}
