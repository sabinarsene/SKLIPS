"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/ui/search-input"
import { Camera, Filter, Eye, ArrowRight, Star, Calendar, X } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"

export default function GaleriePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const beforeAfterResults = [
    {
      id: 1,
      title: "Tratament Botox - Riduri Frontale",
      category: "Botox",
      beforeImage: "Botox+Before+1",
      afterImage: "Botox+After+1",
      duration: "2 săptămâni",
      age: "45 ani",
      gender: "Femeie",
      description: "Reducerea semnificativă a ridurilor frontale cu rezultate naturale",
      rating: 5,
      testimonial: "Sunt extrem de mulțumită de rezultat! Arăt mai tânără dar în același timp natural.",
      doctor: "Dr. Maria Popescu",
    },
    {
      id: 2,
      title: "Fillere Acid Hialuronic - Buze",
      category: "Acid Hialuronic",
      beforeImage: "Lips+Before+1",
      afterImage: "Lips+After+1",
      duration: "Imediat",
      age: "32 ani",
      gender: "Femeie",
      description: "Mărirea și conturarea buzelor pentru un aspect senzual și natural",
      rating: 5,
      testimonial: "Exact ce îmi doream! Buzele arată perfect, nu exagerat.",
      doctor: "Dr. Alexandru Ionescu",
    },
    {
      id: 3,
      title: "Mezoterapie - Rejuvenare Facială",
      category: "Mezoterapie",
      beforeImage: "Mesotherapy+Before+1",
      afterImage: "Mesotherapy+After+1",
      duration: "4 săptămâni",
      age: "38 ani",
      gender: "Femeie",
      description: "Îmbunătățirea texturii pielii și luminozității prin mezoterapie",
      rating: 5,
      testimonial: "Pielea mea arată incredibil! Toată lumea îmi spune că arăt mai tânără.",
      doctor: "Dr. Elena Radu",
    },
    {
      id: 4,
      title: "Tratament Botox - Zona Ochilor",
      category: "Botox",
      beforeImage: "Botox+Eyes+Before+1",
      afterImage: "Botox+Eyes+After+1",
      duration: "10 zile",
      age: "42 ani",
      gender: "Femeie",
      description: "Eliminarea ridurilor de la colțurile ochilor (picioare de găină)",
      rating: 5,
      testimonial: "Nu mai am ridurile acelea urâte! Ochii mei arată mult mai tineri.",
      doctor: "Dr. Maria Popescu",
    },
    {
      id: 5,
      title: "Fillere Acid Hialuronic - Pomeți",
      category: "Acid Hialuronic",
      beforeImage: "Cheeks+Before+1",
      afterImage: "Cheeks+After+1",
      duration: "Imediat",
      age: "35 ani",
      gender: "Femeie",
      description: "Restabilirea volumului pomeților pentru un contur facial definit",
      rating: 5,
      testimonial: "Conturul feței mele este acum perfect definit. Mă simt mult mai încrezătoare!",
      doctor: "Dr. Alexandru Ionescu",
    },
    {
      id: 6,
      title: "Mezoterapie - Hidratare Intensivă",
      category: "Mezoterapie",
      beforeImage: "Hydration+Before+1",
      afterImage: "Hydration+After+1",
      duration: "3 săptămâni",
      age: "29 ani",
      gender: "Femeie",
      description: "Hidratarea profundă a pielii pentru un aspect radiant",
      rating: 5,
      testimonial: "Pielea mea nu a fost niciodată atât de hidratată și luminoasă!",
      doctor: "Dr. Elena Radu",
    },
  ]

  const categories = ["Toate", "Botox", "Acid Hialuronic", "Mezoterapie"]

  const filteredResults = useMemo(() => {
    return beforeAfterResults.filter((result) => {
      const matchesCategory = selectedCategory === "Toate" || result.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const openLightbox = (result: any) => {
    setSelectedImage(result)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
  }

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
              Galerie Before/After
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Rezultate Reale
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descoperă transformările incredibile ale pacienților noștri. Fiecare imagine spune o poveste de succes și
              încredere regăsită.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white/95 backdrop-blur-md border-b border-red-100 sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="w-full lg:w-96">
              <SearchInput
                placeholder="🔍 Caută rezultate... (ex: botox, buze, riduri)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery("")}
                className="text-base font-medium"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Categorii:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      category === selectedCategory
                        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                        : "border-red-200 text-red-600 hover:bg-red-50 bg-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-center lg:text-left">
            <p className="text-sm text-gray-600">
              {filteredResults.length === beforeAfterResults.length
                ? `Toate cele ${beforeAfterResults.length} rezultate disponibile`
                : `${filteredResults.length} din ${beforeAfterResults.length} rezultate găsite`}
              {searchQuery && <span className="ml-2 font-medium text-red-600">pentru "{searchQuery}"</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResults.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nu am găsit rezultate</h3>
              <p className="text-gray-600 mb-6">
                Încearcă să modifici termenii de căutare sau să selectezi o altă categorie.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("Toate")
                }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white"
              >
                Resetează Filtrele
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result) => (
                <Card
                  key={result.id}
                  className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(result)}
                >
                  <CardHeader className="relative overflow-hidden p-0">
                    <div className="relative">
                      {/* Before/After Slider */}
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 relative">
                            <img
                              src={`/placeholder.svg?height=256&width=200&text=${result.beforeImage}`}
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                              ÎNAINTE
                            </div>
                          </div>
                          <div className="w-1/2 relative">
                            <img
                              src={`/placeholder.svg?height=256&width=200&text=${result.afterImage}`}
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                              DUPĂ
                            </div>
                          </div>
                        </div>

                        {/* Divider Line */}
                        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white shadow-lg transform -translate-x-0.5"></div>

                        {/* View Icon */}
                        <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>

                      <Badge className={`absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white`}>
                        {result.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {result.title}
                    </CardTitle>

                    <CardDescription className="text-gray-600 mb-4 line-clamp-2">{result.description}</CardDescription>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <span>{result.age}</span>
                        <span>•</span>
                        <span>{result.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-1">
                          {[...Array(result.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs">({result.rating})</span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm text-gray-600 italic line-clamp-2 mb-2">"{result.testimonial}"</p>
                      <p className="text-xs text-gray-500">- {result.doctor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                <Badge className="mt-2 bg-gradient-to-r from-red-500 to-pink-500 text-white">
                  {selectedImage.category}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeLightbox}
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                {/* Before Image */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">Înainte</h3>
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=${selectedImage.beforeImage}`}
                      alt="Before"
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>

                {/* After Image */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">După</h3>
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=400&width=400&text=${selectedImage.afterImage}`}
                      alt="After"
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Vârsta</h4>
                  <p className="text-gray-600">{selectedImage.age}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Rezultat în</h4>
                  <p className="text-gray-600">{selectedImage.duration}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-1">Specialist</h4>
                  <p className="text-gray-600">{selectedImage.doctor}</p>
                </div>
              </div>

              {/* Description & Testimonial */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Descriere</h4>
                  <p className="text-gray-700">{selectedImage.description}</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Testimonial Pacient</h4>
                  <p className="text-red-700 italic">"{selectedImage.testimonial}"</p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(selectedImage.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-red-600">({selectedImage.rating}/5)</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <Link href="/programare">
                  <Button
                    onClick={closeLightbox}
                    className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Vreau Același Rezultat
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Vrei Să Fii Următorul?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Programează consultația ta gratuită și descoperă cum poți obține rezultate la fel de spectaculoase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programare">
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
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Vezi Toate Serviciile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
