import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=' bg-neutral py-2 text-neutral-content '>
      <div className='align-element flex sm:mx-24 justify-center sm:justify-end '>
        <div className='flex gap-x-6 justify-center items-center'>
          <Link to='/Login' className='link link-hover text-base'>
            Sign in / Guest
          </Link>
          <Link to='/Register' className='link link-hover text-base'>
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;