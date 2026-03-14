import React from "react";
import Heading from "../components/Heading";
import {
  Calendar,
  CreditCard,
  RotateCcw,
  Clock,
  Camera,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

const ActiveRents = () => {
  const rents = [
    {
      id: 1,
      productName: "Sony A7 III Camera",
      image:
        "https://i.pinimg.com/736x/08/31/b3/0831b386694b12501172198ab959e770.jpg",
      monthlyRent: 2500,
      securityDeposit: 4000,
      duration: 6,
      startDate: "12 Apr 2026",
      nextPayment: "12 May 2026",
      endDate: "12 Oct 2026",
      status: "Active",
      remainingInstallments: 4,
      category: "Camera",
      progress: 33,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 py-10">
      <Heading
        small="User Dashboard"
        heading={
          <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)]">
            Active <span className="text-[var(--accent-secondary)]">Rents</span>
          </h1>
        }
      />

      <h1 className="text-[var(--text-muted)]/70 text-center uppercase text-xl py-25 ">ALL THE RENTS WILL BE VISIBLE HERE</h1>
    </div>
  );
};

export default ActiveRents;
