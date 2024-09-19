import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    firebaseUid!: string;

    @Column({ unique: true })
    username!: string;

    @Column()
    email!: string;

    @CreateDateColumn()
    createdAt!: Date;
}
