import Button from "../ui/button";
import styles from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AdressIcon from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadebledate = new Date(date).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formatedLocation = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt="" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadebledate}</time>
          </div>
          <div className={styles.address}>
            <AdressIcon />
            <adress>{formatedLocation}</adress>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore even</span>
            <span className={styles.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
