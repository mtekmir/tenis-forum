import Link from 'next/link';

export const CustomLink = (pathname?: string) => (props: any) => {
  return (
    <Link href={{ pathname }}>
      <a {...props}>{props.children}</a>
    </Link>
  );
};
