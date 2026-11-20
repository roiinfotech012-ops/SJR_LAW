"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Info, AlertCircle } from "lucide-react";
import { enquirySchema, type EnquiryFormData } from "@/lib/validation";

interface EnquiryFormProps {
  defaultProgramme?: EnquiryFormData["programme"];
}

export function EnquiryForm({
  defaultProgramme = "General / Other Enquiry",
}: EnquiryFormProps) {
  const [serverState, setServerState] = useState<{
    type: "idle" | "delivered" | "recorded" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      programme: defaultProgramme,
      website: "",
    },
  });

  async function onSubmit(data: EnquiryFormData) {
    setServerState({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerState({
          type: "error",
          message: json.message || "Could not submit your enquiry.",
        });
        return;
      }
      setServerState({
        type: json.delivered ? "delivered" : "recorded",
        message: json.message,
      });
      reset({ programme: defaultProgramme, website: "" });
    } catch {
      setServerState({
        type: "error",
        message:
          "Network error while submitting. Please call +91 91080 26311 or email sjrcl.principal@gmail.com.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-[#177249] shadow-xl p-6 sm:p-8 space-y-5"
    >
      {/* Honeypot field for spam protection */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm text-[#342419] focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiry-mobile"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-mobile"
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm text-[#342419] focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            aria-invalid={!!errors.mobile}
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs text-red-600">{errors.mobile.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm text-[#342419] focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="enquiry-programme"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Programme of Interest
          </label>
          <select
            id="enquiry-programme"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm text-[#342419] bg-white focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("programme")}
          >
            <option value="LL.B. (3 Years)">LL.B. (3 Years)</option>
            <option value="B.A. LL.B. (5 Years)">B.A. LL.B. (5 Years)</option>
            <option value="PG Diploma in Cyber Law (1 Year)">
              PG Diploma in Cyber Law (1 Year)
            </option>
            <option value="General / Other Enquiry">
              General / Other Enquiry
            </option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-sm font-semibold text-[#5C4238] mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="enquiry-message"
          rows={4}
          placeholder="How can SJR College of Law help you?"
          className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm text-[#342419] focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none resize-y"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5">
        <input
          id="enquiry-consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-[#DDD3C6] text-[#177249] focus:ring-[#177249]"
          {...register("consent")}
        />
        <label
          htmlFor="enquiry-consent"
          className="text-xs text-[#5C4238] leading-relaxed"
        >
          I consent to SJR College of Law contacting me via phone or email
          regarding my academic or admission enquiry.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600 -mt-3">{errors.consent.message}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#177249] hover:bg-[#115838] disabled:opacity-60 text-white font-semibold text-sm py-3 px-6 rounded-md transition-colors shadow-sm cursor-pointer"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{isSubmitting ? "Submitting..." : "Send Message"}</span>
      </button>

      {serverState.type !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          className={`rounded-lg p-4 text-xs sm:text-sm flex items-start gap-2.5 ${
            serverState.type === "delivered"
              ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
              : serverState.type === "recorded"
              ? "bg-amber-50 text-amber-950 border border-amber-200"
              : "bg-red-50 text-red-900 border border-red-200"
          }`}
        >
          {serverState.type === "delivered" ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
          ) : serverState.type === "recorded" ? (
            <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
          )}
          <p>{serverState.message}</p>
        </div>
      )}
    </form>
  );
}
