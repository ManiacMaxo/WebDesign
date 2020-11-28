import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm'

@Entity()
export class Games extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
