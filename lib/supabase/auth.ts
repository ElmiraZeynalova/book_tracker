"use server";

import { redirect } from "next/navigation";
import { getSupabaseClient } from "./server";

// export async function logoutUser(){
//     await supabase.auth.signOut()
// }


export async function signInWithMagicLink(email: string) {
  const supabase = await getSupabaseClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    return { success: false };
  }

  return { success: true };
}

export async function exchangeCodeForSession(code: string) {
  const supabase = await getSupabaseClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return;
  }

  redirect("/");
}