import React from 'react';
import { BookOpen, Brain, Heart as HeartIcon, Sun, Users } from 'lucide-react';

const EducationalApproach = () => {
  return (
    <div>
      {/* Custom Header – no breadcrumbs */}
      <div className="bg-maroon-900 text-white py-12 px-4">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Educational Approach</h1>
          <p className="text-gold-300 text-lg mt-2">The Salesian Preventive System</p>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-10 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg">
              The system of education followed in the schools run by the Salesian Sisters is the{' '}
              <strong className="text-maroon-800">Preventive System</strong> which is based on three
              great principles of{' '}
              <span className="font-semibold text-maroon-700">Reason</span>,{' '}
              <span className="font-semibold text-maroon-700">Religion</span> and{' '}
              <span className="font-semibold text-maroon-700">Loving Kindness</span> which create the
              educational climate of the school. The Sisters, Teachers, Parents and Students constitute
              an integral unit known as the{' '}
              <strong className="text-maroon-800">Educating Community</strong> whose primary aim is to
              form the young to become builders of an honest society, women of upright thinking and
              acting, commitment and competence.
            </p>
          </div>

          {/* Three Principles */}
          <div className="space-y-8">
            {/* Reason */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-50 px-6 py-4 flex items-center gap-3 border-b border-blue-100">
                <Brain className="text-blue-700" size={28} />
                <h2 className="font-serif text-2xl font-bold text-maroon-900">Reason</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stands for a wise and progressive enlightenment of the minds of the young, opening them
                  to the world of culture, the realities of life and the appeal of values. Reason also
                  implies a clear enlightenment of the mind on the truths concerning God and moral
                  behaviour by a sound and systematic moral education.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In dealing with the young, reason also signifies <strong>reasonableness</strong>, good
                  sense, simplicity, and avoidance of anything artificial. The rules of good behaviour
                  inculcated must be reasonable and essential; they must be patiently brought home to the
                  young. Reason in the context also means <strong>persuasiveness</strong> and{' '}
                  <strong>dialogue</strong>, and formation of the conscience to personal responsibility
                  and freedom.
                </p>
              </div>
            </div>

            {/* Religion */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-amber-50 px-6 py-4 flex items-center gap-3 border-b border-amber-100">
                <Sun className="text-amber-600" size={28} />
                <h2 className="font-serif text-2xl font-bold text-maroon-900">Religion</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  Provides the motivation, the ultimate meaning, significance and orientation of a
                  project of life governed by Reason. For Don Bosco, the well educated person is one who
                  places the knowledge of God at the apex of all his knowledge; his eternal happiness
                  with God at the summit of his life project and submission to the will of God at the
                  center of his personal conscience.
                </p>
              </div>
            </div>

            {/* Loving Kindness */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-rose-50 px-6 py-4 flex items-center gap-3 border-b border-rose-100">
                <HeartIcon className="text-rose-600" size={28} />
                <h2 className="font-serif text-2xl font-bold text-maroon-900">Loving Kindness</h2>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Is rooted in the charity of Christ, the good Shepherd. It is the key that gives access
                  to the heart of every young person. There are very few people who rebel in the face of
                  genuine goodness. One gets discipline by using a blend of kindness and firmness, and by
                  never asking what is beyond the strength of the child.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Loving kindness in order to have a true educational value must be based on a healthy
                  equilibrium, which while surrounding the child with genuine love, avoids every form of
                  false affection, and renders the teacher-pupil relationship, a shared search for true
                  values. Don Bosco’s philosophy of education is summarized in this principle, which
                  explains, justifies and actuates it:{' '}
                  <span className="italic text-maroon-800 font-semibold">
                    “Education is a matter of the heart.”
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Motto / Quote */}
          <div className="mt-10 bg-maroon-800 text-white rounded-2xl p-6 md:p-8 text-center shadow-xl">
            <Users className="inline text-gold-400 mr-2" size={24} />
            <span className="font-serif text-xl font-semibold">The Educating Community</span>
            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Sisters, Teachers, Parents and Students – together forming young women of integrity,
              competence and commitment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationalApproach;