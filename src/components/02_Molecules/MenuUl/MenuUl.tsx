/** @jsxImportSource @emotion/react @*/
import { css } from "@emotion/react";

interface ImenuulProps {
  children?: React.ReactNode;
}

const MenuUl = ({ children }: ImenuulProps) => {
  return (
    <section css={menuulStyle}>
      <ul>{children}</ul>
    </section>
  );
};

const menuulStyle = css`
  ul {
    display: flex;
    flex-flow: row nowrap;
    white-space: nowrap;
    overflow: auto;
    li {
      flex: 0 0 1rem;
      padding: 1rem 2rem;
      border-top: 1px solid #eee;
      // background-color: red;
    }
  }
`;

export default MenuUl;
