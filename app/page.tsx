"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Heart, Stethoscope, Sparkles, Droplets, Zap, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Secțiunea Hero */}
      <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background animat */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-pink-600/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=800&width=1920&text=Elegant+Clinic+Interior"
            alt="Interiorul Clinicii SkinLips"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div
          className={`relative z-10 text-center max-w-5xl mx-auto px-4 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-medium rounded-full shadow-lg animate-bounce">
              ✨ Clinica Premium de Dermatologie ✨
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Bine ați venit la{" "}
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              SkinLips
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Destinația ta premium pentru tratamente dermatologice și estetice avansate.
            <span className="text-red-600 font-semibold"> Experimentează combinația perfectă</span> între expertiza
            medicală și îngrijirea luxoasă.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Programează Consultația
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/servicii">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Heart className="w-5 h-5 mr-2" />
                Află Mai Mult
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-10 animate-float">
          <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-pink-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-10 animate-float-delayed">
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full opacity-40"></div>
        </div>
      </section>

      {/* Secțiunea Despre Noi - Scurtă */}
      <section id="despre" className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              Despre Noi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Expertiză și Eleganță
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              La SkinLips, combinăm{" "}
              <span className="text-red-600 font-semibold">știința dermatologică de ultimă generație</span> cu
              îngrijirea estetică personalizată. Clinica noastră oferă un mediu liniștit unde sănătatea pielii și
              obiectivele tale de frumusețe devin prioritatea noastră.
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/servicii">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                Descoperă Serviciile Noastre
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Servicii */}
      <section id="servicii-preview" className="py-20 bg-gradient-to-br from-gray-50 via-red-50 to-rose-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              Serviciile Noastre
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Tratamente Premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Stethoscope,
                title: "Consultație",
                desc: "Analiză completă a pielii și planificare personalizată.",
                color: "from-red-500 to-rose-500",
              },
              {
                icon: Sparkles,
                title: "Botox",
                desc: "Tratamente profesionale pentru un aspect tineresc.",
                color: "from-rose-500 to-pink-500",
              },
              {
                icon: Droplets,
                title: "Acid Hialuronic",
                desc: "Fillere dermale pentru volum și netezire naturală.",
                color: "from-pink-500 to-red-500",
              },
              {
                icon: Zap,
                title: "Mezoterapie",
                desc: "Micro-injecții pentru rejuvenarea pielii.",
                color: "from-red-500 to-orange-500",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/servicii">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-transparent"
              >
                Vezi Toate Serviciile
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Magazin */}
      <section
        id="magazin-preview"
        className="py-20 bg-gradient-to-r from-white via-rose-50 to-red-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              Magazin Premium
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Produse Profesionale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prelungește rezultatele tratamentelor cu produsele noastre premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Creme Rejuvenante", price: "De la 180 lei" },
              { title: "Seruri Active", price: "De la 260 lei" },
              { title: "Loțiuni Nutritive", price: "De la 140 lei" },
            ].map((product, index) => (
              <Card
                key={product.title}
                className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader>
                  <img
                    src={`/placeholder.svg?height=200&width=300&text=${product.title}`}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2 group-hover:text-red-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <Badge variant="secondary" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-800">
                    {product.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/magazin">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Vezi Magazinul Complet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Blog - adaugă această secțiune înainte de CTA Final */}
      <section id="blog-preview" className="py-20 bg-gradient-to-br from-gray-50 via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              Blog & Sfaturi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Ultimele Articole
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rămâi informat cu cele mai noi sfaturi de îngrijire și informații despre tratamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Îngrijirea Pielii Vara: Protejarea Pielii în Vremea Caldă",
                desc: "Descoperă sfaturi esențiale pentru menținerea unei pieli sănătoase în lunile de vară...",
                category: "Sfaturi Îngrijire",
                image: "Summer+Skincare+Tips",
              },
              {
                title: "Înțelegerea Botox-ului: Ce să Aștepți de la Tratament",
                desc: "Un ghid complet pentru tratamentele cu Botox, incluzând pregătirea și rezultatele...",
                category: "Tratamente",
                image: "Botox+Treatment+Guide",
              },
            ].map((article, index) => (
              <Card
                key={article.title}
                className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="relative overflow-hidden">
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=250&width=400&text=${article.image}`}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge className="mb-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 font-medium">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl mb-3 group-hover:text-red-600 transition-colors leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">{article.desc}</CardDescription>
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Citește Mai Mult
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group bg-transparent"
              >
                Vezi Toate Articolele
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        id="contact-cta"
        className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-6">
              Programare Rapidă
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Gata să-ți Transformi Pielea?
            </h2>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Programează consultația astăzi și începe călătoria către o piele mai sănătoasă și radiantă.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Programează-te Acum
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Citește Blogul
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
