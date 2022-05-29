const json = require('../../data/data.json')
//console.log(json)

const filterType = (req,res,next) => {
   const { type } = req.query;
   try {
     let data = json.map((el) => {
       return {
         title: el.Title,
         year: el.Year,
         id: el.imdbID,
         type: el.Type,
         image: el.Poster,
       };
     });
     //console.log(data)
     if (type === "movie") {
       const infoType = data.filter((el) => el.type === "movie");
       infoType
         ? res.status(200).send(infoType)
         : res.status(400).send("no de encontró tipo");
     }
     if (type === "series") {
       const infoType = data.filter((el) => el.type === "series");
       infoType
         ? res.status(200).send(infoType)
         : res.status(400).send("no de encontró tipo");
     }
   } catch (error) {
     next(error);
   }
}

module.exports = {
    filterType
}