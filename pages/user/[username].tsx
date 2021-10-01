/* eslint-disable @next/next/no-img-element */
import { getTicketsInfo, User } from "../../utils/db";
import { NextSeo, NextSeoProps } from "next-seo";
import styles from "../../styles/Home.module.css";

import { getTicketImg } from "../../utils/ticket-image-generator";
import { Layout } from "../../components/Layout";
import GetTicket from "../../components/Buttons/GetTicket";
import { GetStaticPaths } from "next";

//TODO: add typing
const TicketPage = ({
  user,
  seoConfig,
}: {
  seoConfig: NextSeoProps;
  share: boolean;
  user?: { name: string; image: string; url: string };
}) => {
  return (
    <Layout>
      <NextSeo {...seoConfig} />
      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>{`${user?.name}'s  Ticket`}</h1>
          <div className={styles.get_ticket}>
            <GetTicket />
          </div>
        </div>
        <div className={styles.ticket_container}>
          <img
            className={styles.ticket}
            src={user?.image}
            height={450}
            alt={`${user?.name}'s  Ticket`}
          />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
}: {
  params: { username: string };
}) => {
  const username = params.username;
  let seoConfig = null;
  let user = null;

  console.log(username);

  if (username && username !== "") {
    const userDoc = await getTicketsInfo(username);
    if (userDoc.exists) {
      // TODO: only pass required data
      const u = userDoc.data() as User;
      seoConfig = generateTicketsSeoConfig(u);
      user = {
        name: u.name === null ? u.login : u.name,
        image: getTicketImg(u),
        url: process.env.NEXT_PUBLIC_HOST + "/user/" + u.login,
      };
    }
  }

  return {
    props: {
      user,
      seoConfig,
    },
    revalidate: 36000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: "blocking",
  });
};

export default TicketPage;

const generateTicketsSeoConfig = (user: User): NextSeoProps => {
  const name = user.name === null ? user.login : user.name;
  const seoConfig = {
    title: name + "'s BlaBlaConf Ticket",
    description:
      "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: process.env.NEXT_PUBLIC_HOST + "/user/" + user.login,
      title: name + "'s BlaBlaConf Ticket",
      description:
        "BlaBla Conf | 5 Days and 5 Tracks Covering Hottest Technology Trends in Darija",
      images: [
        {
          url: getTicketImg(user),
        },
      ],
      site_name: "blablaconf.com",
      imageWidth: 1200,
      imageHeight: 630,
    },
  };

  return seoConfig;
};
