import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm'
import { Game } from './Game'

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column('text')
    description: string

    @Column()
    picture: string

    @Column({ length: 32 })
    country: string

    @Column()
    age: number

    @ManyToMany(() => Game)
    @JoinTable()
    games: Game[]
}
