import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbarAndFooter/Navbar";

import {Footer} from "./layouts/navbarAndFooter/Footer";
import {HomePage} from "./layouts/HomePage/HomePage";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () =>{
  return (
      <div>
        <Navbar />
            {/*<HomePage/>*/}
          <SearchBooksPage />
          <Footer />
      </div>
  );
}

