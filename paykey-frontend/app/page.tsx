// app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to devices page as default
  redirect('/login');
}