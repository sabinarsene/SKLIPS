"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Sparkles, Droplets, Zap, Calendar, ArrowRight, Clock, Award, Shield } from "lucide-react"
import Link from "next/link"

export default function ServiciiPage() {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultație Dermatologică",
      shortDesc: "Analiză completă a pielii și planificare personalizată",
      fullDesc:
        "Consultația noastră dermatologică completă include o evaluare amănunțită a stării pielii, identificarea problemelor existente și potențiale, precum și elaborarea unui plan de tratament personalizat. Folosim tehnologie avansată de analiză a pielii pentru a oferi cele mai precise recomandări.",
      duration: "45-60 minute",
      price: "De la 150 lei",
      color: "from-red-500 to-rose-500",
      benefits: [
        "Analiză digitală a pielii",
        "Plan de tratament personalizat",
        "Recomandări de îngrijire acasă",
        "Monitorizare pe termen lung",
      ],
    },
    {
      icon: Sparkles,
      title: "Tratamente Botox",
      shortDesc: "Tratamente profesionale cu toxină botulinică",
      fullDesc:
        "Tratamentele noastre cu Botox sunt realizate de specialiști certificați, folosind produse premium pentru rezultate naturale și durabile. Țintim ridurile de expresie, liniile frontale și alte zone problematice pentru un aspect tineresc și fresh.",
      duration: "30-45 minute",
      price: "De la 800 lei",
      color: "from-rose-500 to-pink-500",
      benefits: [
        "Rezultate naturale și durabile",
        "Procedură minimally invasive",
        "Fără timp de recuperare",
        "Efecte vizibile în 3-7 zile",
      ],
    },
    {
      icon: Droplets,
      title: "Fillere cu Acid Hialuronic",
      shortDesc: "Restabilirea volumului și netezirea ridurilor",
      fullDesc:
        "Fillerele noastre cu acid hialuronic de înaltă calitate sunt ideale pentru restabilirea volumului pierdut, conturarea trăsăturilor și netezirea ridurilor profunde. Folosim doar produse certificate CE pentru siguranță maximă.",
      duration: "45-60 minute",
      price: "De la 1200 lei",
      color: "from-pink-500 to-red-500",
      benefits: ["Rezultate imediate", "Aspect natural", "Durabilitate 12-18 luni", "Procedură reversibilă"],
    },
    {
      icon: Zap,
      title: "Mezoterapie",
      shortDesc: "Micro-injecții pentru rejuvenarea pielii",
      fullDesc:
        "Mezoterapia noastră folosește cocktailuri personalizate de vitamine, minerale și acizi hialuronici pentru a rejuvena pielea la nivel celular. Este ideală pentru îmbunătățirea texturii, hidratării și luminozității pielii.",
      duration: "60-90 minute",
      price: "De la 400 lei",
      color: "from-red-500 to-orange-500",
      benefits: ["Hidratare profundă", "Îmbunătățirea texturii", "Stimularea colagenului", "Rezultate cumulative"],
    },
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
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-6">
              Serviciile Noastre
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Tratamente Premium
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descoperă gama noastră completă de tratamente dermatologice și estetice, realizate cu tehnologie de ultimă
              generație și expertiza medicală de top.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border-0 shadow-xl bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="relative">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl group-hover:text-red-600 transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base">{service.shortDesc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">{service.fullDesc}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-red-500" />
                      <span className="text-sm text-gray-600">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800">
                        {service.price}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 text-red-500 mr-2" />
                      Beneficii
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link href="/contact">
                      <Button className="w-full bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                        <Calendar className="w-4 h-4 mr-2 group-hover:animate-spin" />
                        Programează Tratamentul
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              De Ce SkinLips?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Excelența în Fiecare Detaliu
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Expertiză Medicală",
                desc: "Echipa noastră de specialiști certificați cu ani de experiență în dermatologie și estetică.",
              },
              {
                icon: Shield,
                title: "Siguranță Maximă",
                desc: "Folosim doar produse certificate și respectăm cele mai stricte protocoale de siguranță.",
              },
              {
                icon: Sparkles,
                title: "Tehnologie Avansată",
                desc: "Echipamente de ultimă generație pentru rezultate precise și durabile.",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Începe Transformarea Astăzi
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Programează o consultație gratuită și descoperă care sunt cele mai potrivite tratamente pentru tine.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Consultație Gratuită
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
