import EducationCard from './EducationCard'
import educationData from '../../../data/education.json'
import { EducationData } from '../../../types/education'

function Education() {
  const { education } = educationData as EducationData

  return (
    <div>
      <h2 className="text-2xl mb-6">Education</h2>
      <div>
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            school={edu.school}
            degree={edu.degree}
            location={edu.location}
            dateText={edu.dateText}
            description={edu.description}
            gpa={edu.gpa}
            selectedCoursework={edu.selectedCoursework}
            images={edu.images}
            starred={edu.starred}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
