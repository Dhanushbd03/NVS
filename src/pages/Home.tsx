import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import homepage from "@/assets/model-homepage.png"
import vid from "@/assets/homepage.mp4"
import { AvatarPreviewList } from "@/components/AvatarPreviewList"; // Import new component

export default function Hero() {
  return (
    <div className="relative w-full bg-[#d9e3e6] dark:bg-gray-800 overflow-hidden"> {/* Added dark mode for this specific bg color */}
      <div className="container px-4 py-16 md:py-24 relative z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side with thumbnails and text */}
          <div className="md:col-span-3 flex flex-col justify-center space-y-8">
            <AvatarPreviewList count={3} /> {/* Use the new component */}
            <div className="text-sm text-muted-foreground max-w-xs">
              <p>
                Stay cozy without compromising your range of motion. Our women&apos;s winter range is perfect for those
                chilly outdoor workouts.
              </p>
            </div>
          </div>

          {/* Center with main content */}
          <div className="md:col-span-6 flex flex-col items-center justify-between">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase text-foreground">
                Gear up every season
                <br />
                every wor<span className="opacity-30">ld</span>
              </h1>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button variant="default" className="rounded-full hover:bg-primary/90">
                Shop now
              </Button>
              <Button variant="outline" className="rounded-full text-accent-foreground border-border hover:bg-accent/10">
                Explore all
              </Button>
            </div>

            <div className="relative w-full max-w-md mx-auto">
              <img
                src={homepage}
                alt="Model wearing winter gear"
                className="mx-auto w-full h-full object-cover zoom-in-150"
                
              />
            </div>
          </div>

          {/* Right side with video */}
          <div className="md:col-span-3 flex items-center justify-center">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
              <video
                src={vid}
                controls
                poster={homepage}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/20 dark:bg-black/20 blur-3xl"></div>
      </div>
    </div>
  )
}
