import React from 'react'
import './App.css'
import {useState} from 'react'

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)

  // function changeFirstHandler(event){
  //   // console.log("printing last name")
  //   // console.log(event.target.value)
  //   setFirstName(event.target.value)
  // }

  // function changelastHandler(event){
  //   // console.log("printing first name")
  //   // console.log(event.target.value)
  //   setLastName(event.target.value)
  // }
  
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isVisible:true,
    mode:"",
    favCar:""
  })

  console.log(formData)

  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        // [event.target.value]:event.target.value
        // [name] : value
        [name] : type==="checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault()
    console.log("Finally print the entire application form data")
    console.log(formData)
  }
 
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br/>
        <input 
          type="text"
          placeholder='first name'
            onChange = {changeHandler}
            name = "firstName"
            value = {formData.firstName}
          />
          <br/>
          <br></br>
          <input 
            type="text"
            placeholder='last name'
            onChange = {changeHandler} 
            name = "lastName"
            value = {formData.lastName}
            />
          <br/>
          <br></br>
          <input
            type="text"
            placeholder='abc@gmail.com'
            onChange = {changeHandler}
            name = "email"
            value = {formData.email}
            />
            <br/>
            <br></br>
            <textarea
              placeholder='enter comment here'
              onChange={changeHandler}
              name="comments"
              value={formData.comments}
              />
            <br/>
            <br></br>
            <fieldset>
              <legend>Mode</legend>
            <input
              type="checkbox" 
              onChange={changeHandler}
              name="isVisible"
              id = "isVisible"
              checked={formData.isVisible}
            />
            <label htmlFor='isVisible'>Am I visible ?</label>
            <br/>
            <br/>
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value= "Online-Mode"
              id="Online-Mode"
              checked = {formData.mode === "Online-Mode"}
            />
            <label htmlFor='Online-Mode'>Online Mode</label>
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Offline-Mode"
              id="Offline-Mode"
              checked = {formData.mode === "Offline-Mode"}
            />
            <label htmlFor='Offline-Mode'>Offline Mode</label>
            </fieldset>

             <br/>
            <label htmlFor='favCar'>Tell me your favourite Car</label>
            <select
            name="favCar"
            id="favCar"
            value={formData.favCar}
            onChange={changeHandler}
          >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>

          </select>
            <br/>
            <br/>
            <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// controlled components -> maintain state inside component
