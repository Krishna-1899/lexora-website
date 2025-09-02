import React from 'react';
import SectionHeader from '../ui/SectionHeader';

const DataTable = ({ title, data, columns = ['Property', 'Value'] }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-kajaria-brown-900 mb-6 font-dm-sans">
        {title}
      </h3>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse rounded-lg">
          <thead>
            <tr className="bg-kajaria-blue-600 text-white">
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="px-6 py-4 text-left font-semibold border border-kajaria-blue-500 last:border-r-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr 
                key={index}
                className={`border border-gray-200 hover:bg-kajaria-blue-50 transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-transparent'
                }`}
              >
                {row.values.map((value, colIndex) => (
                  <td 
                    key={colIndex}
                    className="px-6 py-4 border-r border-gray-200 last:border-r-0"
                  >
                    {value}
                  </td>
                ))}
              </tr>

              // <tr 
              //   key={index}
              //   className={`border border-gray-200 hover:bg-kajaria-blue-50 transition-colors duration-200 ${
              //     row.isHeader ? 'bg-kajaria-blue-100 font-semibold' : ''
              //   }`}
              // >
              //   {row.values.map((value, colIndex) => (
              //     <td 
              //       key={colIndex}
              //       className="px-6 py-4 border-r border-gray-200 last:border-r-0"
              //     >
              //       {value}
              //     </td>
              //   ))}
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TechnicalData = ({ 
  technicalSpecs = [], 
  isData = [], 
  coverage = '',
  images = [] 
}) => {
  return (
    <section className="section-space-two bg-kajaria-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Technical Data */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <SectionHeader 
              tagline="reliable"
              title="Technical Data<br/>(Type 1T)"
              className="mb-8"
            />
            
            <DataTable 
              title=""
              data={technicalSpecs}
            />
          </div>

          {/* Images */}
          <div className="px-10 flex justify-center my-auto" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative">
              {images.length > 0 && (
                <div className="relative">
                  <img 
                    src={images[0]} 
                    alt="Technical Data" 
                    className="w-full max-w-md rounded-lg shadow-lg"
                  />
                  {images[1] && (
                    <div className="absolute -bottom-6 -right-6">
                      <img 
                        src={images[1]} 
                        alt="Technical Data" 
                        className="w-48 rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Coverage Information */}
        {/* {coverage && (
          <div className="mt-12 bg-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-kajaria-brown-900 mb-4">
              Coverage
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {coverage}
            </p>
          </div>
        )} */}

        {/* IS Data */}
        {isData.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
            {/* Images */}
            <div className="flex justify-center my-auto order-2 lg:order-1">
              <div className="relative">
                {images.length > 2 && (
                  <div className="relative">
                    <img 
                      src={images[2]} 
                      alt="IS Data" 
                      className="w-full max-w-md rounded-lg shadow-lg"
                    />
                    {images[3] && (
                      <div className="absolute -bottom-6 -right-6">
                        <img 
                          src={images[3]} 
                          alt="IS Data" 
                          className="w-48 rounded-lg shadow-lg"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* IS Data Table */}
            <div className="order-1 lg:order-2">
              <SectionHeader 
                tagline="data"
                title="IS Data"
                className="mb-8"
              />
              
              <DataTable 
                title=""
                data={isData}
                columns={['Property: Test method', 'Requirement', 'Typical Values']}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export { DataTable };
export default TechnicalData;
