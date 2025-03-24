const { CityRepository } = require('../repository/index');


class cityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }
    // behaviour to create city which internally calls repository  layer to intereacts with database
    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data);
            return city;

        }
        catch(err) {
            console.log("something went wrong at service layer");
            throw {err};
        }

    }
    // behaviour to delete city which internally calls repository  layer to intereacts with database

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepository.deleteCity(cityId);
            return city;
        }
        catch(err) {
            console.log("something went wrong at service layer");
        }

    }

    // behaviour to update city which internally calls repository  layer to intereacts with database
    async updateCity(cityId , data){
        try {
            const city = await this.cityRepository.updateCity(cityId , data);
            return city;
        }
        catch(err) {
            console.log("something went wrong at service layer");
        }

    }

    // behaviour to get city which internally calls repository  layer to intereacts with database

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
        }
        catch(err) {
            console.log("something went wrong at service layer");
        }

    }
}