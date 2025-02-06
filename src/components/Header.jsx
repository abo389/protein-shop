export default function Header ()
{
  return <header className="container m-auto">
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="drawer drawer-start">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-[99]">
            {/* { "menu bg-base-200 text-base-content min-h-full w-80 p-4" } */ }
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 rounded-box text-base-content min-h-full w-80 !p-16">
              <li><a>المنتجات</a></li>
              <li>
                <details open>
                  <summary className="order-1">التصنيفات</summary>
                  <ul>
                    <li><a>بروتين</a></li>
                    <li><a>كيرياتين</a></li>
                    <li>
                      <a></a>
                    </li>
                  </ul>
                </details>
              </li>
              <li><a>تواصل معنا</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">متجر بروتينات</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* <span className="badge badge-sm indicator-item">8</span> */}
            </div>
          </div>
          <div
            tabIndex={ 0 }
            className="card bg- card-compact dropdown-content bg-base-100 z-[99] mt-3 w-52 shadow left-0">
            <div className="card-body">
              <span className="text-lg font-bold text-right">8 عناصر</span>
              <span className="text-success text-right">المجموع : 800 جنية</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">عرض السلة</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" /></svg>
          </div>
          <ul
            tabIndex={ 0 }
            className="menu left-0 menu-sm dropdown-content bg-base-100 rounded-box z-[99] mt-3 w-52 p-2 shadow">
            <li className="text-right"><a>الملف الشخصي</a></li>
            <li><a>الاعدادات</a></li>
            <li><a>تسجيل الخروج</a></li>
          </ul>
        </div>
        <label className="swap swap-rotate btn btn-ghost btn-circle">
          {/* this hidden checkbox controls the state */ }
          <input type="checkbox" className="theme-controller" value="light" />

          {/* sun icon */ }
          <svg
            className="swap-off h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */ }
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  </header>
}