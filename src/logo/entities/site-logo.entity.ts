import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('site_settings')
export class SiteSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  companyName: string;

  // Header / Navbar Logo
  @Column({ type: 'text', nullable: true })
  logoUrl: string;

  // Footer Logo
  @Column({ type: 'text', nullable: true })
  footerLogoUrl: string;

  // Single Email Field
  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  cityLocation: string;

  @Column({ type: 'text', nullable: true })
  facebookUrl: string;

  @Column({ type: 'text', nullable: true })
  instagramUrl: string;

  @Column({ type: 'text', nullable: true })
  twitterUrl: string;

  @Column({ type: 'text', nullable: true })
  linkedinUrl: string;

  @Column({ type: 'text', nullable: true })
  youtubeUrl: string;

  @Column({ type: 'text', nullable: true })
  whatsappNumber: string;

  @Column({ type: 'text', nullable: true })
  metaTitle: string;

  @Column({ type: 'text', nullable: true })
  metaDescription: string;

  @Column({ type: 'text', nullable: true })
  footerDescription: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
