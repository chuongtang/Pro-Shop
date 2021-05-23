import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: 'Welcome To Pro👶Shop',
  description: 'Where things are just... cute!',
  keywords: 'newborn, baby, cute',
};

export default Meta;