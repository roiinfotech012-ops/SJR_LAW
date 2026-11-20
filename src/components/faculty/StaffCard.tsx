import Image from "next/image";
import type { StaffMember } from "@/types/content";

export function StaffCard({ member }: { member: StaffMember }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all flex flex-col">
      <div className="relative aspect-[3/4] bg-[#EBE6E0]">
        <Image
          src={member.image}
          alt={`${member.name} — ${member.designation}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top"
        />
      </div>
      <div className="p-5 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-bold text-[#0B1A4C] leading-snug">
            {member.name}
          </h3>
          <p className="text-xs font-semibold text-[#177249] uppercase tracking-wide mt-1">
            {member.designation}
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-[#5C4238] font-medium">
            {member.qualification}
          </p>
          {member.note && (
            <p className="text-[11px] text-[#8D6E62] mt-1">{member.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}
