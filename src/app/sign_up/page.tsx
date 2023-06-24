import Link from "next/link";
import { Email } from "@/components/sign_up/Email";
import { Password } from "@/components/sign_up/Password";
import { GoPersonAdd } from "react-icons/go";

export default function Index() {
  return (
    <>
      <div className="w-[400px] flex flex-col items-center my-28 mx-auto py-5 bg-gray-200">
        <header>
          <h1 className="text-2xl mb-2">创建账户</h1>
        </header>
        <GoPersonAdd size={100} />
        <form className="flex flex-col gap-2">
          <Email />
          <Password />
          <button
            type="submit"
            className="mt-3 w-full font-sans text-lg bg-slate-500 hover:bg-slate-400 text-white font-thin py-1 px-4 rounded"
          >
            提交
          </button>
        </form>
        <Link href=".." className="font-sans text-xs mt-3">
          取消
        </Link>
        <div className="mt-10 font-sans font-extralight text-slate-700">
          已有账户
          <Link href="/sign_in">在此登陆</Link>
        </div>
      </div>
    </>
  );
}
