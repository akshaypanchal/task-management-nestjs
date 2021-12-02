import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private task = ['akshay'];

  getTaskData() {
    return this.task;
  }
}
