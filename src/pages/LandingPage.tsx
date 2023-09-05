import { Link } from "react-router-dom";

const LandingPage = (): JSX.Element => {
  return (
    <div>
      <div>
        <h1>Strong n' Epic</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum magnam nemo repellat, adipisci nihil velit aliquid. Quisquam beatae aliquam ratione
          quas, doloribus, molestias delectus nam assumenda qui reiciendis illum sunt!
        </p>
      </div>
      <div>
        <h2>Våra Pass</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum magnam nemo repellat, adipisci nihil velit aliquid. Quisquam beatae aliquam ratione
          quas, doloribus, molestias delectus nam assumenda qui reiciendis illum sunt!
        </p>
        <Link to="booking">Se mer</Link>
      </div>
    </div>
  );
};

export default LandingPage;
