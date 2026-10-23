import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cases, steps } from "../data.ts";
import { Arrow, Footer } from "../components/Footer.tsx";
import { Placeholder } from "../components/Placeholder.tsx";
import { asset } from "../asset.ts";
import { Reveal } from "../components/Reveal.tsx";

export function Sequence() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="page sequence">
      <header className="bar-nav dark">
        <a href="#top"><img src={asset("/mvai-logo-light.svg")} alt="Machine Vision AI" /></a>
        <nav>
          <a href="#story">How it works</a>
          <a href="#cases">Case studies</a>
          <a className="btn green" href="#contact">Talk to us <Arrow /></a>
        </nav>
      </header>

      <section className="seq-intro wrap" id="top">
        <p className="kicker">Waste and recycling facilities</p>
        <h1>Someone has to see the frame.</h1>
        <p className="lede">Scroll. The same cameras, a model trained on that site, a person on the alert, then a call to your team.</p>
      </section>

      <section className="story" id="story">
        <div className="story-pin">
          <div className="story-copy">
            <p className="kicker">{step.n} / 04</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </motion.div>
            </AnimatePresence>
            <div className="dots">
              {steps.map((item, i) => (
                <button key={item.n} type="button" className={i === active ? "on" : ""} onClick={() => setActive(i)}>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step.n}
              className="story-media"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Placeholder tone={step.tone} label="Photo slot" note={step.slot} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="story-track">
          {steps.map((item, i) => (
            <motion.div
              key={item.n}
              className="story-spacer"
              onViewportEnter={() => setActive(i)}
              viewport={{ margin: "-45% 0px -45% 0px" }}
            />
          ))}
        </div>
      </section>

      <section className="section wrap" id="cases">
        <Reveal><h2>What that looks like on a real site.</h2></Reveal>
        <div className="seq-cases">
          {cases.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06}>
              <article>
                <Placeholder tone={item.tone} label={item.time} note={item.slot} />
                <h3>{item.place}</h3>
                <p>{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band dark">
        <h2>Nights and weekends are part of the cover.</h2>
        <a className="btn green" href="mailto:support@mvai.com.au">support@mvai.com.au <Arrow /></a>
      </section>
      <Footer />
    </div>
  );
}
