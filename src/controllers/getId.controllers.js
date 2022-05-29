const json = require ('../../data/data.json')
//console.log(json)
const getId = (req, res,next) => {
   const { id } = req.params;
   try {
     const data = json.map((el) => {
       return {
         id: el.imdbID,
         title: el.Title,
         year: el.Year,
         type: el.Type,
         image: el.Poster,
       };
     });
     //console.log(data)

     if (id) {
       const infoId = data.filter((el) => el.id == id);
       // console.log(infoId)
       infoId.length
         ? res.status(200).send(infoId)
         : res.status(400).send("no se encontró ID");
     }
   } catch (error) {
     next(error);
   }
}

module.exports = {
    getId
}