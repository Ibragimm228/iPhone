import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-black/80 backdrop-blur-md fixed top-0 z-50">
      <nav className="flex w-full screen-max-width items-center justify-between">
        <img 
          src={appleImg} 
          alt="Apple" 
          width={14} 
          height={18}
          className="cursor-pointer hover:opacity-80 transition-opacity" 
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div 
              key={nav} 
              className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-colors"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-7 max-sm:justify-end max-sm:flex-1">
          <img 
            src={searchImg} 
            alt="Search" 
            width={18} 
            height={18} 
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img 
            src={bagImg} 
            alt="Shopping Bag" 
            width={18} 
            height={18}
            className="cursor-pointer hover:opacity-80 transition-opacity" 
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;