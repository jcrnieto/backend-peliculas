const json = require('../../data/data.json');
//console.log(json)

const allMovie = async (req,res,next)=>{
    const { title } = req.query;
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
      // console.log(data)
      // res.status(200).send(data)
      if (title) {
        const dataTitle = data.filter((el) =>
          el.title.toLowerCase().includes(title.toLowerCase())
        );
        dataTitle
          ? res.status(200).send(dataTitle)
          : res.status(400).send("no se encontró pelicula");
      } else {
        res.status(200).send(data);
      }
    } catch (error) {
      next(error);
    }
}

module.exports = {
    allMovie
}