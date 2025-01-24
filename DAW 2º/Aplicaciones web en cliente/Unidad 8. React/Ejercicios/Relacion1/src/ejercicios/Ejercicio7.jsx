import { useState } from 'react';

export function Ejercicio7() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleGreet = () => {
        alert(`Hello ${firstName} ${lastName}!`);
    };

    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <button type="button" onClick={handleGreet}>Greet Me</button>
            </form>
        </div>
    );
};

export default Ejercicio7;