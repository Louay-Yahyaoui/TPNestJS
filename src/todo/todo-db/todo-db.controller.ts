import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put, Query, UseGuards
} from "@nestjs/common";
import { TodoDbService } from './todo-db.service';
import { AddTodoDto } from '../Dto/addTodoDto';
import { UpdateDto } from '../Dto/updateDto';
import { SearchDto } from "../Dto/searchDto";
import { AuthUserMiddleware } from "../../auth-user/auth-user.middleware";

@Controller({
  path: 'todo',
  version: '2',
})

export class TodoDbController {
  constructor(private todoService: TodoDbService) {}

  @Post()
  addTodo(@Body() data: AddTodoDto): void {
    this.todoService.addTodo(data);
    console.log('todo added in v2');
  }

  @Put(':id')
  updateTodo(@Body() data: UpdateDto, @Param('id', ParseIntPipe) id: number) {
    this.todoService.updateTodo(id, data);
  }
  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): void {
    this.todoService.deleteTodo(id);
  }
  @Delete('soft-delete/:id')
  softDelete(@Param('id', ParseIntPipe) id: number): void {
    this.todoService.softDeleteTodo(id);
  }
  @Patch(':id')
  restoreTodo(@Param('id', ParseIntPipe) id: number): void {
    this.todoService.restaurerTodo(id);
  }
  @Get('count')
  countByStatut(){
    return this.todoService.countByStatus();
  }

  @Get('all')
  getByCritere(@Query() searchCritere : SearchDto ){
    return this.todoService.getTodos();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id : number){
    return this.todoService.todoById(id);
  }

}
