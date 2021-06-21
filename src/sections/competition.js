/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

import React from "react";
import Modal from "react-modal";

import SectionHeading from "components/section-heading";
import Problem from "components/problem/problem";
import RegistrationFrom from "components/registration-form";
import competitionBackground from "assets/images/competition-background.svg";

import problem1 from "assets/images/problem1.svg";

const problems = [
  {
    name: "Quote Transformation",
    description: "Modernize historical quotes.",
    illustration: problem1,
    details: [
      {
        title: "Organize your project content",
        contents: (
          <div>
            Get your blood tests delivered at let collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </div>
        ),
      },
      {
        title: "Collaborate your documents easily",
        contents: (
          <div>
            Get your blood tests delivered at let collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </div>
        ),
      },
      {
        title: `Build your team's knowledge base`,
        contents: (
          <div>
            Get your blood tests delivered at let collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </div>
        ),
      },
    ],
  },
];

const Competition = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const options = {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    speed: 1000,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
  };

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
            <Box>
              <Problem prob={prob} openModal={openModal} />
            </Box>
          ))}
        </Box>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={styles}
          contentLabel="Example Modal"
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
    zIndex: 100,
  },

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
