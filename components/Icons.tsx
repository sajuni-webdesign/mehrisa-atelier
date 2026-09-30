type P = React.SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const IconSearch = (p: P) => (<svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></svg>);
export const IconHeart = ({ filled, ...p }: P & { filled?: boolean }) => (<svg viewBox="0 0 24 24" width="20" height="20" {...base} fill={filled ? "currentColor" : "none"} {...p}><path d="M12 20s-7.5-4.6-9-9.3C2 7.4 4.3 4.5 7.4 4.5c2 0 3.6 1.1 4.6 2.7 1-1.6 2.6-2.7 4.6-2.7 3.1 0 5.4 2.9 4.4 6.2C19.5 15.4 12 20 12 20Z" /></svg>);
export const IconBag = (p: P) => (<svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M5 8h14l-1.2 12H6.2L5 8Z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></svg>);
export const IconArrow = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M4 12h16M14 6l6 6-6 6" /></svg>);
export const IconArrowUpRight = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const IconPlus = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>);
export const IconClose = (p: P) => (<svg viewBox="0 0 24 24" width="22" height="22" {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const IconPlay = (p: P) => (<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden {...p}><path d="M8 5.5v13l10.5-6.5L8 5.5Z" /></svg>);
export const IconSparkle = (p: P) => (<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden {...p}><path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0Z" /></svg>);
export const IconInstagram = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>);
export const IconPinterest = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M11 8.5c3.5-1 6 .8 5.4 3.8-.5 2.4-2.8 3.4-4.2 2.4M11.6 10.5 9 20" /></svg>);
export const IconYoutube = (p: P) => (<svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" /></svg>);
export const IconWhatsApp = (p: P) => (<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden {...p}><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z" /></svg>);
export const IconHome = (p: P) => (<svg viewBox="0 0 24 24" width="15" height="15" {...base} {...p}><path d="M4 11.5 12 5l8 6.5" /><path d="M6.5 10v9h11v-9" /><path d="M10.5 19v-4.5h3V19" /></svg>);
export const IconCalendar = (p: P) => (<svg viewBox="0 0 24 24" width="17" height="17" {...base} {...p}><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /><path d="m9.5 14.5 1.8 1.8 3.4-3.6" /></svg>);
