// import differentfact from "../api/different.json"
// export const Home=()=>{
//     return<> <main className="mainsection">
//         <div className="container mainparent">
//             <div className="main-img">
//              <img src="/images/homeimage.png" alt="" className="imagemain"/>
//             </div>
//             <div className="main-content">
//                <div className="mainheading">
//                  <h1>
//                          Take your  <span style={{ color: "#813B06" }}>First step </span> for better  <span style={{ color: "#813B06" }}>mental health now</span> 
//                 </h1>
//                </div>
//                 <div className="mainpara">
//                     <p>
//                     Every soul deserves to be happy — now it's your turn. Drishti, is here to guide you toward calm, clarity, and emotional balance.
//                 </p>
//                 </div>
//                 <div className="mainbutton">
//                     <button className="button">
//                     Start Your Journey
//                 </button>
//                 </div>
//             </div>
//         </div>
//     </main>
//     <div className="main2">
//         <div className="container main2content">
//             <h1>Feeling stuck in your life?</h1>
//             <h1>Anxiety levels high and mood low?</h1>
//             <h1>You are not alone!</h1>
//         </div>
//     </div>
//     <div className="aboutcon">
//         <div className="container about">
//   <div className="abouth1">
//     <h1>About Us</h1>
//   </div>

//   <div className="aboutcontent">
//     <div className="about-text">
//       <p>
//         At Drishti, we believe that mental well-being is just as important as physical health. Born out of a deep concern for the rising mental health challenges faced by youth and working professionals, Drishti is an AI-powered platform designed to <span style={{ color: "#813B06" }}>identify early signs of stress, anxiety, and depression</span> using behavioral patterns, voice sentiment, and digital interaction cues.
//         Our mission is to make emotional support accessible, personal, and stigma-free. <span style={{ color: "#813B06" }}>Drishti</span> offers personalized, science-backed tools to <span style={{ color: "#813B06" }}>help individuals regain balance and inner peace.</span>
//       </p>
//     </div>

//     <div className="about-image">
//       <img src="/images/about.jpg" alt="Meditation" />
//     </div>
//   </div>
// </div>
//     </div>
//     <div className="main3">
//         <div className="container main3content">
//             <h1>What Make Us Different</h1>
//         </div>
//     </div>
//     <div className="differntmain">
//      <div className="container different">
//         {
//             differentfact.map((diff)=>{
//                 const {id,title,pic,content}=diff
//                 return(
//                 <div className="card" key={id}>
//             <h1>{title}</h1>
//             <img src={pic}alt=""
//             />
//             <p>{content}</p>
//         </div>)
//             })
//         }
//      </div>
//     </div>
//     </>
// }
import { motion } from "framer-motion";
import differentfact from "../api/different.json";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image on the left (always) */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/homeimage.png"
                alt="home"
                className="w-full max-w-md mx-auto md:mx-0 lg:ml-20"
              />
            </motion.div>

            {/* Content on the right */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
                Take your <span style={{ color: "#813B06" }}>First step </span> for better{" "}
                <span style={{ color: "#813B06" }}>mental health now</span>
              </h1>
              <p className="mt-4 text-lg text-gray-700 text-center md:text-left">
                Every soul deserves to be happy — now it's your turn. <strong>Drishti</strong> is here to guide you toward calm, clarity, and emotional balance.
              </p>
              <div className="mt-6 flex justify-center md:justify-start">
                <button className="px-6 py-3 bg-[#813B06] text-white rounded hover:bg-[#682f04] transition">
                  Start Your Journey
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Motivational Lines Section */}
      <section className="bg-[#9a5018] py-10">
        <div className="container mx-auto px-4 text-center space-y-3 text-xl font-semibold text-[#fffaf6]">
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Feeling stuck in your life?
          </motion.h1>
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            Anxiety levels high and mood low?
          </motion.h1>
          <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            You are not alone!
          </motion.h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          {/* About Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 text-lg">
              At <span style={{ color: "#813B06" }}>Drishti</span>, we believe that mental well-being is just as important as physical health.
              Born out of a deep concern for the rising mental health challenges faced by youth and working professionals,
              Drishti is an AI-powered platform designed to{" "}
              <span style={{ color: "#813B06" }}>identify early signs of stress, anxiety, and depression</span> using behavioral patterns, voice sentiment, and digital interaction cues.
              <br /><br />
              Our mission is to make emotional support accessible, personal, and stigma-free. <span style={{ color: "#813B06" }}>Drishti</span> offers personalized, science-backed tools to{" "}
              <span style={{ color: "#813B06" }}>help individuals regain balance and inner peace.</span>
            </p>
          </motion.div>

          {/* About Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/about.jpg"
              alt="Meditation"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="bg-[#fef6f1] py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#813B06] mb-10">
            What Makes Us Different
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentfact.map((diff, index) => (
              <motion.div
                key={diff.id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#813B06]">{diff.title}</h3>
                <img
                  src={diff.pic}
                  alt={diff.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <p className="text-gray-600">{diff.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
