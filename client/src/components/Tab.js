import { Icon, InlineIcon } from "@iconify/react";
import homeAlt from "@iconify/icons-uil/home-alt";
import '../styles/Tab.css';

const TabName = styled.p`
    color: {(props) => props.active ? "4377DB": "A1A8BC"};
`;

const Indicator = styled.div`
    height: absolute;
    height: 5px;
    width: 55px;
    background: #4377db;
    border-radius: 10px 10px 0 0;
    bottom: 0;


`;

export default Tab = ({name, icon, active, onClick}) => {
    return (
        <div className="tab-container" onClick={onClick}>
            <Icon icon={icon} style={{ color: active ? "#4377DB" : "#a1a8bc", fontSize: "34px"}}/>
            <TabName active={active}>{name}</TabName>
            {active && <Indicator/>}
        </div>
    )
    
}