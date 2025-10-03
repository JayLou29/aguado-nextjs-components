import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <img src="https://picsum.photos/300/200" alt="Profile" />
      <h2>Louie Jay M. Aguado</h2>
      <p>Age: 23</p>
      <p>I am a passionate web developer learning Next.js!</p>
    </div>
  );
}