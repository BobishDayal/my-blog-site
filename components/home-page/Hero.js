import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/test-image-1.jpg"
          alt="An image showing Bobish Dayal"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, I'm Bobish Dayal</h1>
      <p>
        I blog about my journey of web development, things that i have learned
        so far and i am planning to learn in future.
      </p>
    </section>
  );
};

export default Hero;
