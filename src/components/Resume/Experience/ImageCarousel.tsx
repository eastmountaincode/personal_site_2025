import { useState } from "react"

type ImageCarouselProps = {
    images: string[]
    title: string
  }
  
  function ImageCarousel({ images, title }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  
    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  
    const getImageUrl = (imageName: string) => {
      return new URL(`../../../assets/project_images/${imageName}`, import.meta.url).href
    }
  
    return (
      <div className="relative w-1/3 min-w-[300px] h-[400px]">
        <img
          src={getImageUrl(images[currentImageIndex])}
          alt={`${title} screenshot ${currentImageIndex + 1}`}
          className="rounded-lg w-full h-full object-contain bg-gray-800"
        />
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={prevImage}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
          >
            ←
          </button>
          <button
            onClick={nextImage}
            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
          >
            →
          </button>
        </div>
      </div>
    )
  }
  
  export default ImageCarousel
  