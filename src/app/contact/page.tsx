import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hire Wyrd Studios for Android development, API design, or software consulting. Get in touch.",
};

export default function ContactPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Get in touch</p>
          <h1 className={styles.headline}>Let&apos;s work together.</h1>
          <p className={styles.subline}>
            Have a project in mind? Reach out directly. We typically respond
            within one business day.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send a message</h2>
              <form
                action="https://formspree.io/f/mvzwvnyd"
                method="POST"
                className={styles.form}
              >
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="you@example.com"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send message
                </button>
              </form>
            </div>

            {/* Direct contact info */}
            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Prefer email?</h3>
                <p className={styles.infoBody}>
                  Send directly to{" "}
                  <a href="mailto:hello@wyrdstudios.dev" className={styles.emailLink}>
                    hello@wyrdstudios.dev
                  </a>
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>What to include</h3>
                <ul className={styles.tipList}>
                  <li>Brief project description</li>
                  <li>Rough timeline or deadline</li>
                  <li>Budget range if applicable</li>
                  <li>Tech stack you&apos;re working with</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>We&apos;re good at</h3>
                <ul className={styles.tipList}>
                  <li>Android (Kotlin, Jetpack Compose)</li>
                  <li>Backend APIs</li>
                  <li>Software architecture</li>
                  <li>Early-stage product work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
