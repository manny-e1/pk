// // app/(admin)/layout.tsx
// 'use client';

// import { useEffect, useState } from 'react';
// import Sidebar from '@/components/layout/Sidebar'; // Pastikan path ini benar
// import { authService } from '@/services/authService';
// import { useRouter } from 'next/navigation';

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [isAuthorized, setIsAuthorized] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Cek apakah user punya sesi valid
//     const verifySession = async () => {
//       try {
//         await authService.me();
//         setIsAuthorized(true);
//       } catch (err) {
//         // Jika sesi mati/invalid, lempar ke login
//         router.push('/login');
//       }
//     };
//     verifySession();
//   }, [router]);

//   if (!isAuthorized) {
//     // Loading Screen saat cek sesi
//     return (
//       <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]">
//         <div className="flex flex-col items-center gap-3">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent)]"></div>
//             <span className="text-[var(--text-secondary)] text-sm">Please wait while we verify your session...</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
//       {/* Sidebar hanya muncul di halaman-halaman dalam folder (admin) */}
//       <Sidebar />
//       <main className="flex-1 flex flex-col h-screen overflow-hidden">
//         {children}
//       </main>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/layout/Sidebar'; 
import { authService } from '@/services/authService';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    const verifySession = async () => {
      try {
        // Cek sesi ke backend
        await authService.me();
        
        // Jika sukses dan komponen masih aktif, set authorized
        if (isMounted) setIsAuthorized(true);
      } catch (err) {
        // Jika gagal (401), langsung ganti URL ke login (replace history)
        if (isMounted) router.replace('/login');
      }
    };

    verifySession();

    // Cleanup function mencegah update state jika komponen sudah unmount
    return () => { isMounted = false; };
  }, [router]); // Router sebagai dependency aman

  if (!isAuthorized) {
    // Tampilan Loading
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="flex flex-col items-center gap-4">
            {/* Spinner */}
            <div className="animate-spin rounded-full h-10 w-10 border-[3px] border-[var(--border-secondary)] border-t-[var(--accent)]"></div>
            
            {/* Teks Status */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-[var(--text-primary)] text-sm font-medium">Verifying Session</span>
              <span className="text-[var(--text-tertiary)] text-xs">Please wait...</span>
            </div>
        </div>
      </div>
    );
  }

  // Jika Authorized, render Layout
  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {children}
      </main>
    </div>
  );
}