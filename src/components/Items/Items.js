import Card from "../UI/Card/Card";
import styles from "./Items.module.css";

const Dummy_data = [
  { id: 1, name: "image1", price: 500 },
  { id: 2, name: "image2", price: 450 },
  { id: 3, name: "image3", price: 30 },
  { id: 4, name: "image4", price: 900 },
  { id: 5, name: "image5", price: 1500 }
];

const Items = () => {
  return (
    <Card className={styles.Card}>
      <ul>
        {Dummy_data.map((item) => (
          <li key={item.id}>
            <div className={styles.item_Name}>{item.name}</div>
            <div className={styles.item_Price}>{item.price}</div>
            <button>+</button>
            <button>-</button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Items;
