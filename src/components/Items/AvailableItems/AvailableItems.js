import Card from "../../UI/Card/Card";
import Items from "../../Items/Items";
import cimg from "../../Assets/bp4.jpg";
import styles from "./AvailableItems.module.css";
const AvailableItems = () => {
  return (
    <div className={styles.main_body}>
      <div className={styles.background}>
        <img src={cimg} alt="shopping cart" />
      </div>
      <div className={styles.tag_card}>Tagline</div>
      <Card>
        <Items />
      </Card>
      {/* <Card></Card> */}
    </div>
  );
};
export default AvailableItems;
