const crypto = require("crypto"); // in order to generate the uuid
const requestBodyParser = require("../util/body-passer");
const writeToFile = require("../util/write-to-file");
module.exports= async (req, res) => {
    if(req.url === "/api/movies"){
        try{
            let body=await requestBodyParser(req)
            body.id=crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201,{"Content-Type":"application/json"});
            res.end();
        } catch(err){
            console.log(err);
            res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request Body is not valid",
        })
      );
        }
    }
};