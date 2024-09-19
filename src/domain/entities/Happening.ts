import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './User';

@Entity('events')
export class Happening {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    title!: string

    @Column('text')
    place!: string

    @Column('timestamp with time zone')
    date!: Date

    @Column('geography', { spatialFeatureType: 'Point', srid: 4326 })
    location!: string

    @Column()
    eventType!: string

    @ManyToOne(() => User, (user) => user.id)
    createdBy!: User

    @CreateDateColumn()
    createdAt!: Date
}
