import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuAirplay } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { BsLayoutSidebar } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import { LuUsers } from "react-icons/lu";
import { GoInbox } from "react-icons/go";
import { AiOutlineFileText } from "react-icons/ai";
import { PiFastForwardLight } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { MdCode } from "react-icons/md";
import { LuBold } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import Image from "next/image";
function Introduction() {
  return (
    <div className="content-section flex-1 overflow-y-auto  mt-20 mb-10">
      <div className="h-full ml-96 pl-16 mr-10">
        <h1 className="text-xl font-bold">Introduction</h1>
        <h2 className="text-gray-600 text-base mt-2">
          Introducing Pie-Technology Learning Management System (LMS)!{" "}
        </h2>
        <div className="content-section__box">
          <div className="mt-6">
            <p className="mb-5">
              Pie-Technology LMS is a cutting-edge Learning Management System
              designed to empower students and educators alike. Built with
              precision using the versatile TailwindCSS framework, our platform
              offers a seamless experience for managing courses, tracking
              progress, and fostering interactive learning environments.
            </p>
            <p className="mb-5">
              Pie-Technology LMS stands out as a modern and flexible solution,
              ideal for educational institutions seeking to enhance their online
              teaching capabilities. Whether you are managing courses, assessing
              student performance, or exploring new educational horizons,
              Pie-Technology LMS provides the tools you need. Explore our live
              preview to discover a range of themes and features tailored to
              support your learning journey.
            </p>
            <p className="mb-5">Thank you for choosing Pie-Technology LMS.</p>

            <div className="w-full ">
              <h1 className="text-xl font-bold mt-10">Features</h1>
              <h2 className="text-gray-600 text-base mt-2">
                Discover the features of Pie-Technology LMS
              </h2>
              <div className="w-full  gap-5 mt-8">
                <ul className="flex flex-wrap  gap-4">
                  <li className="flex">
                    <Card className="w-56  rounded-md bg-gray-100 border border-gray-200 ">
                      <CardHeader>
                        <CardTitle className="flex flex-col items-center justify-center text-base">
                          <LuAirplay />
                          Responsive Design
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </li>

                  <li className="flex items-center justify-center">
                    <Card className="w-56 rounded-md bg-gray-100 border border-gray-200 ">
                      <CardHeader>
                        <CardTitle className="flex flex-col items-center justify-center text-base">
                          <BsLayoutSidebar />
                          Functional Dashboard
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </li>

                  <li className="flex items-center justify-center">
                    <Card className="w-56 rounded-md bg-gray-100 border border-gray-200 ">
                      <CardHeader>
                        <CardTitle className="flex flex-col items-center justify-center text-base">
                          <PiFastForwardLight />
                          Fast Performance
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full ">
              <h1 className="text-xl font-bold mt-10">Browser Support</h1>
              <h2 className="text-gray-600 text-base mt-2">
                Extensive browser support
              </h2>
              <div className="w-full  gap-5 mt-8">
                <div className=" flex flex-wrap  gap-4">
                  <Card className="flex items-center justify-center bg-gray-100 rounded-md  border border-gray-200 pt-2">
                    <CardContent className="w-44  flex flex-col items-center justify-center  ">
                      <Image
                        className=""
                        alt="Browser"
                        src="/chrome.png"
                        width={32}
                        height={32}
                      />
                      <h1 className="font-medium mt-3  text-base">Chrome</h1>
                    </CardContent>
                  </Card>
                  <Card className="flex items-center justify-center bg-gray-100 rounded-md  border border-gray-200 pt-2">
                    <CardContent className="w-44  flex flex-col items-center justify-center  ">
                      <Image
                        className=""
                        alt="Browser"
                        src="/edge.png"
                        width={32}
                        height={32}
                      />
                      <h1 className="font-medium mt-3 text-base">Edge</h1>
                    </CardContent>
                  </Card>
                  <Card className="flex items-center justify-center bg-gray-100 rounded-md  border border-gray-200 pt-2">
                    <CardContent className="w-44  flex flex-col items-center justify-center  ">
                      <Image
                        className=""
                        alt="Browser"
                        src="/mozilla.png"
                        width={32}
                        height={32}
                      />
                      <h1 className="font-medium mt-3 text-base">Mozilla</h1>
                    </CardContent>
                  </Card>
                  <Card className="flex items-center justify-center bg-gray-100 rounded-md  border border-gray-200 pt-2">
                    <CardContent className="w-44  flex flex-col items-center justify-center  ">
                      <Image
                        className=""
                        alt="Browser"
                        src="/opera.png"
                        width={32}
                        height={32}
                      />
                      <div className="font-medium mt-3 text-base">Opera</div>
                    </CardContent>
                  </Card>
                  <Card className="flex h-28 items-center justify-center bg-gray-100 rounded-md  border border-gray-200 pt-2">
                    <CardContent className="w-44  flex flex-col items-center justify-center  ">
                      <Image
                        className=""
                        alt="Browser"
                        src="/safari.png"
                        width={32}
                        height={32}
                      />
                      <div className="font-medium mt-3 text-base">Safari</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
