import React from 'react';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllStudents from './components/AllStudent';
import SearchStudent from './components/SearchStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/add' element={<AddStudent />} />
          <Route path='/show' element={<AllStudents />} />
          <Route path='/search' element={<SearchStudent />} />
          <Route path='/update' element={<UpdateStudent />} />
          <Route path='/delete' element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
