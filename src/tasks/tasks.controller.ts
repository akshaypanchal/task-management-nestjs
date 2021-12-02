import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  //   @Get()
  //   getTaskData(): Task[] {
  //     return this.taskService.getTaskData();
  //   }

  //   @Get('/:id')
  //   findTask(@Param('id') id: string): Task {
  //     const found = this.taskService.findTask(id);
  //     if (!found) {
  //       throw new NotFoundException();
  //     }
  //     return found;
  //   }

  //   @Post()
  //   createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
  //     return this.taskService.createTask(CreateTaskDto);
  //   }

  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     return this.taskService.deleteTask(id);
  //   }
}
