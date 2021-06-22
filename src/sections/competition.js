/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

import React from "react";
import Modal from "react-modal";

import SectionHeading from "components/section-heading";
import Problem from "components/problem/problem";
import RegistrationFrom from "components/registration-form";
import competitionBackground from "assets/images/competition-background.svg";

import logo1 from "assets/images/problem1/company-logo.jpg";

const problems = [
  {
    name: "Leadership",
    description: "Natural language processing and analysis",
    companyName: "Kasvu Labs",
    companyLogo: logo1,
    details: [
      {
        title: "Abstract",
        contents: (
          <div>
            Kasvu Labs is currently working with language data collected from
            high-performing individuals in order to understand what makes great
            leadership. The results of their machine learning experimentation
            will be used to empower young entrepreneurs and the next generation
            of innovators
          </div>
        ),
      },
      {
        title: "Registration",
        contents: (
          <div>
            Entering your email by clicking on the registration button. Detailed
            description of the challenge will be sent to your inbox along with
            additional instructions for submitting your project.
          </div>
        ),
      },
      {
        title: "Price Pool",
        contents: (
          <div>
            Minimum of 1000 EUR will be given to the team or individuals with
            the most innovative and practical solution. There are additional
            bonuses for solving side challenges regarding the problem. Detailed
            will be provided in the email.
          </div>
        ),
      },
    ],
  },
];

const Competition = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // const options = {
  //   spaceBetween: 30,
  //   loop: true,
  //   centeredSlides: true,
  //   slidesPerView: 1,
  //   pagination: {
  //     clickable: true,
  //   },
  //   speed: 1000,
  //   autoplay: {
  //     delay: 3500,
  //     disableOnInteraction: true,
  //   },
  // };

  return (
    <section id="competition" sx={styles.section}>
      <img src={competitionBackground} sx={styles.blobDecor} />
      <Container>
        <SectionHeading
          title="Featured Competitions"
          description="On-going business problems in need of solutions."
        />
        <Box>
          {problems.map((prob, index) => (
            <Problem prob={prob} openModal={openModal} key={index} />
          ))}
        </Box>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={styles.modal}
          contentLabel="Registration Form"
          preventScroll={true}
          closeTimeoutMS={250}
        >
          <RegistrationFrom closeModal={closeModal} />
        </Modal>
      </Container>
    </section>
  );
};

export default Competition;

const styles = {
  section: {
    pt: [6, null, null, 6, 9, 12],
    pb: [6, null, null, null, 7, 9, 11, null],
    minHeight: "100vh",
    position: "relative",
  },
  blobDecor: {
    position: "absolute",
    top: 0,
    width: "100%",
  },

  modal: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: 15,
      boxShadow: "0px 9px 30px rgba(69, 88, 157, 0.08)",
      padding: "50px",
    },

    overlay: {
      backdropFilter: "blur(6px)",
    },
  },
};
