interface TimelineItem {
    period: string;
    description: string;
  }
  
  const timelineData: TimelineItem[] = [
    {
      period: "2014 - 2017",
      description: "Studied printmaking and art history at the San Francisco Art Institute."
    },
    {
      period: "2017 - 2019",
      description: "Moved to Cincinnati to pursue music, toured with WHY? and Tomberlin, performed on Tiny Desk."
    },
    {
      period: "2019 - 2021",
      description: "Began my programming journey. Compled a bachelor's degree in sociology at the University of Cincinnati, while working as a research assistant at UC's Digital Scholarship Center."
    },
    {
      period: "2021 - 2024",
      description: "Moved to Boston and completed my master's degree in computer science at Northeastern University."
    },
    {
      period: "Currently",
      description: "Working as a Bioinformatics Specialist at Massachusetts General Hospital."
    }
  ];
  
  function Timeline() {
    return (
      <div className="mt-8 max-w-xl mx-auto mb-8">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold">Timeline</h3>
        </div>
  
        <ul className="list-none space-y-4">
          {timelineData.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="mt-6 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-mono">{item.period}</span>
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Timeline;
  