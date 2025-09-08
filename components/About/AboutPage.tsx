'use client';

import { Button } from 'components/Button/Button';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] via-[#3A8DDE] to-[#16B286] text-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Dr. Jan Duffy | Las Vegas Nevada Home Sales
            </h1>
            <h2 className="mb-8 text-2xl font-light text-blue-100 md:text-3xl">
              Berkshire Hathaway HomeServices Nevada Affiliated Agent
            </h2>
            <p className="mx-auto max-w-4xl text-xl text-blue-100">
              Experience the perfect blend of global resources and local expertise. Dr. Jan Duffy
              combines the trusted Berkshire Hathaway HomeServices Nevada affiliation with
              personalized service through her independent practice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
                Why Choose Dr. Jan Duffy?
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      Berkshire Hathaway HomeServices Nevada Affiliated Agent
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Access to global resources and trusted brand recognition
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      Independent Las Vegas Nevada Home Sales Practice
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Personalized attention and local market expertise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      Suite 180 Downtown Summerlin Office Location
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Prime location serving the luxury real estate market
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      Direct Contact: drjanduffy@lasvegasnevadahomesales.com
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Professional email for immediate communication
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#16B286] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✅
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0A2540]">
                      Immediate Response: (702) 500-1981
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Direct phone access for urgent inquiries
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  href="tel:+17025001981"
                  className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Call (702) 500-1981
                </Button>
                <a
                  href="mailto:drjanduffy@lasvegasnevadahomesales.com"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[#0A2540] px-8 py-4 text-lg font-semibold text-[#0A2540] hover:bg-[#0A2540] hover:text-white transition-all duration-200"
                >
                  Email Dr. Duffy
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
                Professional Excellence
              </h2>

              <p className="mb-6 text-lg text-gray-600">
                As a Berkshire Hathaway HomeServices Nevada affiliated agent, Dr. Jan Duffy offers
                clients the perfect combination of global resources and local expertise. Her
                independent practice, Las Vegas Nevada Home Sales, provides personalized service
                while leveraging the trusted Berkshire Hathaway brand and comprehensive support
                network.
              </p>

              <h3 className="mb-4 text-2xl font-bold text-[#0A2540]">Downtown Summerlin Office</h3>

              <p className="mb-6 text-lg text-gray-600">
                Visit Dr. Duffy's professional office in Suite 180 at 10980 W Charleston Blvd,
                strategically located in Downtown Summerlin. This prime location serves the luxury
                real estate market of Las Vegas, offering convenient access for clients throughout
                the Summerlin area and beyond.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="mb-4 text-xl font-bold text-[#0A2540]">Contact Information</h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Office:</strong> Las Vegas Nevada Home Sales
                  </p>
                  <p>
                    <strong>Address:</strong> 10980 W Charleston Blvd, Suite 180, Las Vegas, NV
                    89135
                  </p>
                  <p>
                    <strong>Phone:</strong> (702) 500-1981
                  </p>
                  <p>
                    <strong>Email:</strong> drjanduffy@lasvegasnevadahomesales.com
                  </p>
                  <p>
                    <strong>Website:</strong> https://LasVegasNevadaHomesSales.com
                  </p>
                  <p>
                    <strong>License:</strong> Nevada Real Estate License #0197614
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl font-bold text-[#0A2540] md:text-4xl">
              Las Vegas Real Estate Expertise
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Dr. Jan Duffy specializes in luxury real estate throughout the Las Vegas Valley, with
              particular expertise in premier communities and investment properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Downtown Summerlin</h3>
              <p className="text-gray-600">
                Luxury homes and investment properties in the heart of Summerlin's premier
                community.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Red Rock Country Club</h3>
              <p className="text-gray-600">
                Premium golf course communities and luxury estates with world-class amenities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="mb-4 text-xl font-bold text-[#0A2540]">Las Vegas Valley</h3>
              <p className="text-gray-600">
                Comprehensive real estate services throughout the greater Las Vegas metropolitan
                area.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              As a Berkshire Hathaway HomeServices Nevada affiliated agent, Dr. Duffy provides
              access to global resources while maintaining the personalized service of an
              independent practice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A2540] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Work with Dr. Jan Duffy?
          </h2>
          <p className="mb-8 mx-auto max-w-3xl text-xl text-blue-100">
            Experience the perfect blend of global resources and local expertise. Contact Dr. Duffy
            today to discuss your real estate needs.
          </p>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button
              href="tel:+17025001981"
              className="bg-[#FF6B35] text-white hover:bg-[#E55A2B] px-8 py-4 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Call (702) 500-1981
            </Button>
            <a
              href="mailto:drjanduffy@lasvegasnevadahomesales.com"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0A2540] transition-all duration-200"
            >
              Email Dr. Duffy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
