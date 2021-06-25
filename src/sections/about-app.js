/** @jsx jsx */
import { useRef, useEffect, useState } from "react";
import { rgba } from "polished";
import { jsx, Box, Container } from "theme-ui";
import Tabs, { TabPane } from "rc-tabs";
import TabTitle from "components/tabs/tab-title";
import TabContent from "components/tabs/tab-content";
import Currency from "components/tabs/icons/currency";
import Cog from "components/tabs/icons/cog";
import PieChart from "components/tabs/icons/pie-chart";
import Suitcase from "components/tabs/icons/suitcase";
import background from "assets/images/app-about-background.svg";
import backgroundTop from "assets/images/app-about-background-top.svg";
import backgroundBottom from "assets/images/app-about-background-bottom.svg";

import projects from "assets/images/features/projects.png";
import companies from "assets/images/features/companies.png";
import cv from "assets/images/features/cv.png";
import collab from "assets/images/features/collab.png";

const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: "Various Projects",
      },
    ],
    tabContent: [
      {
        image: projects,
        title: `Real Cases Projects`,
        description: `Students will have access to Real Cases Projects from companies around the world.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: "Connections Pool",
      },
    ],
    tabContent: [
      {
        image: companies,
        title: `Global Companies Pool`,
        description: `Students will also have connections from companies all around the world. For companies, they will have access to a diverse talents pool.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: "CVs",
      },
    ],
    tabContent: [
      {
        image: cv,
        title: `Students' CVs`,
        description: `Each students will have their own profile showcase all of their works for future job seeking and career.`,
        readMore: "#introduce-quality",
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: "Collaboration",
      },
    ],
    tabContent: [
      {
        image: collab,
        title: `Students' Collaboration`,
        description: `Students can find partners to work on their projects.`,
        readMore: "#introduce-quality",
      },
    ],
  },
];

const AboutApp = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" id="about" sx={styles.section}>
      <img src={backgroundTop} sx={styles.overlayTop} />
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
      <img src={backgroundBottom} sx={styles.overlayBottom} />
    </Box>
  );
};

export default AboutApp;

const styles = {
  section: {
    backgroundColor: "",
    pt: [9, null, null, 11, 10, "12%", null],
    pb: [9, null, null, 11, 10, "12%", null],
    background: [`url(${background})`],
    backgroundSize: "100% auto",
    position: "relative",
  },
  overlayTop: {
    position: "absolute",
    top: -2,
    width: "100%",
  },
  overlayBottom: {
    position: "absolute",
    bottom: -2,
    width: "100%",
  },
  container: {
    maxWidth: ["none !important"],
    pr: [6, null, null, 0],
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
  },
  tabs: {
    border: 0,
    color: "white",
    ".rc-tabs-nav": {
      mb: [8, null, null, 7, 10, null, 12],
    },
    ".rc-tabs-nav-wrap": {
      "::before": {
        backgroundColor: rgba("#fff", 0.1),
        content: ["none", null, null, `''`],
        height: 1,
        position: "absolute",
        left: 0,
        top: 51,
        width: "100%",
      },
      "::after": {
        borderColor: ["primary"],
      },
    },
    ".rc-tabs-nav-list": {
      display: ["flex"],
    },
    ".rc-tabs-tab": {
      backgroundColor: "transparent",
      "+ .rc-tabs-tab": {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      "svg g, svg path": {
        transition: "0.3s ease-in-out 0s",
      },
    },
    ".rc-tabs-tab-btn": {
      alignItems: "center",
      display: ["flex", null, null, "block"],
      outline: "0 none",
      fontSize: [null, null, null, 15, 2],
    },
    ".rc-tabs-tab-active": {
      "svg g, svg path": {
        fill: "white",
        opacity: 1,
      },
      h5: {
        color: "text",
      },
    },
    ".rc-tabs-ink-bar": {
      backgroundColor: "white",
      borderRadius: 5,
      bottom: [47],
      display: ["none", null, null, "block"],
    },
    ".rc-tabs-tabpane": {
      outline: "0 none",
    },
    ".rc-tabs-nav-more": {
      display: "none",
    },
  },
};
