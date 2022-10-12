import {useState} from 'react';
import * as usersService from '../../utilities/users-service';
import "./LoginForm.css"

export default function LoginForm({setUser}) {
    // initial state, username and password is set to empty string
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    // error code is set to empty string
    const [error, setError] = useState('');

    // on change grab the data and update the state
    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
        setError('');
    }

    // on submit call the API endpoint and setUser state
    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <div className="form-container-log-in">

                <form className='sign-in-form' autoComplete="off" onSubmit={handleSubmit}>
                    <label className='label-in-signin-form'>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required/>
                    <label className='label-in-signin-form'>Password</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange}
                    required/>
                    <button className='sl-button' type="submit">LOG IN</button>
                </form>

            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}