import Link from "next/link";

export default function LecLayout({ children }) {
    return (
        <main className="contanier">
            <div className="flex justify-between items-center p-10 h-12 bg-slate-200 text-slate-700 ">
                <div className="text-xl font-bold">리액트 수업자료</div>
                <nav>
                    <ul className="flex items-center justify-between">
                        <li className="w-20"><Link href="/lec/clock">Clock</Link></li>
                        <li className="w-20"><Link href="/lec/lotto">Lotto</Link></li>
                        <li className="w-20"><Link href="/lec">Home</Link></li>
                    </ul>
                </nav>
            </div>
            <section className="flex justify-center">
                {children}
            </section>
        </main>
    );
}

//layout.js인데 메인 페이지에서 이거까지딸려와서 이름 바꿈