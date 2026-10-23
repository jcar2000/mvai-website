const id = "YIS9mzeNnlQ";
const overview = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
const thumbnail = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export function VideoSlot({
  open = false,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  return (
    <div className={`video-slot ${open ? "is-open" : ""}`}>
      <img className="video-poster" src={thumbnail} alt="" />
      {open ? (
        <iframe
          className="video-frame"
          src={overview}
          title="MVAI solutions overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" className="play" aria-label="Play the overview" onClick={() => onOpenChange?.(true)}>
          <i className="play-ring" />
          <i className="play-triangle" />
        </button>
      )}
      {open ? (
        <button type="button" className="video-close" onClick={() => onOpenChange?.(false)}>
          Close
        </button>
      ) : null}
    </div>
  );
}
