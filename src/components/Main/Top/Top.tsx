import classes from './Top.module.scss'

const Top = () => {
  return (
    <section className={classes.top}>
      <div className={`container`}>
        <div className={classes.top__inner}>
          <div className={classes.top__wrapper}>
            <h1 className={classes.top__title}>
              Test assignment for front-end developer
            </h1>
            <p className={classes.top__text}>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <button className={` ${classes.top__btn} button`}>Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
