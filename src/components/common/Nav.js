export default function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Shoes</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/shoes">Women</a>
          <a className="dropdown-item" href="/shoes">Men</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/shoes">Sale</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/account">Account</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Bag</a>
      </li>
    </ul>
  )
}