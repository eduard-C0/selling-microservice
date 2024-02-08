import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellingService {
    constructor(private prisma: PrismaService) {}
    
    async updateCarSelling(id: number) {
      return await this.prisma.car.update({
        where: {id: id},
        data: {sold: true},
      })
    }
}