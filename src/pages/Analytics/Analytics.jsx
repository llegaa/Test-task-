import {RightSideContainer} from "../../components/RightSideContainer/RightSideContainer.jsx";
import {AnalysisNav} from "../../components/AnalysisNav/AnalysisNav.jsx";
import {Outlet} from "react-router-dom";
import ListStatistic from "../../components/ListStatistic/ListStatistic.jsx";
import {useSelector} from "react-redux";

export function Analytics() {
    const peopleList = useSelector(s => s.user);
    return (
        <RightSideContainer>
            <ListStatistic peopleList={peopleList}/>
            <AnalysisNav/>
            <Outlet/>
        </RightSideContainer>)
}