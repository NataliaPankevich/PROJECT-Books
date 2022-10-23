import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {HomePage} from '../pages/HomePage/HomePage';
import {BookPage} from '../pages/BookPage/BookPage';
import {Layout} from '../components/Layout/Layout';

export const RoutingBlock=()=>{
    return (
        <div>    
    
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<HomePage />}/>
              <Route path="page/:id" element={<BookPage />}/>
            </Route>                  
    
          </Routes>
          
        </div>
      );

}