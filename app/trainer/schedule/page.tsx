import Image from "next/image";

function TrainerSchedule() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Schedule</h1>
        <p className="mt-4">
          The Schedule page provides an overview of the Schedule management
          system, including the ability to view the schedule of the trainer.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Schedule Show the number of leactures he has to give. Below is
              the image of Schedule page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/trainerschedule.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerSchedule;
