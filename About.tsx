// import styles from "../app/";
// import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-6">About Me</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hi, I am NOOR </h2>
          <p className="text-lg">
            Im a passionate web developer with a love for building beautiful and functional websites. I specialize in
            front-end technologies like React, Next.js, and Tailwind CSS, and I love creating user-friendly designs that
            bring ideas to life. My goal is to continuously learn and grow as a developer while working on exciting
            projects with others.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Skills & Technologies</h3>
          <ul className="list-inside list-disc space-y-2 text-lg">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
            <li>RESTful APIs</li>
          </ul>
        </section>

        <section className="text-center">
          <p className="text-lg mb-4">
            If youd like to work with me or just want to say hello, feel free to reach out!
          </p>
          {/* <Link href="/contact">
            <a className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
              Get in Touch
            </a>
          </Link> */}
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
