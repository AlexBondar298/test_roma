import classes from "./WorkingPost.module.scss";

const WorkingPost = () => {
  return (
    <section className={classes.workingPost}>
      <div className={`container`}>
        <div className={classes.workingPost__inner}>
          <h2 className={`title`}>Working with POST request</h2>

          <form className={classes.workingPostForm} id="workingPostForm">
            <div className={classes.formGroup}>
              <input
                className={classes.formGroup__name}
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className={classes.formGroup__email}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
              <input
                className={classes.formGroup__phone}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>

            <div className={classes.formGroup}>
              <label>Select your position</label>
              <div className={classes.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="frontend_developer"
                    checked
                  />
                  Frontend developer
                </label>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="backend_developer"
                  />
                  Backend developer
                </label>
                <label>
                  <input type="radio" name="position" value="designer" />
                  Designer
                </label>
                <label>
                  <input type="radio" name="position" value="qa" />
                  QA
                </label>
              </div>
            </div>

            <div className={classes.formGroup}>
              <label className={classes.inputFile}>
                <input type="file" name="file" />
                <span className={classes.inputFileBtn}>Upload</span>
                <span className={classes.inputFileText}>Upload your photo</span>
              </label>
            </div>

            <div className={classes.workingPostButton}>
              <button type="submit" className={`${classes.submitBtn} button`}>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WorkingPost;
