import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('applications')
export class Application {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 32 })
    name: string

    @Column({ length: 32 })
    game: string

    @Column()
    age: number

    @Column({ length: 64, unique: true })
    email: string

    @Column({ length: 64 })
    twitter: string

    @Column({ length: 64 })
    youtube: string
}
