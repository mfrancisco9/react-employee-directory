import React from 'react';

const Header = (props) => {
  return (

    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">Employee Directory</div>
      <form
        className="form-inline"
        onSubmit={props.handleFormSubmit}>
        
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.handleInputChange} />
        
      </form>
    </nav>

  );
};

export default Header;