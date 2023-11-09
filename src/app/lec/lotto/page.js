"use client"
import Lotto from "@/app/component/02/Lotto";

export default function LottoPage() {
    console.log("LottoPage")
    return (
        <div className="m-10">
            <h1 className="text-3xl">Lotto</h1>
            <Lotto />
        </div>
    );
}

