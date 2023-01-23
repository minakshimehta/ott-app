import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { DramaCards, FictionCards , ThrillerCards } from "./MoviesCards";
import { genres } from "../constants/genres";

const moviesToFetch = 10;

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let promiseArr = [];
    for (let i = 1; i < moviesToFetch; i++) {
      const getData = async () => {
        const res = await fetch(`https://api.tvmaze.com/shows/${i}`);
        const data = await res.json();
        return data;
      };
      promiseArr.push(getData());
    }
    Promise.all(promiseArr).then((data) =>
      data.length ? setData(data) : setData([])
    );
  }, []);

  const drama = data.filter((item) => item.genres.includes(genres.Drama));
  const fiction = data.filter((item) => item.genres.includes(genres.Fiction));
  const thriller = data.filter((item) => item.genres.includes(genres.Thriller));

  return (
    <div>
      <Navbar />
      <DramaCards moviesDataArr={drama} genreName={genres.Drama} />
      <FictionCards moviesDataArr={fiction} genreName={genres.Fiction} />
      <ThrillerCards moviesDataArr={thriller} genreName={genres.Thriller} />

    </div>
  );
};

export default HomePage;
