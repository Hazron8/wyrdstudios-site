import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wyrd Studios — App Studio & Consulting",
  description: "Weird ideas. Careful craft. We build apps and take on software consulting engagements.",
};

const apps = [
  {
    name: "embyrn",
    tagline: "Your dragon companion",
    description: "A Tamagotchi-style virtual pet dragon for Android. Feed it, name it, watch it grow.",
    status: "In development",
    href: "#",
    emoji: "🐉",
  },
  {
    name: "flyaway",
    tagline: "Travel planning, simplified",
    description: "Plan trips without the chaos. Itineraries, packing lists, and flight tracking in one place.",
    status: "In development",
    href: "#",
    emoji: "✈️",
  },
  {
    name: "sequence timer",
    tagline: "Cook everything at once",
    description: "An Android timer app for sequential cooking. Never let the pasta go cold while the sauce waits.",
    status: "In development",
    href: "#",
    emoji: "⏱️",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.heroEyebrow}>Wyrd Studios</p>
          <h1 className={styles.heroHeadline}>
            Weird ideas.<br />
            <span className={styles.accent}>Careful craft.</span>
          </h1>
          <p className={styles.heroSubline}>
            We build Android apps and take on software consulting engagements.
            Small studio. Focused work. No noise.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact">Hire us</Button>
            <Button href="/about" variant="ghost">About the studio</Button>
          </div>
        </div>
        <div className={styles.heroGlow} aria-hidden="true" />
      </section>

      {/* Apps */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>What we&apos;re building</h2>
          <p className={styles.sectionSubtitle}>Apps made with care, not cruft.</p>
          <div className={styles.appGrid}>
            {apps.map((app) => (
              <div key={app.name} className={styles.appCard}>
                <div className={styles.appEmoji}>{app.emoji}</div>
                <div className={styles.appContent}>
                  <p className={styles.appStatus}>{app.status}</p>
                  <h3 className={styles.appName}>{app.name}</h3>
                  <p className={styles.appTagline}>{app.tagline}</p>
                  <p className={styles.appDesc}>{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className={styles.consultSection}>
        <div className={`container ${styles.consultInner}`}>
          <div className={styles.consultContent}>
            <p className={styles.consultEyebrow}>Available for hire</p>
            <h2 className={styles.consultTitle}>We take on consulting work</h2>
            <p className={styles.consultBody}>
              Need a software partner for a specific project? We work with small
              teams and founders on Android development, API design, and backend
              systems. Short engagements welcome.
            </p>
            <Button href="/contact">Get in touch</Button>
          </div>
          <div className={styles.consultSymbol} aria-hidden="true">⟁</div>
        </div>
      </section>
    </main>
  );
}
