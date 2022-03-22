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
          <div className="link" onClick={() => navigateTo("Auto")}>
            HEALTHY RECIPES
          </div>
          <div className="link" onClick={() => navigateTo("Pet")}>
            BLOG
          </div>
          <div className="link" onClick={() => navigateTo("Residential")}>
            JOIN
          </div>
          <div className="link" onClick={() => navigateTo("Travel")}>
            REGISTER
          </div>
        </div>
      </div>

      <nav>
        <span>
          <h1>Healthy Food</h1>
        </span>
        <div className="links">
        <div onClick={() => navigateTo("Auto")}>
          HEALTHY RECIPES
        </div>
        <div onClick={() => navigateTo("Pet")}>
          BLOG
        </div>
        <div onClick={() => navigateTo("Residential")}>
          JOIN
        </div>
        <div onClick={() => navigateTo("Travel")}>
          REGISTER
        </div>
        </div>
      </nav>
    </div>
  );
}
export default UpBar;
