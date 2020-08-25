import Menu from '../components/Menu';
import { useBreakpoint } from '../hooks';

export default function Home() {
  const [isClosed, setClosed] = React.useState(false);

  const isStatic = useBreakpoint('sm');

  return (
    <>
      <Menu isClosed={isClosed} setClosed={setClosed} isStatic={isStatic}>
        <div className="flex flex-grow items-center justify-between px-3">
          <h1>Home</h1>
          <button className="text-blue-700 underline">Login</button>
        </div>
      </Menu>
    </>
  );
}
