/** @jsxImportSource @emotion/react @*/
import { css } from "@emotion/react";

interface IheaderProps {
  left?: React.ReactNode | string;
  mid?: React.ReactNode | string;
  right?: React.ReactNode | string;
}

const Header = ({ left, mid, right }: IheaderProps) => {
  return (
    <header css={headerStyle}>
      <div className="left">{left}</div>
      <div className="mid">{mid}</div>
      <div className="right">{right}</div>
    </header>
  );
};

// Header.defaultProps = {

// }
const headerStyle = css``;

export default Header;
