"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { exchangeCodeForSession } from "@/lib/supabase/auth";

export function SignInValidation() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      exchangeCodeForSession(code);
    }
  }, [code]);

  return code ? <div>Signing you in…</div> : null;
}