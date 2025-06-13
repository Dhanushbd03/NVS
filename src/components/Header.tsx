import {  ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

      export default function() {
        return (
            <header className="bg-geysar/80 backdrop-blur-sm   rounded-t-3xl overflow-hidden sticky top-0">
              <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 relative">
                  <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                      SHOP
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                      MEN
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                      WOMEN
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                      TRENDING
                    </a>
                  </nav>

                  <div className="flex justify-center items-center bg-white absolute left-1/2 -translate-x-1/2 h-full w-96 bottom-1"            
                       style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)' }}>
                      <span className="text-2xl font-bold tracking-wider">NVS</span>
                  </div>          

                  <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex items-center space-x-6">
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                        SEASONAL
                      </a>
                      <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                        ACCESSORIES
                      </a>
                    </nav>
                    <Button className="bg-black hover:bg-gray-800 text-white rounded-full px-6">
                      <span className="mr-2">SIGN IN / UP</span>
                      <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center">
                        <ShoppingCart className="w-3 h-3" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </header>
        )
      }