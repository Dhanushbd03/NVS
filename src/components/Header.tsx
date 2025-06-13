import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from "@/components/ThemeToggleButton" // Added import

const mainNavLinks = [
  { href: "#", label: "SHOP" },
  { href: "#", label: "MEN" },
  { href: "#", label: "WOMEN" },
  { href: "#", label: "TRENDING" },
];

const secondaryNavLinks = [
  { href: "#", label: "SEASONAL" },
  { href: "#", label: "ACCESSORIES" },
];

export default function Header() { // Changed to named function
        return (
            <header className="bg-[var(--geysar)]/80 backdrop-blur-sm rounded-t-3xl overflow-hidden sticky top-0"> {/* Explicitly use var(--geysar) */}
              <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 relative">
                  <nav className="hidden md:flex items-center space-x-8">
                    {mainNavLinks.map((link) => (
                      <a key={link.label} href={link.href} className="text-sm font-medium text-foreground hover:text-foreground/80">
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <div className="flex justify-center items-center bg-card absolute left-1/2 -translate-x-1/2 h-full w-96 bottom-1"
                       style={{ clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)' }}>
                      <span className="text-2xl font-bold tracking-wider text-card-foreground">NVS</span>
                  </div>          

                  <div className="flex items-center space-x-4"> {/* Adjusted space-x from 6 to 4 to accommodate button */}
                    <nav className="hidden md:flex items-center space-x-6">
                      {secondaryNavLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-sm font-medium text-foreground hover:text-foreground/80">
                          {link.label}
                        </a>
                      ))}
                    </nav>
                    <ThemeToggleButton /> {/* Added ThemeToggleButton */}
                    <Button variant="default" className="rounded-full px-6"> {/* Assuming default variant is themed. */}
                      <span className="mr-2">SIGN IN / UP</span>
                      <div className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center">
                        <ShoppingCart className="w-3 h-3" />
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </header>
        )
      }