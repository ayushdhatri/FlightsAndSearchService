const  { CityService } =  require('../services/index');

const cityService = new CityService();

const create = async (req, res)=>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "City Created Successfully",
            err : {}
        })

    }
    catch(error){
        console.log(error);
        console.log(error);
        res.status(501).json({
            data : {},
            success : false,
            messsage : "City Not Created",
            err : err
        });
    }

}

const destroy = async(req, res)=>{
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : city ,
            success : true ,
            message : "City Succesfully Deleted",
            err : {}
            });

    }
    catch(error){
        console.log(error);
        return res.status(501).json({
            data : {}, 
            success : false ,
            message : "City Not deleted Successfully",
            err : error
        });
    }
    
}
// GET :/city/:id
const get = async (req, res)=>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "city with above fetched successfully",
            err : {}
        });

    }
    catch(error){
        console.log(error);
        return res.status(501).json({
            data : {}, 
            success : false ,
            message : "City with given Id does not exist",
            err : error
        });
    }

    
}

const update = async (req, res)=>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : city ,
            success : true ,
            message : "City with the given Id updated successfully",
            err : error 
        });
    }
    catch(error) {
        console.log(error);
        return res.status(501).json({
            data : {}, 
            success : false ,
            message : "City could not be deleted Successfully",
            err : error
        });

    }
    
}