import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { floorWatch } from "../data.ts";
import { Arrow } from "./Footer.tsx";
import { Placeholder, placeholderSrc } from "./Placeholder.tsx";

const hours = ["06:40", "09:15", "11:05", "14:30", "22:10"];
const events = [
  "A potential fire hazard is detected.",
  "Activity enters a monitored zone.",
  "Incoming material is assessed.",
  "Operational activity is tracked.",
  "Unexpected movement is detected.",
];

const ease = [0.16, 0.8, 0.2, 1] as const;

export function WatchExamples() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const job = floorWatch[active];

  useEffect(() => {
    for (const item of floorWatch) {
      if (item.motion?.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.src = item.motion;
      } else {
        const img = new Image();
        img.src = item.motion ?? placeholderSrc(item.tone);
      }
      if (item.still) {
        const still = new Image();
        still.src = item.still;
      }
    }
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const selected = list?.querySelector<HTMLButtonElement>('[aria-selected="true"]');
    if (!list || !selected || list.scrollWidth <= list.clientWidth + 1) return;
    const left = selected.offsetLeft - (list.clientWidth - selected.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: reduced ? "auto" : "smooth" });
  }, [active, reduced]);

  return (
    <div className="examples">
      <div className="lead-split">
        <div className="lead-main">
          <div className="lead-photo">
            <AnimatePresence initial={false}>
              <motion.div
                key={job.title}
                className="lead-photo-layer"
                initial={reduced ? false : { opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.45, ease }}
              >
                <Placeholder tone={job.tone} src={job.motion} quiet caption={false} label={job.title} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="lead-list" role="tablist" aria-label="What the cameras can do" ref={listRef}>
          {floorWatch.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "on" : undefined}
              onClick={() => setActive(i)}
            >
              <span className="lead-row">
                <span className="lead-copy">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <span className="line">{item.line}</span>
                </span>
                <Arrow />
              </span>
              <span className="lead-mobile">
                <span className="lead-mobile-inner">
                  <Placeholder tone={item.tone} src={item.motion} quiet caption={false} label={item.title} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="shift-block">
        <p className="kicker">MVAI throughout the day</p>
        <h3>From first shift to after hours.</h3>
        <p className="shift-note">Different challenges arise throughout the day. See how MVAI&apos;s vision AI applications can help monitor risks, activity and operations from morning through to night.</p>
        <div className="shift">
          {floorWatch.map((item, i) => (
            <article key={item.title}>
              <time dateTime={hours[i]}>{hours[i]}</time>
              <Placeholder className={item.still?.includes("intruder-still") ? "still-low" : ""} tone={item.tone} src={item.still} quiet caption={false} label={item.slot} />
              <h3>{events[i]}</h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
