import MenuLi from "src/components/01_Atom/MenuLi";
import MenuUl from "src/components/02_Molecules/MenuUl";

// interface ImenuProps {}

const Menu = () => {
  return (
    <MenuUl>
      {data && data.map((item) => <MenuLi key={item.id} name={item.name} />)}
    </MenuUl>
  );
};

const data = [
  {
    id: 0,
    name: "이 달의 행사",
    lnk: "https://",
  },
  {
    id: 1,
    name: "베스트클래스",
    lnk: "https://",
  },
  {
    id: 2,
    name: "플리마켓 일정",
    lnk: "https://",
  },
  {
    id: 3,
    name: "할인 클래스",
    lnk: "https://",
  },
  {
    id: 4,
    name: "이 달의 행사",
    lnk: "https://",
  },
  {
    id: 5,
    name: "베스트클래스",
    lnk: "https://",
  },
  {
    id: 6,
    name: "플리마켓 일정",
    lnk: "https://",
  },
  {
    id: 7,
    name: "할인 클래스",
    lnk: "https://",
  },
];

export default Menu;
