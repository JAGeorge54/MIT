import { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({ childeren }) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            { childeren }
        </UserContext.Provider>
    );
};

export default UserContextProvider;