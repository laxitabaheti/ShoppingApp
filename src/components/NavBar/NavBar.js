import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.app_name}>Name of the app</div>
      <div className={styles.navbar_list}>
        <ul>
          <li>Home</li>
          <li>Items</li>
          {/* <li>3</li> */}
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.Cart}>Cart</div>
    </div>
  );
};
export default NavBar;
