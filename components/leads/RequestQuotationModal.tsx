"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, X } from "lucide-react";

// Insurance products data from Sibro
const insuranceProducts = {
  Motor: [
    "Private Car Bundled (1Y OD + 3Y TP)",
    "Private Car SATP", 
    "Private car TP",
    "Private Car-Comprehensive",
    "Private Car-Liability",
    "Private Car-SAOD",
    "Miscellaneous vehicle - Comprehensive",
    "Miscellaneous Vehicle- TP",
    "School Bus - Comprehensive - > 18 Seater",
    "School Bus - Liability TP -< 18 Seater", 
    "School Bus - Liability TP - >18 Seater",
    "School Bus -Comprehensive - < 18 Seater",
    "Commercial Vehicle - Comprehensive - LCV",
    "Commercial Vehicle - Comprehensive - GCV", 
    "Commercial Vehicle - Comprehensive -PCV",
    "Commercial Vehicle - Liability TP - GCV",
    "Commercial Vehicle - Liability TP - LCV",
    "Commercial Vehicle - Liability TP - PCV",
    "Commercial Vehicle (Online)",
    "Four Wheeler (Online)",
    "Corporate Staff Bus - Comprehensive -< 18 Seater",
    "Corporate Staff Bus - Comprehensive ->18 Seater", 
    "Corporate Staff Bus - Liability TP-< 18 Seater",
    "Corporate Staff Bus - Liability TP-> 18 Seater"
  ],
  Health: [
    "Health Individual",
    "Health Individual-Critical illness", 
    "Health Individual-Family Floater",
    "Health Individual-Topup",
    "Health Insurance (Online)",
    "Group Health Insurance",
    "Group Health Linked",
    "Group Health Non Linked",
    "Critical Illness Health Insurance - Group",
    "Critical Illness Health Insurance - Retail",
    "Government Scheme related Health Insurance",
    "Individual Health Linked",
    "Individual Health Non Linked",
    "Group Personal Accident",
    "Personal Accident Insurance - Retail"
  ],
  Life: [
    "Individual Annuity Linked",
    "Individual Annuity Non Linked", 
    "Individual Health Linked",
    "Individual Health Non Linked",
    "Individual Investment Linked",
    "Individual Investment Non Linked",
    "Individual Pension Linked",
    "Individual Pension Non Linked",
    "Individual Savings Linked",
    "Individual Savings Non Linked",
    "Individual Term Linked",
    "Individual Term Non Linked",
    "Group Annuity Linked",
    "Group Annuity Non Linked (Life)",
    "Group Health Linked",
    "Group Health Non Linked",
    "Group Investment Linked", 
    "Group Investment Non Linked",
    "Group Pension Linked",
    "Group Pension Non Linked",
    "Group Savings Linked",
    "Group Savings Non Linked",
    "Group Term Linked",
    "Group Term Non Linked",
    "LIC OF INDIA"
  ]
};

interface QuotationUploadModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (lead: any) => void;
}

