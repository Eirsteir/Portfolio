import { type Experience } from "@prisma/client";
import Image from "next/image";

export const WorkExperienceCard = ({
  experience,
}: {
  experience: Experience;
}) => (
  <div className="flex flex-col items-center md:flex-row md:py-2">
    <div className="relative h-[100px] w-[100px] ">
      <Image
        fill
        src={experience.companyLogo}
        alt={`${experience.company} Logo`}
        className="h-auto w-full object-cover"
      />
    </div>
    <div className="p-4 md:w-2/3 md:pl-6">
      <h4 className=" text-2xl font-semibold">{experience.company}</h4>
      <p className="mb-1 text-lg text-gray-600">{experience.title}</p>
      <p className="text-gray-600">
        {experience.startDate.getMonth() +
          1 +
          "/" +
          experience.startDate.getFullYear()}{" "}
        -{" "}
        {experience.endDate
          ? experience.endDate.getMonth() +
            1 +
            "/" +
            experience.endDate.getFullYear()
          : "Present"}
      </p>
    </div>
  </div>
);
