import { asset } from "../asset.ts";
import type { Tone } from "../data.ts";

export function placeholderSrc(tone: Tone = "shed") {
  return sources[tone];
}

const sources: Record<Tone, string> = {
  shed: asset("/ph/claw.jpg"),
  yard: asset("/ph/scrap.jpg"),
  machine: asset("/ph/excavator.jpg"),
  night: asset("/ph/wall.jpg"),
  desk: asset("/ph/factory.jpg"),
  alert: asset("/ph/camera.jpg"),
  wide: asset("/ph/dump.jpg"),
};

export function Placeholder({
  label,
  note,
  tone = "shed",
  className = "",
  quiet = false,
  src,
  caption = true,
}: {
  label: string;
  note?: string;
  tone?: Tone;
  className?: string;
  quiet?: boolean;
  src?: string;
  caption?: boolean;
}) {
  return (
    <div className={`ph tone-${tone} ${quiet ? "quiet" : ""} ${className}`.trim()} role={caption ? "img" : undefined} aria-label={caption && label ? `${label}. ${note ?? ""}` : undefined}>
      {src?.endsWith(".mp4") ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => undefined);
          }}
        />
      ) : (
        <img src={src ?? sources[tone]} alt={caption ? "" : label} />
      )}
      <div className="ph-shade" />
      {caption && label ? (
        <div className="ph-caption">
          <strong>{label}</strong>
          {note ? <span>{note}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
