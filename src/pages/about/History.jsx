import React from 'react';
// If you have a school image in your assets, uncomment and import:
// import schoolImage from '../../assets/school.jpg'; // Adjust path

const History = () => {
  // Data from the images
  const headmistresses = [
    { no: 1, name: 'Sr. Rose Briganza', years: '1969 – 1973' },
    { no: 2, name: 'Sr. Alice Olikal', years: '1973 – 1977' },
    { no: 3, name: 'Sr. Bridget Puthempurackel', years: '1977 – 1979' },
    { no: 4, name: 'Sr. Annie Thevarukunnel', years: '1979 – 1982' },
    { no: 5, name: 'Sr. Teresa Karottukunnel', years: '1982 – 1985' },
    { no: 6, name: 'Sr. Leeza Kokat', years: '1985 – 1988' },
    { no: 7, name: 'Sr. Tessy Potteparambil', years: '1988 – 1990' },
    { no: 8, name: 'Sr. Mabel Gothorp', years: '1990 – 1993' },
    { no: 9, name: 'Sr. Catherine Kanampuzha', years: '1993 – 1996' },
    { no: 10, name: 'Sr. Teresa Edattukalayil', years: '1996 – 1997' },
    { no: 11, name: 'Sr. Mary Pettikal', years: '1997 – 2000' },
    { no: 12, name: 'Sr. Teresa Jojo', years: '2000 – 2004' },
    { no: 13, name: 'Sr. Lucy Nedumala', years: '2004 – 2006' },
    { no: 14, name: 'Sr. Lissy Rose Mathew', years: '2006 – 2015' },
    { no: 15, name: 'Sr. Nelia Mary Khrasi', years: '2015 – 2020' },
    { no: 16, name: 'Sr. Sania Rosemary', years: '2020 – Present' },
  ];

  const superiors = [
    { no: 1, name: 'Sr. Natalina Nunes', years: '1969 – 1971' },
    { no: 2, name: 'Sr. Maria Mampilly', years: '1971 – 1975' },
    { no: 3, name: 'Sr. Alice Correa', years: '1975 – 1979' },
    { no: 4, name: 'Sr. Dorothy Gomes', years: '1979 – 1981' },
    { no: 5, name: 'Sr. Bridget Puthempurackel', years: '1981 – 1985' },
    { no: 6, name: 'Sr. Isabella Suja', years: '1985 – 1988' },
    { no: 7, name: 'Sr. Catherine Susngi', years: '1988 – 1994' },
    { no: 8, name: 'Sr. Celine Michael', years: '1994 – 1999' },
    { no: 9, name: 'Sr. Grace Ottolankal', years: '1999 – 2005' },
    { no: 10, name: 'Sr. Catherine Kanampuzha', years: '2005 – 2012' },
    { no: 11, name: 'Sr. Bridget Puthempurackel', years: '2012 – 2018' },
    { no: 12, name: 'Sr. Grace Ottolankal', years: '2018 – Present' },
  ];

  return (
    <div>
      {/* Custom Header – no breadcrumbs */}
      <div className="bg-maroon-900 text-white py-12 px-4">
        <div className="container-custom mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Our History</h1>
          <p className="text-gold-300 text-lg mt-2">A brief history of St. Mary’s English High School, Maligaon</p>
        </div>
      </div>

      {/* School Image – full width with overlay */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        {/* Replace src with your school image if available, or use a placeholder */}
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80"
          alt="St. Mary's School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-serif font-bold tracking-wide drop-shadow-lg">
            St. Mary’s English High School
          </h2>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          {/* History Text */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-10 border border-gray-100">
            <h2 className="font-serif text-3xl font-bold text-maroon-900 mb-6">Our Journey</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              St. Mary’s Primary School, Maligaon, was started as a branch school to relieve the pressure
              for admissions in St. Mary’s School Guwahati. The primary school was opened on{' '}
              <strong>January 10<sup>th</sup> 1966</strong>. The sisters and teachers came daily from
              St. Mary’s Guwahati to conduct classes in a temporary building, while supervising the
              construction of a new school building. In 1969 the school was upgraded to Class IV with
              240 boys, 145 girls, 8 teachers and 9 other employees.
            </p>

            <h3 className="font-serif text-2xl font-bold text-maroon-800 mt-8 mb-4">Upgrading the School</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Due to constant pressure from the parents of our students who found it difficult to get
              admission in the High School at St. Mary’s, Guwahati, the management decided to upgrade the
              school. Hence from <strong>January 1988</strong> Class VIII was introduced and the upgrading
              continued. In <strong>January 1991</strong> the school became a full fledged High School.
              The first group of students appeared for the HSLC public examinations in March 1992.
              St. Mary’s English High School, Maligaon obtained its recognition from the Board of
              Secondary Education, Assam (SEBA) with effect from <strong>1<sup>st</sup> April 1998</strong>.
            </p>

            <h3 className="font-serif text-2xl font-bold text-maroon-800 mt-8 mb-4">
              Affiliation to the Central Board of Secondary Education, Delhi (CBSE)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As per the continuous request of the parents we have decided to affiliate the school to the
              Central Board and the issue was brought to the higher authorities. After the necessary
              permission from them the process began for the affiliation of the school to the Central
              Board of Secondary Education. Finally in <strong>April, 2011</strong> the school was
              affiliated to C.B.S.E. Vide affiliation No. 230105 and school code: 30086. We rejoice at the
              first batch of Class X students writing their examination under C.B.S.E. and the excellent
              results brought by them. This gave us the impetus to upgrade the school to the senior
              secondary level. The necessary permission was granted in <strong>April 2013</strong>. At
              present there are 127 students in Class XI, in the three streams of study namely,
              <strong> Science, Commerce and Humanities</strong>.
            </p>
          </div>

          {/* Headmistresses / Principals Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 mb-10">
            <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <span className="bg-gold-500 w-1 h-8 mr-3 rounded"></span>
              Headmistresses / Principals
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-maroon-800 text-white">
                    <th className="py-3 px-4 text-left font-semibold">No.</th>
                    <th className="py-3 px-4 text-left font-semibold">Name</th>
                    <th className="py-3 px-4 text-left font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {headmistresses.map((item) => (
                    <tr key={item.no} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{item.no}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium">{item.name}</td>
                      <td className="py-3 px-4 text-gray-600">{item.years}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Superiors Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-maroon-900 mb-6 flex items-center">
              <span className="bg-gold-500 w-1 h-8 mr-3 rounded"></span>
              Superiors who guided the school
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="bg-maroon-800 text-white">
                    <th className="py-3 px-4 text-left font-semibold">No.</th>
                    <th className="py-3 px-4 text-left font-semibold">Name</th>
                    <th className="py-3 px-4 text-left font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {superiors.map((item) => (
                    <tr key={item.no} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-700">{item.no}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium">{item.name}</td>
                      <td className="py-3 px-4 text-gray-600">{item.years}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;