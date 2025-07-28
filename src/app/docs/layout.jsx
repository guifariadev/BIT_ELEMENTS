import DocsSidebar from "@/components/navs/DocsSidebar"
import DocsNavbar from "@/components/navs/DocsNavbar"

export default function DocsLayout({ children }) {
  return (
    <>
      <DocsNavbar />
      <div className="min-h-screen text-white max-w-7xl mx-auto">
        <DocsSidebar />
        <main className="flex-1 p-6 pl-1 md:pl-60">
          {children}
        </main>
      </div>
    </>
  )
}