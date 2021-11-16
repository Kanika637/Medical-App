import React from "react";
function Searchbar(){
return (

<div class="search">
   <input type="text" class="searchTerm" placeholder="Hey, Go and Search for the Doctors and save a life!"/>
   <button type="submit" class="searchButton">
     <i class="fa fa-search"></i>
  </button>
</div>

);
}
export default Searchbar;