"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, Info, AlertCircle } from "lucide-react";
import {
  alumniRegistrationSchema,
  type AlumniRegistrationData,
} from "@/lib/validation";

export function AlumniRegistrationForm() {
  const [serverState, setServerState] = useState<{
    type: "idle" | "delivered" | "recorded" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AlumniRegistrationData>({
    resolver: zodResolver(alumniRegistrationSchema),
    defaultValues: { gender: "Prefer not to say", website: "" },
  });

  async function onSubmit(data: AlumniRegistrationData) {
    setServerState({ type: "idle", message: "" });
    try {
      const res = await fetch("/api/alumni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerState({
          type: "error",
          message: json.message || "Could not submit registration.",
        });
        return;
      }
      setServerState({
        type: json.delivered ? "delivered" : "recorded",
        message: json.message,
      });
      reset({ gender: "Prefer not to say", website: "" });
    } catch {
      setServerState({
        type: "error",
        message:
          "Network error. Please email your alumni details to sjrcl.principal@gmail.com.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white rounded-xl border border-gray-200 border-t-4 border-t-[#177249] shadow-xl p-6 sm:p-8 space-y-5"
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
          Alumni Association Registration Form
        </h3>
        <p className="text-xs sm:text-sm text-[#5C4238] mt-1">
          Register with the Sri Jagadguru Renukacharya College of Law Alumni
          Association.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="alumni-name"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="alumni-name"
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
            htmlFor="alumni-gender"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Gender
          </label>
          <select
            id="alumni-gender"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm bg-white focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("gender")}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="alumni-occupation"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Current Occupation <span className="text-red-500">*</span>
          </label>
          <input
            id="alumni-occupation"
            type="text"
            placeholder="e.g., Advocate, Judicial Officer, Legal Counsel"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("occupation")}
          />
          {errors.occupation && (
            <p className="mt-1 text-xs text-red-600">
              {errors.occupation.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="alumni-qualification"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Qualification <span className="text-red-500">*</span>
          </label>
          <input
            id="alumni-qualification"
            type="text"
            placeholder="e.g., LL.B., B.A. LL.B., LL.M."
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("qualification")}
          />
          {errors.qualification && (
            <p className="mt-1 text-xs text-red-600">
              {errors.qualification.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="alumni-start"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Batch Start Year
          </label>
          <input
            id="alumni-start"
            type="text"
            placeholder="e.g., 2016"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("startYear")}
          />
        </div>

        <div>
          <label
            htmlFor="alumni-end"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Batch Graduation Year
          </label>
          <input
            id="alumni-end"
            type="text"
            placeholder="e.g., 2019"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("endYear")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="alumni-email"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="alumni-email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="alumni-phone"
            className="block text-sm font-semibold text-[#5C4238] mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="alumni-phone"
            type="tel"
            placeholder="10-digit mobile number"
            className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="alumni-address"
          className="block text-sm font-semibold text-[#5C4238] mb-1.5"
        >
          Current Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="alumni-address"
          rows={3}
          placeholder="Residential or chambers address"
          className="w-full rounded-md border border-[#DDD3C6] px-3.5 py-2.5 text-sm focus:border-[#177249] focus:ring-2 focus:ring-[#177249]/20 outline-none"
          {...register("address")}
        />
        {errors.address && (
          <p className="mt-1 text-xs text-red-600">{errors.address.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="alumni-photo"
          className="block text-sm font-semibold text-[#5C4238] mb-1.5"
        >
          Photograph (Optional)
        </label>
        <input
          id="alumni-photo"
          type="file"
          accept=".jpg,.jpeg,.png"
          className="block w-full text-xs sm:text-sm text-[#5C4238] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#177249]/10 file:text-[#177249] hover:file:bg-[#177249]/20 cursor-pointer"
        />
        <p className="mt-1 text-[11px] text-[#8D6E62]">
          Acceptable file formats: .jpg, .jpeg, .png
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#177249] hover:bg-[#115838] disabled:opacity-60 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors cursor-pointer"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>{isSubmitting ? "Submitting..." : "Register as Alumnus"}</span>
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
