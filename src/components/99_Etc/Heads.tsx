import Head from "next/head";

interface IheadsProps {
  title?: string;
}

const Heads = ({ title }: IheadsProps) => {
  return (
    <Head>
      <title>{title} 리바트 링킹</title>
      <meta property="og:url" content="사이트링크" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="사이트명" />
      <meta property="og:image" content="대표이미지링크" />
      <meta property="og:description" content="부제목설명" />
      <meta name="referrer" content="origin" />
    </Head>
  );
};

Heads.defaultProps = {
  title: "",
};

export default Heads;
