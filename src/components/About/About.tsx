import Timeline from "./Timeline";
import andrewImage from '../../assets/andrew_eye-min.jpg';

function About() {
  return (
    <div className="transition-colors duration-1000 flex flex-col items-center p-3">
      <div className="prose-lg md:prose-xl">
        <h2>About Me</h2>
      </div>
      <figure className="mt-8 mb-2 max-w-sm">
        <img
          src={andrewImage}
          alt="Andrew taking a phone call at MassMOCA"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <figcaption className="text-center mt-3 text-gray-600 italic">
          And now a word from our sponsor
        </figcaption>
      </figure>
      <Timeline />

    </div>
  );
}

export default About
