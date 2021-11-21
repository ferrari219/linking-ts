import Link from "next/link";

interface IslickliProps {
  id?: number;
  img: string;
  alt?: string;
  lnk?: string;
}

const SlickLi = ({ id, img, alt, lnk = "https://" }: IslickliProps) => {
  return (
    <li>
      <Link href={lnk}>
        <a>
          <div>banner</div>
        </a>
      </Link>
    </li>
  );
};

export default SlickLi;
