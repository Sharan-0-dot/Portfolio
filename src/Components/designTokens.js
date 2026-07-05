
export const colors = {
  void: "#05070C",         // page background — near-black deep space
  panel: "#10131F",        // glass panel fill
  panelBorder: "rgba(255,255,255,0.08)",
  moonlight: "#E4E9F2",    // primary accent — pale lunar silver
  earthlight: "#6FA8FF",   // secondary accent — cool reflected "earthshine" blue
  ember: "#D98E63",        // warm accent, used sparingly for contrast
  starlight: "#EDEFF7",    // primary text
  muted: "#8A93AC",        // secondary text
};

export const fontDisplay = "font-['Space_Grotesk']";
export const fontBody = "font-['IBM_Plex_Sans']";
export const fontMono = "font-['IBM_Plex_Mono']";

export const eyebrow = `${fontMono} uppercase tracking-[0.3em] text-[11px] text-[#6FA8FF]`;

export const heading =
  `${fontDisplay} font-bold text-3xl sm:text-4xl md:text-5xl text-[#EDEFF7] tracking-tight`;

export const gradientText =
  "bg-gradient-to-r from-[#E4E9F2] via-[#B9CBE8] to-[#6FA8FF] bg-clip-text text-transparent";

export const bodyText = `${fontBody} text-[#B7BFD4] leading-relaxed`;

export const cardBase =
  "bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#6FA8FF]/40 transition-colors duration-300";

export const chip =
  `${fontMono} text-[11px] px-3 py-1 rounded-full border border-[#6FA8FF]/25 text-[#6FA8FF] bg-[#6FA8FF]/[0.06]`;

export const btnPrimary =
  `${fontMono} inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-[#05070C] bg-gradient-to-r from-[#E4E9F2] to-[#6FA8FF] hover:shadow-[0_0_30px_-5px_rgba(111,168,255,0.5)] hover:scale-[1.03] transition-all duration-300`;

export const btnSecondary =
  `${fontMono} inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-[#6FA8FF]/40 text-[#6FA8FF] hover:bg-[#6FA8FF]/10 hover:scale-[1.03] transition-all duration-300`;

export const link =
  "text-[#6FA8FF] hover:text-[#D98E63] transition-colors duration-300";