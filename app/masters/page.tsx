"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Building2, Users, Package, Handshake } from "lucide-react"

// Sample data
const clientMasterData = [
  {
    id: "CLT001",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    type: "Individual",
    status: "Active",
    avatar: "/professional-indian-man.png",
  },
  {
    id: "CLT002",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 87654 32109",
    type: "Individual",
    status: "Active",
    avatar: "/professional-indian-woman.png",
  },
  {
    id: "CLT003",
    name: "TechCorp Solutions",
    email: "contact@techcorp.com",
    phone: "+91 76543 21098",
    type: "Corporate",
    status: "Active",
    avatar: "/modern-corporate-building.png",
  },
]

const insurerData = [
  {
    id: "INS001",
    name: "HDFC ERGO General Insurance",
    code: "HDFC_ERGO",
    type: "General",
    status: "Active",
    contactPerson: "Amit Patel",
  },
  {
    id: "INS002",
    name: "ICICI Lombard",
    code: "ICICI_LOMBARD",
    type: "General",
    status: "Active",
    contactPerson: "Sunita Reddy",
  },
  {
    id: "INS003",
    name: "LIC of India",
    code: "LIC",
    type: "Life",
    status: "Active",
    contactPerson: "Ravi Gupta",
  },
]

const productData = [
  {
    id: "PRD001",
    name: "Comprehensive Motor Insurance",
    insurer: "HDFC ERGO",
    category: "Motor",
    premium: "₹15,000 - ₹50,000",
    status: "Active",
  },
  {
    id: "PRD002",
    name: "Health Advantage Plus",
    insurer: "ICICI Lombard",
    category: "Health",
    premium: "₹8,000 - ₹25,000",
    status: "Active",
  },
  {
    id: "PRD003",
    name: "Term Life Protection",
    insurer: "LIC of India",
    category: "Life",
    premium: "₹12,000 - ₹1,00,000",
    status: "Active",
  },
]

const brokerageData = [
  {
    id: "BRK001",
    name: "SecureShield Brokers",
    licenseNo: "IRDAI/DB/03/19/001",
    contactPerson: "Vikash Singh",
    email: "contact@secureshield.com",
    commission: "12%",
    status: "Active",
  },
  {
    id: "BRK002",
    name: "TrustGuard Insurance Services",
    licenseNo: "IRDAI/DB/03/19/002",
    contactPerson: "Meera Joshi",
    email: "info@trustguard.com",
    commission: "10%",
    status: "Active",
  },
]

