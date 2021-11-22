/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SlickLi from "src/components/01_Atom/SlickLi";
import SlickUl from "src/components/02_Molecules/SlickUl";
import { SrOnly } from "src/styles/Globals";
import Img from "src/assets/img/banner_sample.jpg";

const Slick = () => {
  return (
    <section css={slickStyle}>
      <h2>메인 롤링배너</h2>
      <SlickUl>
        {data &&
          data.map((item) => (
            <SlickLi
              img={item.img}
              key={item.id}
              alt={item.alt}
              lnk={item.lnk}
            />
          ))}
        {/* <SlickLi img={Img} /> */}
      </SlickUl>
    </section>
  );
};

const data = [
  {
    id: 0,
    img: Img,
    alt: "",
    lnk: "https://",
  },
  {
    id: 1,
    img: Img,
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
