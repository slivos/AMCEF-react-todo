import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';

interface ArrowHomeProps {
  classes?: string;
  route: string;
}

export const ArrowHome = ({ classes, route }: ArrowHomeProps) => {
  return (
    <Link to={route}>
      <HiArrowSmLeft
        className={`${classes} text-3xl mr-1 transition ease-in-out delay-100 hover:-translate-x-1 text-react-blue cursor-pointer`}
      />
    </Link>
  );
};
