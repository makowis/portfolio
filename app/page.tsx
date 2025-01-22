import styles from '../styles/Home.module.scss';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>makowis.dev</h1>
      <p className={styles.description}>ポートフォリオサイトという名のリンク集</p>
      <section className={styles.subSection}>
        <h2 className={styles.subTitle}>Links</h2>
        <ul className={styles.links}>
          <li>
            <a href="https://twitter.com/mako_wis">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/makoto.henmi">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mako_wis/">Instagram</a>
          </li>
          <li>
            <a href="https://github.com/makowis">GitHub</a>
          </li>
          <li>
            <a href="https://speakerdeck.com/makowis">Speaker Deck</a>
          </li>
          <li>
            <a href="https://mako-wis.hatenablog.com/">Blog</a>
          </li>
        </ul>
      </section>
    </div>
  )
}