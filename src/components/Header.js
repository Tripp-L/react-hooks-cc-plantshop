import React from "react";
import Search from "./Search";

function Header({ setSearchTerm }) { // Header component that recieves 'setSearchTerm' as prop

  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <Search setSearchTerm={setSearchTerm} /> {/* renders 'Search' component and passes down 'setSearchTerm' as prop */}
    </header>
  );
}

export default Header;
