import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Ivan Christopher S. Garcia and you can call me Ivan. I am from Mandasig, Candaba, Pampanga. My favorite hobbies are: playing video games, watching movies/series, and scroll through my social medias. My favorite music changes a lot and right now I don’t have a favorite song but I’ve been listening to Maroon 5 and 5 Second of Summer. My favorite foods are: Sinigang, Sisig, and Chicken. I am busy by doing a lot of household chores, studying but most of the times I am free and can do what I want to do.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}