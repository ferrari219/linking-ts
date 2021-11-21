import Header from "src/components/04_Templates/Header";
import IconButton from "src/components/02_Molecules/IconButton";
import Image from "next/image";
import ImgLogo from "src/assets/img/logo.png";
import Heads from "src/components/99_Etc/Heads";
import Menu from "src/components/03_Organism/Menu/Menu";

const MainPresenter = () => {
  return (
    <section>
      <Heads title="Home:" />
      <Header
        left={<IconButton icon="IcoMenu" />}
        mid={<Image src={ImgLogo} width="306" height="50" alt="Logo" />}
        right={<IconButton icon="IcoUser" bgColor="transp" />}
      />
      <Menu />
    </section>
  );
};

export default MainPresenter;
