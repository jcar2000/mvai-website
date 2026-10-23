import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { clients } from "../data.ts";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {clients.map((logo) => (
        <span className="marquee-item" key={logo.name}>
          <img src={logo.src} alt={hidden ? "" : logo.name} />
        </span>
      ))}
    </div>
  );
}

const copies = [0, 1, 2, 3];

export function LogoMarquee({ tone = "light" }: { tone?: "light" | "dark" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const group = track?.querySelector<HTMLElement>(".marquee-group");
    if (!track || !group) return;

    const measure = () => {
      const width = group.getBoundingClientRect().width;
      if (width > 0) {
        setShift((current) => (Math.abs(current - width) > 0.5 ? width : current));
      }
    };

    measure();
    const images = [...group.querySelectorAll("img")];
    for (const image of images) {
      if (!image.complete) image.addEventListener("load", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    return () => {
      observer.disconnect();
      for (const image of images) image.removeEventListener("load", measure);
    };
  }, []);

  return (
    <section className={`marquee ${tone}`} aria-label="Trusted by">
      <p className="marquee-label">Trusted by</p>
      <div className="marquee-viewport">
        <div
          ref={trackRef}
          className={`marquee-track${shift ? " is-ready" : ""}`}
          style={{ "--marquee-shift": `${shift}px` } as CSSProperties}
        >
          {copies.map((copy) => (
            <Row key={copy} hidden={copy > 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
