function About() {
  return (
    <div className="transition-colors duration-1000 flex flex-col items-center p-3">
      <div className="prose-lg md:prose-xl">
        <h2>About Me</h2>
      </div>

      <div className="mt-8 max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold">Timeline</h3>
        </div>

        <ul className="list-none space-y-4">
          <li className="flex items-start gap-4">
            <span className="mt-6 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-mono">2014 - 2017</span>
              <span>Studied printmaking and art history at the San Francisco Art Institute.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-6 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-mono">2017 - 2019</span>
              <span>Moved home to Cincinnati to pursue music, toured with WHY? and Tomberlin, performed on Tiny Desk.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-6 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-mono">2019 - 2021</span>
              <span>Went back to school at University of Cincinnati, became interested in natural language processing, became a research assistant at the UC Digital Scholarship Center.</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="mt-6 w-2 h-2 rounded-full bg-gray-400 shrink-0"></span>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-mono">2021 - 2024</span>
              <span>Moved to Boston and completed a master's degree in computer science at Northeastern University.</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          <h3 className="text-xl font-semibold">Software Engineering</h3>
        </div>

        <p className="text-lg leading-relaxed">
          As a software engineer, I enjoy working in many different domains, which is why I am drawn to full-stack development. I enjoy creating functional things for other people to use. I envision that my dream role would be on a small team of individuals who care about doing excellent work, at a small to medium size organization.
        </p>
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
          </svg>
          <h3 className="text-xl font-semibold">Creative Practice</h3>
        </div>

        <p className="text-lg leading-relaxed">
          In my creative practice, I explore community play, aiming to create spaces for unexpected outcomes in digital environments. Rather than producing an artifact, my work investigates how to bring about a generative space - creating circumstances for the audience to be creative, and dissolving the notion of "audience" to begin with.
        </p>
      </div>

      <div className="mt-12 max-w-xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          <h3 className="text-xl font-semibold">Personal Life</h3>
        </div>

        <p className="text-lg leading-relaxed">
          In my personal life, I work on an organic farm on the weekends in the warmer months (where I also assist with things like graphic design and website maintenance). I enjoy seeing live music in Boston from around the world, and eating a full Turkish breakfast, ideally.
        </p>
      </div>
    </div>
  )
}

export default About
