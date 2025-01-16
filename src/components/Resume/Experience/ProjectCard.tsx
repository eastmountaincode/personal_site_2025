import ImageCarousel from './ImageCarousel'

type ProjectCardProps = {
  title: string
  type: string
  dateText: string
  description: string[]
  tags: string[]
  link?: string
  images: string[]
}

function ProjectCard({ title, type, dateText, description, tags, link, images }: ProjectCardProps) {
  const getImageUrl = (imageName: string) => {
    return new URL(`../../../assets/project_images/${imageName}`, import.meta.url).href
  }

  return (
    <div className="mb-4 p-6 rounded-lg bg-gray-900 flex flex-col gap-6">
      {/* Featured Image */}
      {images.length > 0 && (
        <div className="flex">
          <img
            src={getImageUrl(images[0])}
            alt={`${title} screenshot`}
            className="rounded-lg object-contain h-[75px]"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 ms-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-400">{type}</p>
          </div>
          <span className="text-gray-400">{dateText}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm bg-gray-800 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <ul className="list-disc pl-4 mb-4">
          {description.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>

        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-purple-500/50 text-purple-400/80 rounded hover:bg-purple-500/20 hover:border-purple-400 transition-colors"
            >
              Live Link
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
