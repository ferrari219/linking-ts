/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconProps } from "src/components/01_Atom/Icon/Icon";
import Icon from "src/components/01_Atom/Icon";
import Link from "next/link";
import theme from "src/styles/theme";

const iconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &.bg {
    &-basic {
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.1);
      svg {
        fill: #666;
      }
    }
    &-pointer {
      background-color: ${theme.color.main};
      svg {
        fill: white;
      }
    }
    &-add {
      background-color: #333;
      svg {
        fill: white;
      }
    }
    &-notice {
      background-color: ${theme.color.main};
      svg {
        fill: white;
      }
    }
    &-transp {
      background-color: transparent;
      svg {
        fill: #666;
      }
    }
  }
  &.round {
    &-0 {
    }
    &-5 {
      border-radius: 0.5rem;
    }
    &-10 {
      border-radius: 50%;
    }
  }
  &.shadow {
    box-shadow: ${theme.shadow[7]};
  }
  svg {
    width: 60%;
  }
`;

interface IiconaProps {
  icon?: string;
  size?: string | number;
  round?: "0" | "5" | "10";
  bgColor?: "basic" | "pointer" | "add" | "notice" | "transp";
  shadow?: boolean;
  href?: string;
}

const IconA = ({
  icon = "IcoBack",
  bgColor = "basic", //transparent
  size = "4rem",
  round = "10",
  shadow = false,
  href = "https://",
}: IiconaProps & IconProps) => {
  return (
    <Link href={href}>
      <a
        css={[iconStyle, { width: size, height: size }]}
        className={[`bg-${bgColor}`, `round-${round}`, shadow && "shadow"].join(
          " ",
        )}
      >
        <Icon icon={icon} />
      </a>
    </Link>
  );
};

export default IconA;
