type EducationCardProps = {
    school: string
    degree: string
    location: string
    dateText: string
    description?: string[]
    gpa?: string
    selectedCoursework?: string[]
    images: string[]
    starred?: boolean
}

function EducationCard({
    school,
    degree,
    location,
    dateText,
    description,
    gpa,
    selectedCoursework,
    images,
    starred
}: EducationCardProps) {
    const getImageUrl = (imageName: string) => {
        return new URL(`../../../assets/education_images/${imageName}`, import.meta.url).href
    }

    return (
        <div className={`mb-4 p-6 rounded-lg bg-gray-900 flex flex-col gap-4`}>
            {/* Featured Image */}
            {images.length > 0 && (
                <div className="flex">
                    <img
                        src={getImageUrl(images[0])}
                        alt={`${school} logo`}
                        className="rounded-lg object-contain h-[75px] w-[75px]"
                    />
                </div>
            )}

            {/* Content Section */}
            <div className="flex-1 ms-1">
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-4">
                    <div>
                        <div className="flex items-center gap-2">
                            {starred && <span className="text-yellow-400 text-2xl">★</span>}
                            <h3 className="text-2xl font-semibold">{school}</h3>
                        </div>
                        <p className="text-xl text-gray-300">{degree}</p>
                        <p className="text-gray-400">{location}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{dateText}</span>
                </div>


                {description && (
                    <ul className="list-disc pl-4 mb-4">
                        {description.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>
                )}

                {gpa && (
                    <p className="mb-4 font-semibold">
                        GPA: <span className="text-gray-400">{gpa}</span>
                    </p>
                )}

                {selectedCoursework && (
                    <div className="mb-4">
                        <p className="font-semibold mb-2">Selected Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedCoursework.map((course, index) => (
                                <span key={index} className="px-3 py-1 text-sm bg-gray-800 rounded-full">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EducationCard
