import { asset } from "./asset.ts";

export const cases = [
  {
    id: "braeside",
    place: "Braeside, Victoria",
    kind: "Mixed recycling",
    title: "Fire inside the shed",
    time: "47s",
    count: 47,
    suffix: "s",
    brief: "Smoke and flame on the interior cameras. The on-call team was alerted.",
    detail:
      "The fire was inside the shed, on a camera feed the site already owned.",
    metric: "Alert time",
    slot: "CCTV still, interior, smoke along the wall",
    tone: "shed" as const,
    src: asset("/ph/case-1.jpg"),
  },
  {
    id: "timber",
    place: "NSW timber yard",
    kind: "C&D processing",
    title: "Christmas Day, no thermals",
    time: "3 min",
    count: 3,
    suffix: " min",
    brief: "Smoke and flame on open ground, where no thermal was fitted.",
    detail:
      "Fire services were called within three minutes of the first detection.",
    metric: "Detect to response",
    slot: "CCTV still, detection boxes on the pile",
    tone: "wide" as const,
    src: asset("/ph/case-2.jpg"),
  },
  {
    id: "loader",
    place: "NSW C&D facility",
    kind: "Machine fire",
    title: "Loader, stopped in the cab",
    time: "<60s",
    count: 60,
    suffix: "s",
    brief: "Flames on a loader still in operation, with the operator in the cab.",
    detail:
      "Managers were alerted before the fire reached the stockpile beside the machine.",
    metric: "Alert time",
    slot: "CCTV still, machine and stockpile",
    tone: "machine" as const,
    src: asset("/ph/case-3.jpg"),
  },
];

export const steps = [
  {
    n: "01",
    title: "The cameras already there",
    body: "A pilot does not start with an installation. We take the feeds you have, including yards where thermals were never fitted.",
    slot: "Wide shot of cameras on a shed",
    tone: "night" as const,
  },
  {
    n: "02",
    title: "A model trained on that site",
    body: "Hot engines, dust, and a stockpile that always smoulders a little are different everywhere. The model is built around those cases.",
    slot: "Close shot of a stockpile",
    tone: "yard" as const,
  },
  {
    n: "03",
    title: "A person confirms it",
    body: "Someone looks at the frame, including overnight and on weekends, before your team is called or the brigade is mobilised.",
    slot: "Monitoring desk, night shift",
    tone: "desk" as const,
  },
  {
    n: "04",
    title: "Your team gets the picture",
    body: "The alert goes out through MVAlert with the still and the time. The site follows the escalation path it already uses.",
    slot: "Phone with an alert still",
    tone: "alert" as const,
  },
];

export type Tone = "shed" | "yard" | "machine" | "night" | "desk" | "alert" | "wide";

export const clients = [
  { name: "Bingo Industries", src: asset("/logos/bingo.png") },
  { name: "Panda", src: asset("/logos/panda.png") },
  { name: "Biffa", src: asset("/logos/biffa.png") },
  { name: "Re.Group", src: asset("/logos/regroup.png") },
  { name: "Adbri", src: asset("/logos/adbri.png") },
  { name: "Return-It", src: asset("/logos/returnit.png") },
  { name: "Enviro Waste Services", src: asset("/logos/enviro.png") },
];

export const solutions = [
  {
    title: "Fire and smoke",
    lead: true,
    line: "The reason most sites start.",
    body: "The product most sites start with. Visual signs of fire or smoke on the cameras already pointed at the shed, the pile, and the machine.",
    tone: "shed" as const,
    slot: "Stockpile or shed interior",
  },
  {
    title: "Exclusion zones",
    lead: false,
    line: "A line in the picture. Crossing it is flagged.",
    body: "A line drawn in the camera view. A person or a machine that crosses it is flagged. It sits beside barriers and procedure.",
    tone: "yard" as const,
    slot: "Yard with a marked boundary",
  },
  {
    title: "Vehicles and people",
    lead: false,
    line: "Loaders, trucks, and whoever is beside them.",
    body: "Trucks, loaders, forklifts, excavators, and the person standing where the machine is working.",
    tone: "machine" as const,
    slot: "Loader or truck in the yard",
  },
  {
    title: "Waste on the way in",
    lead: false,
    line: "The load, tied to the truck that tipped it.",
    body: "The unload, tied to the truck that brought it. Useful when a load needs a second look, or a report has to match the weighbridge.",
    tone: "wide" as const,
    slot: "Truck tipping a load",
  },
];

