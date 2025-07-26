import Image from "next/image"
import Card from "../../components/Card"

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>

      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deepayan Das</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a software engineer passionate about building scalable and maintainable web applications. With a strong
            background in computer science and years of hands-on experience, I enjoy tackling complex problems and
            crafting elegant solutions.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            My expertise lies in full-stack development, and I am proficient in technologies such as React, Node.js, and
            PostgreSQL. I am always eager to learn new technologies and stay up-to-date with the latest industry trends.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96">
          <Image
            src="/images/profile.jpeg"
            alt="Deepayan Das"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Software Engineer"
            company="Tech Solutions Inc."
            date="2020 - Present"
            description="Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams to deliver high-quality software solutions."
          />
          <Card
            title="Web Developer Intern"
            company="WebDev Studios"
            date="Summer 2019"
            description="Assisted in the development of responsive websites and web applications. Gained experience in HTML, CSS, and JavaScript."
          />
        </div>
      </div>

      {/* Education */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Master of Science in Computer Science"
            company="University of Technology"
            date="2018 - 2020"
            description="Specialized in software engineering and database management. Conducted research on scalable web architectures."
          />
          <Card
            title="Bachelor of Science in Computer Science"
            company="State University"
            date="2014 - 2018"
            description="Completed coursework in data structures, algorithms, and software design. Participated in various programming competitions."
          />
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Certified Scrum Master (CSM)"
            company="Scrum Alliance"
            date="2021"
            description="Demonstrated knowledge of Scrum principles and practices. Ability to facilitate Scrum events and coach teams."
          />
          <Card
            title="AWS Certified Developer – Associate"
            company="Amazon Web Services"
            date="2020"
            description="Proficiency in developing and deploying applications on the AWS platform. Understanding of AWS services and best practices."
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
