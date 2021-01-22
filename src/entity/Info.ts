import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import { Admin } from '.'

@Entity()
export class Info {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string

    @OneToOne(() => Admin)
    @JoinColumn()
    admin: Admin
}
