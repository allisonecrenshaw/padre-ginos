import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Easy Cheesy" description="Marinara, mozz, and more mozz" />
      <Pizza name="Pepperoni" description="Marinara, mozz, pepperoni" />
      <Pizza name="Mushroom" description="Marinara, mozz, mushroom" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
