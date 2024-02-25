import style from "./TableSets.module.css"
import {forwardRef, useContext, useState} from "react";
import {TableContext} from "../../context/table.context.jsx";

const TableSets = forwardRef(function TableSets({tableSets, setTableSets}, ref) {
    const [checkedItems, setCheckedItems] = useState(tableSets);
    const {sets, setSets} = useContext(TableContext);
    const handleChange = (event) => {
        const {name, checked} = event.target;
        setSets(prev => ({
            ...prev,
            sets: {
                ...prev.sets,
                [name]: checked
            }
        }));

    };
    return (
        <div ref={ref} className={style['container']}>
            {Object.keys(sets.sets).map((key) => (
                <div key={key}>
                    <label>
                        <input
                            type="checkbox"
                            name={key}
                            checked={sets.sets[key]}
                            onChange={(e) => handleChange(e)}
                        />
                        {key}
                    </label>
                </div>
            ))}
        </div>
    );
})

export default TableSets