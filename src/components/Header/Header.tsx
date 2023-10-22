import Link from "next/link";

type THeaderProps = {
  links: string[];
};

export const Header = ({ links }: THeaderProps) => {
  return (
    <header>
      Hello
      <ul>
        {links.map((link) => (
          <Link key={link} href={link} />
        ))}
      </ul>
    </header>
  );
};
