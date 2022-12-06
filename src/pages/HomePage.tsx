import { Link } from 'react-router-dom';
import { Social } from '../components/Social';

export const HomePage = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <div className="img-container w-60 h-60 sm:w-80 sm:h-80">
        <div className="img-bg"></div>
        <img src="react-2.svg" alt="react-logo" className="home-img" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          React{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-react-blue to-violet-500">
            Todo App
          </span>
        </h1>
        <Link to="/todos">
          <button className="btn btn-outline btn-info border-4 text-base w-full">
            Začať
          </button>
        </Link>
        <Social />
      </div>
    </div>
  );
};
