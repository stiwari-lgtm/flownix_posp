"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Download,
  Calendar,
  Car,
  Heart,
  Shield,
  Building,
  ArrowUpDown,
  X,
} from "lucide-react"
import Link from "next/link"

// Sample policies data
const policiesData = [
  {
    id: "POL-2024-001",
    policyNumber: "HDFC/MOT/2024/001234",
    customerName: "Rajesh Kumar",
    customerAvatar: "/professional-indian-man.png",
    customerType: "Individual",
    policyType: "Motor Insurance",
    insurer: "HDFC ERGO",
    premium: "₹25,450",
    status: "Active",
    startDate: "2024-01-15",
    endDate: "2025-01-14",
    broker: "SecureShield Brokers",
    icon: Car,
  },
  {
    id: "POL-2024-002",
    policyNumber: "ICICI/HLT/2024/005678",
    customerName: "Priya Sharma",
    customerAvatar: "/professional-indian-woman.png",
    customerType: "Individual",
    policyType: "Health Insurance",
    insurer: "ICICI Lombard",
    premium: "₹18,900",
    status: "Active",
    startDate: "2024-02-01",
    endDate: "2025-01-31",
    broker: "TrustGuard Insurance",
    icon: Heart,
  },
  {
    id: "POL-2024-003",
    policyNumber: "LIC/LIFE/2024/009876",
    customerName: "Amit Patel",
    customerAvatar: "/professional-indian-man.png",
    customerType: "Individual",
    policyType: "Life Insurance",
    insurer: "LIC of India",
    premium: "₹45,000",
    status: "Active",
    startDate: "2024-01-10",
    endDate: "2044-01-09",
    broker: "SecureShield Brokers",
    icon: Shield,
  },
  {
    id: "POL-2024-004",
    policyNumber: "HDFC/COM/2024/112233",
    customerName: "TechCorp Solutions",
    customerAvatar: "/modern-corporate-building.png",
    customerType: "Corporate",
    policyType: "Commercial Insurance",
    insurer: "HDFC ERGO",
    premium: "₹1,25,000",
    status: "Pending Renewal",
    startDate: "2023-12-01",
    endDate: "2024-11-30",
    broker: "TrustGuard Insurance",
    icon: Building,
  },
  {
    id: "POL-2024-005",
    policyNumber: "ICICI/MOT/2024/445566",
    customerName: "Sunita Reddy",
    customerAvatar: "/professional-indian-woman.png",
    customerType: "Individual",
    policyType: "Motor Insurance",
    insurer: "ICICI Lombard",
    premium: "₹32,100",
    status: "Expired",
    startDate: "2023-03-15",
    endDate: "2024-03-14",
    broker: "SecureShield Brokers",
    icon: Car,
  },
  {
    id: "POL-2024-006",
    policyNumber: "LIC/HLT/2024/778899",
    customerName: "Ravi Gupta",
    customerAvatar: "/professional-indian-man.png",
    customerType: "Individual",
    policyType: "Health Insurance",
    insurer: "LIC of India",
    premium: "₹22,750",
    status: "Under Review",
    startDate: "2024-03-01",
    endDate: "2025-02-28",
    broker: "TrustGuard Insurance",
    icon: Heart,
  },
]

const statusColors = {
  Active: "bg-green-100 text-green-800 border-green-200",
  "Pending Renewal": "bg-yellow-100 text-yellow-800 border-yellow-200",
  Expired: "bg-red-100 text-red-800 border-red-200",
  "Under Review": "bg-blue-100 text-blue-800 border-blue-200",
}

