import { Controller, Get, Post, Body, Delete , Param } from '@nestjs/common'
import { ExtinctAnimalService } from '../ExtinctAnimals/services/extinct.animal.service';

@Controller('extinctanimals')
export class ExtinctAnimalsController {
    constructor(private service: ExtinctAnimalService) { }
    @Get('all')
    async GetAll() {
        return await this.service.getAll();
    }

    @Post('add')
    async Add(@Body() animal: any) {
        await this.service.add(animal);
    }

    @Post('update/:id')
    async Update(@Body() animal: any) {
        await this.service.update(animal);
    }
    @Delete('delete/:id')
    async Delete(@Param('id') id){
      await this.service.delete(id);
    }
}