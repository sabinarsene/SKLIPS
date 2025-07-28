"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  ArrowRight,
  Clock,
  Award,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle,
  Users,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedImage, setSelectedImage] = useState(0)

  const serviceData = {
    "consultatie-dermatologica": {
      title: "Consultație Dermatologică Completă",
      shortDesc: "Analiză profesională și plan de tratament personalizat",
      category: "Consultații",
      duration: "45-60 minute",
      price: "De la 150 lei",
      rating: 4.9,
      reviews: 127,
      color: "from-red-500 to-rose-500",
      images: ["Dermatology+Consultation+1", "Dermatology+Consultation+2", "Dermatology+Consultation+3"],
      overview:
        "Consultația noastră dermatologică completă reprezintă primul pas esențial către o piele sănătoasă și radiantă. Folosind tehnologie avansată de analiză digitală, specialiștii noștri certificați evaluează în detaliu starea pielii tale și identifică orice probleme existente sau potențiale.",
      procedure: [
        "Anamneza detaliată - discutăm istoricul medical și preocupările tale",
        "Examinarea clinică completă a pielii cu echipamente specializate",
        "Analiza digitală cu dermatoscop pentru evaluarea precisă",
        "Identificarea tipului de piele și a problemelor specifice",
        "Elaborarea planului de tratament personalizat",
        "Recomandări pentru îngrijirea zilnică acasă",
      ],
      benefits: [
        "Diagnostic precis cu tehnologie avansată",
        "Plan de tratament complet personalizat",
        "Recomandări de produse specifice",
        "Monitorizare pe termen lung",
        "Prevenirea problemelor viitoare",
        "Consultație de urmărire gratuită",
      ],
      contraindications: [
        "Infecții acute ale pielii în zona de examinat",
        "Leziuni deschise sau sângerânde",
        "Reacții alergice severe în curs",
      ],
      aftercare: [
        "Urmează cu atenție recomandările primite",
        "Folosește doar produsele recomandate",
        "Evită expunerea excesivă la soare",
        "Programează consultația de control",
      ],
      faq: [
        {
          q: "Este dureroasă consultația?",
          a: "Nu, consultația este complet nedureroasă. Folosim doar echipamente non-invazive pentru analiză.",
        },
        {
          q: "Cât durează să văd rezultatele?",
          a: "Planul de tratament este personalizat, iar rezultatele încep să fie vizibile în 2-4 săptămâni.",
        },
        {
          q: "Este necesară o pregătire specială?",
          a: "Nu este necesară o pregătire specială. Vino cu pielea curată, fără machiaj.",
        },
      ],
    },
    "tratamente-botox": {
      title: "Tratamente Botox Premium",
      shortDesc: "Reducerea ridurilor cu toxină botulinică de înaltă calitate",
      category: "Injectabile",
      duration: "30-45 minute",
      price: "De la 800 lei",
      rating: 4.8,
      reviews: 89,
      color: "from-rose-500 to-pink-500",
      images: ["Botox+Treatment+1", "Botox+Treatment+2", "Botox+Treatment+3"],
      overview:
        "Tratamentele noastre cu Botox folosesc toxină botulinică premium pentru rezultate naturale și durabile. Specialiștii noștri certificați au experiență vastă în tehnicile de injectare pentru un aspect tineresc și fresh, fără să afecteze expresivitatea naturală.",
      procedure: [
        "Consultația inițială și evaluarea zonelor de tratat",
        "Marcarea punctelor de injectare",
        "Dezinfectarea zonei și aplicarea anesteziei locale (opțional)",
        "Injectarea precisă cu ace ultra-fine",
        "Aplicarea de gheață pentru reducerea umflăturii",
        "Instrucțiuni post-tratament detaliate",
      ],
      benefits: [
        "Rezultate naturale și durabile (4-6 luni)",
        "Procedură rapidă, fără timp de recuperare",
        "Reducerea semnificativă a ridurilor de expresie",
        "Prevenirea formării de riduri noi",
        "Îmbunătățirea aspectului general al feței",
        "Boost de încredere în sine",
      ],
      contraindications: [
        "Sarcina și alăptarea",
        "Boli neuromusculare (miastenia gravis)",
        "Alergii la toxina botulinică",
        "Infecții în zona de tratat",
        "Tratamente cu anticoagulante",
      ],
      aftercare: [
        "Evită masajul zonei tratate 24h",
        "Nu te întinde 4 ore după tratament",
        "Evită exercițiile intense 24h",
        "Nu consuma alcool 24h",
        "Aplică gheață dacă apare umflătură",
        "Programează controlul după 2 săptămâni",
      ],
      faq: [
        {
          q: "Cât de dureros este tratamentul?",
          a: "Disconfortul este minimal. Folosim ace ultra-fine și opțional anestezie locală.",
        },
        {
          q: "Când văd rezultatele?",
          a: "Efectele încep să fie vizibile în 3-7 zile și ating maximul în 2 săptămâni.",
        },
        {
          q: "Cât durează efectul?",
          a: "Rezultatele durează în medie 4-6 luni, variind în funcție de persoană.",
        },
      ],
    },
    // Add more services here...
  }

  const service = serviceData[slug as keyof typeof serviceData]

  if (!service) {
    return <div>Serviciul nu a fost găsit</div>
  }

  const tabs = [
    { id: "overview", label: "Prezentare", icon: Award },
    { id: "procedure", label: "Procedura", icon: CheckCircle },
    { id: "benefits", label: "Beneficii", icon: Star },
    { id: "contraindications", label: "Contraindicații", icon: AlertTriangle },
    { id: "aftercare", label: "Post-tratament", icon: Shield },
    { id: "faq", label: "Întrebări", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center mb-6">
            <Link href="/servicii" className="flex items-center text-red-600 hover:text-red-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Înapoi la Servicii
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 text-sm font-medium mb-6`}>
                {service.category}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">{service.shortDesc}</p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-gray-700">{service.duration}</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800">
                    {service.price}
                  </Badge>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {service.rating} ({service.reviews} recenzii)
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/programare">
                  <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                    <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Programează Acum
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={`/placeholder.svg?height=400&width=600&text=${service.images[selectedImage]}`}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {service.images.length}
                </div>
              </div>

              <div className="flex gap-2">
                {service.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? "border-red-500" : "border-gray-200 hover:border-red-300"
                    }`}
                  >
                    <img
                      src={`/placeholder.svg?height=80&width=120&text=${image}`}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Prezentare Generală</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{service.overview}</p>
                </div>
              )}

              {activeTab === "procedure" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cum Decurge Procedura</h2>
                  <div className="space-y-4">
                    {service.procedure.map((step, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 mt-1 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficii și Rezultate</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "contraindications" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contraindicații</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                      <h3 className="text-lg font-semibold text-red-800">Atenție!</h3>
                    </div>
                    <p className="text-red-700 mb-4">Tratamentul nu este recomandat în următoarele situații:</p>
                  </div>
                  <div className="space-y-3">
                    {service.contraindications.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                        <span className="text-red-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "aftercare" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Îngrijire Post-Tratament</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <Shield className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-blue-800">Instrucțiuni Importante</h3>
                    </div>
                    <p className="text-blue-700">
                      Pentru rezultate optime și evitarea complicațiilor, urmează cu atenție aceste recomandări:
                    </p>
                  </div>
                  <div className="space-y-3">
                    {service.aftercare.map((instruction, index) => (
                      <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-blue-800">{instruction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "faq" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Întrebări Frecvente</h2>
                  <div className="space-y-6">
                    {service.faq.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Gata Pentru Transformare?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Programează consultația ta gratuită și începe călătoria către o piele perfectă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programare">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Programează Acum
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Întrebări? Contactează-ne
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
