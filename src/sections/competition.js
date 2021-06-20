/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";
import SectionHeading from "components/section-heading";
import Problem from "components/problem/problem";
import problem1 from "assets/images/problem1.svg";
import problem2 from "assets/images/problem2.svg";

SwiperCore.use([Pagination, Navigation, Autoplay]);

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

  {
    name: "Style Transformation",
    description: "Modernize historical quotes.",
    illustration: problem2,
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
      <Container>
        <SectionHeading
          title="Featured Competitions"
          description="On-going business problems in need of solutions."
        />
        <Swiper sx={styles.carousel} {...options}>
          {problems.map((prob, index) => (
            <SwiperSlide key={index}>
              <Problem prob={prob} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Competition;

const styles = {
  section: {
    pt: [6, null, null, 6, 6, 6],
    pb: [6, null, null, null, 7, 9, 11, null],
    minHeight: "100vh",
  },

  carousel: {
    "&.swiper-container": {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },
};
