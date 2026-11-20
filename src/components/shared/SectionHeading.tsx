interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  serif?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  serif = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center max-w-3xl mx-auto mb-10" : "mb-8"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#177249] mb-2">
          {eyebrow}
        </p>
      )}
      <h2
        className={`${
          serif
            ? "font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-900"
            : "text-2xl sm:text-3xl md:text-4xl text-[#5C4238]"
        } font-bold leading-tight tracking-tight`}
      >
        {title}{" "}
        {accent && <span className="text-[#177249]">{accent}</span>}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm sm:text-base text-[#8D6E62] leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
