import Link from "next/link";

export default function TailLink({href, title}) {
    return (
        <Link href={href} className=" hover:bg-slate-200 hover:text-neutral-100 p-2 m-2 rounded-lg">{title}</Link>
    );
}
