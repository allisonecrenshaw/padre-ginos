import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Hawaiian"
        description="Marinara, mozz, ham, and pineapple"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Pepperoni"
        description="Marinara, mozz, pepperoni"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Big Meat"
        description="Marinara, mozz, and all da meats"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
