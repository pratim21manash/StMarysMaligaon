import React from 'react';
import boscoImage from '../../assets/bosco.png'; // Adjust the path as needed

const Founder = () => {
  return (
    <div>
      {/* Custom Header – no breadcrumbs */}
      <div className="bg-maroon-900 text-white py-12 px-4">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our Founder</h1>
          <p className="text-gold-300 text-lg mt-2">Don Bosco – the great Modern Educator</p>
          <p className="text-gray-300 text-sm mt-1">Life Sketch of Don Bosco</p>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-8 md:p-12">
              {/* Founder Profile */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <img
                  src={boscoImage}
                  alt="Don Bosco"
                  className="w-48 h-48 rounded-full object-cover shadow-lg flex-shrink-0 border-4 border-gold-500"
                />
                <div>
                  <h2 className="font-serif text-3xl font-bold text-maroon-900">St. John Bosco</h2>
                  <p className="text-gold-600 text-sm font-semibold mb-4">1815 – 1888</p>
                  <p className="text-gray-700 leading-relaxed">
                    St. John Bosco, popularly known as Don Bosco (Italian for Father Bosco), was born at
                    Becchi, in Piedmont, Italy on August 16, 1815. From a very young age he was called to
                    work for poor young people of his time, when Europe was under the grip of Industrial
                    Revolution and many a young person who came to the cities to study or in search of
                    work fell an easy prey to the many social evils of his time.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    He lost his father at the age of 2 and was brought up by his mother, who was truly his
                    guide, his model and his educator. From early years of life he discovered his leadership
                    qualities especially among his peers. At the age of nine little John Bosco was given a
                    mission in vision. He was to transform the young people{' '}
                    <span className="italic">“NOT WITH BLOWS BUT WITH LOVING KINDNESS”</span> that was the
                    goal of his life. Overcoming untold hardships and hostility he become a priest on
                    June 5th 1841. His determination to be a priest for young people combined with his
                    dynamic optimism resulted in the flowering of his long cherished goal.
                  </p>
                </div>
              </div>

              {/* Educational Vision */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-4">
                  His Educational Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Don Bosco was an educational practitioner rather than educational theorist. It is
                  impossible to understand his approach to education without reference to his experiences
                  in life, because he actually incorporated the lessons of his own life experiences into
                  his pedagogy. This style of education consists in involving young people, their parents
                  or guardians and the educators in a family atmosphere. This system is based on{' '}
                  <strong>Reason</strong>, <strong>Religion</strong> (Faith in God) and{' '}
                  <strong>Loving Kindness</strong>. The goal is integral formation. This embraces
                  developing physical, intellectual, moral, social and spiritual aspects of person’s life.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gold-600 text-3xl mb-2">🧠</div>
                    <h4 className="font-semibold text-maroon-900">Reason</h4>
                    <p className="text-sm text-gray-600">Intellectual formation and critical thinking</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gold-600 text-3xl mb-2">🙏</div>
                    <h4 className="font-semibold text-maroon-900">Religion</h4>
                    <p className="text-sm text-gray-600">Faith in God and moral values</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-gold-600 text-3xl mb-2">❤️</div>
                    <h4 className="font-semibold text-maroon-900">Loving Kindness</h4>
                    <p className="text-sm text-gray-600">Compassion and caring relationships</p>
                  </div>
                </div>
              </div>

              {/* Legacy */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-4">His Legacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Blooming in spite of initial poverty, hardships, opposition of all sorts, soon his works
                  flourished. The little seed planted by him grew into a mighty tree, and now all over the
                  world there are hundreds of educational institutes catering to thousands of young people.
                  Rightly, Don Bosco is recognized as the Father, Friend and Teacher of all young people.
                  He is the Founder of the Salesian Father (SDB), Salesian Sisters (FMA), and Salesian
                  Cooperators (SC).
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Today Don Bosco’s unique charism for young people lives on undiminished, in its original
                  freshness and dynamism in every corner of the earth. Where youth exists there Don Bosco
                  is present through his Sons and Daughters for whom Don Bosco is a father, Teacher,
                  Founder, Friend and Leader… ever relevant for Yesterday… Today… and Tomorrow…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;