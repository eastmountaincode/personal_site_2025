import { useEffect, useState } from "react";
import Timeline from "./Timeline";
import yaml from "js-yaml";
import andrewImage from '../../assets/andrew_eye-min.jpg'

function About() {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    fetch("/src/data/about.yaml")
      .then((res) => res.text())
      .then((text) => setAboutData(yaml.load(text)));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  // Icon mapping (replace with your SVGs as needed)
  const iconMap: Record<string, JSX.Element> = {
    software: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    ai: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    creative: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    personal: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
      </svg>
    ),
  };

  return (
    <div className="transition-colors duration-1000 flex flex-col items-center p-3">
      <div className="prose-lg md:prose-xl">
        <h2>{aboutData.title}</h2>
      </div>
      <figure className="mt-8 mb-2 max-w-sm">
        <img
          src={andrewImage}
          alt={aboutData.image.alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <figcaption className="text-center mt-3 text-gray-600 italic">
          And now a word from our sponsor
        </figcaption>
      </figure>
      <Timeline />
      {aboutData.sections.map((section: any, idx: number) => (
        <div key={idx} className="mt-12 max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            {iconMap[section.icon]}
            <h3 className="text-xl font-semibold">{section.heading}</h3>
          </div>
          <p className="text-lg leading-relaxed">{section.text}</p>
        </div>
      ))}
    </div>
  );
}

export default About
