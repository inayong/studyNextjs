"use client"
import Clocktime from "@/app/component/01/Clocktime";

export default function ClockPage() {
    console.log("ClockPage")
    return (
        <div className="m-10">
            <h1 className="text-3xl">Clock</h1>
            <Clocktime />
        </div>
    );
}

