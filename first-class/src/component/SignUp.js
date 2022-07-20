import { useState } from "react"

// const SignUp = ({registerStudent})=>{ 
//     const [firstname, setfirstname] = useState("")
//     const [lastname, setlastname] = useState("")
//     const [email, setemail] = useState("")
//     const [password, setpassword] = useState("")
function SignUp(){
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allUsers, setallUsers] = useState("")
  const registerStudent=()=>
  {
    console.log(firstname,lastname,email,password)
    let newUser = {firstname,lastname,email,password}
    setallUsers(()=>{
        let newAllUsers = [...allUsers,newUser]
        console.log(newAllUsers)
    })
    localStorage.allUsers = JSON.stringify(allUsers)
  }

    return(
        <>
            <div className='col-6 shadow-sm'>
                <h1 className='text-center'>Sign Up or Register</h1>
                <input type="text" placeholder='First Name' className='my-2 form-control' onChange={(event) => setfirstname(event.target.value)} value={firstname} />
                <input type="text" placeholder='Last Name' className='my-2 form-control' onChange={(event) => setlastname(event.target.value)} value={lastname}/>
                <input type="email" placeholder='Email' className='my-2 form-control' onChange={(event) => setemail(event.target.value)} value={email}/>
                <input type="password" placeholder='Password' className='my-2 form-control' onChange={(event) => setpassword(event.target.value)} value={password}/>
                <button onClick={()=>registerStudent(firstname,lastname,email,password)} className='btn btn-success'>SignUp</button>
          </div>
        </>
    )
}
export default SignUp