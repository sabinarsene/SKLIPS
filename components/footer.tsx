import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "Acasă", href: "/" },
    { name: "Despre Noi", href: "/despre" },
    { name: "Servicii", href: "/servicii" },
    { name: "Galerie", href: "/galerie" },
    { name: "Magazin", href: "/magazin" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Programare", href: "/programare" },
    { name: "Contact", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Politica de Confidențialitate", href: "/privacy" },
    { name: "Termeni și Condiții", href: "/terms" },
    { name: "Politica Cookie-uri", href: "/cookies" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-pink-600/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                SkinLips
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-pink-500 mt-2"></div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Destinația ta premium pentru tratamente dermatologice și estetice avansate. Experimentează combinația
              perfectă între expertiza medicală și îngrijirea luxoasă.
            </p>
            <div className="flex items-center text-gray-300 hover:text-red-400 transition-colors">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Radu Beller nr. 31</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-red-400">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SkinLips. Toate drepturile rezervate.
            <span className="text-red-400 ml-2">Făcut cu ❤️ pentru frumusețea ta</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
