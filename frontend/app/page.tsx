// import Navbar from "../components/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-5xl font-bold mb-6">
//           Real-Time Face Recognition
//         </h1>

//         <p className="text-lg text-gray-700">
//           Detect, recognize, and track attendance live.
//         </p>
//       </div>
//     </>
//   );
// }
"use client";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
  <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 animate-bounce">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">AI-Powered • Live Demo</span>
            <span className="text-sm">✨</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
            Real-Time Face Recognition
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Detect, recognize, and track attendance live with cutting-edge AI technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Start Recognition
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>

            <button className="group px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {[
              { value: "99.7%", label: "Accuracy Rate", icon: "📈", color: "from-blue-500 to-blue-600" },
              { value: "2.5s", label: "Avg. Recognition", icon: "⏱️", color: "from-purple-500 to-purple-600" },
              { value: "100K+", label: "Users Tracked", icon: "👥", color: "from-cyan-500 to-cyan-600" },
              { value: "24/7", label: "Live Monitoring", icon: "🛡️", color: "from-green-500 to-green-600" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <span className="text-lg">{stat.icon}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <span className="text-green-500">✓</span>
              <span>Enterprise Grade Security</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⚡</span>
              <span>Real-Time Processing</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-500">✓</span>
              <span>99.7% Accuracy</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Everything you need for accurate and efficient face recognition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "📷",
                title: "Face Detection",
                description: "Instantly detect and identify faces in real-time video streams with high accuracy.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "👥",
                title: "Attendance Tracking",
                description: "Automatically log attendance with timestamp and employee identification.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: "⏱️",
                title: "Real-Time Processing",
                description: "Process face recognition in milliseconds for seamless user experience.",
                color: "from-cyan-500 to-cyan-600",
              },
              {
                icon: "🛡️",
                title: "Secure & Private",
                description: "Enterprise-grade security with data encryption and privacy protection.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Get detailed insights with visual analytics and attendance reports.",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: "✅",
                title: "Easy Integration",
                description: "Seamlessly integrate with your existing systems and workflows.",
                color: "from-pink-500 to-pink-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Trusted Worldwide</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our Face Recognition?
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                Built with cutting-edge AI technology, our face recognition system ensures accuracy, speed, and reliability for all your attendance needs.
              </p>

              <div className="space-y-3">
                {[
                  "State-of-the-art deep learning algorithms",
                  "Real-time recognition with 99.7% accuracy",
                  "Secure and encrypted data storage",
                  "Customizable for any organization size",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:translate-x-2 transition-transform duration-300">
                    <div className="bg-blue-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="flex items-center gap-2">
                  Get Started Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "500+", label: "Enterprise Clients" },
                      { value: "1M+", label: "Daily Recognitions" },
                      { value: "98%", label: "Customer Satisfaction" },
                      { value: "50+", label: "Countries Using It" },
                    ].map((stat, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Attendance System?
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using our face recognition system for accurate and efficient attendance tracking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-2">
                Try It Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button className="group px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300">
              Contact Sales
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </div>
      </section>

    </div>
  </>
);
}