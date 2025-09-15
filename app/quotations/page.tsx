import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Eye, Mail, Phone, UserPlus, FileText, Calendar, MapPin } from "lucide-react"

export default function QuotationsPage() {
  const quotations = [
    {
      id: "1",
      clientName: "Rajesh Kumar",
      phone: "+91 98765 43210",
      address: "123 MG Road, Bangalore",
      quotationDate: "2024-03-10",
      documents: ["Life_Quote.pdf", "Health_Quote.pdf"],
      status: "Active",
    },
    {
      id: "2",
      clientName: "Priya Sharma",
      phone: "+91 87654 32109",
      address: "456 Park Street, Mumbai",
      quotationDate: "2024-03-08",
      documents: ["ULIP_Quote.pdf"],
      status: "Sent",
    },
    {
      id: "3",
      clientName: "Amit Singh",
      phone: "+91 76543 21098",
      address: "789 Sector 14, Gurgaon",
      quotationDate: "2024-03-12",
      documents: ["Motor_Quote.pdf", "Health_Quote.pdf"],
      status: "Active",
    },
    {
      id: "4",
      clientName: "Sneha Patel",
      phone: "+91 65432 10987",
      address: "321 Anna Nagar, Chennai",
      quotationDate: "2024-03-14",
      documents: ["Term_Life_Quote.pdf"],
      status: "Sent",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#254280] mb-2">Manage Quotations</h1>
            <p className="text-[#6b7b8c]">Manage customer quotations and documents</p>
          </div>
          <Button className="bg-[#254280] hover:bg-[#1e3660] text-white rounded-lg px-4 py-2 w-full sm:w-auto">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Customer
          </Button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-4 sm:p-6 border-b">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-[#254280]">Customer Quotations</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:space-x-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search customers..."
                    className="pl-10 w-full border-gray-200 focus:border-[#254280] focus:ring-[#254280]"
                  />
                </div>
                <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 bg-transparent w-full sm:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>

          {/* Responsive Table View */}
          <div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">ID</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Client Name</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Phone</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Address</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Documents</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quotations.map((quotation, index) => (
                    <tr key={quotation.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#254280] font-medium text-sm sm:text-base">{quotation.id}</span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="font-medium text-gray-900 text-sm sm:text-base whitespace-nowrap">{quotation.clientName}</span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-gray-600 text-sm sm:text-base whitespace-nowrap">{quotation.phone}</span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-gray-600 text-sm sm:text-base max-w-[120px] sm:max-w-xs truncate block">{quotation.address}</span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-gray-600 text-sm sm:text-base whitespace-nowrap">{quotation.quotationDate}</span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <div className="flex flex-col gap-1 max-w-[100px] sm:max-w-xs">
                          {quotation.documents.slice(0, 2).map((doc, docIndex) => (
                            <span key={docIndex} className="text-[#254280] text-sm hover:underline cursor-pointer truncate">
                              {doc}
                            </span>
                          ))}
                          {quotation.documents.length > 2 && (
                            <span className="text-gray-500 text-sm">+{quotation.documents.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <Badge
                          className={
                            quotation.status === "Active"
                              ? "bg-green-100 text-green-800 hover:bg-green-100 text-sm"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-100 text-sm"
                          }
                        >
                          {quotation.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <button className="p-1 text-gray-400 hover:text-[#254280] transition-colors">
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-[#254280] transition-colors">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-[#254280] transition-colors">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}