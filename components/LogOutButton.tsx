// "use client";
// import { logoutUser } from '@/lib/supabase/crud'
// import { useAuthStore } from "@/stores/auth.store";


// export default function LogOutButton(){
//     const setUserId = useAuthStore((state) => state.setUserId)
//     const setEmail = useAuthStore(state => state.setEmail)

//     async function handleClick(){
//         await logoutUser()
//         setUserId("")
//         setEmail("")
//     }

//     return(
//         <button 
//             onClick={handleClick}
//             className="
//                 cursor-pointer
//                 py-2
//                 px-5
//                 bg-none 
//                 border-2 border-[#424240] 
//                 rounded-md                         
//                 text-white
//                 font-vt323
//                 text-xl
//                 tracking-wide">LOG OUT</button>
//     )
// }