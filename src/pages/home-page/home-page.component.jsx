import React from "react";

import Header from "../../components/header/header.component";
import Banner from "../../components/banner/banner.component";
import OurWork from "../../components/our-work/our-work.component";
import Team from "../../components/team/team.component";
import ContactUs from "../../components/contact-us/contact-us.conponent";
import Partner from "../../components/partners/partners.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      banner: React.createRef(),
      ourwork: React.createRef(),
      team: React.createRef(),
      partners: React.createRef(),
      contactus: React.createRef(),
    };
  }

  render() {
    return (
      <div className="about-us">
        <Header allRef={this.state} />
        <Banner theref={this.state.banner} />
        <OurWork theref={this.state.ourwork} />
        <Team theref={this.state.team} />
        <Partner theref={this.state.partners} />
        <ContactUs theref={this.state.contactus} />
      </div>
    );
  }
}

export default HomePage;
