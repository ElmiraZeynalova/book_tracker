// "use client";

// import { useEffect } from "react";
// import { useAuthStore } from "@/stores/auth.store";
// import { supabase } from '@/lib/supabase/client'

// export function AuthProvider({ children }: {children: React.ReactNode}) {
//   const setUserId = useAuthStore(s => s.setUserId)

//   useEffect(() => {

//     supabase.auth.getSession()
//     const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
//         if (session) {
//             setUserId(session?.user?.id ?? null)

//         }
//     })

//     return () => {
//         authListener?.subscription.unsubscribe()
//     }

//   }, []);

//   return children;
// }