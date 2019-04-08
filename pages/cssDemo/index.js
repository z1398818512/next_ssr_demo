import styles from './index.less';
import Head from 'next/head';
export default () => {
  return (
    <div>
      <Head>
        <title key="a">123</title>
      </Head>
      <Head>
        <title key="a">456</title>
      </Head>
      <div className={styles.example}>Hello World!</div>
      <img src="/static/123.jpg" />
    </div>
  );
};
