export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-base-100 py-2">
      <div className="container mx-auto">
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn-primary btn-circle btn mr-1 lg:hidden"
              >
                <i className="bi bi-list text-2xl"></i>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-1 w-52 bg-base-200 p-2 shadow"
              >
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
              </ul>
            </div>
            <a className="btn-ghost btn text-2xl normal-case">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 font-medium">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn">
                Login
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-1 max-h-96 w-52 overflow-y-auto  bg-base-200 p-2 shadow"
              >
                <li>ok</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
