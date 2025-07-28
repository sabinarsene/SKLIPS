"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, CheckCircle, ArrowLeft, ArrowRight, Phone, Mail, AlertCircle } from "lucide-react"

interface AppointmentData {
  service: string
  date: string
  time: string
  personalInfo: {
    firstName: string
    lastName: string
    phone: string
    email: string
    age: string
    concerns: string
    previousTreatments: string
  }
}

export default function ProgramarePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    service: "",
    date: "",
    time: "",
    personalInfo: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      age: "",
      concerns: "",
      previousTreatments: "",
    },
  })

  const services = [
    {
      id: "consultatie-dermatologica",
      name: "Consultație Dermatologică",
      duration: "45 min",
      price: "200 RON",
      description: "Evaluare completă a pielii și recomandări personalizate",
    },
    {
      id: "tratament-acnee",
      name: "Tratament Acnee",
      duration: "60 min",
      price: "350 RON",
      description: "Tratament specializat pentru acnee și cicatrici",
    },
    {
      id: "rejuvenare-faciala",
      name: "Rejuvenare Facială",
      duration: "90 min",
      price: "500 RON",
      description: "Proceduri anti-aging și întinerire",
    },
    {
      id: "tratament-pigmentare",
      name: "Tratament Pigmentare",
      duration: "75 min",
      price: "450 RON",
      description: "Corectarea petelor și hiperpigmentării",
    },
    {
      id: "ingrijire-buze",
      name: "Îngrijire Buze",
      duration: "30 min",
      price: "250 RON",
      description: "Tratamente specializate pentru buze",
    },
    {
      id: "consultatie-online",
      name: "Consultație Online",
      duration: "30 min",
      price: "150 RON",
      description: "Consultație video pentru evaluare inițială",
    },
  ]

  // Generate next 30 days (excluding Sundays)
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Skip Sundays (0) and some random "busy" days
      if (date.getDay() !== 0 && Math.random() > 0.2) {
        dates.push({
          date: date.toISOString().split("T")[0],
          display: date.toLocaleDateString("ro-RO", {
            weekday: "short",
            day: "numeric",
            month: "short",
          }),
          available: Math.random() > 0.3, // 70% chance of being available
        })
      }
    }

    return dates.slice(0, 20) // Show only first 20 available dates
  }

  const availableDates = generateAvailableDates()

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ]

  const handleServiceSelect = (serviceId: string) => {
    setAppointmentData((prev) => ({ ...prev, service: serviceId }))
  }

  const handleDateSelect = (date: string) => {
    setAppointmentData((prev) => ({ ...prev, date }))
  }

  const handleTimeSelect = (time: string) => {
    setAppointmentData((prev) => ({ ...prev, time }))
  }

  const handlePersonalInfoChange = (field: string, value: string) => {
    setAppointmentData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1:
        return appointmentData.service !== ""
      case 2:
        return appointmentData.date !== ""
      case 3:
        return appointmentData.time !== ""
      case 4:
        return (
          appointmentData.personalInfo.firstName !== "" &&
          appointmentData.personalInfo.lastName !== "" &&
          appointmentData.personalInfo.phone !== "" &&
          appointmentData.personalInfo.email !== ""
        )
      default:
        return false
    }
  }

  const selectedService = services.find((s) => s.id === appointmentData.service)
  const selectedDate = availableDates.find((d) => d.date === appointmentData.date)

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Appointment Data:", appointmentData)
    alert("Programarea a fost trimisă cu succes! Veți fi contactat în curând pentru confirmare.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Programează o Consultație
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Completează pașii de mai jos pentru a programa consultația ta personalizată
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`h-1 w-full mx-4 transition-all duration-300 ${
                      step < currentStep ? "bg-gradient-to-r from-red-600 to-pink-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Serviciu</span>
            <span>Data</span>
            <span>Ora</span>
            <span>Detalii</span>
          </div>
        </div>

        {/* Step Content */}
        <Card className="border-red-100 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-100">
            <CardTitle className="flex items-center text-2xl">
              {currentStep === 1 && (
                <>
                  <Calendar className="w-6 h-6 mr-3 text-red-600" />
                  Alege Serviciul
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Calendar className="w-6 h-6 mr-3 text-red-600" />
                  Selectează Data
                </>
              )}
              {currentStep === 3 && (
                <>
                  <Clock className="w-6 h-6 mr-3 text-red-600" />
                  Alege Ora
                </>
              )}
              {currentStep === 4 && (
                <>
                  <User className="w-6 h-6 mr-3 text-red-600" />
                  Informații Personale
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">Selectează serviciul pentru care dorești să te programezi:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        appointmentData.service === service.id
                          ? "border-red-500 bg-red-50 shadow-lg"
                          : "border-gray-200 hover:border-red-300"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg text-gray-900">{service.name}</h3>
                        <span className="text-red-600 font-bold text-lg">{service.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <p className="text-blue-800 text-sm">
                      <strong>Serviciu selectat:</strong> {selectedService?.name} ({selectedService?.duration})
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">Alege data dorită pentru programare:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {availableDates.map((dateOption) => (
                    <button
                      key={dateOption.date}
                      onClick={() => dateOption.available && handleDateSelect(dateOption.date)}
                      disabled={!dateOption.available}
                      className={`p-4 rounded-lg border-2 text-center transition-all duration-300 ${
                        appointmentData.date === dateOption.date
                          ? "border-red-500 bg-red-50 shadow-lg"
                          : dateOption.available
                            ? "border-gray-200 hover:border-red-300 hover:shadow-md"
                            : "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <div className="text-sm font-medium">{dateOption.display}</div>
                      {!dateOption.available && <div className="text-xs text-red-500 mt-1">Ocupat</div>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                      <p className="text-blue-800 text-sm">
                        <strong>Data selectată:</strong> {selectedDate?.display}
                      </p>
                    </div>
                    <p className="text-blue-800 text-sm">
                      <strong>Serviciu:</strong> {selectedService?.name}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">Selectează ora dorită:</p>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {timeSlots.map((time) => {
                    const isAvailable = Math.random() > 0.3 // 70% chance of being available
                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable && handleTimeSelect(time)}
                        disabled={!isAvailable}
                        className={`p-3 rounded-lg border-2 text-center transition-all duration-300 ${
                          appointmentData.time === time
                            ? "border-red-500 bg-red-50 shadow-lg"
                            : isAvailable
                              ? "border-gray-200 hover:border-red-300 hover:shadow-md"
                              : "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <div className="font-medium">{time}</div>
                        {!isAvailable && <div className="text-xs text-red-500 mt-1">Ocupat</div>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Personal Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">Rezumat Programare</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Serviciu:</strong>
                      <br />
                      {selectedService?.name}
                    </div>
                    <div>
                      <strong>Data:</strong>
                      <br />
                      {selectedDate?.display}
                    </div>
                    <div>
                      <strong>Ora:</strong>
                      <br />
                      {appointmentData.time}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prenume *</label>
                    <Input
                      value={appointmentData.personalInfo.firstName}
                      onChange={(e) => handlePersonalInfoChange("firstName", e.target.value)}
                      placeholder="Introduceți prenumele"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nume *</label>
                    <Input
                      value={appointmentData.personalInfo.lastName}
                      onChange={(e) => handlePersonalInfoChange("lastName", e.target.value)}
                      placeholder="Introduceți numele"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                    <Input
                      type="tel"
                      value={appointmentData.personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange("phone", e.target.value)}
                      placeholder="+40 7XX XXX XXX"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={appointmentData.personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange("email", e.target.value)}
                      placeholder="exemplu@email.com"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vârsta</label>
                    <Input
                      type="number"
                      value={appointmentData.personalInfo.age}
                      onChange={(e) => handlePersonalInfoChange("age", e.target.value)}
                      placeholder="25"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Problemele pentru care vă programați
                    </label>
                    <Textarea
                      value={appointmentData.personalInfo.concerns}
                      onChange={(e) => handlePersonalInfoChange("concerns", e.target.value)}
                      placeholder="Descrieți pe scurt problemele de piele pentru care doriți consultația..."
                      rows={3}
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tratamente anterioare (opțional)
                    </label>
                    <Textarea
                      value={appointmentData.personalInfo.previousTreatments}
                      onChange={(e) => handlePersonalInfoChange("previousTreatments", e.target.value)}
                      placeholder="Menționați tratamentele dermatologice anterioare, medicamentele folosite, etc."
                      rows={2}
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Notă:</strong> După trimiterea formularului, veți fi contactat telefonic în maxim 2 ore
                    pentru confirmarea programării. Vă rugăm să aveți telefonul la îndemână.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Înapoi
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={!canProceedFromStep(currentStep)}
                  className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white"
                >
                  Continuă
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceedFromStep(currentStep)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Trimite Programarea
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ai nevoie de ajutor cu programarea?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              +40 721 234 567
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              contact@skinlips.ro
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
