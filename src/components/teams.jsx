function Team() {
  const team = {
    Leads: [
      {
        name: "Ritovan Dasgupta",
        title: "Lead Organizer",
        photo: "/teams/ritovan.jpg",
      },
      {
        name: "Velicharla Madhu Sravani",
        title: "Co-Lead Organizer",
        photo: "/teams/madhu.jpg", // Replace with actual photo URL
      },
      {
        name: "Shriansh Jain",
        title: "Executive Producer",
        photo: "/teams/shriansh.jpeg", // Replace with actual photo URL
      },
      {
        name: "Sahal Ansar",
        title: "Creative Director",
        photo: "/teams/sahal.jpeg", // Replace with actual photo URL
      }
    ],
    "Core Team": [
      {
        name: "Vedant Kesarwani",
        title: "Website Team",
        photo: "/teams/vedant.jpg", // Replace with actual photo URL
      },
      {
        name: "Reddi Abhiram",
        title: "Video Production Team",
        photo: "/teams/abhiram.jpg", // Replace with actual photo URL
      },
      {
        name: "Badugu Rakshitha",
        title: "Design Team",
        photo: "/teams/rakshitha.jpg", // Replace with actual photo URL
      },
      {
        name: "Sham Gagan Siddharth",
        title: "Design Team",
        photo: "/teams/sham_gagan.jpeg", // Replace with actual photo URL
      },
      {
        name: "Krishna Suryawanshi",
        title: "Operation Team",
        photo: "/teams/suryawanshi.jpg", // Replace with actual photo URL
      },
      {
        name: "Viksa Mote",
        title: "Marketing Team",
        photo: "/teams/viksa.png", // Replace with actual photo URL
      },
      {
        name: "Mohammed Husaamuddin Ahmed",
        title: "Speaker Curation Team",
        photo: "/teams/husaam.jpg", // Replace with actual photo URL
      },
    ],
  };

  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-red-950 pt-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Team Sections */}
        {Object.entries(team).map(([category, members], index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {category}
              </h2>
              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 group-hover:brightness-110"
                  />
                  <h3 className="text-xl font-bold text-gray-300 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.title}</p>
                  <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-4 border-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Team;
