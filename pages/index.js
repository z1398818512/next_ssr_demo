import Link from 'next/link';
import Head from 'next/head';
export default () => (
  <div>
    <p>Hello World!</p>
    <Head>
      <title>My page title</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1.2, width=device-width"
        key="viewport"
      />
    </Head>
    <p>123</p>
    <style jsx>
      {`
        p {
          color: red;
        }
      `}
    </style>
    <Link href="/contact">
      <a>Contact me!</a>
    </Link>
    <br />
    <Link href="/cssDemo">
      <a>样式demo</a>
    </Link>
  </div>
);
