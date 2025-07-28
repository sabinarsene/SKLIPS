"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Star, Shield, Award, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section - Simplu și Puternic */}
      <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 text-sm font-medium rounded-full mb-8 animate-bounce">
            ✨ Clinica #1 în București ✨
          </Badge>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Pielea Ta
            <span className="block bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Perfectă
            </span>
            Începe Aici
          </h1>

          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-light leading-relaxed">
            Transformă-ți pielea cu tratamente premium și rezultate garantate
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-10 py-6 text-xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group rounded-full"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Consultație GRATUITĂ
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/servicii">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-10 py-6 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-full"
              >
                Vezi Tratamentele
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-sm font-medium">500+ clienți mulțumiți</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* De Ce SkinLips - Simplu și Direct */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">De Ce Să Ne Alegi?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rezultate vizibile, siguranță maximă, expertiză medicală
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Award,
                title: "Experți Certificați",
                desc: "Dermatologi cu peste 10 ani experiență",
                highlight: "100% Profesional",
              },
              {
                icon: Shield,
                title: "Siguranță Garantată",
                desc: "Produse premium certificate internațional",
                highlight: "0 Riscuri",
              },
              {
                icon: Users,
                title: "Rezultate Dovedite",
                desc: "500+ transformări reușite în ultimul an",
                highlight: "Rezultate Garantate",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="text-center hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-red-50/30 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <Badge className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800 mx-auto mb-4">
                    {feature.highlight}
                  </Badge>
                  <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ce Oferim - Preview Rapid */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Transformări Complete
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la consultație la rezultatul final - totul într-un singur loc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                { title: "Consultație Gratuită", desc: "Analiză completă și plan personalizat" },
                { title: "Tratamente Premium", desc: "Botox, Acid Hialuronic, Mezoterapie" },
                { title: "Produse Profesionale", desc: "Îngrijire acasă cu produse medicale" },
                { title: "Urmărire Rezultate", desc: "Monitorizare și ajustări continue" },
              ].map((item, index) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Rezultate+Transformare"
                  alt="Rezultate Transformare"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  Rezultate în 7 zile!
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/servicii">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-12 py-6 text-xl shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group rounded-full"
              >
                Explorează Toate Tratamentele
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Simplu */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl p-12 shadow-xl border border-red-100">
            <div className="flex justify-center mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-8 h-8 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl text-gray-800 font-light italic mb-8 leading-relaxed">
              "Am încercat multe clinici, dar la SkinLips am găsit cu adevărat ceea ce căutam. Rezultatele sunt
              spectaculoase și mă simt incredibil de bine în pielea mea!"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Maria Popescu</p>
                <p className="text-gray-600">Client SkinLips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Puternic și Simplu */}
      <section className="py-24 bg-gradient-to-br from-red-600 via-rose-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-pink-600/90"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Gata Pentru
            <span className="block">Transformare?</span>
          </h2>

          <p className="text-2xl text-red-100 mb-12 font-light">
            Primul pas către pielea perfectă este o consultație gratuită
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 px-12 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 group rounded-full font-semibold"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:animate-spin" />
                Programează ACUM
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/magazin">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-12 py-6 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent rounded-full"
              >
                Vezi Produsele
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-red-100">
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Consultație 100% Gratuită</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Fără Obligații</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Rezultate Garantate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
