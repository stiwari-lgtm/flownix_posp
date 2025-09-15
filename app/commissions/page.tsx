"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, DollarSign, TrendingUp, Calendar } from "lucide-react"

export default function CommissionsPage() {
  const commissionData = [
    {
      policyId: "POL-2024-001",
      customer: "Rajesh Kumar",
      policyType: "Term Life",
      premium: "₹15,000",
      commission: "₹1,500",
      rate: "10%",
      status: "Paid",
      date: "2024-03-05",
    },
    {
      policyId: "POL-2024-002",
      customer: "Priya Sharma",
      policyType: "Health Plus",
      premium: "₹25,000",
      commission: "₹2,250",
      rate: "9%",
      status: "Pending",
      date: "2024-03-08",
    },
    {
      policyId: "POL-2024-003",
      customer: "Amit Singh",
      policyType: "Motor Insurance",
      premium: "₹8,500",
      commission: "₹680",
      rate: "8%",
      status: "Paid",
      date: "2024-03-10",
    },
  ]

  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#254280] mb-2">Commission Tracking</h1>
            <p className="text-[#6b7b8c]">Track and manage your commission earnings</p>
          </div>
          <Button className="bg-[#254280] hover:bg-[#1e3660] text-white rounded-lg px-4 py-2">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#6b7b8c]">Total Earned</h3>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-[#254280]">₹2,45,680</p>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">+18.7%</span>
                <span className="text-[#6b7b8c] ml-1">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#6b7b8c]">This Month</h3>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-[#254280]">₹45,230</p>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">+12.3%</span>
                <span className="text-[#6b7b8c] ml-1">vs last month</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-[#6b7b8c]">Pending</h3>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-[#254280]">₹8,450</p>
              <div className="flex items-center text-sm">
                <span className="text-green-600 font-medium">2 policies</span>
                <span className="text-[#6b7b8c] ml-1">vs last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-[#254280]">Commission History</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Policy ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Policy Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Premium
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Commission
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {commissionData.map((commission, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-[#254280] font-medium">{commission.policyId}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-[#254280] font-medium">{commission.customer}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#6b7b8c]">{commission.policyType}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#6b7b8c]">{commission.premium}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-green-600 font-semibold">{commission.commission}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#6b7b8c]">{commission.rate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={commission.status === "Paid" ? "default" : "secondary"}
                        className={
                          commission.status === "Paid"
                            ? "bg-green-100 text-green-800 hover:bg-gray-100"
                            : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                        }
                      >
                        {commission.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[#6b7b8c]">{commission.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
