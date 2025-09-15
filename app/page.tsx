import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  FileText,
  Clock,
  Bell,
  Download,
  Filter,
  Search,
  Plus,
  RefreshCw,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="flex flex-col justify-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">
                POSP Dashboard
              </h1>
              <p className="text-[#6b7b8c] mt-1">Welcome back, John Patel</p>
            </div>
          </div>
          <Button className="bg-[#254280] hover:bg-[#254280]/90 text-white px-4 sm:px-6 py-3 rounded-lg w-full sm:w-auto">
            <FileText className="mr-2 h-4 w-4" />
            Generate Quotation
          </Button>
        </div>

        {/* Updated grid: 2 cards per row on mobile, 2 on sm, 4 on lg+ */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <Card className="bg-white border-gray-100 shadow-sm rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-[#6b7b8c]">
                Total Policies
              </CardTitle>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#254280] flex items-center justify-center">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-lg sm:text-2xl font-bold text-[#254280]">
                  1,247
                </div>
                <div className="flex items-center bg-green-50 text-green-600 px-1.5 sm:px-2 py-1 rounded-md text-xs font-medium">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </div>
              </div>
              <p className="text-xs text-[#6b7b8c] mt-1">vs last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 shadow-sm rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-[#6b7b8c]">
                Active Policies
              </CardTitle>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#2ecc71] flex items-center justify-center">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-lg sm:text-2xl font-bold text-[#254280]">
                  1,156
                </div>
                <div className="flex items-center bg-green-50 text-green-600 px-1.5 sm:px-2 py-1 rounded-md text-xs font-medium">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.2%
                </div>
              </div>
              <p className="text-xs text-[#6b7b8c] mt-1">vs last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 shadow-sm rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-[#6b7b8c]">
                Expiring Soon
              </CardTitle>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#254280] flex items-center justify-center">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-lg sm:text-2xl font-bold text-[#254280]">
                  94
                </div>
                <div className="flex items-center bg-red-50 text-red-600 px-1.5 sm:px-2 py-1 rounded-md text-xs font-medium">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -15.3%
                </div>
              </div>
              <p className="text-xs text-[#6b7b8c] mt-1">vs last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-gray-100 shadow-sm rounded-xl">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-[#6b7b8c]">
                Total Commission
              </CardTitle>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#254280] flex items-center justify-center">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-base sm:text-2xl font-bold text-[#254280]">
                  ₹45,870
                </div>
                <div className="flex items-center bg-green-50 text-green-600 px-1.5 sm:px-2 py-1 rounded-md text-xs font-medium">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.7%
                </div>
              </div>
              <p className="text-xs text-[#6b7b8c] mt-1">vs last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Renewals Table */}
          <Card className="bg-white border-gray-100 shadow-sm rounded-lg lg:col-span-2">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <CardTitle className="text-[#254280] text-lg font-semibold">
                  Upcoming Renewals
                </CardTitle>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                  {/* Search */}
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search renewals..."
                      className="pl-10 w-full border-gray-200 rounded-lg text-sm"
                    />
                  </div>

                  {/* Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 rounded-lg bg-transparent w-full sm:w-auto"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    <span className="text-sm">Expiring Today</span>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Policy End Date
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Policy ID
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Client
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Policy Type
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Premium
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Insurer
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left py-3 px-2 text-xs font-medium text-[#6b7b8c] uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-[#6b7b8c] mr-2" />
                          <span className="text-sm text-[#254280]">
                            2024-03-15
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          POL-2024-001
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#254280]">
                          Rajesh Kumar
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          Term Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          ₹15,000
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          HDFC Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-red-200 text-xs">
                          Due Today
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-[#6b7b8c] mr-2" />
                          <span className="text-sm text-[#254280]">
                            2024-03-15
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          POL-2024-001
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#254280]">
                          Rajesh Kumar
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          Term Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          ₹15,000
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          HDFC Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-red-200 text-xs">
                          Due Today
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-[#6b7b8c] mr-2" />
                          <span className="text-sm text-[#254280]">
                            2024-03-15
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          POL-2024-001
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#254280]">
                          Rajesh Kumar
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          Term Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          ₹15,000
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          HDFC Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-red-200 text-xs">
                          Due Today
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="divide-y divide-gray-50">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-[#6b7b8c] mr-2" />
                          <span className="text-sm text-[#254280]">
                            2024-03-15
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          POL-2024-001
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#254280]">
                          Rajesh Kumar
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          Term Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-[#254280]">
                          ₹15,000
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <span className="text-sm text-[#6b7b8c]">
                          HDFC Life
                        </span>
                      </td>
                      <td className="py-4 px-2">
                        <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-red-200 text-xs">
                          Due Today
                        </Badge>
                      </td>
                      <td className="py-4 px-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Calendar className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white border-gray-100 shadow-sm rounded-lg">
            <CardHeader>
              <CardTitle className="text-[#254280] flex items-center text-lg font-semibold">
                <Clock className="mr-2 h-5 w-5 text-[#6b7b8c]" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Plus className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#254280]">
                    New Policy Added
                  </p>
                  <p className="text-xs text-[#6b7b8c] truncate">
                    Term Life policy for Rajesh Kumar - POL-2024-015
                  </p>
                  <p className="text-xs text-[#6b7b8c]">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <RefreshCw className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#254280]">
                    Policy Renewed
                  </p>
                  <p className="text-xs text-[#6b7b8c] truncate">
                    Health Plus policy renewed for Priya Sharma
                  </p>
                  <p className="text-xs text-[#6b7b8c]">4 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#254280]">
                    Commission Earned
                  </p>
                  <p className="text-xs text-[#6b7b8c] truncate">
                    ₹3,500 commission from Motor Insurance renewal
                  </p>
                  <p className="text-xs text-[#6b7b8c]">6 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Plus className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#254280]">
                    New Customer
                  </p>
                  <p className="text-xs text-[#6b7b8c] truncate">
                    Added new customer profile
                  </p>
                  <p className="text-xs text-[#6b7b8c]">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
