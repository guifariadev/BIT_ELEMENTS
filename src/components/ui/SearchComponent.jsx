"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { components } from "@/components/content/data/Components"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command"
import { FiSearch } from "react-icons/fi"

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Ctrl+K or Cmd+K to open modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC")
      const isK = e.key.toLowerCase() === "k"
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey

      if (isCmdOrCtrl && isK) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = (slug) => {
    router.push(`/docs/${slug}`)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded bg-zinc-800 hover:bg-zinc-700 transition text-sm cursor-pointer">
          <FiSearch className="text-lg" />
          Search component
          <span className="bg-zinc-900 text-xs rounded-md px-2 py-1">Ctrl k</span>
        </button>
      </DialogTrigger>

      <DialogContent className="p-10 max-w-lg max-h-[500px] bg-zinc-950 border border-zinc-800 rounded-xl">
        <Command className="bg-black backdrop-md text-white">
          <CommandInput placeholder="Type a component..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Components">
              {components.map((comp, i) => (
                <CommandItem
                  key={i}
                  value={comp.slug}
                  onSelect={() => handleSelect(comp.slug)}
                >
                  {comp.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
