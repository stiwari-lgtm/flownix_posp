"use client";

import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Clock,
  CheckCircle,
  Info,
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  Edit,
  Save,
} from "lucide-react";
import { useState } from "react";

export default function FinancialDetailsPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountHolderName: "John Patel",
    bankName: "HDFC Bank",
    accountNumber: "50100XXXXXXX789",
    ifscCode: "HDFC0001234",
    branchName: "MG Road, Bangalore",
    accountType: "Savings",
    panNumber: "ABCDE1234F",
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the data to your backend
    console.log("[v0] Saving bank details:", bankDetails);
  };

  const handleInputChange = (field: string, value: string) => {
    setBankDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#254280] mb-2">
              Financial Details
            </h1>
            <p className="text-[#6b7b8c]">
              Manage your banking and financial information
            </p>
          </div>
        </div>

        {/* Stats Cards - 2 per row on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    Total Earned
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      ₹2,45,680
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full w-fit">
                      +18.7%
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#254280] rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    This Month
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      ₹45,230
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full w-fit">
                      +12.3%
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2ecc71] rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-2">
                  <p className="text-[#6b7b8c] text-sm font-medium mb-1">
                    Pending
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      ₹8,450
                    </p>
                    <span className="text-xs text-[#2ecc71] bg-[#2ecc71]/10 px-2 py-1 rounded-full w-fit">
                      2 policies
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#254280] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Commission History Table */}
        <Card className="bg-white shadow-sm border-0">
          <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-[#254280]">
              Commission History
            </h2>
            <Button
              variant="outline"
              className="border-[#254280] text-[#254280] hover:bg-[#254280] hover:text-white bg-transparent w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] rounded-lg overflow-hidden">
                <thead className="bg-[#f5f7fa] border-b border-gray-200">
                  <tr>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Policy ID
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Customer
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Policy Type
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Premium
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Commission
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Rate
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Status
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm sm:text-base font-medium text-[#6b7b8c]">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      policyId: "1",
                      customer: "Rajesh Kumar",
                      policyType: "Term Life",
                      premium: "₹15,000",
                      commission: "₹1,500",
                      rate: "10%",
                      status: "Paid",
                      date: "2024-03-05",
                    },
                    {
                      policyId: "2",
                      customer: "Priya Sharma",
                      policyType: "Health Plus",
                      premium: "₹25,000",
                      commission: "₹2,250",
                      rate: "9%",
                      status: "Pending",
                      date: "2024-03-08",
                    },
                    {
                      policyId: "3",
                      customer: "Amit Singh",
                      policyType: "Motor Insurance",
                      premium: "₹8,500",
                      commission: "₹680",
                      rate: "8%",
                      status: "Paid",
                      date: "2024-03-10",
                    },
                  ].map((commission, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#254280] font-medium text-sm sm:text-base">
                          {commission.policyId}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#1a1a1a] font-medium text-sm sm:text-base whitespace-nowrap">
                          {commission.customer}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#6b7b8c] text-sm sm:text-base">
                          {commission.policyType}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#6b7b8c] text-sm sm:text-base whitespace-nowrap">
                          {commission.premium}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-green-600 font-semibold text-sm sm:text-base whitespace-nowrap">
                          {commission.commission}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#6b7b8c] text-sm sm:text-base">
                          {commission.rate}
                        </span>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <Badge
                          className={
                            commission.status === "Paid"
                              ? "bg-[#2ecc71]/10 text-[#2ecc71] hover:bg-[#2ecc71]/20 text-sm"
                              : "bg-[#f5c642]/10 text-[#f5c642] hover:bg-[#f5c642]/20 text-sm"
                          }
                        >
                          {commission.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 sm:py-4 sm:px-6">
                        <span className="text-[#6b7b8c] text-sm sm:text-base whitespace-nowrap">
                          {commission.date}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Bank Details Section */}
        <Card className="bg-white shadow-sm border-0">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#254280] rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-[#254280]">
                  Current Bank Details
                </h2>
              </div>
              {!isEditing ? (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="border-[#254280] text-[#254280] hover:bg-[#254280] hover:text-white bg-transparent w-full sm:w-auto"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              ) : (
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button
                    onClick={() => setIsEditing(false)}
                    variant="outline"
                    className="border-gray-300 text-gray-600 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    className="bg-[#254280] hover:bg-[#1e3660] text-white w-full sm:w-auto"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Account Holder Name
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.accountHolderName}
                      onChange={(e) =>
                        handleInputChange("accountHolderName", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.accountHolderName}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Bank Name
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.bankName}
                      onChange={(e) =>
                        handleInputChange("bankName", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.bankName}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Account Number
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.accountNumber}
                      onChange={(e) =>
                        handleInputChange("accountNumber", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.accountNumber}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    IFSC Code
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.ifscCode}
                      onChange={(e) =>
                        handleInputChange("ifscCode", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.ifscCode}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Branch Name
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.branchName}
                      onChange={(e) =>
                        handleInputChange("branchName", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.branchName}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Account Type
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.accountType}
                      onChange={(e) =>
                        handleInputChange("accountType", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.accountType}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    PAN Number
                  </label>
                  {isEditing ? (
                    <Input
                      value={bankDetails.panNumber}
                      onChange={(e) =>
                        handleInputChange("panNumber", e.target.value)
                      }
                      className="border-gray-300 focus:border-[#254280] focus:ring-[#254280]"
                    />
                  ) : (
                    <div className="bg-[#f5f7fa] rounded-lg p-3">
                      <span className="text-[#254280] font-medium">
                        {bankDetails.panNumber}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium text-[#6b7b8c] mb-1 block">
                    Status
                  </label>
                  <div className="bg-[#f5f7fa] rounded-lg p-3">
                    <Badge className="bg-green-100 text-green-700 hover:bg-gray-100">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Approved
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pending Requests Section */}
        <Card className="bg-white shadow-sm border-0">
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-orange-500" />
              <h2 className="text-lg font-semibold text-[#254280]">
                Pending Requests
              </h2>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#254280]" />
                  <span className="font-medium text-[#254280]">
                    Change Request - Bank Account
                  </span>
                </div>
                <Badge className="bg-[#f5c642]/10 text-[#f5c642] hover:bg-[#f5c642]/20 w-fit">
                  Pending
                </Badge>
              </div>

              <div className="space-y-2 text-sm text-[#6b7b8c]">
                <div>
                  <span className="font-medium">Requested on:</span> 2024-03-10
                </div>
                <div>
                  <span className="font-medium">From:</span> HDFC Bank -
                  50100XXXXXXX789
                </div>
                <div>
                  <span className="font-medium">To:</span> ICICI Bank -
                  60200XXXXXXX123
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Important Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium text-blue-800">Important:</span>
              <span className="text-blue-700 ml-1">
                All changes to financial details require admin approval. You
                will be notified once your request is reviewed and processed.
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
