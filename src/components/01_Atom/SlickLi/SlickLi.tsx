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
    <li>
      <Link href={lnk}>
        <a>
          <Image src={img} alt={alt} />
        </a>
      </Link>
    </li>
  );
};

export default SlickLi;
