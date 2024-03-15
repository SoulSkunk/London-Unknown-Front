import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className="max-w-[1800px] m-auto">
        <Hero />
        <NewArrivals />
        <Grid />
      </div>
      <Footer />
    </div>
  );
}
