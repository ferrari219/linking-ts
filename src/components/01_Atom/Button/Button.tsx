/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "src/styles/theme";
import Icon from "../Icon";

interface IbuttonProps {
  type?: "solid" | "ghost" | "light" | "outline" | "text" | "danger";
  size?: "sm" | "md" | "lg";
  round?: "0" | "5" | "10";
  flex?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
}

const Button = ({
  type = "solid",
  size = "md",
  round = "10",
  flex = false,
  children = "버튼",
  onClick,
}: IbuttonProps) => {
  return (
    <button
      type="button"
      css={buttonStyle}
      className={[
        `type-${type}`,
        `size-${size}`,
        `round-${round}`,
        flex && "flex",
      ].join(" ")}
      onClick={onClick}
    >
      <Icon icon="IcoBell" />
      {children}
    </button>
  );
};

const buttonStyle = css`
  font-weight: 600;
  &.type {
    &-solid {
      /** 중요도 1순위: 클릭 유도용 버튼 */
      background-color: ${theme.color.main};
      border: none;
      color: white;
    }
    &-ghost {
      /** 중요도 2순위: 흰색배경+포인트아웃라인 */
      background-color: white;
      border: 1px solid ${theme.color.main};
      color: ${theme.color.main};
    }
    &-light {
      /** 중요도 3순위: 회색배경 */
      background-color: #f0f0f0;
      border: none;
      color: ${theme.color.main};
    }
    &-outline {
      /** 중요도 3순위: 흰색배경+회색아웃라인 */
      background-color: #fff;
      border: 1px solid #ccc;
    }
    &-text {
      /** 중요도 4순위: 텍스트 라벨만 */
      background-color: transparent;
      border: none;
    }
    &-danger {
      /** 위험, 경고성 용도로 사용 */
    }
  }
  &.size {
    /** 버튼 크기 설정 */
    &-sm {
      padding: 0.3rem 1rem 0.2rem 1rem;
      font-size: ${theme.size.sm};
    }
    &-md {
      padding: 0.5rem 1.5rem 0.3rem 1.5rem;
      font-size: ${theme.size.sm};
    }
    &-lg {
      padding: 0.8rem 2rem 0.6rem 2rem;
      font-size: ${theme.size.sm};
    }
  }
  &.round {
    /** 모서리 각진 정도 */
    &-0 {
    }
    &-5 {
      border-radius: 0.5rem;
    }
    &-10 {
      border-radius: 2rem;
    }
  }
  &.flex {
    /** 버튼 가로 길이: 꽉 채울지 여부 */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export default Button;
