const host = process.env.NEXT_PUBLIC_HOST;
const seo = {
  title:
    "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
  description:
    "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 25th to 29th October",
  canonical: `${host}/`,
  openGraph: {
    title:
      "BlaBla Conf | 5 Days and 5 Tracks covering hottest Technology Trends in Darija",
    description:
      "By the Moroccan developer community, for the Moroccan developer community, BlaBla Conf is your one stop shop for latest and hottest technology trends, in Darija, and completely free! Join us from 25th to 29th October",
    type: "website",
    locale: "en_IE",
    url: `${host}/`,
    site_name: "BlaBlaConf",
    images: [
      {
        url: `${host}/cover.png`,
      },
    ],
  },
  twitter: {
    handle: "@geeksblabla",
    site: "@geeksblabla",
    cardType: "summary_large_image",
  },
};

export default seo;
