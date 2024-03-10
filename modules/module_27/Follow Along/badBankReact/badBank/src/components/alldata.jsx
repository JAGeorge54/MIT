import { useState, useContext } from "react";
import UserContext from '../context/UserContext';

function AllData() {
    const {user, setUser} = useContext(UserContext);

    function Users () {
        let users = user[0].accounts.map((account, i) => {
            return <p>{JSON.stringify(account)}</p>
        })
        return (
            <p>{users}</p>
        )
    }
        

    return(
        <>
            <h1>alldata</h1>
            <Users/>
        </>
    )
}

export default AllData;