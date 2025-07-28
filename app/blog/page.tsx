"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Îngrijirea Pielii Vara: Ghidul Complet pentru Protecție și Hidratare",
      excerpt:
        "Descoperă secretele unei pieli sănătoase în sezonul cald. De la protecția solară la hidratarea corectă, toate sfaturile de care ai nevoie.",
      category: "Sfaturi Îngrijire",
      author: "Dr. Maria Popescu",
      date: "15 Martie 2024",
      readTime: "8 min",
      views: 1247,
      image: "Summer+Skincare+Guide",
      featured: true,
    },
    {
      id: 2,
      title: "Botox vs. Fillere: Care Este Diferența și Ce Să Alegi?",
      excerpt:
        "Ghid complet pentru a înțelege diferențele între tratamentele cu Botox și fillerele dermale, plus recomandări pentru fiecare tip de problemă.",
      category: "Tratamente",
      author: "Dr. Alexandru Ionescu",
      date: "12 Martie 2024",
      readTime: "6 min",
      views: 892,
      image: "Botox+vs+Fillers",
      featured: false,
    },
    {
      id: 3,
      title: "Rutina de Îngrijire Anti-Aging: Pas cu Pas pentru Rezultate Vizibile",
      excerpt:
        "Construiește o rutină eficientă anti-aging cu produsele și tehnicile recomandate de dermatologi pentru rezultate pe termen lung.",
      category: "Anti-Aging",
      author: "Dr. Elena Radu",
      date: "10 Martie 2024",
      readTime: "10 min",
      views: 1156,
      image: "Anti-Aging+Routine",
      featured: false,
    },
    {
      id: 4,
      title: "Acidul Hialuronic: Beneficii, Utilizări și Recomandări",
      excerpt:
        "Tot ce trebuie să știi despre acidul hialuronic - de la beneficiile pentru piele la modalitățile de utilizare în tratamente și produse.",
      category: "Ingrediente Active",
      author: "Dr. Maria Popescu",
      date: "8 Martie 2024",
      readTime: "7 min",
      views: 743,
      image: "Hyaluronic+Acid+Guide",
      featured: false,
    },
    {
      id: 5,
      title: "Mezoterapia: Rejuvenarea Pielii la Nivel Celular",
      excerpt:
        "Descoperă cum funcționează mezoterapia, ce beneficii oferă și de ce este considerată unul dintre cele mai eficiente tratamente de rejuvenare.",
      category: "Tratamente",
      author: "Dr. Alexandru Ionescu",
      date: "5 Martie 2024",
      readTime: "9 min",
      views: 634,
      image: "Mesotherapy+Treatment",
      featured: false,
    },
    {
      id: 6,
      title: "Pielea Sensibilă: Cum să o Îngrijești Corect",
      excerpt:
        "Ghid specializat pentru îngrijirea pielii sensibile - produse recomandate, ingrediente de evitat și rutine gentle pentru confort maxim.",
      category: "Sfaturi Îngrijire",
      author: "Dr. Elena Radu",
      date: "2 Martie 2024",
      readTime: "5 min",
      views: 521,
      image: "Sensitive+Skin+Care",
      featured: false,
    },
  ]

  const categories = ["Toate", "Sfaturi Îngrijire", "Tratamente", "Anti-Aging", "Ingrediente Active"]

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
              Blog & Sfaturi
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Ghidul Frumuseții
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descoperă secretele unei pieli sănătoase cu sfaturile experților noștri dermatologi și cele mai noi
              tendințe în îngrijirea estetică.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Toate" ? "default" : "outline"}
                size="sm"
                className={
                  category === "Toate"
                    ? "bg-gradient-to-r from-red-600 to-pink-600 text-white"
                    : "border-red-200 text-red-600 hover:bg-red-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles
        .filter((article) => article.featured)
        .map((article) => (
          <section key={article.id} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-4">
                  Articol Recomandat
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Cel Mai Citit Articol</h2>
              </div>

              <Card className="overflow-hidden shadow-2xl hover:shadow-red-500/20 transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=400&width=600&text=${article.image}`}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="mb-4 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 w-fit">
                      {article.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group w-fit">
                      Citește Articolul
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        ))}

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Articole Recente
            </h2>
            <p className="text-xl text-gray-600">Cele mai noi sfaturi și informații despre îngrijirea pielii</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <Card
                  key={article.id}
                  className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardHeader className="relative overflow-hidden p-0">
                    <div className="relative">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=${article.image}`}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-800 text-xs">
                      {article.category}
                    </Badge>

                    <CardTitle className="text-lg mb-3 group-hover:text-red-600 transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </CardTitle>

                    <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {article.author.split(" ")[1]}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date.split(" ")[0]} {article.date.split(" ")[1]}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {article.views}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 group bg-transparent"
                    >
                      Citește Mai Mult
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Rămâi la Curent
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Abonează-te la newsletter-ul nostru și primește cele mai noi sfaturi de îngrijire și oferte exclusive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-6 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Abonează-te
              </Button>
            </div>

            <p className="text-xs text-gray-600 mt-4">
              Poți să te dezabonezi oricând. Respectăm confidențialitatea datelor tale.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
