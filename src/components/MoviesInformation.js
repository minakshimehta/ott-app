import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MoviesInfo.css";

const MoviesInformation = () => {
    const [information, setInformation] = useState([]);
    const params = useParams();

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
            const data = await res.json();
            setInformation(data);
        })();
    }, []);
    console.log(information);
    return (
        <div>
            <div className="info_Container">
                <div class="row">
                    <div className="col-md-4 col-sm-6 col-lg-4 col-xs-12">
                        <div className="card Info">
                            <img src={information.image?.medium} class="card-img-top" />

                        </div>
                    </div>
                    <div className="col-md-8 col-sm-6 col-lg-8 col-xs-12">
                        <div  className="summary">
                            <p className="title_info">{information.name}
                            </p>
                            <p dangerouslySetInnerHTML={{
                                __html: information.summary,}}>
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default MoviesInformation;