export default function QuotationUploadModal({
  open,
  onClose,
  onSubmit,
}: QuotationUploadModalProps) {
  const [form, setForm] = useState({
    clientName: "",
    mobileNo: "",
    insuranceType: "",
    coverageType: "", // For health insurance (individual/family)
    age: "", // For individual health
    preExistingDisease: "", // For individual health
    insuranceProducts: [] as string[],
    familyMembers: [] as { age: string; preExistingDisease: string; id: number }[],
    previousYearPolicy: null as File | null,
    rcUpload: null as File | null,
  });

  const [familyMemberInput, setFamilyMemberInput] = useState({
    age: "",
    preExistingDisease: ""
  });

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleInsuranceProductToggle = (product: string) => {
    setForm(prev => ({
      ...prev,
      insuranceProducts: prev.insuranceProducts.includes(product)
        ? prev.insuranceProducts.filter(p => p !== product)
        : [...prev.insuranceProducts, product]
    }));
  };

  const addFamilyMember = () => {
    if (familyMemberInput.age) {
      setForm(prev => ({
        ...prev,
        familyMembers: [...prev.familyMembers, { 
          ...familyMemberInput, 
          id: Date.now() 
        }]
      }));
      setFamilyMemberInput({ age: "", preExistingDisease: "" });
    }
  };

  const removeFamilyMember = (id: number) => {
    setForm(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter(member => member.id !== id)
    }));
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setForm(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = () => {
    if (!form.clientName || !form.mobileNo || !form.insuranceType || form.insuranceProducts.length === 0) {
      alert("Please fill all required fields and select at least one insurance product");
      return;
    }

    // Additional validation for health insurance
    if (form.insuranceType === "Health" && !form.coverageType) {
      alert("Please select coverage type for health insurance");
      return;
    }

    if (form.insuranceType === "Health" && form.coverageType === "individual" && !form.age) {
      alert("Please enter age for individual health insurance");
      return;
    }

    if (form.insuranceType === "Health" && form.coverageType === "family" && form.familyMembers.length === 0) {
      alert("Please add at least one family member for family health insurance");
      return;
    }

    onSubmit(form);
    
    // Reset form
    setForm({
      clientName: "",
      mobileNo: "",
      insuranceType: "",
      coverageType: "",
      age: "",
      preExistingDisease: "",
      insuranceProducts: [],
      familyMembers: [],
      previousYearPolicy: null,
      rcUpload: null,
    });
    setFamilyMemberInput({ age: "", preExistingDisease: "" });
  };

  const renderHealthFields = () => {
    if (form.insuranceType !== "Health") return null;

    return (
      <div className="space-y-4">
        <div>
          <Label className="text-sm text-[#6b7b8c]">Coverage Type *</Label>
          <Select value={form.coverageType} onValueChange={(value) => handleChange("coverageType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select coverage type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="family">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {form.coverageType === "individual" && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm text-[#6b7b8c]">Age *</Label>
              <Input
                value={form.age}
                onChange={(e) => handleChange("age", e.target.value)}
                placeholder="Enter age"
                type="number"
              />
            </div>
            <div>
              <Label className="text-sm text-[#6b7b8c]">Pre-existing Disease</Label>
              <Input
                value={form.preExistingDisease}
                onChange={(e) => handleChange("preExistingDisease", e.target.value)}
                placeholder="Enter disease (optional)"
              />
            </div>
          </div>
        )}

        {form.coverageType === "family" && (
          <div className="space-y-3">
            <div>
              <Label className="text-sm text-[#6b7b8c]">Add Family Members</Label>
              <div className="flex gap-2">
                <Input
                  value={familyMemberInput.age}
                  onChange={(e) => setFamilyMemberInput(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="Age"
                  type="number"
                  className="flex-1"
                />
                <Input
                  value={familyMemberInput.preExistingDisease}
                  onChange={(e) => setFamilyMemberInput(prev => ({ ...prev, preExistingDisease: e.target.value }))}
                  placeholder="Pre-existing disease (optional)"
                  className="flex-1"
                />
                <Button 
                  type="button" 
                  onClick={addFamilyMember}
                  variant="outline"
                  size="sm"
                  className="bg-[#254280] text-white hover:bg-[#1e3666]"
                >
                  Add
                </Button>
              </div>
            </div>

            {form.familyMembers.length > 0 && (
              <div className="space-y-2">
                <Label className="text-sm text-[#6b7b8c]">Family Members:</Label>
                {form.familyMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">
                      Age: {member.age} {member.preExistingDisease && `- ${member.preExistingDisease}`}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFamilyMember(member.id)}
                      className="text-red-500 hover:text-red-700 h-6 w-6 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderMotorFields = () => {
    if (form.insuranceType !== "Motor") return null;

    return (
      <div className="space-y-3">
        <div>
          <Label className="text-sm text-[#6b7b8c]">Add Previous Year Policy</Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              onChange={(e) => handleFileUpload("previousYearPolicy", e.target.files?.[0] || null)}
              accept=".pdf,.jpg,.jpeg,.png"
              className="flex-1"
            />
            <Upload className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <Label className="text-sm text-[#6b7b8c]">Upload RC</Label>
          <div className="flex items-center gap-2">
            <Input
              type="file"
              onChange={(e) => handleFileUpload("rcUpload", e.target.files?.[0] || null)}
              accept=".pdf,.jpg,.jpeg,.png"
              className="flex-1"
            />
            <Upload className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#254280]">
            Request for Quotation
          </DialogTitle>
          <p className="text-[#6b7b8c] text-sm">
            Fill in the client details below to request insurance quotations.
          </p>
        </DialogHeader>

        <div className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-sm text-[#6b7b8c]">Client Name *</Label>
              <Input
                value={form.clientName}
                onChange={(e) => handleChange("clientName", e.target.value)}
                placeholder="Enter client name"
              />
            </div>
            <div>
              <Label className="text-sm text-[#6b7b8c]">Mobile No. *</Label>
              <Input
                value={form.mobileNo}
                onChange={(e) => handleChange("mobileNo", e.target.value)}
                placeholder="Enter mobile number"
                type="tel"
              />
            </div>
          </div>

          {/* Insurance Type */}
          <div>
            <Label className="text-sm text-[#6b7b8c]">Insurance Type *</Label>
            <Select
              value={form.insuranceType}
              onValueChange={(val) => {
                handleChange("insuranceType", val);
                // Reset related fields when insurance type changes
                handleChange("insuranceProducts", []);
                handleChange("coverageType", "");
                handleChange("familyMembers", []);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Motor">Motor</SelectItem>
                <SelectItem value="Health">Health</SelectItem>
                <SelectItem value="Life">Life</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Dynamic Fields based on Insurance Type */}
          {renderHealthFields()}
          {renderMotorFields()}

          {/* Insurance Products */}
          {form.insuranceType && (
            <div>
              <Label className="text-sm text-[#6b7b8c]">
                Insurance Products (Multiple Selection Allowed) *
              </Label>
              <div className="max-h-48 overflow-y-auto border rounded-lg p-3 space-y-2 mt-1">
                {insuranceProducts[form.insuranceType as keyof typeof insuranceProducts]?.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={product}
                      checked={form.insuranceProducts.includes(product)}
                      onChange={() => handleInsuranceProductToggle(product)}
                      className="h-4 w-4 text-[#254280] focus:ring-[#254280] border-gray-300 rounded"
                    />
                    <label htmlFor={product} className="text-sm font-normal cursor-pointer flex-1">
                      {product}
                    </label>
                  </div>
                ))}
              </div>
              {form.insuranceProducts.length > 0 && (
                <p className="text-xs text-[#6b7b8c] mt-2">
                  Selected: {form.insuranceProducts.length} product(s)
                </p>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!form.clientName || !form.mobileNo || !form.insuranceType || form.insuranceProducts.length === 0}
            className="bg-[#254280] hover:bg-[#1e3666] text-white disabled:opacity-50"
          >
            Request for Quotation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}