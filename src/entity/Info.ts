import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import { User } from '.'

@Entity()
export class Info {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string

    @Column({ type: 'timestamp' })
    timestamp: Date

    @OneToOne(() => User)
    @JoinColumn()
    admin: User
}
