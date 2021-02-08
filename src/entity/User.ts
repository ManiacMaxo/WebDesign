import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Article } from '.'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @Column({ nullable: true })
    picture: string

    @Column({ nullable: true })
    age: number

    @Column({ default: false })
    admin: boolean

    @OneToMany(() => Article, (article) => article.author)
    articles: Article[]
}
