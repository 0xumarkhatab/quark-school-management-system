import './App.css';
import Login from './components/Login'
import Menu from './components/Menu/Menu'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Authentication from './components/Authentication/Authentication'
import { db}   from "./firebaseConfig"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useDispatch } from 'react-redux'
import Navbar from './components/Navbar/Navbar'

function App() {
const dispatch=useDispatch();
  let q = query(collection(db, "Classes"));
  let list=[];
  let unsubscribe = onSnapshot(q, (querySnapshot) => {
    list=[];
    querySnapshot.forEach((doc) => {
        list.push(doc.data())
    });
    dispatch({
      type:"CLEAR__CLASSES",
    });
    
    dispatch({
      type:"SET__CLASSESLIST",
      CLASSESLIST:list,
    })

    console.log("the CLASSESS GOT UPDATED ",list);
  
  });
  q = query(collection(db, "Students"));
  list=[];
  unsubscribe = onSnapshot(q, (querySnapshot) => {
    list=[];
    querySnapshot.forEach((doc) => {
        list.push(doc.data())
    });
    dispatch({
      type:"CLEAR__STUDENTS",
    });
    
    dispatch({
      type:"SET__STUDENTSLIST",
      STUDENTSLIST:list,
    })

    console.log("the STUDENTS GOT UPDATED ",list);
  
  });
  q = query(collection(db, "Teachers"));
  list=[];
  unsubscribe = onSnapshot(q, (querySnapshot) => {
    list=[];
    querySnapshot.forEach((doc) => {
        list.push(doc.data())
    });
    dispatch({
      type:"CLEAR__TEACHERS",
    });
    
    dispatch({
      type:"SET__TEACHERSLIST",
      TEACHERSLIST:list,
    })

    console.log("the STUDENTS GOT UPDATED ",list);
  
  });
  
  return (


<Router>

    <div className="app">
    <Navbar/>
    <Routes>
               <Route exact path="/" element={<Authentication />} />
               <Route exact path="/login" element={<Login />} />
               <Route exact path="/menu" element ={<Menu/>}>

               </Route>
               



               
        </Routes>
  </div>
  


  </Router>

  );
}

export default App;
