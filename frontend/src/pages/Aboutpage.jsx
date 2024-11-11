import React from 'react';
import { Users, Target, Calendar, School, Award } from 'lucide-react';
import { motion } from 'framer-motion';

function AboutPage() {
  const teamMembers = [
    { name: "Jheel Parikh", role: "Frontend Developer", imgUrl: "/images/jheel.jpeg" },
    { name: "Soham Parekh", role: "Backend Developer", imgUrl: "/images/soham.jpeg"},
    { name: "Team Member 3", role: "Event Manager", imgUrl: "data:image/jpeg;base64,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" },
    { name: "Shravani Nikam", role: "Database Administraitor", imgUrl: "/images/shravani.jpeg" },
    { name: "Team Member 5", role: "Community Manager", imgUrl: "data:image/jpeg;base64,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" }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="bg-teal-600 text-white py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">About EventVista</h1>
          <p className="text-lg leading-relaxed">
            EventVista is your premier platform for discovering and engaging with collegiate events across the nation. 
            We bridge the gap between event organizers and participants, making it easier than ever to explore 
            hackathons, case studies, cultural festivals, and e-sports competitions. Our platform empowers colleges 
            to showcase their events while enabling students to discover and participate in enriching experiences 
            that align with their interests.
          </p>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section 
        className="py-16 px-4 bg-teal-50"
        {...fadeIn}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Event Discovery</h3>
            <p className="text-gray-600">Find exciting events happening across colleges</p>
          </div>
          <div className="text-center p-6">
            <School className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">College Connect</h3>
            <p className="text-gray-600">Connect with institutions nationwide</p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
            <p className="text-gray-600">Seamless event registration process</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Filtering</h3>
            <p className="text-gray-600">Filter events as per your liking</p>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section 
        className="py-16 px-4"
        {...fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-8">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-6 bg-teal-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading platform that connects college events with passionate participants, 
                  fostering a vibrant community of learning and collaboration across educational institutions.
                </p>
              </div>
              <div className="p-6 bg-teal-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To simplify event discovery and participation while empowering colleges to showcase their 
                  initiatives, creating meaningful opportunities for student engagement and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-16 px-4 bg-teal-50"
        {...fadeIn}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="relative group">
                  <img 
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;