"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, MapPin, Calendar, Shield, Edit, Save, X } from "lucide-react"

function formatDate(dateInput: string | Date | undefined | null) {
  if (!dateInput) return "-"
  const d = typeof dateInput === "string" ? new Date(dateInput) : new Date(dateInput)
  if (Number.isNaN(d.getTime())) return "-"
  const day = `${d.getDate()}`.padStart(2, "0")
  const month = `${d.getMonth() + 1}`.padStart(2, "0")
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "John Patel",
    email: "john.patel@email.com",
    phone: "+91 98765 43210",
    address: "123 MG Road, Bangalore, Karnataka 560001",
    dateOfBirth: "1985-06-15",
    pospId: "POSP-12345",
    licenseNumber: "POSP/2023/12345",
    joiningDate: "2023-01-15",
    specialization: ["Motor", "Health", "Life"],
    bio: "Experienced insurance advisor with 5+ years in the industry, specializing in motor and health insurance products.",
  })

  const [editData, setEditData] = useState(() => ({ ...profileData }))

  const handleEdit = () => {
    setIsEditing(true)
    setEditData({ ...profileData })
  }

  const handleSave = () => {
    setProfileData({ ...editData })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({ ...profileData })
    setIsEditing(false)
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700">My Profile</h1>
            <p className="text-[#6b7b8c] mt-1">Manage your personal information and preferences</p>
          </div>

          {!isEditing ? (
            <Button onClick={handleEdit} className="bg-[#254280] hover:bg-[#1e3660] w-full lg:w-auto">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-2">
              <Button variant="outline" onClick={handleCancel} className="w-full lg:w-auto">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleSave} className="bg-[#254280] hover:bg-[#1e3660] w-full lg:w-auto">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <Card className="md:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/professional-person.png" />
                  <AvatarFallback className="bg-[#254280] text-white text-xl">JP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{profileData.name}</h3>
                  <p className="text-[#6b7b8c]">POSP Agent</p>
                  <Badge className="mt-2 bg-[#2ecc71] text-white">Active</Badge>
                </div>

                <Separator />

                <div className="w-full space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="h-4 w-4 text-[#254280]" />
                    <span className="text-[#6b7b8c]">POSP ID:</span>
                    <span className="font-medium">{profileData.pospId}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-[#254280]" />
                    <span className="text-[#6b7b8c]">Joined:</span>
                    <span className="font-medium">{formatDate(profileData.joiningDate)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Details */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#254280]" />
                Personal Information
              </CardTitle>
              <CardDescription>Your personal details and contact information</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <User className="h-4 w-4 text-[#6b7b8c]" />
                      <span>{profileData.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Mail className="h-4 w-4 text-[#6b7b8c]" />
                      <span>{profileData.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Phone className="h-4 w-4 text-[#6b7b8c]" />
                      <span>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  {isEditing ? (
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={editData.dateOfBirth}
                      onChange={(e) => setEditData({ ...editData, dateOfBirth: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                      <Calendar className="h-4 w-4 text-[#6b7b8c]" />
                      <span>{formatDate(profileData.dateOfBirth)}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={editData.address}
                    onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    className="min-h-[80px]"
                  />
                ) : (
                  <div className="flex items-start gap-2 p-2 bg-gray-50 rounded-md">
                    <MapPin className="h-4 w-4 text-[#6b7b8c] mt-0.5" />
                    <span>{profileData.address}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                {isEditing ? (
                  <Textarea
                    id="bio"
                    value={editData.bio}
                    onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                    className="min-h-[100px]"
                    placeholder="Tell us about yourself..."
                  />
                ) : (
                  <div className="p-2 bg-gray-50 rounded-md">
                    <span>{profileData.bio}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#254280]" />
                Professional Information
              </CardTitle>
              <CardDescription>Your POSP credentials and specializations</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>License Number</Label>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <span className="font-mono text-sm">{profileData.licenseNumber}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Joining Date</Label>
                  <div className="p-3 bg-gray-50 rounded-md">
                    <span>{formatDate(profileData.joiningDate)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Specializations</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileData.specialization.map((spec) => (
                      <Badge key={spec} variant="outline" className="bg-[#254280] text-white border-[#254280]">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
