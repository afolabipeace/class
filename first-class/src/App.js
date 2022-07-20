
// function App() {
//   const [myNumber, setmyNumber] = useState(0)


//   const increment = () => {
//     setmyNumber(myNumber + 1)
//     console.log(myNumber)
//   }

//   // const gender = "male"
//   // const random = Math.floor(Math.random() * 11)
//   const randomise =() =>{
//    const myRandom =  Math.floor(Math.random() * 11)
//    console.log (myRandom)

//   }
//   // const name = ('Pluto');
//   // const age = 12 
//   // const link = "https:/www.google.com/"
//   // //  const myStyle : {}
//   return (
  //     <>
//       <button onClick={randomise}>Randomise</button>
//       <h3>{random > "5" ? <h5>I am a Biggest Number</h5> : <h5>Small Number</h5>}</h3>
//       <h1>{random}</h1>
//     </>
//   )
// }

// 
// // const App = ()=>{
// //   return(
  // //     <div>Hello World</div>
  // //   )
  // // }
  import { useEffect, useState } from 'react'
  import {myStyle} from './style/myStyle'
  import Button from './component/Button'
  import SignUp from './component/SignUp'
  import DisplayStudent from './component/DisplayStudent'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './component/NavBar'
import NotFound from './component/NotFound'
import MoreDetails from './component/MoreDetails'
import Product from './component/Product'
import Register from './component/Register'
import ClassComponent from './component/ClassComponent'
import {useSelector,useDispatch} from 'react-redux'
import {increase,decrease} from './actions/index'
  
  function App() {
    let dispatch = useDispatch()
    let reduxCount = useSelector(state=>state.counter.count)
    console.log(reduxCount)
    const [count, setcount] = useState("")
    useEffect(()=>{
        setcount(reduxCount)
    }, [])
    // console.log(reduxState)
    const [allStudent, setallStudent] = useState([])
    const registerStudent = (newStudent)=>{
    let newAllStudent = [...allStudent,newStudent]
    setallStudent(newAllStudent)
  }
  // const sayHello = ()=>{
  //   alert(`Say Hello`)
  // }
  return (
    <>
    <h1>{reduxCount}</h1>
    <button className='btn btn-primary' onClick={()=>dispatch(increase(10))}>+</button>
    <button className='btn btn-danger' onClick={()=>dispatch(decrease(4))}>-</button>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Navigate to="/"/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/class' element={<ClassComponent title="fish"/>}/>
      <Route path='/about/:id' element={<MoreDetails/>}/>
      <Route path='/product/*' element={<Product/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    {/* // <Button title="Edit" color="btn btn-success" myFunc={sayHello}/>
    // <Button title="Delete" color="btn btn-danger"/>
    // <Button title="Rusticate" color="btn btn-warning"/> */}
      {/* <div classNameName="container">
        <div className="row">
        <SignUp registerStudent={registerStudent}/>
        <DisplayStudent allStudent={allStudent}/>
        </div>
      </div> */}
    </>
  )
}

export default App