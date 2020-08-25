import Transition from '../helpers/Transition';
import FocusTrap from '../helpers/FocusTrap';
import CloseIcon from '../components/icons/CloseIcon';
import MenuIcon from '../components/icons/MenuIcon';
import Head from 'next/head';

const Menu = ({ children, isClosed, setClosed, isStatic }) => {
  const [fixed, setFixed] = React.useState('');

  React.useEffect(() => {
    if (!isStatic) {
      setFixed('fixed');
    } else {
      setFixed('');
    }
  }, [isStatic]);

  return (
    <div className="flex bg-gray-100">
      <Head>
        <title>Starter App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Transition
        show={isStatic || !isClosed}
        enter="transition-all duration-300"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-300"
        leaveTo="-ml-64"
      >
        <aside
          className={`z-20 bg-white w-64 min-h-screen flex flex-col ${fixed}`}
        >
          <FocusTrap isActive={!isStatic}>
            <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
              <span className="text-blue py-2">Starter</span>
              {!isStatic && (
                <button
                  aria-label="Close Menu"
                  className="w-6 p-1"
                  onClick={() => setClosed(true)}
                >
                  <CloseIcon />
                </button>
              )}
            </div>
            <div className="border-r flex-grow">
              <nav>
                <ul className="h-screen">
                  <li className="p-3">
                    <a href="">Home</a>
                  </li>
                  <li className="p-3">
                    <a href="">Profile</a>
                  </li>
                  <li className="p-3">
                    <a href="">Portfolio</a>
                  </li>
                  <li className="p-3">
                    <a href="">Contact</a>
                  </li>
                  <li className="p-3">
                    <a href="">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </FocusTrap>
        </aside>
      </Transition>
      <Transition
        appear={true}
        show={!isStatic && !isClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-75"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-75"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black opacity-0"></div>
      </Transition>
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {!isStatic && isClosed && (
            <button
              aria-hidden={!isClosed}
              aria-label="Open Menu"
              className="w-6 p-1"
              onClick={() => setClosed(false)}
            >
              <MenuIcon />
            </button>
          )}
          {children}
        </header>
        <main className="p-5">Content</main>
      </main>
    </div>
  );
};

export default Menu;
