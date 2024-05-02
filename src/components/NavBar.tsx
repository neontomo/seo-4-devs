export default function NavBar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 shadow z-[100] p-0">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-xl font-bold"
          href="/">
          SEO 4 Devs
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="mailto:tomo@neontomo.com"
              className="tooltip tooltip-left"
              data-tip="Email me">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/neontomo"
              target="_blank"
              rel="noreferrer"
              className="tooltip tooltip-left"
              data-tip="Check out my code on Github">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tomo-myrman"
              target="_blank"
              rel="noreferrer"
              className="tooltip tooltip-left"
              data-tip="Connect with me on LinkedIn">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
