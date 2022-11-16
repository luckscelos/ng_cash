import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
class Account{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    balance:number
}
export default Account