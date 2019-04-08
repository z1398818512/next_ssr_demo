import Link from 'next/link';
const Post = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default () => (
  <div>
    <h2>My blog</h2>

    <Post slug="yet-another-post" title="Yet another post" />
    <Post slug="second-post" title="Second post" />
    <Post slug="helloWorld.js" title="Hello, world!" />
  </div>
);
