import classes from "./Cart.module.scss";

interface DataCart {
  key: number;
  image: string;
  alt: string;
  title: string;
  position: string;
  email: string;
  phone: string;
}

const Cart = ({ image, alt, title, position, email, phone }: DataCart) => {
  return (
    <li className={classes.workingGet__card}>
      <img
        src={`./assets/img/image/${image}`}
        alt={alt}
        className="working-get__card-img"
      />
      <p className={classes.card__title}>{title}</p>
      <div className={classes.card__info}>
        <p className={classes.card__position}>{position}</p>
        <a
          className={classes.card__email}
          href="mailto:frontend_develop@gmail.com"
        >
          {email}
        </a>
        <a className={classes.card__tel} href="tel:+380982784424">
          {phone}
        </a>
      </div>
    </li>
  );
};

export default Cart;
