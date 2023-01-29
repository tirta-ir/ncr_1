import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';
import { FollowEntity } from 'src/follow/entities/follow.entity';
@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts(){
    return this.articlesService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity })
  @ApiOkResponse({type:FollowEntity})
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async findOne(@Param('id') id: number){
    const article = await this.articlesService.findOne(+id);
    if(!article){
      throw new NotFoundException('NCR RECORD NOT FOUND!');
    }
    return article;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: ArticleEntity })
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
