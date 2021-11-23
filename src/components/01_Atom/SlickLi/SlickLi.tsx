/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

interface IslickliProps {
  id?: number;
  img: string | StaticImageData;
  alt?: string;
  lnk?: string;
}

const SlickLi = ({ id, img, alt, lnk = "https://" }: IslickliProps) => {
  return (
    <div css={slickliStyle}>
      <Link href={lnk}>
        <a>
          <Image src={img} alt={alt} />
        </a>
      </Link>
    </div>
  );
};

const slickliStyle = css`
  /* background-color: red; */
  /* border: 1px solid red;
  width: 100%; */
  /* a {
    display: flex;
    width: inherit;
    height: inherit;
    justify-content: center;
    img {
      width: inherit;
    }
  } */
`;

export default SlickLi;
