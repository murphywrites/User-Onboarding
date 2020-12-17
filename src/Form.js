
function Form(props) {
   const  {values, change, disabled, submit} = props

   const onChange = (evt) => {

    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  }
  


  return (
    <div className="Form">
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit">
                <h2>Add a User</h2>

                <label>
                    Name: 
                    <input
                    value={values.username}
                    onChange={onChange}
                    name="username"
                    type="text"
                    />
                </label>
                <label>
                     Email: 
                    <input
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                    />
                </label>
                <label>
                     Password: 
                    <input
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="text"
                    />
                </label>
                <label>
                     Terms of Service: 
                    <input
                    checked={values.termsOfService}
                    onChange={onChange}
                    name="termsOfService"
                    type="checkbox"
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </div>
        </form>
    </div>

  
  );
}

export default Form;
