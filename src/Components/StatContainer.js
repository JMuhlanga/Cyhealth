import React, {useState} from "react";
import Search from "./Search";

function StatContainer(){

    const [search, setSearch] = useState("");
    return(
        <>
            <Search search={search} setSearch={setSearch} />
            
        </>
    );
}

export default StatContainer;