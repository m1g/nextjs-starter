import Head from 'next/head';
import Header from '../components/Header';
import Close from '../components/icons/Close';
import Nav from '../components/Nav';
import { useBreakpoint } from '../hooks';
import Transition from '../helpers/Transition';
// import styles from '../styles/Home.module.css';

export default function Home() {
  const [isClosed, setClosed] = React.useState(false);

  const isStatic = useBreakpoint('sm');

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
          className={`z-20 bg-white w-64 min-h-screen flex flex-col ${
            isStatic ? '' : 'fixed'
          }`}
        >
          <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
            <span className="text-blue py-2">Starter</span>
            {!isStatic && (
              <button
                tabIndex="1"
                aria-label="Close Menu"
                className="w-7 p-1"
                onClick={() => setClosed(true)}
              >
                <Close />
              </button>
            )}
          </div>
          <div className="border-r flex-grow">
            <Nav />
          </div>
        </aside>
      </Transition>
      <Transition
        appear={true}
        show={!isStatic && !isClosed}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black opacity-50" />
      </Transition>
      <main className="flex-grow flex flex-col min-h-screen">
        <Header isClosed={isClosed} setClosed={setClosed} isStatic={isStatic} />
      </main>
    </div>
  );
}
