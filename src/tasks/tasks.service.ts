import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  //   private tasks: Task[] = [];
  //   getTaskData() {
  //     return this.tasks;
  //   }
  //   findTask(id: string): Task {
  //     return this.tasks.find((task) => task.id === id);
  //   }
  //   createTask(CreateTaskDto: CreateTaskDto): Task {
  //     const { title, description } = CreateTaskDto;
  //     const task: Task = {
  //       id: uuid(),
  //       title,
  //       description,
  //       status: TaskStatus.OPEN,
  //     };
  //     this.tasks.push(task);
  //     return task;
  //   }
  //   deleteTask(id: string): void {
  //     this.tasks = this.tasks.filter((task) => task.id != id);
  //   }
}
