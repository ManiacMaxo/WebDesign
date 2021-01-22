import {
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn
} from 'typeorm'
import { User, Item } from '.'

@Entity('carts')
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @ManyToOne(() => Item, (item) => item)
    item: Item
}
