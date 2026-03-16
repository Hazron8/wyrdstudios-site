import type { Metadata } from "next";
import Button from "@/components/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Wyrd Studios is a small app studio and consulting shop. One developer, clear priorities, careful work.",
};

export default function AboutPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>About the studio</p>
          <h1 className={styles.headline}>Small studio.<br />Focused work.</h1>
          <p className={styles.subline}>
            Wyrd Studios is one developer building apps and taking on consulting
            work that matters. No agencies, no committees — just direct
            collaboration and craft.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container container--content ${styles.content}`}>
          <h2>The studio</h2>
          <p>
            Wyrd Studios builds Android apps and consults on software projects.
            The focus is on apps that feel <em>alive</em> — responsive, personal,
            and built with genuine care rather than just shipped to a deadline.
          </p>
          <p>
            The name comes from the Old English concept of wyrd — fate, destiny,
            the shape of things to come. Apps are small bets on what people will
            want next. The studio name is a reminder to take those bets seriously.
          </p>

          <h2>What we build</h2>
          <p>
            Current projects are three Android apps at different stages of
            development:
          </p>
          <ul>
            <li>
              <strong>embyrn</strong> — A Tamagotchi-style virtual pet dragon.
              Feed it, name it, watch it grow. For people who want something
              alive in their pocket that doesn&apos;t want anything from you.
            </li>
            <li>
              <strong>flyaway</strong> — Trip planning without the chaos.
              Itineraries, packing lists, and flight tracking without a
              subscription or a bloated feature set.
            </li>
            <li>
              <strong>sequence timer</strong> — A cooking timer that understands
              you&apos;re making multiple things at once. Designed for the problem
              where everything needs to be done at the same time.
            </li>
          </ul>

          <h2>Consulting</h2>
          <p>
            Available for short-to-medium consulting engagements in:
          </p>
          <ul>
            <li>Android app development (Kotlin, Jetpack Compose)</li>
            <li>Backend API design and development</li>
            <li>Software architecture for small products</li>
            <li>Technical co-founder support for early-stage products</li>
          </ul>
          <p>
            Preference for working directly with founders and small teams rather
            than through layers of project management. Short engagements welcome.
          </p>

          <div className={styles.cta}>
            <Button href="/contact">Work with us</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
