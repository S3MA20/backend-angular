
import { register } from '../repository/User.repository';

const registerUser = async(req,res) => {
    try{
        const user = req.body;
        const response = await register(user);
        res.status(200).json(response)
    }catch(err){
        res.status(500).send(err);
    }
    
}

export default {
    registerUser
}