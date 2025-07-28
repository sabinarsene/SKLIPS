"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/ui/search-input"
import { ShoppingBag, Star, ArrowRight, Heart, Filter, SlidersHorizontal, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import { useCart } from "@/contexts/cart-context"

export default function MagazinPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [sortBy, setSortBy] = useState("popular")
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set())
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      title: "Cremă Anti-Aging Premium",
      category: "Creme",
      price: "280 lei",
      originalPrice: "320 lei",
      rating: 4.9,
      reviews: 127,
      description: "Cremă luxoasă cu peptide și acid hialuronic pentru reducerea ridurilor și fermitatea pielii.",
      image: "Anti-Aging+Cream",
      badge: "Bestseller",
      badgeColor: "bg-red-500",
      keywords: ["anti-aging", "riduri", "peptide", "acid hialuronic", "fermitate"],
      popularity: 95,
    },
    {
      id: 2,
      title: "Ser Vitamina C Concentrat",
      category: "Seruri",
      price: "195 lei",
      originalPrice: null,
      rating: 4.8,
      reviews: 89,
      description: "Ser puternic antioxidant cu 20% vitamina C pentru luminozitate și protecție.",
      image: "Vitamin+C+Serum",
      badge: "Nou",
      badgeColor: "bg-green-500",
      keywords: ["vitamina c", "antioxidant", "luminozitate", "protectie", "ser"],
      popularity: 88,
    },
    {
      id: 3,
      title: "Loțiune Hidratantă Delicată",
      category: "Loțiuni",
      price: "145 lei",
      originalPrice: "165 lei",
      rating: 4.7,
      reviews: 203,
      description: "Loțiune ușoară pentru hidratare zilnică, potrivită pentru toate tipurile de piele.",
      image: "Gentle+Moisturizer",
      badge: "Ofertă",
      badgeColor: "bg-orange-500",
      keywords: ["hidratare", "zilnica", "delicata", "toate tipurile", "lotiune"],
      popularity: 92,
    },
    {
      id: 4,
      title: "Cremă de Noapte Regenerantă",
      category: "Creme",
      price: "320 lei",
      originalPrice: null,
      rating: 4.9,
      reviews: 156,
      description: "Cremă intensivă de noapte cu retinol și ceramide pentru regenerarea celulară.",
      image: "Night+Cream",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      keywords: ["noapte", "regenerare", "retinol", "ceramide", "celulara"],
      popularity: 85,
    },
    {
      id: 5,
      title: "Ser Acid Hialuronic Pur",
      category: "Seruri",
      price: "225 lei",
      originalPrice: null,
      rating: 4.8,
      reviews: 174,
      description: "Ser concentrat cu acid hialuronic de diferite greutăți moleculare pentru hidratare profundă.",
      image: "Hyaluronic+Serum",
      badge: "Recomandat",
      badgeColor: "bg-blue-500",
      keywords: ["acid hialuronic", "hidratare profunda", "concentrat", "molecular"],
      popularity: 90,
    },
    {
      id: 6,
      title: "Loțiune Protecție Solară SPF 50",
      category: "Loțiuni",
      price: "175 lei",
      originalPrice: null,
      rating: 4.6,
      reviews: 98,
      description: "Protecție solară avansată cu filtre minerale și antioxidanți pentru uz zilnic.",
      image: "Sunscreen+Lotion",
      badge: "Esențial",
      badgeColor: "bg-yellow-500",
      keywords: ["protectie solara", "spf 50", "filtre minerale", "antioxidanti", "zilnic"],
      popularity: 87,
    },
  ]

  const categories = ["Toate", "Creme", "Seruri", "Loțiuni"]
  const sortOptions = [
    { value: "popular", label: "Popularitate" },
    { value: "price-low", label: "Preț: Mic → Mare" },
    { value: "price-high", label: "Preț: Mare → Mic" },
    { value: "rating", label: "Rating" },
    { value: "newest", label: "Cele mai noi" },
  ]

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "Toate" || product.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase()))

      return matchesCategory && matchesSearch
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return Number.parseInt(a.price) - Number.parseInt(b.price)
        case "price-high":
          return Number.parseInt(b.price) - Number.parseInt(a.price)
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.id - a.id
        case "popular":
        default:
          return b.popularity - a.popularity
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      category: product.category,
    })

    // Show added state temporarily
    setAddedItems((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section with Image */}
      <section className="relative py-20 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=Premium+Skincare+Products"
            alt="Produse Premium SkinLips"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-100/80 to-pink-100/80"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-6">
              Magazin Premium
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Produse Profesionale
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descoperă colecția noastră exclusivă de produse premium pentru îngrijirea pielii, recomandate de
              specialiștii noștri dermatologi.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters - Sticky */}
      <section className="py-8 bg-white/95 backdrop-blur-md border-b border-red-100 sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="w-full xl:w-96">
              <SearchInput
                placeholder="🔍 Caută produse... (ex: cremă, ser, vitamina C)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery("")}
                className="text-base font-medium"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Category Filters */}
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

              {/* Sort Options */}
              <div className="flex items-center space-x-4">
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Sortează:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-sm font-medium"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-4 text-center xl:text-left">
            <p className="text-sm text-gray-600">
              {filteredProducts.length === products.length
                ? `Toate cele ${products.length} produse disponibile`
                : `${filteredProducts.length} din ${products.length} produse găsite`}
              {searchQuery && <span className="ml-2 font-medium text-red-600">pentru "{searchQuery}"</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nu am găsit produse</h3>
              <p className="text-gray-600 mb-6">
                Încearcă să modifici termenii de căutare sau să selectezi o altă categorie.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("Toate")
                  setSortBy("popular")
                }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white"
              >
                Resetează Filtrele
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardHeader className="relative overflow-hidden p-0">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=250&width=300&text=${product.image}`}
                        alt={product.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      {/* Badge */}
                      <div
                        className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-medium`}
                      >
                        {product.badge}
                      </div>

                      {/* Wishlist */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white text-gray-600 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="secondary" className="text-xs bg-red-50 text-red-700">
                        {product.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-lg mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                      {product.title}
                    </CardTitle>

                    <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </CardDescription>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} recenzii)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-red-600">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleAddToCart(product)}
                        disabled={addedItems.has(product.id)}
                        className={`flex-1 transition-all duration-300 group ${
                          addedItems.has(product.id)
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white"
                        } shadow-lg hover:shadow-xl transform hover:scale-105`}
                      >
                        {addedItems.has(product.id) ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Adăugat!
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                            Adaugă în Coș
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                      >
                        Detalii
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section - Independent */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
              De Ce SkinLips?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Avantajele Magazinului Nostru
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Produse Autentice",
                desc: "Toate produsele sunt originale și certificate, direct de la producători autorizați.",
                icon: "🏆",
              },
              {
                title: "Consultanță Gratuită",
                desc: "Echipa noastră de specialiști te ajută să alegi produsele potrivite pentru pielea ta.",
                icon: "💬",
              },
              {
                title: "Livrare Rapidă",
                desc: "Livrare gratuită pentru comenzi peste 200 lei și retur în 30 de zile.",
                icon: "🚚",
              },
            ].map((benefit, index) => (
              <Card
                key={benefit.title}
                className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{benefit.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Only Contact */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Ai Nevoie de Ajutor?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Specialiștii noștri sunt aici să te ajute să alegi produsele perfecte pentru rutina ta de îngrijire.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
              >
                Consultanță Gratuită
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
