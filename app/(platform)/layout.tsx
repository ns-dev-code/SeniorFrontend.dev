'use client';

import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Only show sidebar on topic exploration pages
  const showSidebar = pathname.includes('/topic') || pathname === '/topics' || pathname === '/bookmarks';

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full pt-16 flex">
        {showSidebar && (
          <aside className="hidden lg:block w-72 shrink-0 border-r border-border h-[calc(100vh-64px)] sticky top-16 overflow-y-auto pt-8 px-4">
            <Sidebar />
          </aside>
        )}
        <main className="flex-1 min-w-0">
          <div className="max-w-screen-lg mx-auto p-6 md:p-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
