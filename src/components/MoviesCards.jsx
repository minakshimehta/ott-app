import React from "react";
import "../styles/MoviesCards.css";
import { genres } from "../constants/genres";
import { useNavigate } from "react-router-dom";

export const DramaCards = ({ moviesDataArr, genreName }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cardHeader">{genreName}</div>
      <div className="moviesCard">
        <div>
          <div className="container-fluid">
            <div class="row">
              {moviesDataArr.map((moviesData) => (
                <div className="col-3" key={moviesData.id} onClick={() => navigate(`/movie-information/${moviesData.id}`)}>
                  <div className="card">
                    <img src={moviesData?.image?.medium} class="card-img-top" />
                    <div className="card-body">
                      <div className="card-title">{moviesData.name}</div>
                      <p className="summary_info"
                        dangerouslySetInnerHTML={{
                          __html: moviesData.summary,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const FictionCards = ({ moviesDataArr, genreName }) => {
  return (
    <>
      <div className="cardHeader">{genreName}</div>
      <div className="moviesCard">
        <div>
          <div className="container-fluid">
            <div class="row">
              {moviesDataArr.map((moviesData) => (
                <div className="col-3" key={moviesData.id}>
                  <div className="card">
                    <img src={moviesData?.image?.medium} class="card-img-top" />
                    <div className="card-body">
                      <div className="card-title">{moviesData.name}</div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: moviesData.summary,
                        }}
                        class="card-text"
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export const ThrillerCards = ({ moviesDataArr, genreName }) => {
  return (
    <>
      <div className="cardHeader">{genreName}</div>
      <div className="moviesCard">
        <div>
          <div className="container-fluid">
            <div class="row">
              {moviesDataArr.map((moviesData) => (
                <div className="col-3" key={moviesData.id}>
                  <div className="card">
                    <img src={moviesData?.image?.medium} class="card-img-top" />
                    <div className="card-body">
                      <div className="card-title">{moviesData.name}</div>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: moviesData.summary,
                        }}
                        class="card-text"
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
