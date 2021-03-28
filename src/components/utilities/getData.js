const getData = (title, key, setMovies) => {
  if (title.length !== 0) {
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${title}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => {
        throw err;
      });
  }
};

export default getData;
