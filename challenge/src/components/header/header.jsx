import React from "react";
import GroupBy from "../../molecule/header/GroupBy.jsx";
import Search from "../../molecule/header/search.jsx";
const Header = () => {
    return(
      <div>
        <Search/>
        <GroupBy/>
      </div>  
    )
}
export default Header;