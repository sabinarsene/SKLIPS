"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Users,
  Calendar,
  ArrowRight,
  Star,
  Shield,
  GraduationCap,
  Heart,
  CheckCircle,
  MapPin,
  Clock,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function DesprePage() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Maria Popescu",
      title: "Medic Primar Dermatolog",
      specialization: "Dermatologie Estetică & Botox",
      experience: "15+ ani experiență",
      education: [
        "Universitatea de Medicină București - Medicină Generală",
        "Rezidențiat Dermatologie - Spitalul Colentina",
        "Certificare Botox & Fillere - Paris, Franța",
        "Master în Dermatologie Estetică - Milano, Italia",
      ],
      certifications: [
        "Membru Societatea Română de Dermatologie",
        "Certificare Allergan (Botox & Juvederm)",
        "Certificare Galderma (Restylane)",
        "Trainer Internațional Mezoterapie",
      ],
      image: "Dr+Maria+Popescu",
      rating: 4.9,
      reviews: 234,
      languages: ["Română", "Engleză", "Franceză"],
      bio: "Dr. Maria Popescu este o specialistă recunoscută în dermatologia estetică cu peste 15 ani de experiență. A tratat mii de pacienți și este cunoscută pentru abordarea sa naturală și rezultatele excepționale în tratamentele cu Botox și fillere.",
    },
    {
      id: 2,
      name: "Dr. Alexandru Ionescu",
      title: "Medic Specialist Dermatolog",
      specialization: "Fillere & Conturare Facială",
      experience: "12+ ani experiență",
      education: [
        "Universitatea de Medicină Iași - Medicină Generală",
        "Rezidențiat Dermatologie - Spitalul Fundeni",
        "Fellowship Dermatologie Estetică - Londra, UK",
        "Curs Avansat Anatomie Facială - Barcelona, Spania",
      ],
      certifications: [
        "Membru European Society of Cosmetic Dermatology",
        "Certificare Teoxane (Teosyal)",
        "Certificare Merz (Belotero & Radiesse)",
        "Expert în Conturare Non-Chirurgicală",
      ],
      image: "Dr+Alexandru+Ionescu",
      rating: 4.8,
      reviews: 189,
      languages: ["Română", "Engleză", "Italiană"],
      bio: "Dr. Alexandru Ionescu este specialist în conturarea facială non-chirurgicală și fillere cu acid hialuronic. Expertiza sa în anatomia facială îi permite să obțină rezultate naturale și armonioase pentru fiecare pacient.",
    },
    {
      id: 3,
      name: "Dr. Elena Radu",
      title: "Medic Specialist Dermatolog",
      specialization: "Mezoterapie & Rejuvenare",
      experience: "10+ ani experiență",
      education: [
        "Universitatea de Medicină Cluj - Medicină Generală",
        "Rezidențiat Dermatologie - Spitalul Județean Cluj",
        "Specializare Mezoterapie - Geneva, Elveția",
        "Curs Avansat Skinbooster - Stockholm, Suedia",
      ],
      certifications: [
        "Membru International Mesotherapy Society",
        "Certificare NCTF (New Cellular Treatment Factor)",
        "Expert Profhilo & Skinbooster",
        "Trainer Național Mezoterapie",
      ],
      image: "Dr+Elena+Radu",
      rating: 4.9,
      reviews: 156,
      languages: ["Română", "Engleză", "Germană"],
      bio: "Dr. Elena Radu este expertă în mezoterapie și tratamente de rejuvenare. Pasionată de cele mai noi tehnologii în dermatologie, oferă tratamente personalizate pentru fiecare tip de piele.",
    },
  ]

  const clinicStats = [
    { number: "5000+", label: "Pacienți Mulțumiți", icon: Users },
    { number: "15+", label: "Ani de Experiență", icon: Award },
    { number: "98%", label: "Rata de Satisfacție", icon: Star },
    { number: "24/7", label: "Suport Clienți", icon: Shield },
  ]

  const certifications = [
    {
      title: "Autorizație Sanitară de Funcționare",
      number: "AS-2024-001",
      authority: "Ministerul Sănătății",
    },
    {
      title: "Certificare ISO 9001:2015",
      number: "ISO-2024-MS",
      authority: "Calitate Management",
    },
    {
      title: "Acreditare Colegiul Medicilor",
      number: "CM-BUC-2024",
      authority: "Colegiul Medicilor București",
    },
    {
      title: "Certificare GDPR",
      number: "GDPR-2024-RO",
      authority: "Protecția Datelor",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Pasiune pentru Frumusețe",
      description: "Credem că fiecare persoană merită să se simtă frumoasă și încrezătoare în propria piele.",
    },
    {
      icon: Shield,
      title: "Siguranță Maximă",
      description: "Folosim doar produse certificate și respectăm cele mai stricte protocoale de siguranță.",
    },
    {
      icon: Award,
      title: "Excelență Medicală",
      description: "Echipa noastră de specialiști certificați oferă cele mai înalte standarde de îngrijire medicală.",
    },
    {
      icon: Users,
      title: "Abordare Personalizată",
      description: "Fiecare tratament este adaptat nevoilor și obiectivelor specifice ale pacientului.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-100 via-rose-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=SkinLips+Clinic+Interior"
            alt="Interiorul Clinicii SkinLips"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-100/80 to-pink-100/80"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm font-medium mb-6">
              Despre SkinLips
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Excelența în Dermatologie
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              De peste 15 ani, SkinLips este destinația de încredere pentru tratamente dermatologice și estetice premium
              în București.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clinicStats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  SkinLips a fost fondată în 2009 cu o viziune clară: să oferim tratamente dermatologice și estetice de
                  cea mai înaltă calitate, într-un mediu sigur și profesional. De-a lungul anilor, am devenit una dintre
                  clinicile de referință din București.
                </p>
                <p>
                  Echipa noastră de specialiști certificați combină expertiza medicală cu cele mai noi tehnologii pentru
                  a oferi rezultate excepționale. Fiecare tratament este personalizat în funcție de nevoile specifice
                  ale pacientului.
                </p>
                <p>
                  Misiunea noastră este să ajutăm fiecare persoană să se simtă frumoasă și încrezătoare în propria
                  piele, oferind tratamente sigure, eficiente și cu rezultate naturale.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Clinic+History+Collage"
                  alt="Istoria Clinicii SkinLips"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                  15+ Ani de Excelență
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Echipa Noastră de Specialiști
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Medici certificați cu experiență vastă în dermatologie și estetică medicală
            </p>
          </div>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={`/placeholder.svg?height=500&width=400&text=${member.image}`}
                      alt={member.name}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
                        {member.experience}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                        <span className="font-semibold">{member.rating}</span>
                        <span className="text-sm ml-1">({member.reviews})</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-xl text-red-600 font-semibold mb-2">{member.title}</p>
                      <p className="text-lg text-gray-600">{member.specialization}</p>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <GraduationCap className="w-5 h-5 text-red-500 mr-2" />
                          Educație
                        </h4>
                        <ul className="space-y-2">
                          {member.education.map((edu, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Award className="w-5 h-5 text-red-500 mr-2" />
                          Certificări
                        </h4>
                        <ul className="space-y-2">
                          {member.certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {cert}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Limbi Vorbite</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((lang) => (
                            <Badge key={lang} variant="secondary" className="bg-red-100 text-red-800">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în oferirea celor mai bune servicii medicale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="text-center hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-4">
              Certificări și Acreditări
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respectăm cele mai înalte standarde de calitate și siguranță medicală
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-red-50/30 border border-red-100"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Nr: {cert.number}</p>
                  <p className="text-xs text-gray-500">{cert.authority}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-r from-white via-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
                Vizitează-ne
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Adresa</h3>
                    <p className="text-gray-700">Radu Beller nr. 31</p>
                    <p className="text-gray-700">Sector 1, București</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Program</h3>
                    <p className="text-gray-700">Luni - Vineri: 09:00 - 18:00</p>
                    <p className="text-gray-700">Sâmbătă: 10:00 - 16:00</p>
                    <p className="text-gray-700">Duminică: Închis</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                    <p className="text-gray-700">+40 123 456 789</p>
                    <p className="text-gray-700">info@skinlips.ro</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                    <Calendar className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    Programează Consultația
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=500&text=Clinic+Location+Map"
                  alt="Locația Clinicii SkinLips"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Centrul Bucureștiului
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-100 via-rose-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-red-100">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-red-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Alătură-te Familiei SkinLips
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Descoperă de ce mii de pacienți ne-au ales pentru transformarea lor. Consultația inițială este gratuită!
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
              <Link href="/galerie">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Vezi Rezultatele
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
