import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SellingService } from './selling.service';

@Controller('selling')
export class SellingController {
    constructor(private sellingService: SellingService){}

    @EventPattern("adopt_animal")
    async handlerAnimalAdoption(carId: number){
        this.sellingService.updateCarSelling(Number(carId))
    }

}
