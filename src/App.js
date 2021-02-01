import React from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div className="conainer-fluid ">
      < Header/>
      <div className="container text-center top">
        <div className="row">
          <div className="col-lg-12 bg-primary mt-4 card p-3 shadow-lg">
            <h1>Add all components here</h1>
            <h1>To do Lists</h1>
            < TodoList/>
            < TodoList/>
            < TodoList/>
            < TodoList/>
          
          < Input />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    
  )
}

export default App

