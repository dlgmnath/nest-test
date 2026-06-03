import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';

// Entidad para el usuario
@Entity({ name: 'users' })
export class User {
  // ID autogenerado para cada usuario
  @PrimaryGeneratedColumn()
  id: number | undefined;
  // Contraseña del usuario, puede ser nula
  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string | undefined;
  // Correo electrónico del usuario, debe ser único
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string | undefined;
  // Fecha de creación del usuario, se establece automáticamente
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date | undefined;
  // Fecha de última actualización del usuario, se actualiza automáticamente
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt: Date | undefined;
  // Relación uno a uno con el perfil del usuario, con eliminación en cascada
  @OneToOne(() => Profile, { nullable: true, cascade: true })
  @JoinColumn({ name: 'profile_id' })
  profile?: Profile;
}
