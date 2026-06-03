import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// Entidad para el perfil del usuario
@Entity({ name: 'profiles' })
export class Profile {
  // ID autogenerado para cada perfil
  @PrimaryGeneratedColumn()
  id: number | undefined;
  // Nombre del usuario, no puede ser nulo
  @Column({ type: 'varchar', length: 255 })
  name: string | undefined;
  // Apellido del usuario, no puede ser nulo
  @Column({ type: 'varchar', length: 255, name: 'last_name' })
  lastName: string | undefined;
  // URL del avatar del usuario, no puede ser nulo
  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string | undefined;
  // Fecha de creación del perfil, se establece automáticamente
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'created_at' })
  createdAt: Date | undefined;
  // Fecha de última actualización del perfil, se actualiza automáticamente
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', name: 'updated_at' })
  updatedAt: Date | undefined;
}
