"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Filter,
  CheckCircle,
  Clock,
  X,
  AlertCircle,
  Info,
  Car,
  Clock3,
  FileText,
  User,
  Shield,
  TrendingUp,
  UserX,
  MessageCircle,
} from "lucide-react";

const renewalsData = [
  {
    id: "01-08-2025",
    customer: "DAMODAR SAINI",
    policyId: "RJ45CD9396",
    policyType: "Private Car-Comprehensive",
    premium: "₹7,956",
    posp: "POSP-001",
    status: "Active",
    expiry: "01-08-2025",
  },
  {
    id: "05-08-2025",
    customer: "MANGALABAI BANWARILAL L",
    policyId: "MH04FR1409",
    policyType: "Private Car-Liability",
    premium: "₹8,197",
    posp: "POSP-002",
    status: "Active",
    expiry: "05-08-2025",
  },
];

export default function RenewalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [monthFilter, setMonthFilter] = useState("August");
  const [policyFilter, setPolicyFilter] = useState("Policy");
  const [pospFilter, setPospFilter] = useState("POSP");

  const filteredRenewals = renewalsData.filter((renewal) => {
    const matchesSearch =
      renewal.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      renewal.policyId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      renewal.policyType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#254280] mb-2">
              Renewals Management
            </h1>
            <p className="text-[#6b7b8c]">
              Track and manage policy renewals and conversions
            </p>
          </div>
        </div>

        {/* Stats Cards - 2 per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-green-700 mb-2">
                    Converted
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-2xl sm:text-3xl font-bold text-green-800">
                      3
                    </p>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      +50%
                    </span>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-blue-700 mb-2">
                    In Progress
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-800">
                      0
                    </p>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      0%
                    </span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-red-700 mb-2">
                    Not Converted
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-2xl sm:text-3xl font-bold text-red-800">
                      0
                    </p>
                    <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      0%
                    </span>
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserX className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-gray-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Not Replied
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                      3
                    </p>
                    <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      50%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-600 h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="h-10 w-10 sm:h-12 sm:w-12 bg-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conversion Rate Card */}
        <Card>
          <CardContent className="p-4 sm:pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                <span className="font-medium text-[#1a1a1a]">
                  Conversion Rate
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                  50%
                </div>
                <div className="text-sm text-[#6b7b8c]">3 of 6 cases</div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-[#6b7b8c]">
                Based on current month's data
              </p>
              <Progress value={50} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7b8c]" />
            <Input
              placeholder="Search by name, vehicle or policy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="h-4 w-4 text-[#6b7b8c]" />
              <Select value={monthFilter} onValueChange={setMonthFilter}>
                <SelectTrigger className="w-full sm:w-32 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="August">August</SelectItem>
                  <SelectItem value="September">September</SelectItem>
                  <SelectItem value="October">October</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <FileText className="h-4 w-4 text-[#6b7b8c]" />
              <Select value={policyFilter} onValueChange={setPolicyFilter}>
                <SelectTrigger className="w-full sm:w-32 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Policy">Policy</SelectItem>
                  <SelectItem value="Motor">Motor</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <User className="h-4 w-4 text-[#6b7b8c]" />
              <Select value={pospFilter} onValueChange={setPospFilter}>
                <SelectTrigger className="w-full sm:w-32 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="POSP">POSP</SelectItem>
                  <SelectItem value="POSP-001">POSP-001</SelectItem>
                  <SelectItem value="POSP-002">POSP-002</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Renewals Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Expiry
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Customer
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Policy
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Premium
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      POSP
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Status
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRenewals.map((renewal, index) => (
                    <tr
                      key={renewal.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="font-medium text-[#1a1a1a] text-sm sm:text-base whitespace-nowrap">
                          {renewal.expiry}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="font-medium text-[#1a1a1a] text-sm sm:text-base max-w-[140px] sm:max-w-xs truncate block">
                          {renewal.customer}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <div className="flex items-center gap-2">
                          <Car className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="font-medium text-blue-600 text-sm sm:text-base">
                              {renewal.policyId}
                            </p>
                            <p className="text-xs sm:text-sm text-[#6b7b8c] truncate">
                              {renewal.policyType}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="font-medium text-[#1a1a1a] text-sm sm:text-base whitespace-nowrap">
                          {renewal.premium}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6 whitespace-nowrap">
                        <span className="font-medium text-[#1a1a1a] text-sm sm:text-base">
                          {renewal.posp}
                        </span>
                      </td>

                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-[#6b7b8c] border-gray-300 bg-transparent text-sm"
                        >
                          Status
                        </Button>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#6b7b8c]" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <Clock3 className="h-4 w-4 sm:h-5 sm:w-5 text-[#6b7b8c]" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[#6b7b8c]" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
