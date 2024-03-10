import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState([{accounts: [
        {
            'name': 'peter',
            'email': 'peter@mit.edu',
            'password': 'secret',
            'balance': 100
        }
    ]}, 
        {'loggedin': false}
    ]);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;