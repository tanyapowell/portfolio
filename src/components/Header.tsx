import Link from 'next/link';

const navItems = [
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Dashboard',
    link: 'dashboard'
  },
  {
    name: 'Notes',
    link: 'notes'
  }
];

const Header = () => (
  <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-4 mx-auto bg-white dark:bg-black bg-opacity-60">
    <Link href="/">
      <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 font-body">Tanya Powell</a>
    </Link>
    <div>
      {navItems.map((item) => (
        <Link key={item.name} href={`/${item.link}`}>
          <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100 font-body">{item.name}</a>
        </Link>
      ))}
    </div>
  </nav>
);

export default Header;
