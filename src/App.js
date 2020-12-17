import './App.css'
import axios from 'axios'
import * as yup from 'yup'
import Form from './Form'
import React, { useState, useEffect} from 'react';
import schema from './schema'

//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

const initialDisabled = true;


function App() {

 //////////////// STATES ////////////////  
const [users, setUsers] = useState([]);
const [formValues, setFormValues] = useState( initialFormValues );
const [errors, setErrors] = useState(initialErrors);
const [disabled, setDisabled] = useState(initialDisabled);


//////////////// HELPERS ////////////////
const getUsers = () => {
  axios.get("")
  .then()
  .catch()
}

// post new user
const postNewUser = (newUserArg) => {
  axios.post('https://reqres.in/api/users', newUserArg).then( res => {
    setUsers([res.data, ...users]);
    setFormValues(initialFormValues);
  }
  )
  .catch( err => {
    console.log(err)
    debugger
  })
}

 //////////////// EVENT HANDLERS ////////////////

 const inputChange = (name, value) => {
   yup
   .reach(schema, name)
   .validate(value) // validate this value
      .then(() => {
        // happy path and clear the error
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch((err) => {
        setErrors({
          ...errors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

      setFormValues({
        ...formValues,
        [name]: value, // NOT AN ARRAY
      });
 }

 // submit handler 
 const submit = () => {
   const newUser = {
     username: formValues.username.trim(),
     email: formValues.email.trim(),
     password: formValues.password.trim(),
     termsOfService: formValues.termsOfService
   }
   postNewUser(newUser)
 }

 //////////////// SIDE EFFECTS ////////////////
 useEffect(() => {
  getUsers();
}, []);

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);


  return (
    <div className="App">
      <div className="errors">
      {errors.username}<br/>
      {errors.email}<br/>
      {errors.password}<br/>
      {errors.termsOfService}<br/>
      </div>
      <Form values = {formValues} setFormValues = {setFormValues} users={users} change = {inputChange} disabled={disabled} submit={submit}/>
    <div>
      <h2>Users</h2>
      {JSON.stringify(users)}
    </div>
    </div>
  );
}

export default App;
