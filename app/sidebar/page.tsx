"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div
      className="fixed pt-14 w-64 h-full pb-14
    xl:ml-10 xl:w-80 
    lg:ml-24 lg:w-64 
    md:ml-10 md:w-60 
    sm:ml-10 sm:w-60 sm:text-xs 
    2xl:ml-24 2xl:w-80 2xl:text-base"
    >
      <div className="h-full pt-8 overflow-y-auto scrollbar-hide bg-gray-100">
        <div className="px-5">
          <div className="font-bold">Getting Started</div>
          <Link
            href="/introduction"
            className={`menu block py-2 ${
              pathname === "/introduction"
                ? "bg-amber-500 text-white font-bold pl-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Introduction
          </Link>
          <Link
            href="/installation"
            className={`menu block py-2 ${
              pathname === "/installation"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            How to Install
          </Link>

          <div className="font-bold mt-8">Admin</div>
          <Link
            href="/admin/dashboard"
            className={`menu block py-2 ${
              pathname === "/admin/dashboard"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/courses"
            className={`menu block py-2 ${
              pathname === "/admin/courses"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/admin/trainers"
            className={`menu block py-2 ${
              pathname === "/admin/trainers"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Trainers
          </Link>
          <Link
            href="/admin/trainees"
            className={`menu block py-2 ${
              pathname === "/admin/trainees"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Trainees
          </Link>
          <Link
            href="/admin/batches"
            className={`menu block py-2 ${
              pathname === "/admin/batches"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Batches
          </Link>
          <Link
            href="/admin/modules"
            className={`menu block py-2 ${
              pathname === "/admin/modules"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Modules
          </Link>
          <Link
            href="/admin/questions"
            className={`menu block py-2 ${
              pathname === "/admin/activities"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Questions
          </Link>
          <Link
            href="/admin/feedback"
            className={`menu block py-2 ${
              pathname === "/admin/feedback"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Feedback
          </Link>
          <div className="font-bold mt-8">Trainer</div>
          <Link
            href="/trainer/dashboard"
            className={`menu block py-2 ${
              pathname === "/trainer/dashboard"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/trainer/batches"
            className={`menu block py-2 ${
              pathname === "/trainer/batches"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Batch
          </Link>
          <Link
            href="/trainer/trainees"
            className={`menu block py-2 ${
              pathname === "/trainer/trainees"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Trainee
          </Link>
          <Link
            href="/trainer/attendance"
            className={`menu block py-2 ${
              pathname === "/trainer/attendance"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Attendance
          </Link>
          <Link
            href="/trainer/schedule"
            className={`menu block py-2 ${
              pathname === "/trainer/schedule"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Schedule
          </Link>
          <Link
            href="/trainer/submodules"
            className={`menu block py-2 ${
              pathname === "/trainer/submodules"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Submodule
          </Link>
          <Link
            href="/trainer/lecture"
            className={`menu block py-2 ${
              pathname === "/trainer/lecture"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Lecture
          </Link>
          <Link
            href="/trainer/assignment"
            className={`menu block py-2 ${
              pathname === "/trainer/assignment"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Assignment
          </Link>
          <Link
            href="/trainer/test"
            className={`menu block py-2 ${
              pathname === "/trainer/test"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Test
          </Link>
          <div className="font-bold mt-8">Trainee</div>
          <Link
            href="/trainee/dashboard"
            className={`menu block py-2 ${
              pathname === "/trainee/dashboard"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/trainee/schedule"
            className={`menu block py-2 ${
              pathname === "/trainee/schedule"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Schedule
          </Link>
          <Link
            href="/trainee/attendance"
            className={`menu block py-2 ${
              pathname === "/trainee/attendance"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Attendance
          </Link>
          <Link
            href="/trainee/lecture"
            className={`menu block py-2 ${
              pathname === "/trainee/lecture"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Lecture
          </Link>
          <Link
            href="/trainee/assignment"
            className={`menu block py-2 ${
              pathname === "/trainee/assignment"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Assignment
          </Link>
          <Link
            href="/trainee/test"
            className={`menu block py-2 ${
              pathname === "/trainee/test"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Test
          </Link>

          <Link
            href="/trainee/feedback"
            className={`menu block py-2 mb-2 ${
              pathname === "/trainee/feedback"
                ? "bg-amber-500 text-white font-bold pl-2 mt-2 mb-2"
                : "hover:bg-amber-500 hover:text-white hover:font-bold pl-2 mt-2"
            }`}
          >
            Feedback
          </Link>
        </div>
      </div>
    </div>
  );
}
