import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm'
import { Player } from '.'

@Entity('games')
export class Game {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    slug: string

    @BeforeInsert()
    slugify() {
        this.slug = this.name.toLowerCase().split(' ').join('-')
    }
}
