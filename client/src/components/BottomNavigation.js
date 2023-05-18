
import '../styles/BottomNavigation.css';
import Tab from "./Tab";
import homeAlt from "@iconify/icons-uil/home-alt";

const navData = [
    {
        name: "Home",
        icon: homeAlt
    },
    {
        name: "Lists",
        icon: listUl
    },
    {
        name: "Search",
        icon: settingIcon
    }
]

export default BottomNavigation = () => {
    const [active, setActive] = useState(1);
    const handleClick = (i) => {
        setActive(i);
    };
    return (
        <div className="bn-container">
            {navData.map((tab, i) => (
                <Tab onClick={() => handleClick(i)} name={tab.name} icon={tab.icon} active={i === active}/>
            ))}
        </div>
    )
    
}