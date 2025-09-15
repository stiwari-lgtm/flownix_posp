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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Search,
  Filter,
  MoreHorizontal,
  Users,
  TrendingUp,
  DollarSign,
  Award,
  Eye,
  Edit,
  UserPlus,
  X,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

// Sample POSP data
const pospData = [
  {
    id: "1",
    name: "Vikash Singh",
    avatar: "/professional-indian-man.png",
    email: "vikash.singh@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    licenseNumber: "POSP/2023/001234",
    joiningDate: "2023-01-15",
    status: "Active",
    totalPolicies: 145,
    monthlyTarget: 20,
    monthlyAchieved: 18,
    totalCommission: "₹2,45,000",
    monthlyCommission: "₹18,500",
    rating: 4.8,
    specialization: ["Motor", "Health"],
  },
  {
    id: "2",
    name: "Meera Joshi",
    avatar: "/professional-indian-woman.png",
    email: "meera.joshi@email.com",
    phone: "+91 87654 32109",
    location: "Delhi, NCR",
    licenseNumber: "POSP/2023/005678",
    joiningDate: "2023-03-20",
    status: "Active",
    totalPolicies: 98,
    monthlyTarget: 15,
    monthlyAchieved: 22,
    totalCommission: "₹1,85,000",
    monthlyCommission: "₹25,200",
    rating: 4.9,
    specialization: ["Life", "Health"],
  },
  {
    id: "3",
    name: "Arjun Reddy",
    avatar: "/professional-indian-man.png",
    email: "arjun.reddy@email.com",
    phone: "+91 76543 21098",
    location: "Bangalore, Karnataka",
    licenseNumber: "POSP/2023/009876",
    joiningDate: "2023-06-10",
    status: "Active",
    totalPolicies: 67,
    monthlyTarget: 12,
    monthlyAchieved: 8,
    totalCommission: "₹1,25,000",
    monthlyCommission: "₹12,800",
    rating: 4.2,
    specialization: ["Motor", "Commercial"],
  },
  {
    id: "4",
    name: "Kavya Sharma",
    avatar: "/professional-indian-woman.png",
    email: "kavya.sharma@email.com",
    phone: "+91 65432 10987",
    location: "Chennai, Tamil Nadu",
    licenseNumber: "POSP/2023/112233",
    joiningDate: "2023-08-05",
    status: "Inactive",
    totalPolicies: 34,
    monthlyTarget: 10,
    monthlyAchieved: 3,
    totalCommission: "₹68,000",
    monthlyCommission: "₹4,200",
    rating: 3.8,
    specialization: ["Health"],
  },
]

const commissionData = [
  {
    id: "1",
    pospName: "Vikash Singh",
    policyNumber: "HDFC/MOT/2024/001234",
    customerName: "Rajesh Kumar",
    policyType: "Motor Insurance",
    premium: "₹25,450",
    commissionRate: "12%",
    commissionAmount: "₹3,054",
    status: "Paid",
    paidDate: "2024-12-01",
  },
  {
    id: "2",
    pospName: "Meera Joshi",
    policyNumber: "ICICI/HLT/2024/005678",
    customerName: "Priya Sharma",
    policyType: "Health Insurance",
    premium: "₹18,900",
    commissionRate: "15%",
    commissionAmount: "₹2,835",
    status: "Pending",
    paidDate: null,
  },
]

