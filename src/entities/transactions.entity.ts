import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Account from "./accounts.entity";


@Entity()
class Transactions{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Account, (acount) => acount.id)
    debitedAccountId: Account[] ;

    @OneToMany(() => Account, (acount) => acount.id)
    creditedAccountId: Account[];

    @Column()
    value:number;

    @Column()
    cratedAt: Date;
}
export default Transactions;