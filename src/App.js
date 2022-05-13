import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Container = styled.div`
  max-width: 1140px;
  margin: auto;
`;

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Container>
          <Header />

          <Routes>
            <Route path='/' element={<Task1 />}></Route>
            <Route path='/task2' element={<Task2 />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