export default function POSPPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("agents")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredPOSP = pospData.filter((posp) => {
    const matchesSearch =
      posp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      posp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      posp.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || posp.status === statusFilter
    const matchesLocation = locationFilter === "all" || posp.location.includes(locationFilter)

    return matchesSearch && matchesStatus && matchesLocation
  })

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setLocationFilter("all")
  }

  const hasActiveFilters = searchTerm || statusFilter !== "all" || locationFilter !== "all"

  const getPerformanceColor = (achieved: number, target: number) => {
    const percentage = (achieved / target) * 100
    if (percentage >= 100) return "text-green-600"
    if (percentage >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">POSP Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage Point of Sales Persons, track performance, and handle commissions.
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <UserPlus className="mr-2 h-4 w-4" />
                Add POSP
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New POSP</DialogTitle>
                <DialogDescription>Register a new Point of Sales Person to your network.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pospName">Full Name</Label>
                    <Input id="pospName" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber">License Number</Label>
                    <Input id="licenseNumber" placeholder="Enter license number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pospEmail">Email</Label>
                    <Input id="pospEmail" type="email" placeholder="Enter email address" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pospPhone">Phone</Label>
                    <Input id="pospPhone" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pospLocation">Location</Label>
                  <Input id="pospLocation" placeholder="Enter city, state" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  Add POSP
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Summary Cards - 2 per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card>
            <CardContent className="p-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-muted-foreground">Total POSPs</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">{pospData.length}</p>
                </div>
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-muted-foreground">Active POSPs</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">
                    {pospData.filter((p) => p.status === "Active").length}
                  </p>
                </div>
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Policies</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    {pospData.reduce((sum, posp) => sum + posp.totalPolicies, 0)}
                  </p>
                </div>
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:pt-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-muted-foreground">Total Commission</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">₹8.23L</p>
                </div>
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="agents">POSP Agents</TabsTrigger>
            <TabsTrigger value="commissions">Commissions</TabsTrigger>
          </TabsList>

          {/* POSP Agents Tab */}
          <TabsContent value="agents" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters & Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, email, or license number..."
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Statuses" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Location</Label>
                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All Locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="Mumbai">Mumbai</SelectItem>
                        <SelectItem value="Delhi">Delhi</SelectItem>
                        <SelectItem value="Bangalore">Bangalore</SelectItem>
                        <SelectItem value="Chennai">Chennai</SelectItem>
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
              </CardContent>
            </Card>

            {/* POSP Table */}
            <Card>
              <CardHeader>
                <CardTitle>POSP Agents ({filteredPOSP.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px]">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Agent</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Contact</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Performance</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Commission</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Rating</th>
                        <th className="text-right py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredPOSP.map((posp, index) => (
                        <tr key={posp.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                                <AvatarImage src={posp.avatar || "/placeholder.svg"} />
                                <AvatarFallback>
                                  {posp.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0">
                                <p className="font-medium text-sm sm:text-base">{posp.name}</p>
                                <p className="text-xs sm:text-sm text-muted-foreground truncate">{posp.licenseNumber}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {posp.specialization.map((spec) => (
                                    <Badge key={spec} variant="outline" className="text-xs">
                                      {spec}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-xs sm:text-sm">
                                <Mail className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{posp.email}</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs sm:text-sm">
                                <Phone className="h-3 w-3 flex-shrink-0" />
                                <span className="whitespace-nowrap">{posp.phone}</span>
                              </div>
                              <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3 flex-shrink-0" />
                                <span className="truncate">{posp.location}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div>
                              <p className="font-medium text-sm sm:text-base">{posp.totalPolicies} policies</p>
                              <p className={`text-xs sm:text-sm ${getPerformanceColor(posp.monthlyAchieved, posp.monthlyTarget)}`}>
                                {posp.monthlyAchieved}/{posp.monthlyTarget} this month
                              </p>
                              <div className="w-full bg-muted rounded-full h-2 mt-1">
                                <div
                                  className="bg-primary h-2 rounded-full"
                                  style={{
                                    width: `${Math.min((posp.monthlyAchieved / posp.monthlyTarget) * 100, 100)}%`,
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div>
                              <p className="font-medium text-sm sm:text-base whitespace-nowrap">{posp.totalCommission}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">Total</p>
                              <p className="text-xs sm:text-sm text-green-600 whitespace-nowrap">{posp.monthlyCommission}</p>
                              <p className="text-xs text-muted-foreground">This month</p>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <Badge
                              variant="outline"
                              className={
                                posp.status === "Active"
                                  ? "bg-green-100 text-green-800 border-green-200 text-sm"
                                  : "bg-red-100 text-red-800 border-red-200 text-sm"
                              }
                            >
                              {posp.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div className="flex items-center gap-1">
                              <Award className="h-4 w-4 text-yellow-500" />
                              <span className="font-medium text-sm sm:text-base">{posp.rating}</span>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6 text-right">
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
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <DollarSign className="mr-2 h-4 w-4" />
                                  View Commissions
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                  {posp.status === "Active" ? "Deactivate" : "Activate"}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Commissions Tab */}
          <TabsContent value="commissions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Commission Tracking</CardTitle>
                <CardDescription>Track and manage POSP commissions and payouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px]">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">POSP Agent</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Policy Details</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Customer</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Premium</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Commission</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">Paid Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissionData.map((commission, index) => (
                        <tr key={commission.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <p className="font-medium text-sm sm:text-base whitespace-nowrap">{commission.pospName}</p>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div>
                              <p className="font-medium text-sm sm:text-base">{commission.policyType}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">{commission.policyNumber}</p>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <p className="font-medium text-sm sm:text-base whitespace-nowrap">{commission.customerName}</p>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <p className="font-medium text-sm sm:text-base whitespace-nowrap">{commission.premium}</p>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <div>
                              <p className="font-medium text-sm sm:text-base whitespace-nowrap">{commission.commissionAmount}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">({commission.commissionRate})</p>
                            </div>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <Badge
                              variant="outline"
                              className={
                                commission.status === "Paid"
                                  ? "bg-green-100 text-green-800 border-green-200 text-sm"
                                  : "bg-yellow-100 text-yellow-800 border-yellow-200 text-sm"
                              }
                            >
                              {commission.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-3 sm:py-4 sm:px-6">
                            <p className="text-xs sm:text-sm whitespace-nowrap">{commission.paidDate || "Pending"}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}