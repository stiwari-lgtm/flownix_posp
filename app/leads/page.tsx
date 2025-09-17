"use client";

import { useState, useEffect } from "react";
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
import QuotationUploadModal from "../../components/leads/RequestQuotationModal";

// Default leads (used only if no data in localStorage)
const defaultLeads = [
  {
    id: "LD001",
    clientName: "Rohit Gupta",
    mobileNo: "9876543210",
    insuranceType: "Motor",
    insuranceProducts: [
      "Private Car-Comprehensive",
      "Private Car Bundled (1Y OD + 3Y TP)",
    ],
    requestedQuotations: [],
    selectedQuotation: "",
    status: "Pending",
    remark: "-",
  },
  {
    id: "LD002",
    clientName: "Sneha Patel",
    mobileNo: "9123456789",
    insuranceType: "Health",
    insuranceProducts: ["Health Individual", "Health Individual-Family Floater"],
    requestedQuotations: ["Star Health Quote", "Max Bupa Quote"],
    selectedQuotation: "Star Health Quote",
    status: "Converted",
    remark: "Customer approved Star Health",
  },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState<typeof defaultLeads>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Load leads from localStorage on mount
  useEffect(() => {
    const storedLeads = localStorage.getItem("leads");
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    } else {
      setLeads(defaultLeads);
    }
  }, []);

  // Save leads to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  // Handle new lead submission
  const handleAddLead = (newLead: any) => {
    const nextId = `LD${String(leads.length + 1).padStart(3, "0")}`;

    const leadToAdd = {
      id: nextId,
      clientName: newLead.clientName,
      mobileNo: newLead.mobileNo,
      insuranceType: newLead.insuranceType,
      insuranceProducts: newLead.insuranceProducts || [],
      requestedQuotations: [],
      selectedQuotation: "",
      status: "Pending",
      remark: "-",
    };

    setLeads((prevLeads) => [...prevLeads, leadToAdd]);
    setIsModalOpen(false);
  };

  // Filter leads based on search and status
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.insuranceType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      lead.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // Stats
  const totalLeads = leads.length;
  const activeLeads = leads.filter((lead) => lead.status !== "Converted").length;
  const convertedLeads = leads.filter(
    (lead) => lead.status === "Converted"
  ).length;

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
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#254280] hover:bg-[#1e3666] text-white rounded-lg px-4 py-2 w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Request for Quotation
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
                      {totalLeads}
                    </p>
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
                      {activeLeads}
                    </p>
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
                      {convertedLeads}
                    </p>
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
                Active Leads ({filteredLeads.length})
              </CardTitle>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7b8c] w-4 h-4" />
                  <Input
                    placeholder="Search leads..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full border-gray-200 focus:border-[#254280] focus:ring-[#254280]"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
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
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Lead ID
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Client Name
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Mobile No.
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Insurance Type
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Insurance Products
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Requested Quotations
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Selected Quotation
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Status
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Action
                    </th>
                    <th className="text-left py-3 px-3 sm:px-6 text-sm font-medium text-gray-700">
                      Remark
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredLeads.length > 0 ? (
                    filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-4 text-[#254280] font-medium text-sm">
                          {lead.id}
                        </td>
                        <td className="py-4 px-4 text-[#1a1a1a] font-medium text-sm">
                          {lead.clientName}
                        </td>
                        <td className="py-4 px-4 text-[#6b7b8c] text-sm">
                          {lead.mobileNo}
                        </td>
                        <td className="py-4 px-4 text-[#6b7b8c] text-sm">
                          <Badge variant="outline" className="text-xs">
                            {lead.insuranceType}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-[#6b7b8c] text-sm max-w-48">
                          <div
                            className="truncate"
                            title={lead.insuranceProducts?.join(", ")}
                          >
                            {lead.insuranceProducts?.length > 0
                              ? lead.insuranceProducts.join(", ")
                              : "-"}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-[#6b7b8c] text-sm">
                          {lead.requestedQuotations?.length > 0
                            ? lead.requestedQuotations.join(", ")
                            : "-"}
                        </td>
                        <td className="py-4 px-4">
                          <Select
                            value={lead.selectedQuotation || ""}
                            disabled={
                              lead.status === "Pending" ||
                              lead.requestedQuotations.length === 0
                            }
                          >
                            <SelectTrigger
                              className={`w-36 border-gray-200 text-sm ${
                                lead.status === "Pending" ||
                                lead.requestedQuotations.length === 0
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                              }`}
                            >
                              <SelectValue placeholder="Select Quotation" />
                            </SelectTrigger>
                            <SelectContent>
                              {lead.requestedQuotations.map((q) => (
                                <SelectItem key={q} value={q}>
                                  {q}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            className={`text-xs ${
                              lead.status === "Pending"
                                ? "bg-[#f5c642]/10 text-[#f5c642] border-[#f5c642]/20"
                                : lead.status === "Converted"
                                ? "bg-[#2ecc71]/10 text-[#2ecc71] border-[#2ecc71]/20"
                                : "bg-[#254280]/10 text-[#254280] border-[#254280]/20"
                            }`}
                          >
                            {lead.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          {lead.status === "Converted" ? (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#6b7b8c] hover:text-[#254280] p-1"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              className="bg-[#254280] hover:bg-[#1e3666] text-white text-xs px-3 py-1"
                            >
                              Take Action
                            </Button>
                          )}
                        </td>
                        <td className="py-4 px-4 text-[#6b7b8c] text-sm max-w-32">
                          <div className="truncate" title={lead.remark}>
                            {lead.remark}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={10}
                        className="py-8 text-center text-[#6b7b8c]"
                      >
                        {searchTerm || statusFilter !== "all"
                          ? "No leads found matching your criteria"
                          : "No leads available. Create your first lead by clicking 'Request for Quotation'"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quotation Upload Modal */}
      <QuotationUploadModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddLead}
      />
    </DashboardLayout>
  );
}
