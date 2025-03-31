import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create a sample CV 1
  const cv1 = await prisma.cV.create({
    data: {
      personalInformation: {
        create: {
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice.smith@example.com',
          phone: '+49 123 456789',
          location: 'Berlin, Germany',
          linkedinUrl: 'linkedin.com/in/alicesmith',
          githubUrl: 'github.com/alicesmith',
        },
      },
      summary: {
        create: {
          text: 'Highly motivated software engineer with 5+ years of experience in developing web applications...',
        },
      },
      experience: {
        createMany: {
          data: [
            {
              jobTitle: 'Senior Software Engineer',
              company: 'Tech Solutions Inc.',
              location: 'Berlin, Germany',
              startDate: new Date('2020-01-01'),
              endDate: null,
              description: 'Led a team of 5 engineers...',
            },
            {
              jobTitle: 'Software Engineer',
              company: 'Innovate Software Ltd.',
              location: 'Munich, Germany',
              startDate: new Date('2018-06-01'),
              endDate: new Date('2019-12-31'),
              description: 'Developed and maintained backend APIs...',
            },
          ],
        },
      },
      education: {
        createMany: {
          data: [
            {
              institution: 'Technical University of Berlin',
              degree: 'Master of Science',
              major: 'Computer Science',
              startDate: new Date('2016-09-01'),
              endDate: new Date('2018-05-31'),
            },
            {
              institution: 'University of Stuttgart',
              degree: 'Bachelor of Science',
              major: 'Software Engineering',
              startDate: new Date('2013-09-01'),
              endDate: new Date('2016-08-31'),
            },
          ],
        },
      },
      skills: {
        createMany: {
          data: [
            { name: 'Java', level: 'Expert' },
            { name: 'Spring Boot', level: 'Expert' },
            { name: 'TypeScript', level: 'Proficient' },
            { name: 'React', level: 'Proficient' },
            { name: 'SQL', level: 'Advanced' },
            { name: 'Docker', level: 'Intermediate' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: 'E-commerce Platform',
              description: 'Developed a scalable e-commerce platform using microservices...',
              technologies: 'Java',
              liveUrl: 'ecommerce.example.com',
              githubUrl: 'github.com/alicesmith/ecommerce',
            },
            {
              name: 'Mobile Task Manager App',
              description: 'Created a cross-platform mobile app for task management...',
              technologies: 'React Native',
              githubUrl: 'github.com/alicesmith/task-manager',
            },
          ],
        },
      },
    },
  });

  console.log({ cv1 });

  // Create a sample CV 2 (you can add more as needed)
  const cv2 = await prisma.cV.create({
    data: {
      personalInformation: {
        create: {
          firstName: 'Bob',
          lastName: 'Johnson',
          email: 'bob.johnson@example.com',
          phone: '+49 987 654321',
          location: 'Munich, Germany',
          linkedinUrl: 'linkedin.com/in/bobjohnson',
          githubUrl: 'github.com/bobjohnson',
        },
      },
      summary: {
        create: {
          text: 'Experienced frontend developer specializing in React and Vue.js...',
        },
      },
      experience: {
        createMany: {
          data: [
            {
              jobTitle: 'Frontend Lead',
              company: 'Web Design Agency',
              location: 'Munich, Germany',
              startDate: new Date('2021-03-01'),
              endDate: null,
              description:'Mentored junior developers...',
            },
          ],
        },
      },
      education: {
        createMany: {
          data: [
            {
              institution: 'Ludwig Maximilian University of Munich',
              degree: 'Bachelor of Arts',
              major: 'Web Development',
              startDate: new Date('2017-09-01'),
              endDate: new Date('2021-02-28'),
            },
          ],
        },
      },
      skills: {
        createMany: {
          data: [
            { name: 'HTML', level: 'Expert' },
            { name: 'CSS', level: 'Expert' },
            { name: 'JavaScript', level: 'Expert' },
            { name: 'React', level: 'Expert' },
            { name: 'Vue.js', level: 'Proficient' },
            { name: 'Tailwind CSS', level: 'Advanced' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: 'Portfolio Website',
              description: 'Developed a personal portfolio website showcasing skills and projects...',
              technologies: 'React',
              liveUrl: 'bobjohnson.dev',
              githubUrl: 'github.com/bobjohnson/portfolio',
            },
          ],
        },
      },
    },
  });

  console.log({ cv2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
