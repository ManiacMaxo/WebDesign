import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Info {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string
}
