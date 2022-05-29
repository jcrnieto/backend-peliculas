const json = require ('../../data/data.json')
//console.log(json)

const filterAge = async (req,res,next)=>{
    const { year } = req.query;
    try {
      const data = await json.map((el) => {
        return {
          title: el.Title,
          year: el.Year,
          id: el.imdbID,
          type: el.Type,
          image: el.Poster,
        };
      });
      //res.send(data)
      //console.log(data[0].year)

      if (year === "ASC") {
        let yearDesc = data.sort(function (a, b) {
          if (a.year > b.year) {
            return 1;
          }
          if (b.year > a.year) {
            return -1;
          }
          return 0;
        });
        res.send(yearDesc);
        console.log(yearDesc);
      }

      if (year === "DESC") {
        let yearDesc = data.sort(function (a, b) {
          if (a.year < b.year) {
            return 1;
          }
          if (b.year < a.year) {
            return -1;
          }
          return 0;
        });
        res.send(yearDesc);
        console.log(yearDesc);
      }
    } catch (error) {
      next(error);
    }
}

module.exports = {
    filterAge
}