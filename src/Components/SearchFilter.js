import React, { useEffect, useState } from 'react';

function SearchFilter(){

    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["capital", "name", "numericCode"]);
    const [filterParam, setFilterParam] = useState(["All"]);


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cdfd3facfamshaff162ea70bc960p1e21e5jsn9af279d30d2d',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://covid-193.p.rapidapi.com/countries', options)
        .then(response => response.json())
        .then(resObj => setItems(resObj))
        .catch(err => setError(err));

    },[setItems]);

    function search(items) {
        return items.filter((item) => {
            if (item.region == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if(error) {
        return(
            <p>{error.message}, if you get this error there might be an issue with the API </p>
        );
    }else{
        return(
            <div className="wrapper">
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        <span className="sr-only">Search countries here</span>
                    </label>

                    <div className="select">
                        <select
                            onChange={(e) => {
                                setFilterParam(e.target.value);
                            }}
                            className="custom-select"
                            aria-label="Filter Countries By Region"
                        >
                            <option value="All">Filter By Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                        <span className="focus"></span>
                    </div>
                </div>
                {/* <ul className="card-grid">
                    {items.map((item) => (
                        <li>
                            <article className="card" key={item.alpha3Code}>
                                <div className="card-image">
                                    <img
                                        src={item.flag.large}
                                        alt={item.name}
                                    />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{item.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            population:{" "}
                                            <span>{item.population}</span>
                                        </li>
                                        <li>
                                            Region: <span>{item.region}</span>
                                        </li>
                                        <li>
                                            Capital: <span>{item.capital}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul> */}
            </div>
        );
    }
}

export default SearchFilter;