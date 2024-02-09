import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SellingService } from './selling.service';

@Controller()
export class SellingController {
    constructor(private sellingService: SellingService){}

    @EventPattern("sell_car")
    async handlerAnimalAdoption(carId: number){
        this.sellingService.updateCarSelling(Number(carId))
    }

}
