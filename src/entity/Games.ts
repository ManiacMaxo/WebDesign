import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeInsert } from 'typeorm'

@Entity()
export class Games extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    slug: string

    @BeforeInsert()
    slugify() {
        this.slug = this.name.toLowerCase().split(' ').join('-')
    }
}
