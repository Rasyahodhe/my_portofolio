import "../boostrap/boostrap.css";
import "../../node_modules/bulma/css/bulma.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/Service.css";
// Import komponen Card

import Card from "../component/card";

function Service() {
  return (
    <article id="service" className="page">
      <h2 className="h2_service">SERVICE</h2>
      <div className="container-fluid d-md-flex  flex-row gap-3 justify-content-center column-gap-3 d-sm-flex">
        <Card titel="Front -End" />
        <Card titel="Back-End" />
        <Card titel="Full Stack" />
      </div>
    </article>
  );
}

export default Service;
