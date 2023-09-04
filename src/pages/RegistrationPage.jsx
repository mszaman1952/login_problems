import { useState } from "react";
import axios from 'axios';

const RegistrationPage = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [mobile, setMobile] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/v1/register',{
                name,
                email,
                mobile,
                password
            });
            setMessage(response.data.message);
            // clear allFields 
            setName('');
            setEmail('');
            setMobile('');
            setPassword('');
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }

    return (
        <div>
            <h1>Registration Page</h1>

            <form action="" onSubmit={handleSubmit}>

                <div className="form-group">
                    <label> Name : </label>
                    <input value={name} onChange={(e) =>setName(e.target.value)} className="form-control" type="text" placeholder="Enter Your Name" />
                </div>

                <div className="form-group">
                    <label>Email :</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="text" placeholder="Enter Your Email"/>
                </div>
 
                <div className="form-group">
                    <label>Mobile : </label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" type="text" placeholder="Enter Your Mobile No"/>
                </div>

                <div className="form-group">
                    <label>Password : </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="text" placeholder="Enter Your Password" />
                </div>

                <button className="btn btn-primary w-25" type="submit">Submit</button>

            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegistrationPage;