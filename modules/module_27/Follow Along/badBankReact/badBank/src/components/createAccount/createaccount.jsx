import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './createAccount.css'

function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div id='card' className="d-flex justify-content-center col text-center">
                <Card bg='secondary' text='white' border='dark' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Create Account</Card.Title>
                        <Card.Text>
                            <p>Name</p>
                            <input type='text' id='name' placeholder='Enter a Name'/><br/><br/>
                            <p>Email</p>
                            <input type="text" id="email" placeholder='Enter an Email Address'/><br/><br/>
                            <p>Password</p>
                            <input type="text" id="email" placeholder='Enter a Password'/><br/><br/>
                            <Button variant="primary">Submit</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
    )
}

export default CreateAccount;