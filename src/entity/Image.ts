import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Item } from '.'

@Entity('images')
export class Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => Item)
    item: Item
}
