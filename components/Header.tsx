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
  // {
  //   name: 'Blog',
  //   link: 'blog',
  // },
  {
    name: 'Talks',
    link: 'technical-talks',
  },
];

const Header = () => (
  <nav className="sticky-nav flex justify-between items-center w-full px-4 mx-auto bg-white dark:bg-black bg-opacity-10">
    <Link link="/" isNav>
      <div className="logo font-display flex items-center justify-center">tp</div>
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
