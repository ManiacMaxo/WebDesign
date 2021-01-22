import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
