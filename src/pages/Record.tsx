import { motion } from "framer-motion";
import { useState } from "react";
import { cases } from "../data.ts";
import { Count } from "../components/Count.tsx";
import { Arrow, Footer } from "../components/Footer.tsx";
import { asset } from "../asset.ts";
import { Placeholder } from "../components/Placeholder.tsx";
import { Reveal } from "../components/Reveal.tsx";

const extras = [
  ["Non-conforming waste", "Material that should not be in the load, flagged as it arrives."],
  ["Classification", "Waste typed from the image and lined up with weighbridge data."],
  ["Intruders", "A person where a person should not be, with the clip kept."],
  ["Safety zones", "A boundary around a pit, a pile, or a machine."],
];

export function Record() {
  const [active, setActive] = useState(cases[0].id);
  const current = cases.find((item) => item.id === active) ?? cases[0];

  return (
    <div className="page record">
      <header className="bar-nav dark">
        <a href="#top"><img src={asset("/mvai-logo-light.svg")} alt="Machine Vision AI" /></a>
        <nav>
          <a href="#sites">Case studies</a>
          <a className="btn green" href="#contact">Talk to us <Arrow /></a>
        </nav>
      </header>

      <section className="record-hero wrap" id="top">
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          The record is the product.
        </motion.h1>
        <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          We watch the cameras already on site. A person confirms smoke or flame, and your team gets the picture. These times are from three real incidents.
        </motion.p>
        <div className="record-nums">
          <div><strong><Count to={47} suffix="s" /></strong><span>Braeside, interior fire</span></div>
          <div><strong><Count to={3} suffix=" min" /></strong><span>Timber yard, no thermals</span></div>
          <div><strong>&lt;<Count to={60} suffix="s" /></strong><span>Loader, still working</span></div>
          <div><strong><Count to={24} suffix="/7" /></strong><span>Nights and weekends</span></div>
        </div>
      </section>

      <div className="wrap record-stage">
        <motion.div key={current.id} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          <Placeholder tone={current.tone} label={current.place} note={current.slot} className="record-wide" />
        </motion.div>
      </div>

      <section className="wrap" id="sites">
        <div className="record-list">
          {cases.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === active ? "on" : ""}
              onMouseEnter={() => setActive(item.id)}
              onFocus={() => setActive(item.id)}
              onClick={() => setActive(item.id)}
            >
              <span>{item.kind}</span>
              <strong>{item.place}</strong>
              <em>{item.time}</em>
            </button>
          ))}
        </div>
        <Reveal>
          <p className="record-detail">{current.detail}</p>
        </Reveal>
      </section>

      <section className="wrap extras">
        <h2>Fire is where most sites start.</h2>
        <div className="extra-grid">
          {extras.map(([title, body]) => (
            <Reveal key={title}>
              <article>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="record-close wrap">
        <h2>If nights are uncovered, we should talk.</h2>
        <a className="btn green" href="mailto:support@mvai.com.au">support@mvai.com.au <Arrow /></a>
      </section>
      <Footer />
    </div>
  );
}
