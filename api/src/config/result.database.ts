import mongoose,{connect} from "mongoose"

function connects(){
    return connect('mongodb+srv://sksk:sabin@cluster0.lxfzmqn.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Database Connected!")
    }).catch((error:any)=>{
        console.log(error)
    })
}

export default connects