export const floorWatch: {
  title: string;
  lead: boolean;
  line: string;
  tone: Tone;
  slot: string;
  motion?: string;
  still?: string;
}[] = [
  {
    title: "Fire and smoke",
    lead: true,
    line: "Detect visible fire and smoke early, enabling faster response.",
    tone: "shed" as const,
    slot: "Stockpile or shed interior",
    motion: asset("/ph/fire.mp4"),
    still: asset("/ph/fire-still.jpg"),
  },
  {
    title: "Safety and exclusion zones",
    lead: false,
    line: "Identify people or equipment entering monitored high-risk areas.",
    tone: "yard" as const,
    slot: "Yard with a marked boundary",
    still: asset("/ph/safety-zone.png"),
  },
  {
    title: "Waste classification and non-conforming detection",
    lead: false,
    line: "Identify incoming materials and flag non-conforming waste.",
    tone: "wide" as const,
    slot: "Truck tipping a load",
    still: asset("/ph/fire-ext.jpg"),
  },
  {
    title: "Plant efficiency and reporting",
    lead: false,
    line: "Monitor operational activity and turn site data into actionable insights.",
    tone: "machine" as const,
    slot: "Machines working the yard",
  },
  {
    title: "Intruder detection",
    lead: false,
    line: "Detect unexpected activity in monitored areas outside operating hours.",
    tone: "night" as const,
    slot: "The yard after hours",
    motion: asset("/ph/intruder.gif"),
    still: asset("/ph/intruder-still.jpg"),
  },
];

export const howSteps = [
  { n: "01", title: "Existing CCTV", body: "Use the camera feeds already on site." },
  { n: "02", title: "On-site AI", body: "Analyse footage locally." },
  { n: "03", title: "Intelligent detection", body: "Identify relevant events and filter out noise." },
  { n: "04", title: "Watchtower", body: "Surface events through the monitoring platform." },
  { n: "05", title: "MVAlert", body: "Notify the right people when action is needed." },
];

export const industries = [
  "Waste & Recycling",
  "Quarrying & Aggregates",
  "Construction & Demolition",
  "Mining & Processing",
];

export const flow = [
  { n: "01", title: "The feeds you have", body: "CCTV over RTSP. A thermal is used where one is already fitted. A new camera is not the starting point." },
  { n: "02", title: "A computer on site", body: "The models run on a GPU at the facility. The live video stays there. The cloud gets the event, the clip, and the health of the box." },
  { n: "03", title: "A filter, not every orange pixel", body: "Beacons, steam, dust and glare are treated as the hard cases they are. Repeated hits on the same spot are held back." },
  { n: "04", title: "Watchtower", body: "A person looks at the clip before it becomes your team’s problem. Steam and a real plume are not the same call." },
  { n: "05", title: "MVAlert", body: "The people who need it get the still and the time, on the path the site already uses." },
];

export const hard = [
  { title: "Beacons and work lights", body: "Orange light on a compressed camera can look like flame. The model has to know the difference on that site." },
  { title: "Dust, steam, exhaust", body: "A single frame of a plume is not an incident. It has to hold, and it has to be in a place that matters." },
  { title: "Sun, rain, a tired camera", body: "The same pile looks different at 7am, at noon, and on a wet night. Coverage depends on the camera you actually have." },
  { title: "Hot metal, hot engines", body: "A thermal reading is useful, and it lies on shiny steel and a machine that just worked a shift. It gets calibrated, not trusted blind." },
];

export const markets = [
  { title: "Waste and recycling", body: "Where the work started. Combustible piles, big machines, cameras that are already up." },
  { title: "Quarrying", body: "Trucks, operating zones, and fire risk on a site that is mostly open ground." },
  { title: "Construction", body: "Restricted areas and machines working next to people." },
  { title: "Mining and processing", body: "The same camera layer, where the footage and the network will allow it." },
];

export const rollout = [
  { n: "01", title: "Assess the site", body: "We review your site's risks, existing camera coverage and the events you want to detect." },
  { n: "02", title: "Connect your cameras", body: "We connect suitable existing CCTV feeds to MVAI's processing system." },
  { n: "03", title: "Deploy on-site AI", body: "We install and configure the AI processing system for your site's applications." },
  { n: "04", title: "Test and validate", body: "We test detections and alert workflows in your operating environment." },
  { n: "05", title: "Ongoing support", body: "We provide ongoing software management and support as your operational needs evolve." },
];
