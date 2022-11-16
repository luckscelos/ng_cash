import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import Account from './accounts.entity';

@Entity()
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60, unique:true})
    username:string

    @Column({ length: 60})
    password:string

    @OneToOne(()=>Account,{
        eager:true
    })@JoinColumn()
    accountId:Account
}
export default User;