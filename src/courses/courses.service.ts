import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do NestJS',
      description: 'curso de nestjs completo',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[courseIndex] = updateCourseDto;
  }

  remove(id: string) {
    const courseIndex = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (courseIndex >= 0) {
      this.courses.splice(courseIndex, 1);
    }
  }
}
