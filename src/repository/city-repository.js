const { City } = require('../models/index');// will get the corresponding models from models folder

class CityRepository {
    // function to createCity and insert in db
    async createCity( {name}) {
        try {
            const city = await City.create({name}); 
            return city;
        }
        catch(error) {
            console.log("Something went wrotn in the repository layer");
            throw {error};

        }
    }
    // function to delete a tuble city from db
    async deleteCity( cityId ) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });

        }
        catch(error) {
            console.log("Something went wrotn in the repository layer");
            throw {error};
        }
    }
    // function to update the city
    async updateCity(cityId , data){
        try {
            const city = await City.update(data, {
                where : {
                    id : cityId
                }
            });

        }
        catch(error) {
            throw {error};
        }
    }

    // function to getCity
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error) {
            throw {error};
        }
    }


}

module.exports = CityRepository;