"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-6">
              Contact
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Intră în Legătură
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Suntem aici pentru tine! Programează o consultație sau contactează-ne pentru orice întrebare despre
              serviciile noastre.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații Contact</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Adresă",
                      info: "Radu Beller nr. 31",
                      subinfo: "Sector 1, București",
                    },
                    {
                      icon: Phone,
                      title: "Telefon",
                      info: "+40 123 456 789",
                      subinfo: "Luni - Vineri: 9:00 - 18:00",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      info: "info@skinlips.ro",
                      subinfo: "Răspundem în maxim 24h",
                    },
                  ].map((contact, index) => (
                    <div key={contact.title} className="flex items-start group">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{contact.title}</p>
                        <p className="text-gray-700 font-medium">{contact.info}</p>
                        <p className="text-sm text-gray-600">{contact.subinfo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Program */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-red-500 mr-2" />
                  Program de Lucru
                </h3>
                <div className="space-y-3">
                  {[
                    { day: "Luni - Vineri", hours: "09:00 - 18:00" },
                    { day: "Sâmbătă", hours: "10:00 - 16:00" },
                    { day: "Duminică", hours: "Închis" },
                  ].map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-red-600 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl h-64 flex items-center justify-center shadow-xl border border-red-200 hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold">Hartă Interactivă</p>
                  <p className="text-sm text-gray-600">Radu Beller nr. 31, București</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-pink-500"></div>
                  <CardTitle className="text-3xl bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent">
                    Programează o Consultație
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Completează formularul și te vom contacta pentru a stabili cea mai potrivită programare
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prenume *</label>
                      <Input
                        placeholder="Prenumele tău"
                        className="border-red-200 focus:border-red-500 focus:ring-red-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nume *</label>
                      <Input
                        placeholder="Numele tău"
                        className="border-red-200 focus:border-red-500 focus:ring-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="email@exemplu.ro"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                    <Input
                      type="tel"
                      placeholder="+40 123 456 789"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Serviciu de Interes</label>
                    <select className="w-full p-3 border border-red-200 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white">
                      <option value="">Selectează un serviciu</option>
                      <option value="consultatie">Consultație Dermatologică</option>
                      <option value="botox">Tratament Botox</option>
                      <option value="acid-hialuronic">Fillere cu Acid Hialuronic</option>
                      <option value="mezoterapie">Mezoterapie</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data Preferată</label>
                    <Input
                      type="date"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesaj</label>
                    <Textarea
                      placeholder="Spune-ne despre obiectivele tale de îngrijire a pielii sau orice întrebări ai..."
                      rows={4}
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">
                      <strong>Notă:</strong> Consultația inițială este gratuită și include o evaluare completă a pielii
                      și recomandări personalizate.
                    </p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group py-3">
                    <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Trimite Cererea de Programare
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Prin trimiterea formularului, ești de acord cu{" "}
                    <a href="/privacy" className="text-red-600 hover:underline">
                      Politica de Confidențialitate
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modalități Rapide de Contact</h2>
            <p className="text-gray-600">Alege modalitatea care ți se potrivește cel mai bine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Sună Acum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Vorbește direct cu echipa noastră pentru programări urgente</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  +40 123 456 789
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Trimite Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Scrie-ne pentru întrebări detaliate sau informații suplimentare</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  info@skinlips.ro
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Vizitează Clinica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Vino direct la clinică pentru o consultație walk-in</p>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
                >
                  Radu Beller nr. 31
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
