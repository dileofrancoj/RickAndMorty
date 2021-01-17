import { Helmet } from "react-helmet";
const Head = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta description={description} />
    </Helmet>
  );
};

export default Head;
