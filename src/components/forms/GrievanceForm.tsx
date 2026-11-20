"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Info, AlertCircle } from "lucide-react";
import { grievanceSchema, type GrievanceFormData } from "@/lib/validation";

export function GrievanceForm() {
  const [serverState, setServerState] = useState<{
    type: "idle" | "delivered" | "recorded" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<GrievanceFormData>({
    resolver: zodResolver(grievanceSchema),
    defaultValues: { website: "" },
  });

  async function onSubmit(data: GrievanceFormData) {
    setServerState({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/grievance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerState({
          type: "error",
          message: json.message || "Could not submit your complaint.",
        });
        return;
      }
      setServerState({
        type: json.delivered ? "delivered" : "recorded",
        message: json.message,
      });
      reset({ website: "" });
    } catch {
      setServerState({
        type: "error",
        message:
          "Network error. Please contact the Principal's Office directly at +91 91080 26311 or sjrcl.principal@gmail.com.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-[#177249] shadow-lg p-6 sm:p-8 space-y-5"
    >
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div>
        <h3 className="text-xl font-bold text-[#0B1A4C]">
          Lodge a Grievance / Complaint
        </h3>
        <p className="text-xs sm:text-sm text-[#5C4238] mt-1">
          Migrated from the Prevention of Caste-Based Discrimination Committee
          complaint form. All fields marked with * are required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="grievance-name"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="grievance-name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="grievance-course"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Course &amp; Semester <span className="text-red-500">*</span>
          </label>
          <input
            id="grievance-course"
            type="text"
            placeholder="e.g., 3-Year LL.B. / 5-Year B.A. LL.B."
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("course")}
          />
          {errors.course && (
            <p className="mt-1 text-xs text-red-600">{errors.course.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="grievance-contact"
          className="block text-sm font-semibold text-[#5C4238] mb-1.5"
        >
          Email or Phone (Optional, for follow-up)
        </label>
        <input
          id="grievance-contact"
          type="text"
          placeholder="Email address or mobile number"
          className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
          {...register("contactInfo")}
        />
      </div>

      <div>
        <label
          htmlFor="grievance-message"
          className="block text-sm font-semibold text-[#5C4238] mb-1.5"
        >
          Complaint / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="grievance-message"
          rows={5}
          placeholder="Describe the incident or grievance clearly"
          className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none resize-y"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-[#177249] hover:bg-[#115838] disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors cursor-pointer"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{isSubmitting ? "Submitting..." : "Submit Grievance"}</span>
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
