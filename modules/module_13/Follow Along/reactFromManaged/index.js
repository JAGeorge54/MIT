function SignUp() {
    const [values, handleChange] = useForm({year:'Freshman',name:'', email:'', password:'', checkbox:false});

    function handle(){
        console.log('values:', values);
    }

    return (
        <>
        <select name="year" value={values.year} onChange={handleChange}>
            <option>Freshman</option>
            <option>Sophmore</option>
            <option>Junior</option>
            <option>Senior</option>
        </select>
        <div>Name</div>
        <input type="text" name="name" value={values.name} onChange={handleChange}/>
        <div>Email</div>
        <input type="text" name="email" value={values.email} onChange={handleChange}/>
        <div>Password</div>
        <input type="text" name="password" value={values.password} onChange={handleChange}/>
        <div><input type="checkbox" name="checkbox" value={values.checkbox} onChange={handleChange}/>
            Remember me
        </div>
        <button onClick={handle}>Submit</button>
        </>
    );
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)