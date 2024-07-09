import SubMenu from './SubMenu'
import gameController from '../../../assets/images/game-controller-1.svg';

export default function Drawer() {
  return (
    <div className="drawer drawer-end me-6">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="">
            <img src={gameController} alt="tot" className='transition ease-in-out hover:scale-125 duration-300 w-14 cursor-pointer ' />
            
        </label>
      </div>


      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 bg-base-200 text-base-content absolute z-50"
              style={{height: "95%"}}>
          {/* Sidebar content here */}
          <SubMenu />
        </div>
      </div>


    </div>
  );
}
