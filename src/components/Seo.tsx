import { Helmet } from 'react-helmet-async';

interface SeoProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    name?: string;
}

const Seo = ({ title, description, canonical, type = 'article', name = 'Aurex Artisan' }: SeoProps) => {
    return (
        <Helmet>
            {/* Visual / Standard meta tags */}
            <title>{title} | Aurex Artisan</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
};

export default Seo;
