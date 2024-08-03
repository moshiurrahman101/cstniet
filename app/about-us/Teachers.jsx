import Image from "next/image";
import React from "react";
import defaultImage from "@/app/assets/images/teachers/default.jpg";
import moshiur from "@/app/assets/images/teachers/moshiur.jpg";
import noor from "@/app/assets/images/teachers/noor.jpg";
import rakib from "@/app/assets/images/teachers/rakib.jpg";
import shuvra from "@/app/assets/images/teachers/shuvra.jpg";

function Teachers() {
  return (
    <div className="items-center flex flex-col mb-10">
      <h2 className="font-bold text-[32px] pt-5 pb-8 underline text-purple-800">Faculty of CST</h2>
      <div className="flex justify-between items-center gap-10">
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md flex flex-col items-center justify-between">
          <Image src={shuvra} className="rounded-full mb-5" width={150} />
          <h4 className="font-semibold text-slate-900 text-[18px]">
            Muffaria Ahmed Shurva
          </h4>
          <span className="text-sm text-slate-700">Instructor, HOD, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md flex flex-col items-center justify-between">
          <Image src={moshiur} className="rounded-full mb-5" width={150} />
          <h4 className="font-semibold text-slate-900 text-[18px]">
            Md Moshiur Rahman
          </h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md flex flex-col items-center justify-between">
          <Image src={rakib} className="rounded-full mb-5" width={150} />
          <h4 className="font-semibold text-slate-900 text-[18px]">Md Rakib</h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
        <div className="p-3 bg-white rounded-sm border-slate-100 shadow-md flex flex-col items-center justify-between">
          <Image src={noor} className="rounded-full mb-5" width={150} />
          <h4 className="font-semibold text-slate-900 text-[18px]">
            Md. Noor Muhammad
          </h4>
          <span className="text-sm text-slate-700">Instructor, CST</span>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
