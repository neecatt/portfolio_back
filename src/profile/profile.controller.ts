import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  get() { return this.profileService.get(); }

  @Patch()
  update(@Body() body: any) { return this.profileService.update(body); }
}
