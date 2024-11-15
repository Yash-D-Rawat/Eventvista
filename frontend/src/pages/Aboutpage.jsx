import React from 'react';
import { Users, Target, Calendar, School, Award } from 'lucide-react';
import { motion } from 'framer-motion';

function AboutPage() {
  const teamMembers = [
    { name: "Jheel Parikh", role: "Frontend Developer", imgUrl: "/images/jheel.jpeg" },
    { name: "Soham Parekh", role: "Backend Developer", imgUrl: "/images/soham.jpeg"},
    { name: "Yash Rawat", role: "Full Stack Developer", imgUrl: "/images/yashrawat.png"},
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