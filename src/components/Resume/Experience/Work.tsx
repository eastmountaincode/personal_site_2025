import WorkCard from './WorkCard'
import workData from '../../../data/work.json'
import { WorkData } from '../../../types/work'

function Work() {
  const { work } = workData as WorkData

  return (
    <div>
      <h2 className="text-2xl mb-6">Work Experience</h2>
      <div>
        {work.map((job, index) => (
          <WorkCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            dateText={job.dateText}
            tags={job.tags}
            description={job.description}
            images={job.images}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
