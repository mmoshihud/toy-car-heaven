const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div className="lg:grid-cols-auto footer grid-cols-2 py-10 sm:grid-cols-4 md:py-16">
          <div>
            <span className="footer-title">Solutions</span>
            <a href="#!" className="link-hover link">
              Marketing
            </a>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a href="#!" className="link-hover link">
              Branding
            </a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a href="#!" className="link-hover link">
              About us
            </a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a href="#!" className="link-hover link">
              Terms of use
            </a>
          </div>
          <div className="col-span-full w-full md:col-auto">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="user@site.com"
                  className="input-bordered input w-full pr-16"
                />
                <button className="btn-primary btn absolute right-0 top-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-base-300 py-4 sm:flex-row">
          <div className="flex-grow text-center sm:text-start">
            <p>© 2022 Developed by Mosh, Inc. All rights reserved.</p>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a className="link-secondary link" href="#!">
              <i className="bi bi-facebook text-xl"></i>
            </a>
            <a className="link-secondary link" href="#!">
              <i className="bi bi-instagram text-xl"></i>
            </a>
            <a className="link-secondary link" href="#!">
              <i className="bi bi-twitter text-xl"></i>
            </a>
            <a className="link-secondary link" href="#!">
              <i className="bi bi-github text-xl"></i>
            </a>
            <a className="link-secondary link" href="#!">
              <i className="bi bi-dribbble text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
