"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Eye, Edit } from "lucide-react"
import { useState } from "react"
import { AddCustomerModal } from "@/components/add-customer-modal"

export default function CustomersPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const customers = [
    {
      id: "1",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      policies: 3,
      renewals: 1,
      status: "Active",
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      policies: 2,
      renewals: null,
      status: "Active",
    },
    {
      id: "3",
      name: "Amit Singh",
      email: "amit.singh@email.com",
      phone: "+91 76543 21098",
      policies: 1,
      renewals: 1,
      status: "Renewal Due",
    },
    {
      id: "4",
      name: "Sunita Patel",
      email: "sunita.patel@email.com",
      phone: "+91 65432 10987",
      policies: 4,
      renewals: 2,
      status: "Active",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">Customers</h1>
            <p className="text-[#6b7b8c]">Manage your customer database and relationships</p>
          </div>
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-[#254280] hover:bg-[#1e3660] text-white rounded-lg px-4 py-2 w-full sm:w-auto"
          >
            <span className="mr-2">👤</span>
            Add Customer
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-[#254280]">Customer Database</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:space-x-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search customers..." className="pl-10 w-full border-gray-300 rounded-lg" />
                </div>
                <Button variant="outline" className="border-gray-300 rounded-lg bg-transparent w-full sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] rounded-lg overflow-hidden">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    ID
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Name
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Email
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Phone
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Policies
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Renewals
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer, index) => (
                  <tr key={customer.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#254280] font-medium text-sm sm:text-base">{customer.id}</span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-gray-900 font-medium text-sm sm:text-base whitespace-nowrap">{customer.name}</span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-gray-600 text-sm sm:text-base max-w-[140px] sm:max-w-xs truncate block">{customer.email}</span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-gray-600 text-sm sm:text-base whitespace-nowrap">{customer.phone}</span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#254280] text-white rounded-full text-sm font-medium">
                        {customer.policies}
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      {customer.renewals ? (
                        <div className="flex items-center justify-center w-8 h-8 bg-[#f5c642] text-white rounded-full text-sm font-medium">
                          {customer.renewals}
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm sm:text-base">-</span>
                      )}
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <Badge
                        className={`rounded-full px-3 py-1 text-sm ${
                          customer.status === "Active" ? "bg-[#2ecc71] text-white hover:bg-[#2ecc71]" : "bg-[#f5c642] text-white hover:bg-[#f5c642]"
                        }`}
                      >
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                          <Edit className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddCustomerModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />
      </div>
    </DashboardLayout>
  )
}