import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light", id }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className={`eyebrow flex items-center gap-3 ${center ? "justify-center" : ""} ${tone === "dark" ? "!text-champagne" : ""}`}>
          <span className={`h-px w-8 ${tone === "dark" ? "bg-champagne" : "bg-rosegold"}`} />
          {eyebrow}
          {center && <span className={`h-px w-8 ${tone === "dark" ? "bg-champagne" : "bg-rosegold"}`} />}
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 id={id} className={`mt-5 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.3rem] ${tone === "dark" ? "text-ivory" : "text-wine"}`}>
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={200}>
          <p className={`mt-5 text-[0.98rem] leading-relaxed ${center ? "mx-auto" : ""} max-w-xl ${tone === "dark" ? "text-petal/80" : "text-muted"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
