"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/ui/search-input"
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Stethoscope,
  Sparkles,
  Droplets,
  Zap,
  CreditCard,
  Calendar,
  Shield,
} from "lucide-react"
import { useState, useMemo } from "react"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Toate")
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const faqData = [
    {
      id: 1,
      category: "Generale",
      icon: HelpCircle,
      question: "Ce este dermatologia estetică?",
      answer:
        "Dermatologia estetică este o specializare medicală care se concentrează pe îmbunătățirea aspectului pielii prin proceduri non-invazive și minimally invazive. Include tratamente precum Botox, fillere, mezoterapie și alte proceduri pentru rejuvenarea și îmbunătățirea aspectului pielii.",
    },
    {
      id: 2,
      category: "Generale",
      icon: HelpCircle,
      question: "Sunt tratamentele dureroase?",
      answer:
        "Majoritatea tratamentelor noastre sunt minimally invazive și provoacă disconfort minim. Folosim tehnici avansate de anestezie locală și produse cu lidocaină pentru a minimiza orice disconfort. Pacienții noștri raportează în general că procedurile sunt foarte tolerabile.",
    },
    {
      id: 3,
      category: "Generale",
      icon: HelpCircle,
      question: "Cât timp durează rezultatele?",
      answer:
        "Durata rezultatelor variază în funcție de tratament: Botox durează 4-6 luni, fillerele cu acid hialuronic 12-18 luni, iar mezoterapia necesită ședințe de întreținere la 3-6 luni. Vă vom oferi informații detaliate despre durata specifică pentru fiecare tratament.",
    },
    {
      id: 4,
      category: "Botox",
      icon: Sparkles,
      question: "La ce vârstă pot începe tratamentele cu Botox?",
      answer:
        "Tratamentele cu Botox pot fi începute de obicei după vârsta de 25-30 de ani, când încep să apară primele riduri de expresie. Cu toate acestea, vârsta optimă variază de la persoană la persoană. Consultația cu specialistul nostru va determina momentul potrivit pentru dumneavoastră.",
    },
    {
      id: 5,
      category: "Botox",
      icon: Sparkles,
      question: "Botox-ul îmi va afecta expresivitatea?",
      answer:
        "Nu, când este administrat corect de un specialist experimentat, Botox-ul nu va afecta expresivitatea naturală. Obiectivul nostru este să obținem rezultate naturale care să reducă ridurile fără a compromite capacitatea de expresie facială.",
    },
    {
      id: 6,
      category: "Botox",
      icon: Sparkles,
      question: "Când văd rezultatele după Botox?",
      answer:
        "Efectele Botox-ului încep să fie vizibile în 3-7 zile după tratament, cu rezultatul complet vizibil în 10-14 zile. Efectul se dezvoltă treptat, ceea ce contribuie la aspectul natural al rezultatului.",
    },
    {
      id: 7,
      category: "Acid Hialuronic",
      icon: Droplets,
      question: "Ce sunt fillerele cu acid hialuronic?",
      answer:
        "Fillerele cu acid hialuronic sunt geluri sterile care conțin acid hialuronic, o substanță care există natural în organismul uman. Acestea sunt folosite pentru a restabili volumul pierdut, a netezi ridurile și a îmbunătăți conturul facial.",
    },
    {
      id: 8,
      category: "Acid Hialuronic",
      icon: Droplets,
      question: "Sunt fillerele reversibile?",
      answer:
        "Da, fillerele cu acid hialuronic sunt complet reversibile. În cazul în care nu sunteți mulțumit de rezultat sau apare o complicație, putem folosi hialuronidaza pentru a dizolva complet fillerul în câteva ore.",
    },
    {
      id: 9,
      category: "Acid Hialuronic",
      icon: Droplets,
      question: "Cât timp durează procedura cu fillere?",
      answer:
        "Procedura cu fillere durează de obicei 30-60 de minute, în funcție de zonele tratate și cantitatea de produs folosită. Rezultatele sunt vizibile imediat, cu îmbunătățiri continue în următoarele 2 săptămâni.",
    },
    {
      id: 10,
      category: "Mezoterapie",
      icon: Zap,
      question: "Ce este mezoterapia?",
      answer:
        "Mezoterapia este o tehnică care implică injectarea de micro-doze de vitamine, minerale, aminoacizi și acid hialuronic direct în mezoderm (stratul mijlociu al pielii). Aceasta stimulează regenerarea celulară și îmbunătățește aspectul general al pielii.",
    },
    {
      id: 11,
      category: "Mezoterapie",
      icon: Zap,
      question: "Câte ședințe de mezoterapie sunt necesare?",
      answer:
        "De obicei sunt recomandate 3-6 ședințe inițiale la interval de 2-4 săptămâni, urmate de ședințe de întreținere la 3-6 luni. Numărul exact de ședințe va fi determinat în funcție de starea pielii și obiectivele dumneavoastră.",
    },
    {
      id: 12,
      category: "Consultații",
      icon: Stethoscope,
      question: "Este consultația inițială gratuită?",
      answer:
        "Da, consultația inițială este complet gratuită și include o evaluare completă a pielii, discutarea obiectivelor dumneavoastră și elaborarea unui plan de tratament personalizat. Nu există nicio obligație de a continua cu tratamentele.",
    },
    {
      id: 13,
      category: "Consultații",
      icon: Stethoscope,
      question: "Ce se întâmplă în timpul consultației?",
      answer:
        "În timpul consultației, specialistul nostru va evalua starea pielii dumneavoastră, va discuta istoricul medical, va identifica problemele și va recomanda cele mai potrivite tratamente. Veți primi și informații detaliate despre proceduri, costuri și rezultate așteptate.",
    },
    {
      id: 14,
      category: "Prețuri",
      icon: CreditCard,
      question: "Care sunt modalitățile de plată?",
      answer:
        "Acceptăm plata în numerar, cu cardul bancar (Visa, Mastercard) și prin transfer bancar. De asemenea, oferim și opțiuni de plată în rate pentru tratamentele mai complexe, cu condiții avantajoase.",
    },
    {
      id: 15,
      category: "Prețuri",
      icon: CreditCard,
      question: "Oferiti reduceri sau pachete speciale?",
      answer:
        "Da, oferim pachete speciale pentru tratamentele combinate și reduceri pentru clienții fideli. De asemenea, avem promoții sezoniere și oferte speciale pentru anumite tratamente. Întrebați la consultație despre ofertele disponibile.",
    },
    {
      id: 16,
      category: "Programări",
      icon: Calendar,
      question: "Cum pot programa o consultație?",
      answer:
        "Puteți programa o consultație online prin sistemul nostru de rezervări, prin telefon la +40 123 456 789, prin email la info@skinlips.ro sau direct la clinică. Sistemul online este disponibil 24/7 pentru conveniența dumneavoastră.",
    },
    {
      id: 17,
      category: "Programări",
      icon: Calendar,
      question: "Pot anula sau reprograma o consultație?",
      answer:
        "Da, puteți anula sau reprograma consultația cu minimum 24 de ore înainte de programare, fără nicio penalizare. Pentru anulări în ultima zi, se poate aplica o taxă de 50 lei care va fi dedusă din următoarea programare.",
    },
    {
      id: 18,
      category: "Siguranță",
      icon: Shield,
      question: "Sunt tratamentele sigure?",
      answer:
        "Da, toate tratamentele noastre sunt realizate de medici specializați, cu produse certificate CE și în condiții de sterilitate maximă. Respectăm toate protocoalele de siguranță și folosim doar produse de cea mai înaltă calitate de la producători recunoscuți internațional.",
    },
    {
      id: 19,
      category: "Siguranță",
      icon: Shield,
      question: "Ce efecte secundare pot apărea?",
      answer:
        "Efectele secundare sunt rare și de obicei minore: ușoară umflătură, roșeață sau sensibilitate în zona tratată, care dispar în 24-48 ore. Vă vom informa detaliat despre toate riscurile potențiale și cum să le gestionați.",
    },
    {
      id: 20,
      category: "Siguranță",
      icon: Shield,
      question: "Ce fac dacă am o reacție adversă?",
      answer:
        "În cazul improbabil al unei reacții adverse, suntem disponibili 24/7 pentru urgențe. Aveți numărul nostru de urgență și puteți să ne contactați oricând. De asemenea, avem protocoale clare pentru gestionarea oricărei situații neprevăzute.",
    },
  ]

  const categories = [
    { name: "Toate", icon: HelpCircle },
    { name: "Generale", icon: HelpCircle },
    { name: "Botox", icon: Sparkles },
    { name: "Acid Hialuronic", icon: Droplets },
    { name: "Mezoterapie", icon: Zap },
    { name: "Consultații", icon: Stethoscope },
    { name: "Prețuri", icon: CreditCard },
    { name: "Programări", icon: Calendar },
    { name: "Siguranță", icon: Shield },
  ]

  const filteredFAQs = useMemo(() => {
    return faqData.filter((faq) => {
      const matchesCategory = selectedCategory === "Toate" || faq.category === selectedCategory
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQs.map((faq) => faq.id)))
  }

  const collapseAll = () => {
    setExpandedItems(new Set())
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
              Întrebări Frecvente
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Răspunsuri la Întrebările Tale
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Găsește răspunsuri la cele mai frecvente întrebări despre tratamentele noastre, proceduri și servicii.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white/95 backdrop-blur-md border-b border-red-100 sticky top-16 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-6 items-center justify-between">
            <div className="w-full xl:w-96">
              <SearchInput
                placeholder="🔍 Caută întrebări... (ex: botox, durere, preț)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery("")}
                className="text-base font-medium"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Categorii:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={category.name === selectedCategory ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                    className={
                      category.name === selectedCategory
                        ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg"
                        : "border-red-200 text-red-600 hover:bg-red-50 bg-white"
                    }
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-gray-600">
              {filteredFAQs.length === faqData.length
                ? `Toate cele ${faqData.length} întrebări disponibile`
                : `${filteredFAQs.length} din ${faqData.length} întrebări găsite`}
              {searchQuery && <span className="ml-2 font-medium text-red-600">pentru "{searchQuery}"</span>}
            </p>

            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={expandAll}
                className="border-red-200 text-red-600 hover:bg-red-50 text-xs bg-transparent"
              >
                Extinde Toate
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={collapseAll}
                className="border-red-200 text-red-600 hover:bg-red-50 text-xs bg-transparent"
              >
                Închide Toate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nu am găsit întrebări</h3>
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
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card
                  key={faq.id}
                  className="hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 shadow-md"
                >
                  <CardHeader className="cursor-pointer" onClick={() => toggleExpanded(faq.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0`}
                        >
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge className="mb-2 bg-red-100 text-red-800 text-xs">{faq.category}</Badge>
                          <CardTitle className="text-lg text-left hover:text-red-600 transition-colors">
                            {faq.question}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-red-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  {expandedItems.has(faq.id) && (
                    <CardContent className="pt-0">
                      <div className="ml-14">
                        <div className="border-l-2 border-red-200 pl-6">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Nu Ai Găsit Răspunsul?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Echipa noastră de specialiști este aici să răspundă la toate întrebările tale specifice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 group"
              >
                <HelpCircle className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Contactează Specialistul
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Programează Consultația
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
