import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from '.'

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    thumbnail: string

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string

    @ManyToOne(() => User, (user) => user.articles)
    author: User
}
