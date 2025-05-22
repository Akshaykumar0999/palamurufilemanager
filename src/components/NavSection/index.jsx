import "./index.css";
import { NavLink } from "react-router-dom";
import { IoSpeedometerOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { NavMenuContext } from "../../Context/navmenucontext";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { SiMaterialformkdocs } from "react-icons/si";
import { CiViewList } from "react-icons/ci";
const navTabsList = [
  {
    id: 1,
    navName: "Dashboard",
    to: "/",
    navIcon: <IoSpeedometerOutline size={20} />,
  },
  {
    id: 2,
    navName: "Create Animal",
    to: "/create-animal",
    navIcon: <MdOutlineCreateNewFolder size={20} />,
  },
  {
    id: 3,
    navName: "Create Mating",
    to: "/create-mating",
    navIcon: <SiMaterialformkdocs size={20} />,
  },
  {
    id: 4,
    navName: "Mating-Records",
    to: "/mating-records",
    navIcon: <CiViewList size={20} />,
  },
];
const NavSection = () => {
  const navMenuData = useContext(NavMenuContext);
  const onClickNavOpen = () => {
    navMenuData.setOpenNav((prv) => !prv);
  };
  return (
    <nav className="nav-main-container">
      <div
        className="nav-header-icons-card"
        style={{
          justifyContent: navMenuData.openNav ? "space-around" : "center",
        }}
      >
        {navMenuData.openNav && (
          <img
            src="https://www.palamurbio.com/img/pbs1.png"
            style={{ width: "100px" }}
            alt="palamur-icon"
          />
        )}

        <AiOutlineMenu size={22} onClick={onClickNavOpen} style={{cursor: 'pointer'}} />
      </div>

      <ul className="navmenu-tablist-card">
        {navTabsList.map((each) => (
          <NavLink
            key={each.id}
            to={each.to}
            className="navmenu-list-item"
            style={{
              justifyContent: navMenuData.openNav ? "space-around" : "center",
            }}
          >
            <p
              className="nav-icon"
              style={{
                margin: navMenuData.openNav ? "0px 10px 0px 10px" : "0px",
              }}
            >
              {each.navIcon}
            </p>
            {navMenuData.openNav && <p className="nav-name">{each.navName}</p>}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavSection;
