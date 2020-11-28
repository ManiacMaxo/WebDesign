import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm'
import { Users } from '.'

@Entity()
export class Articles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    thumbnail: string

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string

    @OneToOne(() => Users)
    @JoinColumn()
    author: Users
}
