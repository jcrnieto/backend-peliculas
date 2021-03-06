const json = require('../../data/data.json')
//console.log(json)

const filterSeries = (req,res,next) => {
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
     if (type === "series") {
       const infoType = data.filter((el) => el.type === "series");
       infoType
         ? res.status(200).send(infoType)
         : res.status(400).send("no de encontrĂ³ tipo");
     }
    //  if (type === "series") {
    //    const infoType = data.filter((el) => el.type === "series");
    //    infoType
    //      ? res.status(200).send(infoType)
    //      : res.status(400).send("no de encontrĂ³ tipo");
    //  }
   } catch (error) {
     next(error);
   }
}

module.exports = {
    filterSeries
}