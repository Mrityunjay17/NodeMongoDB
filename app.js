const http=require("http");
const app=require("./Server/server");
var server=http.createServer(app);

const port =3000;

server.listen(port,()=>{
    console.log(`Server Start On Port Number ${port}`);
});