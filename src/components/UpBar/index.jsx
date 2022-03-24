import { useNavigate } from "react-router-dom";
import "./styles.scss";

function UpBar() {
  const navigate = useNavigate();

  function navigateTo(url) {
    navigate(`/${url}`);
  }

  return (
    <div>
      <div className="menu">
        <span>
          <h1>Healthy Food</h1>
        </span>
        <input type="checkbox" id="check" name="check" />
        <label htmlFor="check" className="lblCheck">
          <i className="bx bx-menu" />
        </label>
        <div className="nav-itens">
          <div className="link" onClick={() => navigateTo("")}>
            HEALTHY RECIPES
          </div>
          <div className="link">
            <a href="#blog">BLOG</a>
          </div>
          <div className="link">
            <a href="#join">JOIN</a>
          </div>
          <div className="link" onClick={() => navigateTo("register")}>
            REGISTER
          </div>
        </div>
      </div>

      <nav>
        <span>
          <h1>Healthy Food</h1>
        </span>
        <div className="links">
          <div className="link" onClick={() => navigateTo("")}>
            HEALTHY RECIPES
          </div>
          <div className="link">
            <a href="#blog">BLOG</a>
          </div>
          <div className="link">
            <a href="#join">JOIN</a>
          </div>
          <div className="link register" onClick={() => navigateTo("register")}>
            REGISTER
          </div>
        </div>
      </nav>
    </div>
  );
}
export default UpBar;
