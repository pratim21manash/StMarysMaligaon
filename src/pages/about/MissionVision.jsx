import React from 'react';
import { Target, Eye, Sparkles } from 'lucide-react';

const MissionVision = () => {
  return (
    <div>
      {/* Custom Header – no breadcrumbs */}
      <div className="bg-maroon-900 text-white py-12 px-4">
        <div className="container-custom mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Mission &amp; Vision</h1>
          <p className="text-gold-300 text-lg mt-2">Inspired by the Salesian spirit of Don Bosco</p>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gold-500 px-6 py-4 flex items-center gap-3">
                <Target className="text-maroon-900" size={24} />
                <h2 className="font-serif text-2xl font-bold text-maroon-900">Our Mission</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  St. Mary’s School, Maligaon is committed to making the integral formation accessible to
                  young girls of diverse backgrounds. Our mission is to provide a child-centered learning
                  environment within a family atmosphere, that embodies the Salesian philosophy of
                  <strong className="text-maroon-800"> reason, religion and loving kindness</strong> as
                  taught by St. John Bosco and St. Mary Domenica Mazzarello following the footsteps of
                  Jesus Christ. We motivate our students to develop their potential and to dedicate
                  themselves to academic excellence, faith, leadership and service as they take their
                  place in our rapidly changing and pluralistic society.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-maroon-800 px-6 py-4 flex items-center gap-3">
                <Eye className="text-gold-400" size={24} />
                <h2 className="font-serif text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  We envisage our students to become intellectually enlightened, morally upright,
                  spiritually oriented, emotionally balanced, socially committed, patriotic, eco-friendly
                  and accomplished, in a word,{' '}
                  <strong className="text-maroon-800">integrally developed young women</strong> who will
                  be agents of social transformation in the multi-cultural, multi-religious context of
                  our nation.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Intellectually enlightened</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Morally upright</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Spiritually oriented</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Emotionally balanced</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Socially committed</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Patriotic</span>
                  <span className="bg-maroon-50 text-maroon-800 text-xs px-3 py-1 rounded-full">Eco-friendly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Quote / Motto */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white px-8 py-4 rounded-full shadow-lg border border-gold-200">
              <Sparkles className="inline text-gold-500 mr-2" size={20} />
              <span className="text-maroon-900 font-serif text-lg font-semibold">
                “Reason, Religion, Loving Kindness”
              </span>
              <Sparkles className="inline text-gold-500 ml-2" size={20} />
            </div>
            <p className="text-gray-500 text-sm mt-3 italic">— The Salesian Educational Philosophy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;