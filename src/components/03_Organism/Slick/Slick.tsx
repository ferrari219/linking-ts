/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SlickLi from "src/components/01_Atom/SlickLi";
import SlickUl from "src/components/02_Molecules/SlickUl";
import { SrOnly } from "src/styles/Globals";

const Slick = () => {
  return (
    <section css={slickStyle}>
      <h2>메인 롤링배너</h2>
      <SlickUl>
        <SlickLi img="" />
        <SlickLi img="" />
        <SlickLi img="" />
      </SlickUl>
    </section>
  );
};

const data = [
  {
    id: 0,
    img: "",
    alt: "",
    lnk: "https://",
  },
  {
    id: 1,
    img: "",
    alt: "",
    lnk: "https://",
  },
  {
    id: 2,
    img: "",
    alt: "",
    lnk: "https://",
  },
];

const slickStyle = css`
  h2 {
    ${SrOnly};
  }
`;

export default Slick;
