import "./header.styles.scss";
import React from "react";
import icon from "../../assets/solvely.png";
import menu from "../../assets/menu.png";
import NavigationOption from "../navigation-option/navigation-option.component";
import Sidebar from "../sidebar/sidebar.component";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarVisiblity: false,
    };

    // this.menuItems = ["HOME", "OUR WORK", "TEAM", "ABOUT US", "WORK WITH US"];
    this.menuItems = ["HOME", "TEAM", "ABOUT US", "WORK WITH US"];
  }

  toggleSidebar = () => {
    const currentState = this.state;
    this.setState({
      ...currentState,
      sidebarVisiblity: !currentState.sidebarVisiblity,
    });
  };

  handleClick = (event) => {
    switch (event.target.id) {
      case "HOME":
        this.props.allRef.banner.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "TEAM":
        this.props.allRef.team.current.scrollIntoView({ behavior: "smooth" });
        break;

      case 'OUR WORK':
          this.props.allRef.ourwork.current.scrollIntoView({behavior: 'smooth'})
          break;

      case "WORK WITH US":
        this.props.allRef.contactus.current.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "ABOUT US":
        this.props.history.push("/about-us");
        break;

      default:
      // this.props.allRef.team.current.scrollIntoView({behavior: 'smooth'})
    }
    // window.scroll(0,this.props.allRef.team.current.offsetTop)
  };

  render() {
    return (
      <div className="header" ref={this.props.ref}>
        {this.state.sidebarVisiblity ? null : (
          <img
            className="menu"
            src={menu}
            alt="menu"
            onClick={this.toggleSidebar}
          />
        )}

        {this.state.sidebarVisiblity ? (
          <Sidebar
            allRef={this.props.allRef}
            menuItems={this.menuItems}
            clickHandler={this.toggleSidebar}
            optionClicked={this.toggleSidebar}
          />
        ) : null}

        <img
          className="logo"
          src={icon}
          alt="solvely.22 logo"
          ref={this.myRef}
        />

        <div className="navigation-container">
          {this.menuItems.map((item, index) => (
            <NavigationOption
              handleClick={this.handleClick}
              key={this.menuItems[index]}
              styles={
                item === "WORK WITH US"
                  ? "navigation-option work-with-us"
                  : "navigation-option"
              }
              label={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
