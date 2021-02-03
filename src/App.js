import React, {useState}  from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Input from './components/Input';
import './App.css';

function App() {

  // Here we fetch data from an API to use in our app
  // Data has to be fetched in the Parent component and passed on 
  // to the child components via PROPS

  const [items, addTask] = useState([
  ]);

  const [err, showErr] = useState('no-empty');
  const [fade, setFade] = useState('no');


 

    // Function to submit task and display onto screen
    const submitItem = (e) => {
      e.preventDefault();
    
    
      // Add the new item to the state array
      const toAdd = e.target.newTask.value;
      const upperCaseTask = toAdd.charAt(0).toUpperCase() + toAdd.slice(1);
      if (toAdd) {
        const newList = [...items, 
          {
            task: upperCaseTask,
            id: 2231
          }]
  
        // New task
        addTask(newList);
        showErr('no-empty')
      } else {
        showErr('show-error')
        setFade('fade')
      }

      // const newList = [...items, 
      //       {
      //         task: upperCaseTask,
      //         id: 2231
      //       }];

      // (toAdd) ? addTask(newList),showError('no-empty') : showErr('show-error');

      e.target.newTask.value = '';
    };

    // Use this or Ternary operator (LINE BELOW)
    // let onTheList = null;
    // if(items) {
    //   onTheList = items.map(item => (
    //     <TodoList task={item.task} key={item.id} />
    //   ));
    // };
 
    const onTheList = items.map(item => (
      < TodoList task={item.task} key={item.id} />
    ));

  return (
    <div className="conainer-fluid ">
      < Header/>
      <div className="container text-center top">
        <div className="row">
          <div className="col-lg-12 bg-primary mt-4 card p-3 shadow-lg">
            <h1>Add all components here</h1>
            <h1>To do Lists</h1>
            {/* {onTheList} */}
            {(items) ? onTheList : false}
          
          
          </div>
        </div>
        < Input submitTask={submitItem} showError={err} fade={fade}/>
      </div>
        
      <Footer />
    </div>
    
  )
};

export default App;