export default function MastersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("clients")

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case "clients":
        return <Users className="h-4 w-4" />
      case "insurers":
        return <Building2 className="h-4 w-4" />
      case "products":
        return <Package className="h-4 w-4" />
      case "brokerage":
        return <Handshake className="h-4 w-4" />
      default:
        return null
    }
  }

  const getTabData = (tab: string) => {
    switch (tab) {
      case "clients":
        return clientMasterData
      case "insurers":
        return insurerData
      case "products":
        return productData
      case "brokerage":
        return brokerageData
      default:
        return []
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 bg-[#f5f7fa] min-h-screen">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#254280] mb-2">Masters</h1>
            <p className="text-[#6b7b8c]">
              Manage your master data including clients, insurers, products, and brokerage information.
            </p>
          </div>
        </div>

        {/* Masters Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger
              value="clients"
              className="flex items-center gap-2 data-[state=active]:bg-[#254280] data-[state=active]:text-white rounded-lg"
            >
              {getTabIcon("clients")}
              Client Master
            </TabsTrigger>
            <TabsTrigger
              value="insurers"
              className="flex items-center gap-2 data-[state=active]:bg-[#254280] data-[state=active]:text-white rounded-lg"
            >
              {getTabIcon("insurers")}
              Insurer
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="flex items-center gap-2 data-[state=active]:bg-[#254280] data-[state=active]:text-white rounded-lg"
            >
              {getTabIcon("products")}
              Product
            </TabsTrigger>
            <TabsTrigger
              value="brokerage"
              className="flex items-center gap-2 data-[state=active]:bg-[#254280] data-[state=active]:text-white rounded-lg"
            >
              {getTabIcon("brokerage")}
              Brokerage
            </TabsTrigger>
          </TabsList>

          {/* Search and Add Controls */}
          <div className="flex items-center justify-between">
            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7b8c]" />
              <Input
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-[#d8e3ed] rounded-lg"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                  onClick={() => setSearchTerm("")}
                >
                  ×
                </Button>
              )}
            </div>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#254280] hover:bg-[#254280]/90 text-white rounded-lg">
                  <Plus className="mr-2 h-4 w-4" />
                  Add {activeTab.slice(0, -1)}
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Add New {activeTab.slice(0, -1)}</DialogTitle>
                  <DialogDescription>
                    Fill in the details to add a new {activeTab.slice(0, -1)} to your master data.
                  </DialogDescription>
                </DialogHeader>
                <AddMasterForm activeTab={activeTab} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Client Master Tab */}
          <TabsContent value="clients" className="space-y-4">
            <Card className="bg-white shadow-sm border-[#d8e3ed]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#254280]">
                  <Users className="h-5 w-5" />
                  Client Master
                </CardTitle>
                <CardDescription className="text-[#6b7b8c]">
                  Manage individual and corporate client information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#6b7b8c]">Client</TableHead>
                      <TableHead className="text-[#6b7b8c]">Contact</TableHead>
                      <TableHead className="text-[#6b7b8c]">Type</TableHead>
                      <TableHead className="text-[#6b7b8c]">Status</TableHead>
                      <TableHead className="text-right text-[#6b7b8c]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clientMasterData.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={client.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {client.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-[#1a1a1a]">{client.name}</p>
                            <p className="text-sm text-[#6b7b8c]">{client.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-sm text-[#1a1a1a]">{client.email}</p>
                            <p className="text-sm text-[#6b7b8c]">{client.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={client.type === "Corporate" ? "default" : "secondary"}
                            className={
                              client.type === "Corporate"
                                ? "bg-[#254280] text-white rounded-full"
                                : "bg-[#d8e3ed] text-[#6b7b8c] rounded-full"
                            }
                          >
                            {client.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#2ecc71] border-[#2ecc71] rounded-full">
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#eb5757] rounded-lg">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Insurer Tab */}
          <TabsContent value="insurers" className="space-y-4">
            <Card className="bg-white shadow-sm border-[#d8e3ed]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#254280]">
                  <Building2 className="h-5 w-5" />
                  Insurer Master
                </CardTitle>
                <CardDescription className="text-[#6b7b8c]">
                  Manage insurance company information and partnerships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#6b7b8c]">Insurer Name</TableHead>
                      <TableHead className="text-[#6b7b8c]">Code</TableHead>
                      <TableHead className="text-[#6b7b8c]">Type</TableHead>
                      <TableHead className="text-[#6b7b8c]">Contact Person</TableHead>
                      <TableHead className="text-[#6b7b8c]">Status</TableHead>
                      <TableHead className="text-right text-[#6b7b8c]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {insurerData.map((insurer) => (
                      <TableRow key={insurer.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-[#1a1a1a]">{insurer.name}</p>
                            <p className="text-sm text-[#6b7b8c]">{insurer.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-[#d8e3ed] text-[#6b7b8c] rounded-full">
                            {insurer.code}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={insurer.type === "Life" ? "default" : "secondary"}
                            className={
                              insurer.type === "Life"
                                ? "bg-[#254280] text-white rounded-full"
                                : "bg-[#d8e3ed] text-[#6b7b8c] rounded-full"
                            }
                          >
                            {insurer.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{insurer.contactPerson}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#2ecc71] border-[#2ecc71] rounded-full">
                            {insurer.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#eb5757] rounded-lg">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Product Tab */}
          <TabsContent value="products" className="space-y-4">
            <Card className="bg-white shadow-sm border-[#d8e3ed]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#254280]">
                  <Package className="h-5 w-5" />
                  Product Master
                </CardTitle>
                <CardDescription className="text-[#6b7b8c]">
                  Manage insurance products and their configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#6b7b8c]">Product Name</TableHead>
                      <TableHead className="text-[#6b7b8c]">Insurer</TableHead>
                      <TableHead className="text-[#6b7b8c]">Category</TableHead>
                      <TableHead className="text-[#6b7b8c]">Premium Range</TableHead>
                      <TableHead className="text-[#6b7b8c]">Status</TableHead>
                      <TableHead className="text-right text-[#6b7b8c]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productData.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-[#1a1a1a]">{product.name}</p>
                            <p className="text-sm text-[#6b7b8c]">{product.id}</p>
                          </div>
                        </TableCell>
                        <TableCell>{product.insurer}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-[#d8e3ed] text-[#6b7b8c] rounded-full">
                            {product.category}
                          </Badge>
                        </TableCell>
                        <TableCell>{product.premium}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#2ecc71] border-[#2ecc71] rounded-full">
                            {product.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#eb5757] rounded-lg">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Brokerage Tab */}
          <TabsContent value="brokerage" className="space-y-4">
            <Card className="bg-white shadow-sm border-[#d8e3ed]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#254280]">
                  <Handshake className="h-5 w-5" />
                  Brokerage Master
                </CardTitle>
                <CardDescription className="text-[#6b7b8c]">
                  Manage brokerage partners and commission structures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#6b7b8c]">Brokerage Name</TableHead>
                      <TableHead className="text-[#6b7b8c]">License No.</TableHead>
                      <TableHead className="text-[#6b7b8c]">Contact Person</TableHead>
                      <TableHead className="text-[#6b7b8c]">Commission</TableHead>
                      <TableHead className="text-[#6b7b8c]">Status</TableHead>
                      <TableHead className="text-right text-[#6b7b8c]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {brokerageData.map((broker) => (
                      <TableRow key={broker.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-[#1a1a1a]">{broker.name}</p>
                            <p className="text-sm text-[#6b7b8c]">{broker.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-[#d8e3ed] text-[#6b7b8c] rounded-full">
                            {broker.licenseNo}
                          </Badge>
                        </TableCell>
                        <TableCell>{broker.contactPerson}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 rounded-full">{broker.commission}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[#2ecc71] border-[#2ecc71] rounded-full">
                            {broker.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" className="rounded-lg">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-[#eb5757] rounded-lg">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

// Add Master Form Component
function AddMasterForm({ activeTab }: { activeTab: string }) {
  return (
    <div className="grid gap-4 py-4">
      {activeTab === "clients" && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Full Name</Label>
              <Input id="clientName" placeholder="Enter full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientType">Client Type</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Individual</option>
                <option>Corporate</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Email</Label>
              <Input id="clientEmail" type="email" placeholder="Enter email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientPhone">Phone</Label>
              <Input id="clientPhone" placeholder="Enter phone number" />
            </div>
          </div>
        </>
      )}

      {activeTab === "insurers" && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="insurerName">Insurer Name</Label>
              <Input id="insurerName" placeholder="Enter insurer name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="insurerCode">Insurer Code</Label>
              <Input id="insurerCode" placeholder="Enter insurer code" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="insurerType">Insurance Type</Label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>General</option>
                <option>Life</option>
                <option>Health</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPerson">Contact Person</Label>
              <Input id="contactPerson" placeholder="Enter contact person name" />
            </div>
          </div>
        </>
      )}

      <DialogFooter>
        <Button type="submit" className="bg-[#254280] hover:bg-[#254280]/90 text-white rounded-lg">
          Add {activeTab.slice(0, -1)}
        </Button>
      </DialogFooter>
    </div>
  )
}
