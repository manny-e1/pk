// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // Import jose

const authRoutes = ['/login', '/signup'];
const protectedRoutesPrefix = [
    '/dashboard', '/users', '/transactions', '/auth-logs', 
    '/devices', '/risk-config', '/investigation'
];

// Kunci rahasia untuk verifikasi (harus sama dengan backend)
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'kunci_rahasia_kita_bersama_123' 
);

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('auth_token')?.value;
    const { pathname } = request.nextUrl;

    let isValidToken = false;

    // 1. Verifikasi Token secara Real (Bukan cuma cek null)
    if (token) {
        try {
            await jwtVerify(token, JWT_SECRET);
            isValidToken = true;
        } catch (error) {
            // Jika token ada tapi expired/invalid, anggap user belum login
            isValidToken = false;
        }
    }

    // 2. KONDISI A: User akses halaman Login/Signup
    if (authRoutes.includes(pathname)) {
        if (isValidToken) {
            // Hanya redirect jika token BENAR-BENAR VALID
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        // Jika token invalid/kosong, biarkan user akses login (jangan redirect)
        return NextResponse.next();
    }

    // 3. KONDISI B: User akses Halaman Protected
    const isProtectedRoute = protectedRoutesPrefix.some(route => pathname.startsWith(route));
    if (isProtectedRoute && !isValidToken) {
        // Redirect ke login jika tidak ada token valid
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};