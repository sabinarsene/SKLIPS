"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden bg-white/95 backdrop-blur-md shadow-2xl border-0">
        <CardHeader className="relative bg-gradient-to-r from-red-50 to-pink-50 border-b border-red-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-red-800 bg-clip-text text-transparent">
                  Coșul Meu
                </CardTitle>
                <p className="text-sm text-gray-600">
                  {state.itemCount} {state.itemCount === 1 ? "produs" : "produse"}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Coșul este gol</h3>
              <p className="text-gray-600 mb-6">Adaugă produse pentru a începe cumpărăturile</p>
              <Link href="/magazin">
                <Button
                  onClick={onClose}
                  className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700"
                >
                  Explorează Produsele
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="max-h-96 overflow-y-auto p-6 space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-white to-red-50/30 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300"
                  >
                    <img
                      src={`/placeholder.svg?height=80&width=80&text=${item.image}`}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg shadow-md"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">{item.title}</h4>
                      <Badge variant="secondary" className="text-xs bg-red-50 text-red-700 mt-1">
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="font-bold text-red-600">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-white rounded-lg border border-red-200 p-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0 hover:bg-red-50 hover:text-red-600"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 p-0 text-gray-400 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-red-100 p-6 bg-gradient-to-r from-red-50/50 to-pink-50/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-red-600">{getCartTotal()}</span>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                  >
                    Golește Coșul
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex-1 bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 hover:from-red-700 hover:via-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    Finalizează Comanda
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <p className="text-xs text-gray-600 text-center mt-3">Livrare gratuită pentru comenzi peste 200 lei</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
