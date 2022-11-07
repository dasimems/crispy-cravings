import React from "react";
import { Link } from "react-router-dom";

import logo from "../asset/logo.png";
import { socials, links, footerContact } from "../utils/constant";

function Footer(props) {
  return (
    <footer>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <div className="logo">
                  <img width={150} src={logo} alt="Footer-Logo" />
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {socials.map((social) => {
                    const { id, icon, url } = social;
                    return (
                      <li key={id}>
                        <Link to={url}>{icon}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <div className="block-23 mb-3">
                  <ul className="list-unstyled">
                    {links.map((link) => {
                      const { id, text, url } = link;
                      return (
                        <li key={id}>
                          <Link className="py-2 d-block" to={url}>
                            {text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Question?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {footerContact.map((item) => {
                      const { id, text, url, icon } = item;
                      return (
                        <li key={id}>
                          <span className="icon">{icon}</span>
                          <Link className="text" to={url}>
                            {text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | Crispy Cravings
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
