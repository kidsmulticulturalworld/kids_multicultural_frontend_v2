import ClassCard from "./ClassCard";
import { classesData } from "./classesData";

export default function ClassCards() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10 flex flex-col gap-8 md:gap-10 lg:gap-12">
        {classesData.map((classItem) => (
          <ClassCard key={classItem.id} data={classItem} />
        ))}
      </div>
    </section>
  );
}
