"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, Check, X, AlertCircle, CheckCircle, Clock, DollarSign } from "lucide-react"

interface NotificationsPanelProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const notifications = [
  {
    id: 1,
    type: "policy",
    title: "Policy Renewal Due",
    message: "Motor insurance policy for Rajesh Kumar expires in 3 days",
    time: "2 hours ago",
    read: false,
    icon: AlertCircle,
    color: "text-orange-500",
  },
  {
    id: 2,
    type: "commission",
    title: "Commission Credited",
    message: "₹2,500 commission credited for Health Plus policy",
    time: "4 hours ago",
    read: false,
    icon: DollarSign,
    color: "text-green-500",
  },
  {
    id: 3,
    type: "policy",
    title: "New Policy Approved",
    message: "Term Life policy for Priya Sharma has been approved",
    time: "1 day ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    id: 4,
    type: "reminder",
    title: "Follow-up Reminder",
    message: "Follow up with Amit Singh regarding health insurance quote",
    time: "2 days ago",
    read: true,
    icon: Clock,
    color: "text-blue-500",
  },
  {
    id: 5,
    type: "policy",
    title: "Document Required",
    message: "Additional documents needed for Sunita Patel's motor policy",
    time: "3 days ago",
    read: true,
    icon: AlertCircle,
    color: "text-orange-500",
  },
]

export function NotificationsPanel({ open, onOpenChange }: NotificationsPanelProps) {
  const [notificationList, setNotificationList] = useState(notifications)

  const markAsRead = (id: number) => {
    setNotificationList((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const removeNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((notif) => notif.id !== id))
  }

  const unreadCount = notificationList.filter((n) => !n.read).length

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-[#254280]" />
              Notifications
              {unreadCount > 0 && (
                <Badge className="bg-[#eb5757] text-white rounded-full px-2 py-1 text-xs">{unreadCount}</Badge>
              )}
            </div>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-[#254280] hover:bg-gray-100">
                Mark all read
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {notificationList.length === 0 ? (
              <div className="text-center py-8 text-[#6b7b8c]">
                <Bell className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No notifications</p>
              </div>
            ) : (
              notificationList.map((notification) => {
                const IconComponent = notification.icon
                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors ${
                      notification.read ? "bg-white" : "bg-blue-50 border-blue-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-full bg-gray-100 ${notification.color}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                            <p className="text-sm text-[#6b7b8c] mt-1">{notification.message}</p>
                            <p className="text-xs text-[#6b7b8c] mt-2">{notification.time}</p>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-6 w-6 p-0 hover:bg-gray-100"
                              >
                                <Check className="h-3 w-3" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeNotification(notification.id)}
                              className="h-6 w-6 p-0 hover:bg-gray-100 text-gray-400 hover:text-gray-600"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
