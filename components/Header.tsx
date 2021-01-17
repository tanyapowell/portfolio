import Link from '@/components/Link';

const navItems = [
  {
    name: 'About',
    link: 'about',
  },
  // {
  //   name: 'Dashboard',
  //   link: 'dashboard',
  // },
  {
    name: 'Blog',
    link: 'blog',
  },
];

const Header = () => (
  <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-4 mx-auto bg-white dark:bg-black bg-opacity-60">
    <Link link="/" isNav>
      Home
    </Link>
    <div>
      {navItems.map((item) => (
        <Link key={item.name} link={`/${item.link}`} isNav>
          {item.name}
        </Link>
      ))}
    </div>
  </nav>
);

export default Header;
