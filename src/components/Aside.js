import React from "react";
import { withRouter } from "react-router-dom";

const Aside = ({ signin }) => {
  let usuRef = React.createRef();

  const iniciarSesion = event => {
    event.preventDefault();
    signin(usuRef.current.value);
  };
  return (
    <main className="container">
      <div className="row mt-5">
        <div className="col-12"></div>
        <div className="col-4 align-left">
          <form onSubmit={iniciarSesion}>
            <div className="form-group">
              <label>Perfil a buscar</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el usuario a buscar"
                ref={usuRef}
              />
            </div>
            <input
              type="submit"
              value="Buscar"
              className="btn btn-primary"
            />
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </main>
  );
};
export default withRouter(Aside);
