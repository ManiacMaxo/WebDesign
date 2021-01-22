import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Image } from '.'

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 64 })
    title: string

    @Column('text')
    body: string

    @Column()
    price: number

    @OneToMany(() => Image, (image) => image.item)
    images: Image[]
}
