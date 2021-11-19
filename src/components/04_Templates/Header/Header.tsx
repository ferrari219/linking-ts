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
const headerStyle = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;

  .left {
    display: flex;
    justify-content: flex-start;
    flex: 0 0 10rem;
    /* width: 5rem; */
    background-color: red;
  }
  .right {
    flex: 0 0 10rem;
    display: flex;
    justify-content: flex-end;
    /* width: 5rem; */
    background-color: red;
  }
  .mid {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;

export default Header;
