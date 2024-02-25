import {createContext, useState} from "react";

export const TableContext = createContext({
    age: 0,
    gender: 0,
    marytal: 0,
    countRows: 20,
    curPage: 0,
    sets: {}
})

export const TextContextProvider = ({children}) => {
    const [sets, setSets] = useState({
        age: 0,
        gender: 0,
        marytal: 0,
        countRows: 20,
        curPage: 0,
        sets: {
            name: true,
            gender: true,
            birthday: true,
            email: true,
            phone: true,
            post: true,
            maritalStatus: true,
            citizenship: true
        }

    })
    return <TableContext.Provider value={{sets, setSets}}>
        {children}
    </TableContext.Provider>
}