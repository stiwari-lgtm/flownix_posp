"use client"

import React from "react"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowLeft, ArrowRight, User, FileText, Upload, CheckCircle, Info, X, Plus, DollarSign } from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, title: "Customer Info", description: "Basic customer details", icon: User },
  { id: 2, title: "Policy Details", description: "Policy type and coverage", icon: FileText },
  { id: 3, title: "Premium & Terms", description: "Pricing and conditions", icon: DollarSign },
  { id: 4, title: "Documents", description: "Upload required documents", icon: Upload },
  { id: 5, title: "Review", description: "Review and submit", icon: CheckCircle },
]

interface FormData {
  // Customer Info
  customerType: string
  customerName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string

  // Policy Details
  policyType: string
  insurer: string
  product: string
  coverageAmount: string

  // Premium & Terms
  premium: string
  paymentFrequency: string
  policyTerm: string
  startDate: string

  // Documents
  documents: File[]
}

export default function NewPolicyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    customerType: "",
    customerName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    policyType: "",
    insurer: "",
    product: "",
    coverageAmount: "",
    premium: "",
    paymentFrequency: "",
    policyTerm: "",
    startDate: "",
    documents: [],
  })

  const [dragActive, setDragActive] = useState(false)

  const progress = (currentStep / steps.length) * 100

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files)
      updateFormData("documents", [...formData.documents, ...newFiles])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      updateFormData("documents", [...formData.documents, ...newFiles])
    }
  }

  const removeDocument = (index: number) => {
    const newDocs = formData.documents.filter((_, i) => i !== index)
    updateFormData("documents", newDocs)
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/policies">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Policies
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">New Policy Application</h1>
            <p className="text-muted-foreground mt-1">Create a new insurance policy for your client</p>
          </div>
        </div>

        {/* Progress Bar */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Step {currentStep} of {steps.length}
                </span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />

              {/* Step Indicators */}
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const StepIcon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id

                  return (
                    <div key={step.id} className="flex flex-col items-center space-y-2">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                          isCompleted
                            ? "bg-primary border-primary text-primary-foreground"
                            : isActive
                              ? "border-primary text-primary bg-primary/10"
                              : "border-muted-foreground text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? <CheckCircle className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                      </div>
                      <div className="text-center">
                        <p className={`text-xs font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Steps */}
        <TooltipProvider>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription>{steps[currentStep - 1].description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Customer Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="customerType" className="flex items-center gap-2">
                        Customer Type
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Select whether this is an individual or corporate policy</p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <Select
                        value={formData.customerType}
                        onValueChange={(value) => updateFormData("customerType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select customer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="customerName">
                        {formData.customerType === "corporate" ? "Company Name" : "Full Name"}
                      </Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => updateFormData("customerName", e.target.value)}
                        placeholder={formData.customerType === "corporate" ? "Enter company name" : "Enter full name"}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="Enter email address"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="Enter phone number"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      placeholder="Enter complete address"
                      className="min-h-[100px]"
                    />
                  </div>

                  {formData.customerType === "individual" && (
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                        Date of Birth
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Required for age-based premium calculations</p>
                          </TooltipContent>
                        </Tooltip>
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Policy Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="policyType">Policy Type</Label>
                      <Select
                        value={formData.policyType}
                        onValueChange={(value) => updateFormData("policyType", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select policy type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="motor">Motor Insurance</SelectItem>
                          <SelectItem value="health">Health Insurance</SelectItem>
                          <SelectItem value="life">Life Insurance</SelectItem>
                          <SelectItem value="commercial">Commercial Insurance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insurer">Insurance Company</Label>
                      <Select value={formData.insurer} onValueChange={(value) => updateFormData("insurer", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select insurer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hdfc-ergo">HDFC ERGO</SelectItem>
                          <SelectItem value="icici-lombard">ICICI Lombard</SelectItem>
                          <SelectItem value="lic">LIC of India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product" className="flex items-center gap-2">
                      Product
                      <Tooltip>
                        <TooltipTrigger>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Specific insurance product offered by the selected insurer</p>
                        </TooltipContent>
                      </Tooltip>
                    </Label>
                    <Select value={formData.product} onValueChange={(value) => updateFormData("product", value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comprehensive-motor">Comprehensive Motor Insurance</SelectItem>
                        <SelectItem value="health-advantage">Health Advantage Plus</SelectItem>
                        <SelectItem value="term-life">Term Life Protection</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverageAmount">Coverage Amount</Label>
                    <Input
                      id="coverageAmount"
                      value={formData.coverageAmount}
                      onChange={(e) => updateFormData("coverageAmount", e.target.value)}
                      placeholder="Enter coverage amount (₹)"
                      className="h-12"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Premium & Terms */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="premium">Annual Premium</Label>
                      <Input
                        id="premium"
                        value={formData.premium}
                        onChange={(e) => updateFormData("premium", e.target.value)}
                        placeholder="Enter annual premium (₹)"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="paymentFrequency">Payment Frequency</Label>
                      <Select
                        value={formData.paymentFrequency}
                        onValueChange={(value) => updateFormData("paymentFrequency", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select payment frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="annual">Annual</SelectItem>
                          <SelectItem value="semi-annual">Semi-Annual</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="policyTerm">Policy Term (Years)</Label>
                      <Select
                        value={formData.policyTerm}
                        onValueChange={(value) => updateFormData("policyTerm", value)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select policy term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="2">2 Years</SelectItem>
                          <SelectItem value="3">3 Years</SelectItem>
                          <SelectItem value="5">5 Years</SelectItem>
                          <SelectItem value="10">10 Years</SelectItem>
                          <SelectItem value="20">20 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Policy Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => updateFormData("startDate", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Documents Upload */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
                    <p className="text-muted-foreground mb-4">Drag and drop files here, or click to select files</p>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileInput}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="cursor-pointer bg-transparent">
                        <Plus className="mr-2 h-4 w-4" />
                        Select Files
                      </Button>
                    </label>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: PDF, JPG, PNG, DOC, DOCX (Max 10MB each)
                    </p>
                  </div>

                  {/* Uploaded Documents */}
                  {formData.documents.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium">Uploaded Documents ({formData.documents.length})</h4>
                      <div className="space-y-2">
                        {formData.documents.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-primary" />
                              <div>
                                <p className="font-medium">{file.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeDocument(index)}
                              className="text-destructive hover:text-destructive"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Customer Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge variant="outline">{formData.customerType}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{formData.customerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span>{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Phone:</span>
                          <span>{formData.phone}</span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Policy Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge>{formData.policyType}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Insurer:</span>
                          <span className="font-medium">{formData.insurer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Product:</span>
                          <span>{formData.product}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Coverage:</span>
                          <span className="font-medium">₹{formData.coverageAmount}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Premium & Terms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">₹{formData.premium}</p>
                          <p className="text-sm text-muted-foreground">Annual Premium</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-medium">{formData.paymentFrequency}</p>
                          <p className="text-sm text-muted-foreground">Payment Frequency</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-medium">{formData.policyTerm} Years</p>
                          <p className="text-sm text-muted-foreground">Policy Term</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-medium">{formData.startDate}</p>
                          <p className="text-sm text-muted-foreground">Start Date</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {formData.documents.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Documents ({formData.documents.length})</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {formData.documents.map((file, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                              <FileText className="h-4 w-4 text-primary" />
                              <span className="text-sm">{file.name}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <Separator />
              <div className="flex items-center justify-between pt-4">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="bg-transparent">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="bg-transparent">
                    Save Draft
                  </Button>
                  {currentStep === steps.length ? (
                    <Button className="bg-primary hover:bg-primary/90">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Submit Policy
                    </Button>
                  ) : (
                    <Button onClick={nextStep} className="bg-primary hover:bg-primary/90">
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TooltipProvider>
      </div>
    </DashboardLayout>
  )
}