export default function PoliciesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [insurerFilter, setInsurerFilter] = useState("all")
  const [sortField, setSortField] = useState("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  // Filter and sort policies
  const filteredPolicies = policiesData
    .filter((policy) => {
      const matchesSearch =
        policy.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        policy.policyType.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = statusFilter === "all" || policy.status === statusFilter
      const matchesType = typeFilter === "all" || policy.policyType === typeFilter
      const matchesInsurer = insurerFilter === "all" || policy.insurer === insurerFilter

      return matchesSearch && matchesStatus && matchesType && matchesInsurer
    })
    .sort((a, b) => {
      if (!sortField) return 0

      let aValue = a[sortField as keyof typeof a]
      let bValue = b[sortField as keyof typeof b]

      if (typeof aValue === "string") aValue = aValue.toLowerCase()
      if (typeof bValue === "string") bValue = bValue.toLowerCase()

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1
      return 0
    })

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("asc")
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setTypeFilter("all")
    setInsurerFilter("all")
    setSortField("")
  }

  const hasActiveFilters = searchTerm || statusFilter !== "all" || typeFilter !== "all" || insurerFilter !== "all"

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#254280] mb-2">Policies</h1>
            <p className="text-[#6b7b8c]">Manage and track all insurance policies across your portfolio</p>
          </div>
          <Link href="/policies/new">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Policy
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-[#254280]">
              <Filter className="h-5 w-5" />
              Filters & Search
            </CardTitle>
            <CardDescription>Use filters to find specific policies quickly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by customer name, policy number, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Pending Renewal">Pending Renewal</SelectItem>
                    <SelectItem value="Expired">Expired</SelectItem>
                    <SelectItem value="Under Review">Under Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Policy Type</Label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Motor Insurance">Motor Insurance</SelectItem>
                    <SelectItem value="Health Insurance">Health Insurance</SelectItem>
                    <SelectItem value="Life Insurance">Life Insurance</SelectItem>
                    <SelectItem value="Commercial Insurance">Commercial Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Insurer</Label>
                <Select value={insurerFilter} onValueChange={setInsurerFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Insurers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Insurers</SelectItem>
                    <SelectItem value="HDFC ERGO">HDFC ERGO</SelectItem>
                    <SelectItem value="ICICI Lombard">ICICI Lombard</SelectItem>
                    <SelectItem value="LIC of India">LIC of India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                {hasActiveFilters && (
                  <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="gap-1">
                    Search: {searchTerm}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchTerm("")} />
                  </Badge>
                )}
                {statusFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Status: {statusFilter}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setStatusFilter("all")} />
                  </Badge>
                )}
                {typeFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Type: {typeFilter}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setTypeFilter("all")} />
                  </Badge>
                )}
                {insurerFilter !== "all" && (
                  <Badge variant="secondary" className="gap-1">
                    Insurer: {insurerFilter}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => setInsurerFilter("all")} />
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Policies Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-[#254280]">Policies ({filteredPolicies.length})</CardTitle>
            <CardDescription>
              {filteredPolicies.length === policiesData.length
                ? "Showing all policies"
                : `Showing ${filteredPolicies.length} of ${policiesData.length} policies`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">
                      <Button
                        variant="ghost"
                        className="h-auto p-0 font-medium"
                        onClick={() => handleSort("customerName")}
                      >
                        Customer
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button
                        variant="ghost"
                        className="h-auto p-0 font-medium"
                        onClick={() => handleSort("policyType")}
                      >
                        Policy Details
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => handleSort("insurer")}>
                        Insurer
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => handleSort("premium")}>
                        Premium
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="h-auto p-0 font-medium" onClick={() => handleSort("status")}>
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>Policy Period</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPolicies.map((policy) => {
                    const IconComponent = policy.icon
                    return (
                      <TableRow key={policy.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={policy.customerAvatar || "/placeholder.svg"} />
                              <AvatarFallback>
                                {policy.customerName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{policy.customerName}</p>
                              <p className="text-sm text-muted-foreground">{policy.customerType}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4 text-primary" />
                            <div>
                              <p className="font-medium">{policy.policyType}</p>
                              <p className="text-sm text-muted-foreground">{policy.policyNumber}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{policy.insurer}</p>
                            <p className="text-sm text-muted-foreground">{policy.broker}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="font-medium">{policy.premium}</p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={statusColors[policy.status as keyof typeof statusColors]}>
                            {policy.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{policy.startDate}</span>
                            <span>to</span>
                            <span>{policy.endDate}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Policy
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                Download Documents
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Cancel Policy</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>

            {filteredPolicies.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No policies found matching your criteria.</p>
                <Button variant="outline" className="mt-2 bg-transparent" onClick={clearFilters}>
                  Clear all filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
