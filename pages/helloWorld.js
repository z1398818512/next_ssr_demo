import Link from 'next/link';
export default props => {
  console.log(props);
  return (
    <div>
      <p>Hello World!</p>
      <Link href="/contact">
        <a>Contact me!</a>
      </Link>
    </div>
  );
};
