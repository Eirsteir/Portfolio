import { type Experience } from "@prisma/client";
import Image from "next/image";

export const WorkExperienceCard = ({
  experience,
}: {
  experience: Experience;
}) => (
  <div className="md:py-12border-b-2 flex flex-col border-b-slate-950 md:flex-row md:px-8 ">
    <div className="relative md:w-1/3">
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={300}
          src={experience.companyLogo}
          alt={`${experience.company} Logo`}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
    <div className=" border-b-2 border-b-slate-800 p-4 md:w-2/3 md:pl-6">
      <h4 className="text-2xl font-semibold">{experience.company}</h4>
      <p className="mb-1 text-lg text-gray-600">{experience.title}</p>
      <p className="text-gray-600">
        {experience.startDate.getMonth() +
          "/" +
          experience.startDate.getFullYear()}{" "}
        -{" "}
        {experience.endDate
          ? experience.endDate.getMonth() +
            "/" +
            experience.endDate.getFullYear()
          : "Present"}
      </p>
    </div>
  </div>
);
