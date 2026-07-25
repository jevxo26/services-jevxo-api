import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LogoService } from './logo.service';
import { CreateLogoDto } from './dto/create-logo.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../roles/guards/roles.guard';
import { Roles } from '../roles/decorators/roles.decorator';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Get()
  async getSettings() {
    const data = await this.logoService.getActiveSettings();
    return {
      statusCode: HttpStatus.OK,
      message: 'Company branding settings fetched successfully',
      data,
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Super Admin', 'superadmin')
  @HttpCode(HttpStatus.OK)
  async updateSettings(@Body() dto: CreateLogoDto) {
    const data = await this.logoService.updateSettings(dto);
    return {
      statusCode: HttpStatus.OK,
      message: 'Company branding settings updated successfully',
      data,
    };
  }
}
