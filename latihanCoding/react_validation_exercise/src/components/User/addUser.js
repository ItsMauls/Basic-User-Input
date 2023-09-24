import { useState } from "react"
import Button from "../UI/button"
import ErrorModal from "../UI/errorModal"

const AddUser = props => {
    let [enteredUserName, setUserName] = useState('')
    let [enteredAge , setAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = e => {
     e.preventDefault()
        console.log('clicked!')
      if(enteredAge.trim().length === 0 || enteredUserName.trim().length === 0) {
        setError({
            title : 'Invalid Input',
            message : 'Masukkan nama dan umur yang valid, dan tidak boleh kosong'
        })
        return
      }
      if(+enteredAge < 1) {
        setError({
            title : 'Invalid Input',
            message : 'Umur Tidak Boleh Dibawah 1'
        })
        return
      }
      props.addUser(enteredUserName, enteredAge)
      setUserName('')
      setAge('')
      
    }
    const userNameHandler = event => {
        setUserName(event.target.value)
        console.log(event.target.value)
    }
    const getAgeHandler = event => {
        setAge(event.target.value)
    }
    const removeError = event => {
        setError(null)
    }
return (
        <div className="my-4 pl-4" onClick={removeError}>
    {error && <ErrorModal
      title = {error.title}
      message = {error.message}
      onConfirm = {removeError}/>
     }

            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text"
                    className="text-center block border border-black"
                    value={enteredUserName}
                    onChange={userNameHandler}>
                </input>
                <label htmlFor="age">Age</label>
                <input type="number"
                    className="text-center border border-black block"
                    value={enteredAge}
                    onChange={getAgeHandler}>
                </input>
               <Button type='submit' onClick = {removeError}>Klik disini!</Button>
            </form>
        </div>
   
)
}

export default AddUser