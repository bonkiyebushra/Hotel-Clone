function Header() {
  return (
    <div id="header">
      <i id="menu_bar" class="fa fa-bars"></i>
      <a href="/"><img id='hotel_logo' src={require('./images/hotel_logo.webp')} /></a>  
      
      <ul>
        <li>
          <a href="/">Book</a>
        </li>
        <li>
          <a href="/locations">Locations</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/signup">Signup</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
