import Link from "next/link";

export default function AboutLayout({ children, params }) {
    return (
        <main className="contanier">
            <div className="flex justify-between items-center p-10 h-12 bg-slate-200 text-slate-700">
                <div>About Layout</div>
                <nav>
                    <ul className="flex items-center justify-between">
                        <li className="w-20"><Link href="/about/test">test</Link></li>
                        <li className="w-20"><Link href="/">home</Link></li>
                        <li className="w-20"><Link href="/about/page">page</Link></li>
                    </ul>
                </nav>
            </div>
            <section className="flex justify-center">
                {children}
            </section>
        </main>
    );
}
