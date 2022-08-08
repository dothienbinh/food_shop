import React from "react";
import Grid from "../components/Grid";
import styles from "../sass/components/_contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faMobile,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <Grid col={12} mdCol={12} smCol={12} gap={12}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.0150466495925!2d105.78136571259677!3d21.030277655526532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b354936a69%3A0xe0059369a89d3969!2sVMO%20Holdings!5e0!3m2!1svi!2s!4v1659553666682!5m2!1svi!2s"
          width="100%"
          height="350px"
        ></iframe>
      </div>
      <div className="contact_methods">
      <Grid  col={3} mdCol={2} smCol={1} gap={1}>
        <div className="address">
          <div>
            <span>
              <FontAwesomeIcon icon={faLocationArrow} />
            </span>
            <span>Address</span>
            <p>21 Ton That Thuyet, Nam Tu Liem, Ha Noi</p>
          </div>
        </div>
        <div className="phone">
          <div>
            <span>
              <FontAwesomeIcon icon={faMobile} />
            </span>
            <span> Phone</span>
            <p>Hotline: (090) 777 777</p>
            <p>Tel: (024) 24242424</p>
          </div>
        </div>
        <div className="email">
          <div>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
            </span>
            <span> Email</span>
            <p>footshop999@gmail.com</p>
          </div>
        </div>
      </Grid>
      </div>
    </Grid>
  );
}

export default Contact;
