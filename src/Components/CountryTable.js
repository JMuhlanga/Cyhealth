import React from "react";

function CountryTable({country,cases,population,deaths,tests}) {
  return (
    <>
        <tr>
          <td>{country}</td>          
          <td>{population}</td>
          <td>{cases}</td>
          <td>{deaths}</td>
          <td>{tests}</td>
        </tr>
    </>
  );
}

export default CountryTable;