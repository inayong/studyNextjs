import Link from "next/link";
import TailLink from "./TailLink";

export default function TailHeaderMenu() {
    return (
        <div className="flex justify-between items-center p-10 border-b text-slate-700 bg-gray-300 border-gray-500" >
             <div className="text-xl font-bold">Next Js 실습</div>
             <nav>
              <ul className="flex items-center justify-between">
                <TailLink href="/lec/clock" title="Clock" />
                <TailLink href="/lec/lotto" title="Lotto" />
                <TailLink href="/lec/boxoffice" title="BoxOffice" />
                <TailLink href="/lec/boxofficeNew" title="BoxOfficeNew" />
                <TailLink href="/" title="Home" />
              </ul>
            </nav>

        </div>
    );
}

