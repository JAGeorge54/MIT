import { createContext, useState } from "react";

const Context = createContext();

export function CartProvider({ childeren }) {
    return(
        <Context.Provider value={{accounts: [{"name": "peter", "balance": 100}]}}>
            { childeren }
        </Context.Provider>
    )
}

export default Context;