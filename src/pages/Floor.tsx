import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { cases, howSteps, industries, rollout } from "../data.ts";
import { Arrow, Footer } from "../components/Footer.tsx";
import { LogoMarquee } from "../components/LogoMarquee.tsx";
import { WatchExamples } from "../components/WatchExamples.tsx";
import { Placeholder } from "../components/Placeholder.tsx";
import { Reveal } from "../components/Reveal.tsx";
import { VideoSlot } from "../components/VideoSlot.tsx";
import { asset } from "../asset.ts";

export function Floor() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [step, setStep] = useState(0);
  const [hold, setHold] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [openCase, setOpenCase] = useState<string | null>(null);
  const reduced = useReducedMotion();
  useMotionValueEvent(scrollY, "change", (value) => setSolid(value > 24));

  useEffect(() => {
    if (hold || reduced) return;
    const id = window.setInterval(() => setStep((current) => (current + 1) % rollout.length), 5200);
    return () => window.clearInterval(id);
  }, [hold, reduced]);

  return (
    <div className="page floor">
      <header className={`float-nav ${solid ? "is-solid" : ""}`}>
        <a href="#top"><img src={asset("/mvai-logo-light.svg")} alt="Machine Vision AI" /></a>
        <nav>
          <a href="#solutions">Solutions</a>
          <a href="#applications">Applications</a>
          <a href="#how">How it works</a>
          <a href="#film">About MVAI</a>
          <a className="btn light" href="#contact">Book a demo <Arrow /></a>
        </nav>
      </header>

      <section className="floor-hero" id="top">
        <motion.div
          className="floor-hero-media"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 0.8, 0.2, 1] }}
        >
          <Placeholder src={asset("/ph/mpc2.jpg")} quiet caption={false} label="Aerial view of an industrial site" />
        </motion.div>
        <div className="floor-hero-copy">
          <motion.p className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            Industrial vision AI
          </motion.p>
          <h1>
            <span className="line">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: [0.16, 0.8, 0.2, 1] }}
              >
                Your cameras can do
              </motion.span>
            </span>
            <span className="line">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 0.8, 0.2, 1] }}
              >
                <span className="accent">more</span> than record.
              </motion.span>
            </span>
          </h1>
          <motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
            MVAI adds AI-powered detection to your existing CCTV, identifying fire, smoke and other critical events across industrial sites — and alerting your team so they can respond sooner.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <a
              className="btn light"
              href="#film"
              onClick={(event) => {
                event.preventDefault();
                setPlaying(true);
                document.getElementById("film")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See MVAI in action <Arrow />
            </a>
            <a className="btn ghost" href="#contact">Talk to our team <Arrow /></a>
          </motion.div>
        </div>
      </section>

      <LogoMarquee />

      <section className="section film" id="film">
        <Reveal>
          <div className="film-copy">
            <p className="kicker">MVAI in action</p>
            <h2>
              One technology.
              <span className="accent">Multiple industrial applications.</span>
            </h2>
            <p className="lede">
              From fire and smoke detection to inbound waste tracking, MVAI applies computer vision to real challenges across industrial sites. See how our technology turns camera footage into valuable operational intelligence.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="film-video">
            <VideoSlot open={playing} onOpenChange={setPlaying} />
            <figcaption>MVAI solutions overview</figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="section band-paper" id="solutions">
        <Reveal>
          <p className="kicker">Featured applications</p>
          <h2>See what MVAI can detect, track and monitor.</h2>
          <p className="apps-intro">Explore real-world examples of our industrial vision AI technology.</p>
        </Reveal>
        <WatchExamples />
      </section>

      <section className="section rule" id="how">
        <Reveal>
          <p className="kicker">How it works</p>
          <h2>From detection to action.</h2>
          <p className="lede how-lede">MVAI connects your camera feeds to on-site AI processing, helping turn detected events into alerts your team can act on.</p>
        </Reveal>
        <ol className="how-steps">
          {howSteps.map((item) => (
            <li key={item.n}>
              <span>{item.n}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section industries" id="applications">
        <Reveal>
          <h2>Built for the realities of industrial sites.</h2>
        </Reveal>
        <ul className="industry-row">
          {industries.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p className="industry-note">Industrial environments present real monitoring challenges — from dust, steam and exhaust to changing light and heavy machinery.</p>
      </section>

      <section className="section band-paper" id="cases">
        <Reveal>
          <p className="kicker">Real-world fire detection</p>
          <h2>Real incidents. Real alerts.</h2>
          <p className="apps-intro">See how MVAI has detected fire and smoke across active industrial facilities, using real camera footage and recorded alert timelines.</p>
        </Reveal>
        <div className="quiet-cases">
          {cases.map((item) => (
            <Reveal key={item.id}>
              <article>
                <Placeholder src={item.src} tone={item.tone} caption={false} label={item.slot} />
                <div>
                  <p className="kicker">{item.kind}</p>
                  <h3>{item.place}</h3>
                  <p className="case-metric"><span>{item.metric}</span><strong>{item.time}</strong></p>
                  <p>{item.brief}</p>
                  <button
                    type="button"
                    className="case-more"
                    aria-expanded={openCase === item.id}
                    onClick={() => setOpenCase((current) => (current === item.id ? null : item.id))}
                  >
                    {openCase === item.id ? "Hide detail" : "Read detail"}
                  </button>
                  {openCase === item.id ? <p className="case-detail">{item.detail}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="section rollout"
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={() => setHold(false)}
      >
        <Reveal>
          <h2>What a rollout actually involves.</h2>
        </Reveal>
        <div className="rail" role="tablist" aria-label="Rollout steps">
          <div className="rail-line" />
          <motion.div
            className="rail-progress"
            animate={{ width: `${(step / (rollout.length - 1)) * 80}%` }}
            transition={{ duration: reduced ? 0 : 0.45, ease: [0.16, 0.8, 0.2, 1] }}
          />
          {rollout.map((item, i) => (
            <button
              key={item.n}
              type="button"
              role="tab"
              aria-selected={i === step}
              className={i === step ? "on" : ""}
              onClick={() => setStep(i)}
              onMouseEnter={() => setStep(i)}
              onFocus={() => setStep(i)}
            >
              <i>{item.n}</i>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            className="rail-detail"
            key={rollout[step].n}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {rollout[step].body}
          </motion.p>
        </AnimatePresence>
      </section>

      <section className="final-cta" id="contact">
        <div className="final-cta-inner">
          <p className="kicker">Let's talk</p>
          <h2>See what MVAI could do on <span className="accent">your site.</span></h2>
          <p>Tell us what you're looking to detect, monitor or improve. We'll help you explore how MVAI could work with your existing camera infrastructure.</p>
          <a className="btn light" href="mailto:support@mvai.com.au?subject=Site%20enquiry">Talk to our team <Arrow /></a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
