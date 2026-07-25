import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteSettings } from './entities/site-logo.entity';
import { LogoService } from './logo.service';
import { LogoController } from './logo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SiteSettings])],
  controllers: [LogoController],
  providers: [LogoService],
  exports: [LogoService],
})
export class LogoModule {}
