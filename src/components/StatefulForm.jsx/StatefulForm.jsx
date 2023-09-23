import { useState } from "react";

const StatefulForm = () => {
    const [email, setEmail] = useState('razu@gmail.com');
    const [password, setpassword] = useState([]);
    const [error, setError] = useState('');

    const handleSubmite = e => {
        e.preventDefault();
        // console.log(email, password) 
        if(password.length < 6){
            setError('Passwoed must be 6 characters or longet')
        }
        else{
            setError('');
        }
        console.log(name, email, password)
    }

    const handleEmailChange = e => {
        // console.log(e.target)
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setpassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmite}>
                <br />
                <input type="text" name="name" placeholder="name"/>
                <br />
                <input value="" onChange={handleEmailChange} type="email" name="email"  placeholder="email" id=""/>
                <br />
                <input onChange={handlePasswordChange } type="password" name="password" placeholder="password" required/>
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;