import { asset } from "../asset.ts";

export function Footer({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <footer className={`site-footer tone-${tone}`}>
      <div className="footer-grid">
        <div>
          <p className="footer-brand">Machine Vision AI</p>
          <p>Industrial vision AI for risk detection, safety and operational intelligence.</p>
        </div>
        <div>
          <p className="footer-label">Sydney</p>
          <p>Level 2, Salesforce Tower<br />180 George Street<br />Sydney NSW 2000</p>
        </div>
        <div>
          <p className="footer-label">Delhi</p>
          <p>903, Best Sky Tower<br />Plot No. 5, Netaji Subhash Place<br />Delhi 110034</p>
        </div>
        <div>
          <p className="footer-label">Talk to our team</p>
          <p>
            <a href="mailto:support@mvai.com.au?subject=Site%20enquiry">support@mvai.com.au</a>
            <br />
            <a href="tel:+61451146733">+61 451 146 733</a>
          </p>
          <p className="footer-label footer-support">MVAlert support</p>
          <p><a href="mailto:support@mvai.com.au">support@mvai.com.au</a></p>
          <p className="footer-legal"><a href={asset("/privacy.html")}>Privacy policy</a></p>
        </div>
      </div>
    </footer>
  );
}

export function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
