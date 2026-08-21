import {
  FaIndustry,
  FaSeedling,
  FaTools,
  FaAward,
} from "react-icons/fa";

const journey = [
  {
    year: "2005",
    title: "Company Established",
    desc: "Started manufacturing quality agricultural implements in Jaora, Ratlam.",
    icon: <FaIndustry />,
  },
  {
    year: "2010",
    title: "Expanded Product Range",
    desc: "Introduced cultivators, seed drills and tractor trolleys.",
    icon: <FaSeedling />,
  },
  {
    year: "2018",
    title: "Advanced Manufacturing",
    desc: "Installed modern machinery for precision fabrication.",
    icon: <FaTools />,
  },
  {
    year: "Today",
    title: "Trusted Brand",
    desc: "Serving farmers across Madhya Pradesh with reliable products.",
    icon: <FaAward />,
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-[#FDF9F3]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-themebrown font-semibold">
            OUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold text-themedarkbrown mt-3">
            Milestones That Built Our Legacy
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-8">
            From a small local workshop to a trusted manufacturer of agricultural
            implements, every milestone reflects our commitment to quality,
            innovation and customer satisfaction.
          </p>

        </div>

        <div className="relative">

          {/* Timeline line */}

          <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-[#D8B78A]"></div>

          <div className="grid lg:grid-cols-4 gap-10">

            {journey.map((item, index) => (

              <div
                key={index}
                className="relative text-center"
              >

                {/* Circle */}

                <div className="w-20 h-20 mx-auto rounded-full bg-themebrown text-white flex items-center justify-center text-3xl shadow-lg relative z-10">
                  {item.icon}
                </div>

                <h3 className="text-themebrown text-xl font-bold mt-8">
                  {item.year}
                </h3>

                <h4 className="text-2xl font-semibold text-themedarkbrown mt-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-8 mt-4">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}