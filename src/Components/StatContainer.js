import React, {useState} from "react";
import Search from "./Search";
import StatTable from "./StatTable";

function StatContainer(){

    const [search, setSearch] = useState("");
    const [items , setItems] = useState([]);
    return(
        <>
            <Search search={search} setSearch={setSearch} />
            <StatTable items={items} setItems={setItems} search={search} setSearch={setSearch} />

        </>
    );
}

export default StatContainer;