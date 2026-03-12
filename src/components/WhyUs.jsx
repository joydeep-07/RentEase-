import React from "react";
import { Wallet, Repeat, PackageCheck, Leaf } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: <Wallet size={26} />,
      title: "Affordable Monthly Rentals",
      desc: "Avoid expensive upfront purchases. Rent furniture and appliances with simple monthly payments.",
    },
    {
      icon: <Repeat size={26} />,
      title: "Flexible Rental Plans",
      desc: "Choose rental durations that match your lifestyle with flexible tenure options.",
    },
    {
      icon: <PackageCheck size={26} />,
      title: "Easy Access to Essentials",
      desc: "Quickly access furniture, electronics and appliances without the hassle of ownership.",
    },
    {
      icon: <Leaf size={26} />,
      title: "Sustainable Living",
      desc: "Reduce unnecessary purchases and promote responsible, eco-friendly consumption.",
    },
  ];

  const secondary = [
    "Easy relocation support",
    "Better urban living convenience",
    "Local rental availability",
    "Scalable rental ecosystem",
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 md:pt-0 pt-4 pb-10">
      <div className="max-w-8xl md:px-15 mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="max-w-3xl flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] opacity-60">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse"></span>
            Why Chose RentEase ?
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium font-main leading-tight">
            Renting should be{" "}
            <span className="text-[var(--accent-primary)]">
              simple, flexible
            </span>{" "}
            and affordable
          </h2>

          <p className="text-sm md:text-base opacity-70">
            Urban renters often face challenges like expensive furniture,
            relocation difficulties and lack of flexible rental options. Rent
            Ease solves these problems by making everyday essentials accessible
            without the burden of ownership.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className=" p-4 sm:p-6  rounded-sm  border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:border-[var(--accent-primary)]/30 transition-all duration-300 group flex flex-col "
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-3 sm:mb-4">
                {item.icon}
              </div>

              <h3 className="font-medium text-sm sm:text-lg mb-1 sm:mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary objectives */}
        <div className="flex flex-wrap gap-3 pt-4">
          {secondary.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-xs rounded-full
              border border-[var(--border-light)]
              bg-[var(--bg-secondary)]
              opacity-80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
