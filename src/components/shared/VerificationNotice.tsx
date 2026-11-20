import { AlertTriangle } from "lucide-react";

interface VerificationNoticeProps {
  title?: string;
  children: React.ReactNode;
}

export function VerificationNotice({
  title = "Institutional Verification Notice",
  children,
}: VerificationNoticeProps) {
  return (
    <div className="rounded-xl border border-amber-300 bg-[#FCF5E8] p-4 sm:p-5 flex items-start gap-3 text-sm text-[#5C4238]">
      <AlertTriangle
        className="h-5 w-5 text-[#FF8C00] shrink-0 mt-0.5"
        aria-hidden="true"
      />
      <div>
        <p className="font-bold text-[#0B1A4C] mb-1">{title}</p>
        <div className="leading-relaxed text-xs sm:text-sm">{children}</div>
      </div>
    </div>
  );
}
