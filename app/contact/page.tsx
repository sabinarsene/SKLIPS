"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Car,
  Wifi,
  CreditCard,
  Accessibility,
  Shield,
  Star,
  Navigation,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    // Check if clinic is open
    const now = new Date()
    const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours()
    const minute = now.getMinutes()
    const currentMinutes = hour * 60 + minute

    // Program: Luni-Vineri 9:00-18:00, Sâmbătă 9:00-14:00, Duminică închis
    if (day === 0) {
      // Sunday
      setIsOpen(false)
    } else if (day >= 1 && day <= 5) {
      // Monday to Friday
      setIsOpen(currentMinutes >= 540 && currentMinutes < 1080) // 9:00-18:00
    } else if (day === 6) {
      // Saturday
      setIsOpen(currentMinutes >= 540 && currentMinutes < 840) // 9:00-14:00
    }

    return () => clearInterval(timer)
  }, [])

  const workingHours = [
    { day: "Luni", hours: "09:00 - 18:00" },
    { day: "Marți", hours: "09:00 - 18:00" },
    { day: "Miercuri", hours: "09:00 - 18:00" },
    { day: "Joi", hours: "09:00 - 18:00" },
    { day: "Vineri", hours: "09:00 - 18:00" },
    { day: "Sâmbătă", hours: "09:00 - 14:00" },
    { day: "Duminică", hours: "Închis" },
  ]

  const facilities = [
    { icon: Car, title: "Parcare Gratuită", description: "Locuri de parcare disponibile în fața clinicii" },
    { icon: Wifi, title: "WiFi Gratuit", description: "Internet wireless pentru pacienți" },
    { icon: CreditCard, title: "Plăți Card", description: "Acceptăm toate cardurile bancare" },
    {
      icon: Accessibility,
      title: "Acces Persoane cu Dizabilități",
      description: "Facilități adaptate pentru toate persoanele",
    },
    { icon: Shield, title: "Sterilizare Completă", description: "Standarde înalte de igienă și siguranță" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-rose-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Suntem aici să răspundem la toate întrebările tale și să te ajutăm să obții pielea pe care o meriți.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programare">
              <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Programează o Consultație
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Sună Acum
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-red-600" />
                  Informații de Contact
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefon</h3>
                      <a
                        href="tel:+40721234567"
                        className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
                      >
                        +40 721 234 567
                      </a>
                      <p className="text-sm text-gray-600">Disponibil în programul clinicii</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:contact@skinlips.ro"
                        className="text-red-600 hover:text-red-700 transition-colors text-lg font-medium"
                      >
                        contact@skinlips.ro
                      </a>
                      <p className="text-sm text-gray-600">Răspundem în maxim 24h</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 group">
                    <div className="bg-red-100 p-3 rounded-full group-hover:bg-red-200 transition-colors">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Adresă</h3>
                      <p className="text-gray-700 text-lg">
                        Strada Frumuseții, Nr. 123
                        <br />
                        Sector 1, București 010101
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-red-600 hover:text-red-700"
                        onClick={() =>
                          window.open("https://maps.google.com/?q=Strada+Frumuseții+123+București", "_blank")
                        }
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Deschide în Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-red-600" />
                  Program de Lucru
                  <span
                    className={`ml-auto px-3 py-1 rounded-full text-sm font-medium ${
                      isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isOpen ? "Deschis Acum" : "Închis Acum"}
                  </span>
                </h2>

                <div className="space-y-3">
                  {workingHours.map((schedule, index) => {
                    const today = new Date().getDay()
                    const dayIndex = index === 6 ? 0 : index + 1 // Adjust for Sunday being 0
                    const isToday = today === dayIndex

                    return (
                      <div
                        key={schedule.day}
                        className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                          isToday ? "bg-red-50 border border-red-200" : "hover:bg-gray-50"
                        }`}
                      >
                        <span className={`font-medium ${isToday ? "text-red-600" : "text-gray-700"}`}>
                          {schedule.day}
                          {isToday && <span className="ml-2 text-xs">(Astăzi)</span>}
                        </span>
                        <span
                          className={`${
                            schedule.hours === "Închis"
                              ? "text-red-600"
                              : isToday
                                ? "text-red-600 font-medium"
                                : "text-gray-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Urgențe:</strong> Pentru situații urgente în afara programului, vă rugăm să ne contactați la
                    numărul de telefon. Vom răspunde în cel mai scurt timp posibil.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-red-600" />
                  Facilități și Servicii
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      <div className="bg-red-100 p-2 rounded-lg">
                        <facility.icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 text-sm">{facility.title}</h3>
                        <p className="text-xs text-gray-600 mt-1">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Quick Actions */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-96 bg-gray-200 rounded-t-lg relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444444444444!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-lg"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-medium text-gray-900">📍 SkinLips Clinic</p>
                    <p className="text-xs text-gray-600">Strada Frumuseții 123</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cum să ne găsești</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      🚗 <strong>Cu mașina:</strong> Parcare gratuită disponibilă în fața clinicii
                    </p>
                    <p>
                      🚇 <strong>Cu metroul:</strong> Stația Piața Victoriei (5 min pe jos)
                    </p>
                    <p>
                      🚌 <strong>Cu autobuzul:</strong> Stațiile 123, 124, 125 (2 min pe jos)
                    </p>
                  </div>
                  <Button
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open("https://maps.google.com/?q=Strada+Frumuseții+123+București", "_blank")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Navigare GPS
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Methods */}
            <Card className="border-red-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Modalități Rapide de Contact</h2>

                <div className="space-y-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white justify-start text-left h-auto py-4"
                    onClick={() =>
                      window.open("https://wa.me/40721234567?text=Bună! Aș dori să programez o consultație.", "_blank")
                    }
                  >
                    <div className="flex items-center">
                      <div className="bg-white/20 p-2 rounded-lg mr-4">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-sm opacity-90">Mesaj rapid pentru programări</div>
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white justify-start text-left h-auto py-4 bg-transparent"
                    onClick={() => (window.location.href = "tel:+40721234567")}
                  >
                    <div className="flex items-center">
                      <div className="bg-red-100 p-2 rounded-lg mr-4">
                        <Phone className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Apel Telefonic</div>
                        <div className="text-sm opacity-70">+40 721 234 567</div>
                      </div>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white justify-start text-left h-auto py-4 bg-transparent"
                    onClick={() => (window.location.href = "mailto:contact@skinlips.ro?subject=Programare Consultație")}
                  >
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm opacity-70">contact@skinlips.ro</div>
                      </div>
                    </div>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Timp de răspuns:</strong> Telefon (imediat) • WhatsApp (5 min) • Email (24h)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
