import { createContext, useState } from "react";


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [loggedAccount, setLoggedAccount] = useState('');
    return <DataContext.Provider value={{ loggedAccount , setLoggedAccount }}>
        { children }
    </DataContext.Provider>
}

export default DataProvider;