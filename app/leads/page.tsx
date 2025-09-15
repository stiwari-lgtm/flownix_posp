import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Plus,
  Search,
  Filter,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#254280] mb-2">
              Lead Management
            </h1>
            <p className="text-[#6b7b8c]">Track and manage your sales leads</p>
          </div>
          <Button className="bg-[#254280] hover:bg-[#1e3666] text-white rounded-lg px-4 py-2 w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Create Lead
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    Total Leads
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      45
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full">
                      +12.5% vs last month
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#254280] rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    Active Leads
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      28
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full">
                      +8.2% vs last month
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ecc71] rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    Converted Leads
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      17
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full">
                      +25.3% vs last month
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#254280] rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Leads Table */}
        <Card className="bg-white shadow-sm border-0">
          <CardHeader className="pb-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="text-lg font-semibold text-[#254280]">
                Active Leads
              </CardTitle>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7b8c] w-4 h-4" />
                  <Input
                    placeholder="Search leads..."
                    className="pl-10 w-full border-gray-200 focus:border-[#254280] focus:ring-[#254280]"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full sm:w-32 border-gray-200">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="progress">In Progress</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1400px] rounded-lg overflow-hidden">
                <thead className="bg-[#f5f7fa] border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Lead ID
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Client Name
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Insurance Type
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Preferred Insurer
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Requested Quotations
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Selected Quotation
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Status
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Action
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-[#254280] font-medium text-sm">
                        LD001
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#1a1a1a] font-medium text-sm">
                        Rohit Gupta
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm whitespace-nowrap">
                        Motor Insurance
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm whitespace-nowrap">
                        HDFC ERGO, ICICI Lombard
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">-</span>
                    </td>
                    <td className="py-4 px-4">
                      <Select defaultValue="" disabled>
                        <SelectTrigger className="w-36 border-gray-200 opacity-50 text-sm">
                          <SelectValue placeholder="Select Quotation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hdfc">HDFC ERGO Quote</SelectItem>
                          <SelectItem value="icici">
                            ICICI Lombard Quote
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-[#f5c642]/10 text-[#f5c642] hover:bg-[#f5c642]/20 text-xs">
                        Pending
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        size="sm"
                        className="bg-[#254280] hover:bg-[#1e3666] text-white text-xs px-3 py-1"
                      >
                        Take Action
                      </Button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">-</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-[#254280] font-medium text-sm">
                        LD002
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#1a1a1a] font-medium text-sm">
                        Sneha Patel
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm whitespace-nowrap">
                        Health Insurance
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Star Health, Max Bupa
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Star Health Quote, Max Bupa Quote
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Select defaultValue="star" disabled>
                        <SelectTrigger className="w-36 border-gray-200 opacity-50 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="star">
                            Star Health Quote
                          </SelectItem>
                          <SelectItem value="max">Max Bupa Quote</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-[#2ecc71]/10 text-[#2ecc71] hover:bg-[#2ecc71]/20 text-xs">
                        Converted
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#6b7b8c] hover:text-[#254280] p-1"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Customer approved Star Health
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-[#254280] font-medium text-sm">
                        LD003
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#1a1a1a] font-medium text-sm whitespace-nowrap">
                        Deepak Sharma
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Life Insurance
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        HDFC Life, ICICI Prudential
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        HDFC Life Quote, ICICI Pru Quote
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Select defaultValue="">
                        <SelectTrigger className="w-36 border-gray-200 text-sm">
                          <SelectValue placeholder="Select Quotation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hdfc-life">
                            HDFC Life Quote
                          </SelectItem>
                          <SelectItem value="icici-pru">
                            ICICI Pru Quote
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-[#254280]/10 text-[#254280] hover:bg-[#254280]/20 text-xs">
                        In Progress
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        size="sm"
                        className="bg-[#254280] hover:bg-[#1e3666] text-white text-xs px-3 py-1"
                      >
                        Take Action
                      </Button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Awaiting customer decision
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-[#254280] font-medium text-sm">
                        LD004
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#1a1a1a] font-medium text-sm">
                        Amit Singh
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Motor Insurance
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Bajaj Allianz, Tata AIG
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Bajaj Quote, Tata AIG Quote
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Select defaultValue="bajaj">
                        <SelectTrigger className="w-36 border-gray-200 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bajaj">
                            Bajaj Allianz Quote
                          </SelectItem>
                          <SelectItem value="tata">Tata AIG Quote</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-[#254280]/10 text-[#254280] hover:bg-[#254280]/20 text-xs">
                        In Progress
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        size="sm"
                        className="bg-[#254280] hover:bg-[#1e3666] text-white text-xs px-3 py-1"
                      >
                        Take Action
                      </Button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Following up with quotations
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="text-[#254280] font-medium text-sm">
                        LD005
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#1a1a1a] font-medium text-sm">
                        Priya Krishnan
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        Travel Insurance
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        HDFC ERGO, Bharti AXA
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">-</span>
                    </td>
                    <td className="py-4 px-4">
                      <Select defaultValue="" disabled>
                        <SelectTrigger className="w-36 border-gray-200 opacity-50 text-sm">
                          <SelectValue placeholder="Select Quotation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hdfc">HDFC ERGO Quote</SelectItem>
                          <SelectItem value="bharti">
                            Bharti AXA Quote
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className="bg-[#f5c642]/10 text-[#f5c642] hover:bg-[#f5c642]/20 text-xs">
                        Pending
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <Button
                        size="sm"
                        className="bg-[#254280] hover:bg-[#1e3666] text-white text-xs px-3 py-1"
                      >
                        Take Action
                      </Button>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[#6b7b8c] text-sm">
                        New lead, needs initial contact
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Converted Leads Table */}
        <Card className="bg-white shadow-sm border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-[#254280] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#2ecc71]" />
                Converted Leads
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] rounded-lg overflow-hidden">
                <thead className="bg-[#f5f7fa] border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Lead ID
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Client Name
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Insurance Type
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Selected Quotation
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Conversion Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#254280] font-medium text-sm sm:text-base">
                        LD002
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#1a1a1a] font-medium text-sm sm:text-base whitespace-nowrap">
                        Sneha Patel
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        Health Insurance
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        Star Health Quote
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base whitespace-nowrap">
                        2024-03-15
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#254280] font-medium text-sm sm:text-base">
                        LD006
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#1a1a1a] font-medium text-sm sm:text-base whitespace-nowrap">
                        Rajesh Kumar
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        Motor Insurance
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        HDFC ERGO Quote
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base whitespace-nowrap">
                        2024-03-18
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#254280] font-medium text-sm sm:text-base">
                        LD007
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#1a1a1a] font-medium text-sm sm:text-base whitespace-nowrap">
                        Meera Reddy
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        Life Insurance
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base">
                        ICICI Prudential Quote
                      </span>
                    </td>
                    <td className="py-3 px-3 sm:py-4 sm:px-6">
                      <span className="text-[#6b7b8c] text-sm sm:text-base whitespace-nowrap">
                        2024-03-20
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
