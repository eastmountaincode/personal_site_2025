import TimeElapsed from "./TimeElapsed"

type WorkCardProps = {
  title: string
  company: string
  location: string
  dateText: string
  tags: string[]
  description: string[]
  images: string[]
}

function WorkCard({
  title,
  company,
  location,
  dateText,
  tags,
  description,
  images
}: WorkCardProps) {
  const getImageUrl = (imageName: string) => {
    return new URL(`../../../assets/work_images/${imageName}`, import.meta.url).href
  }

  return (
    <div className="mb-4 p-6 rounded-lg bg-gray-900 flex flex-col gap-6">
      {/* Featured Image */}
      {images?.length > 0 && (
        <div className="flex">
          <img
            src={getImageUrl(images[0])}
            alt={`${company} logo`}
            className="rounded-lg object-contain h-[65px]"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 ms-1">
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-xl text-gray-300">{company}</p>
            <p className="text-gray-400">{location}</p>
          </div>
          {title === "Bioinformatics Specialist" ? (
            <TimeElapsed />
          ) : (
            <span className="text-gray-400 mt-2 md:mt-0">{dateText}</span>
          )}
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
      </div>
    </div>
  )
}

export default WorkCard
