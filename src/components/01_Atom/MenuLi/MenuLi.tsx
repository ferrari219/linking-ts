import Link from "next/link";

interface ImenuliProps {
  id?: number;
  name: string;
  lnk?: string;
}

const MenuLi = ({ id, name, lnk = "https://" }: ImenuliProps) => {
  return (
    <li>
      <Link href={lnk}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

export default MenuLi;
