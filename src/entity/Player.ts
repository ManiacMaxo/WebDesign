import {
    BeforeInsert,
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from 'typeorm'
import { Game } from '.'

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column({ length: 16, nullable: true })
    position: string

    @Column('text')
    description: string

    @Column()
    picture: string

    @Column({ length: 32 })
    country: string

    @Column()
    age: number

    @Column({ unique: true })
    slug: string

    @BeforeInsert()
    slugify() {
        this.slug = this.name.toLowerCase().split(' ').join('-')
    }

    @ManyToMany(() => Game)
    @JoinTable()
    games: Game[]
}
