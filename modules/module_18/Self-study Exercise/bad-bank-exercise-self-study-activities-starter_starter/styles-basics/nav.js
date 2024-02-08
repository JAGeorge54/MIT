function Nav() {
  return(
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <a className="navbar-brand" href="#">
        <img src="./bankPic.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        BadBank
      </a>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Products/">Products</Link>
        </li>
      </ul>
    </nav>
  );
}