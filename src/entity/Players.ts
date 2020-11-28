import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm'
import { Games } from './Games'

@Entity()
export class Players extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column('text')
    description: string

    @Column()
    picture: string

    @Column()
    age: number

    @OneToOne((type) => Games)
    @JoinColumn()
    game: Games
}
