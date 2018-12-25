const mongoose=require("mongoose");

const openConnection=function(dbName){
    
    mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`,{ useNewUrlParser: true },(error)=>{
       if(error!=null){
        console.log(error);
       }
    })

    mongoose.connection.once("open",()=>{
        console.log("Connection establishes to Data Base");
    }).on("error",(error)=>{
        console.log(`Data base Error ${error}`);
    });

}

const closeConnection=function(){
    mongoose.connection.close((error)=>{
        if(error!=undefined || error !=null){
            console.log(error);
        }else{
            console.log("MongoDb Connection Close");
        }
    });
}

module.exports={
    openConnection:openConnection,
    closeConnection:closeConnection
}
