import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SiteSettings } from './entities/site-logo.entity';
import { CreateLogoDto } from './dto/create-logo.dto';

@Injectable()
export class LogoService {
  constructor(
    @InjectRepository(SiteSettings)
    private readonly settingsRepository: Repository<SiteSettings>,
  ) {}

  async getActiveSettings(): Promise<SiteSettings> {
    let settings = await this.settingsRepository.findOne({
      where: { isActive: true },
      order: { id: 'DESC' },
    });

    if (!settings) {
      settings = this.settingsRepository.create({
        isActive: true,
      });
      await this.settingsRepository.save(settings);
    }

    return settings;
  }

  async updateSettings(dto: CreateLogoDto): Promise<SiteSettings> {
    let settings = await this.settingsRepository.findOne({
      where: { isActive: true },
      order: { id: 'DESC' },
    });

    if (!settings) {
      settings = this.settingsRepository.create({ ...dto, isActive: true });
    } else {
      Object.assign(settings, dto);
    }

    return this.settingsRepository.save(settings);
  }
}
