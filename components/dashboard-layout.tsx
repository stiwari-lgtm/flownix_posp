"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, Settings, User, LogOut, Menu, X } from "lucide-react"
import Image from "next/image"
import { NotificationsPanel } from "@/components/notifications-panel"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigationTabs = [
  { id: "dashboard", label: "Dashboard", href: "/" },
  { id: "quotations", label: "Quotations", href: "/quotations" },
  { id: "customers", label: "Customers", href: "/customers" },
  { id: "leads", label: "Leads", href: "/leads" },
  { id: "financial-details", label: "Financial Details", href: "/financial-details" },
  { id: "renewals", label: "Renewals", href: "/renewals" },
  { id: "posp", label: "POSP", href: "/posp" },
  { id: "sales-rm", label: "Sales RM", href: "/sales-rm" },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isSidebarOpen])

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-4 lg:px-6">
          {/* Left: Logo + Mobile Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-[#254280]" />
              </Button>
            </div>

            {/* Logo */}
            <Image
              src="/flownix-logo.png"
              alt="Flownix"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Navigation Tabs (Desktop Only) */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationTabs.map((tab) => {
              const isActive = pathname === tab.href
              return (
                <Link key={tab.id} href={tab.href}>
                  <button
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#254280] text-white"
                        : "text-[#6b7b8c] hover:text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search Bar */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7b8c]" />
              <input
                type="text"
                placeholder="Search policies, customers..."
                className="h-9 w-64 rounded-md border border-gray-200 bg-white pl-10 pr-3 text-sm placeholder:text-[#6b7b8c] focus:outline-none focus:ring-2 focus:ring-[#254280] focus:border-transparent"
                aria-label="Search"
              />
            </div>

            {/* Notifications */}
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-50"
              onClick={() => setIsNotificationsOpen(true)}
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-[#6b7b8c]" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#eb5757] text-white text-xs flex items-center justify-center font-medium">
                3
              </span>
            </Button>

            {/* Profile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 px-3 hover:bg-gray-50">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/professional-person.png" />
                    <AvatarFallback className="bg-[#254280] text-white">JP</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:flex flex-col items-start">
                    <span className="text-sm font-medium text-[#254280]">John Patel</span>
                    <span className="text-xs text-[#6b7b8c]">POSP</span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => console.log("Logging out...")}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Search Bar — always visible on mobile (static) */}
      <div className="lg:hidden px-4 py-3 bg-white border-b shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7b8c]" />
          <input
            type="text"
            placeholder="Search policies, clients, or policy numbers..."
            className="h-10 w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 text-sm placeholder:text-[#6b7b8c] focus:outline-none focus:ring-2 focus:ring-[#254280] focus:border-transparent"
            aria-label="Mobile search"
          />
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isSidebarOpen && (
        <>
          {/* Overlay: dark + blur */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar — fixed full height */}
          <aside
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-[#254280]" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col p-4 space-y-2 flex-1 overflow-auto">
              {navigationTabs.map((tab) => {
                const isActive = pathname === tab.href
                return (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#254280] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {tab.label}
                  </Link>
                )
              })}
            </nav>

            {/* Optional footer inside drawer */}
            <div className="p-4 border-t">
              <Link href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 text-sm text-[#6b7b8c]">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </div>
          </aside>
        </>
      )}

      {/* Notifications Panel */}
      <NotificationsPanel open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen} />

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}
