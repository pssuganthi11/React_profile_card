import Heropage from "./Heropage";

const Header = () => {

  return (
    <header className="bg-slate-600 text-white p-4 mx-auto  ">   
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl">Suganthi Pattappan</h2>
          <ul className="flex gap-2 text-xl sm:text-xl">
            <li><a href="" className="hover:text-black cursor-pointer  ">Profile</a></li>
            <li><a href="https://github.com/pssuganthi11" target="_blank"  className="hover:text-black cursor-pointer  ">GitHub</a></li>
          </ul>
        </div>
      
    </header>
  );
};

export default Header;
