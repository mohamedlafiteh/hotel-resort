import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          " lorem hell and we  jjjjj jjsdsld sdlsdll dsldd lsdlsld lsldlsd nnn too jjjj nama llal mmam ffff"
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          " lorem hell and we nnn d;sdsds;d; sdddjdsjdj jsdjsjdjsd  too jjjj nama llal mmam ffff"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free cshuttle",
        info:
          " lorem hell and we nnn too jjjj  kkskksk k kskksks ksksksksk kksksk k kssks nama llal mmam ffff"
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          " lorem hell and we nnn too jjjj  lsllss kkskkskd kdskdkkd nama llal mmam ffff"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
