import React, {useEffect, useState} from "react";
import CountryTable from "./CountryTable";

function StatTable(){

    const [error, setError] = useState(null);
    const [items , setItems] = useState([]);
    const filteredCountries = items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))

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

    const ctable = filteredCountries.map((country) => {
        return(
            <CountryTable items={items} setItems = {setItems} key = {items.id}  country={items.country} cases = {items.cases.total} population = {items.population} deaths ={items.deaths.total} tests = {items.tests.total}  />
        );

    });

    return (
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">Country</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Population</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Cases</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Deaths</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Tests</h3>
              </th>
            </tr>
            {ctable}
          </tbody>
        </table>
      );


}

export default StatTable;