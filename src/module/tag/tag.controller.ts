import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  async findAllTags(): Promise<string[]> {
    const users = await this.tagService.findAllTags();
    return users.map((user) => user.name); // Assuming 'User' has a 'name' property of type string
  }
  @Post('')
  async createUser(@Body() createUserDto: any): Promise<TagEntity> {
    return this.tagService.createUser(createUserDto);
  }
}
