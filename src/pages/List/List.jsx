import Table from "../../components/Table/Table.jsx";
import {useSelector} from "react-redux";
import style from "./List.module.css"
import Configurator from "../../components/Сonfigurator/Сonfigurator.jsx";
import {useContext, useEffect, useState} from "react";
import {TableContext} from "../../context/table.context.jsx";
import {Pages} from "../../components/Pages/Pages.jsx";
import {RightSideContainer} from "../../components/RightSideContainer/RightSideContainer.jsx";

export function List() {
    const peopleList = useSelector(s => s.user)
    const [sortedList, setSortedList] = useState([...peopleList]);
    const [sliceList, setSliceList] = useState([...sortedList]);
    const {sets, setSets} = useContext(TableContext);
    useEffect(() => {
            setSliceList(sortedList.slice(sets.curPage * sets.countRows, sets.curPage * sets.countRows + sets.countRows))
        }
        , [sets.curPage, sortedList])
    useEffect(() => {
        let newSortedList = [...peopleList];

        if (sets.age) {
            newSortedList = newSortedList.sort((a, b) => {
                if (sets.age === 1) return b.birthday - a.birthday
                else return a.birthday - b.birthday
            });
        }

        if (sets.gender) {
            let gender = sets.gender === 1 ? 'Мужской' : 'Женский';
            newSortedList = newSortedList.filter(i => i.gender === gender);
        }
        if (sets.marytal) {
            let marytal
            if (sets.marytal === 1) marytal = 'Свободен'
            else if (sets.marytal === 2) marytal = 'Разведен'
            else if (sets.marytal === 3) marytal = 'В браке'
            newSortedList = newSortedList.filter(i => i.maritalStatus === marytal)
        }
        setSortedList(newSortedList);
    }, [peopleList, sets.age, sets.gender, sets.marytal]);
    const setPage = (page) => {
        setSets(prevState => {
            return {...prevState, curPage: page}
        })
    }
    return (
        <RightSideContainer>
            <div className={style['container']}>
                <Configurator setPage={setSets}/>
                <Table peopleList={sliceList}/>
                {sliceList.length !== 0 && <Pages curPage={sets.curPage} setPage={setPage}
                                                  length={Math.ceil(sortedList.length / sets.countRows)}/>}
            </div>
        </RightSideContainer>
    );
}