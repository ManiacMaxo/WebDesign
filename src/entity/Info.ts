import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Info extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string
}
