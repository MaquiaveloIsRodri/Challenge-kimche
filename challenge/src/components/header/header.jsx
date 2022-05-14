import React from "react";
import GroupBy from "../../molecule/header/GroupBy/GroupBy.jsx";
import Search from "../../molecule/header/search/search.jsx";
const Header = () => {
    return(
      <div>
        <Search/>
        <GroupBy/>
      </div>  
    )
}
export default Header;