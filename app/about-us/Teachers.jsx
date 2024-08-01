import Image from "next/image";
import React from "react";
import defaultImage from "@/app/assets/images/teachers/default.jpg";
function Teachers() {
  return (
    <div className="items-center flex flex-col">
      <h2 className="font-bold text-lg pt-5 pb-5">Faculty of CST</h2>
      <div className="flex justify-between items-center gap-10">
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md text-center">
          <Image src={defaultImage} className="rounded-full mb-5" />
          <h4 className="font-semibold text-slate-900 text-[18px]">Muffaria Ahmed Shurva</h4>
          <span className="text-sm text-slate-700">Instructor, HOD, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md text-center">
          <Image src={defaultImage} className="rounded-full mb-5" />
          <h4 className="font-semibold text-slate-900 text-[18px]">Md Moshiur Rahman</h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md text-center">
          <Image src={defaultImage} className="rounded-full mb-5" />
          <h4 className="font-semibold text-slate-900 text-[18px]">Md Rakib</h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md text-center">
          <Image src={defaultImage} className="rounded-full mb-5" />
          <h4 className="font-semibold text-slate-900 text-[18px]">Md. Noor Muhammad</h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
