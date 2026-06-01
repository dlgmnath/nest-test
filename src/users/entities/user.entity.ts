import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string | undefined;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string | undefined;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date | undefined;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt: Date | undefined;

  @OneToOne(() => Profile, { nullable: true, cascade: true })
  @JoinColumn({ name: 'profile_id' })
  profile?: Profile;
}
