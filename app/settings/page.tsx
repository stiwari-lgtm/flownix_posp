"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Shield, Palette, Globe, Save } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    policyReminders: true,
    commissionAlerts: true,
    marketingEmails: false,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: "30",
    passwordExpiry: "90",

    // Appearance Settings
    theme: "light",
    language: "en",
    dateFormat: "dd/mm/yyyy",
    currency: "INR",

    // Business Settings
    defaultPolicyTerm: "1",
    autoSaveInterval: "5",
    reminderDays: "7",
  })

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Save settings logic
    console.log("Settings saved:", settings)
  }

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Settings</h1>
            <p className="text-[#6b7b8c] mt-1">Manage your application preferences and configurations</p>
          </div>
          <Button onClick={handleSave} className="bg-[#254280] hover:bg-[#1e3660] w-full sm:w-auto">
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="space-y-6">
          {/* Notification Settings */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Bell className="h-5 w-5 text-[#254280]" />
                Notification Settings
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Configure how you receive notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <Label className="text-sm sm:text-base">Email Notifications</Label>
                    <p className="text-xs sm:text-sm text-[#6b7b8c]">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
                    className="flex-shrink-0"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <Label className="text-sm sm:text-base">Push Notifications</Label>
                    <p className="text-xs sm:text-sm text-[#6b7b8c]">Receive push notifications in browser</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => handleSettingChange("pushNotifications", checked)}
                    className="flex-shrink-0"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <Label className="text-sm sm:text-base">Policy Reminders</Label>
                    <p className="text-xs sm:text-sm text-[#6b7b8c]">Get reminders for policy renewals and expirations</p>
                  </div>
                  <Switch
                    checked={settings.policyReminders}
                    onCheckedChange={(checked) => handleSettingChange("policyReminders", checked)}
                    className="flex-shrink-0"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <Label className="text-sm sm:text-base">Commission Alerts</Label>
                    <p className="text-xs sm:text-sm text-[#6b7b8c]">Notifications when commissions are credited</p>
                  </div>
                  <Switch
                    checked={settings.commissionAlerts}
                    onCheckedChange={(checked) => handleSettingChange("commissionAlerts", checked)}
                    className="flex-shrink-0"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <Label className="text-sm sm:text-base">Marketing Emails</Label>
                    <p className="text-xs sm:text-sm text-[#6b7b8c]">Receive promotional and marketing emails</p>
                  </div>
                  <Switch
                    checked={settings.marketingEmails}
                    onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
                    className="flex-shrink-0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Shield className="h-5 w-5 text-[#254280]" />
                Security Settings
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Manage your account security and privacy</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-0.5 min-w-0 flex-1">
                  <Label className="text-sm sm:text-base">Two-Factor Authentication</Label>
                  <p className="text-xs sm:text-sm text-[#6b7b8c]">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) => handleSettingChange("twoFactorAuth", checked)}
                  className="flex-shrink-0"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout" className="text-sm sm:text-base">Session Timeout (minutes)</Label>
                  <Select
                    value={settings.sessionTimeout}
                    onValueChange={(value) => handleSettingChange("sessionTimeout", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passwordExpiry" className="text-sm sm:text-base">Password Expiry (days)</Label>
                  <Select
                    value={settings.passwordExpiry}
                    onValueChange={(value) => handleSettingChange("passwordExpiry", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                      <SelectItem value="90">90 days</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Palette className="h-5 w-5 text-[#254280]" />
                Appearance Settings
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Customize the look and feel of your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="text-sm sm:text-base">Theme</Label>
                  <Select value={settings.theme} onValueChange={(value) => handleSettingChange("theme", value)}>
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language" className="text-sm sm:text-base">Language</Label>
                  <Select value={settings.language} onValueChange={(value) => handleSettingChange("language", value)}>
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="mr">Marathi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateFormat" className="text-sm sm:text-base">Date Format</Label>
                  <Select
                    value={settings.dateFormat}
                    onValueChange={(value) => handleSettingChange("dateFormat", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-sm sm:text-base">Currency</Label>
                  <Select value={settings.currency} onValueChange={(value) => handleSettingChange("currency", value)}>
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">INR (₹)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Settings */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Globe className="h-5 w-5 text-[#254280]" />
                Business Settings
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">Configure default values and business preferences</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultPolicyTerm" className="text-sm sm:text-base">Default Policy Term (years)</Label>
                  <Select
                    value={settings.defaultPolicyTerm}
                    onValueChange={(value) => handleSettingChange("defaultPolicyTerm", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Year</SelectItem>
                      <SelectItem value="2">2 Years</SelectItem>
                      <SelectItem value="3">3 Years</SelectItem>
                      <SelectItem value="5">5 Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="autoSaveInterval" className="text-sm sm:text-base">Auto-save Interval (minutes)</Label>
                  <Select
                    value={settings.autoSaveInterval}
                    onValueChange={(value) => handleSettingChange("autoSaveInterval", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 minute</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                  <Label htmlFor="reminderDays" className="text-sm sm:text-base">Renewal Reminder (days before)</Label>
                  <Select
                    value={settings.reminderDays}
                    onValueChange={(value) => handleSettingChange("reminderDays", value)}
                  >
                    <SelectTrigger className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}