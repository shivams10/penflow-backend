import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private userRepository: Repository<TagEntity>,
  ) {}
  findAllTags(): Promise<TagEntity[]> {
    return this.userRepository.find();
  }
  async createUser(userData: Partial<TagEntity>): Promise<TagEntity> {
    const newUser = this.userRepository.create(userData); // Create a new User instance
    return await this.userRepository.save(newUser); // Save the new User to the database
  }
}
