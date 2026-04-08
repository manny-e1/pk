import { Check, X } from "lucide-react";
import { ToastContentProps } from "react-toastify";

export function ToastCard({  data }: ToastContentProps<{title:string;content:string;error?:boolean}>){
  return <div className="flex gap-2.5 items-center w-full">
  <div className={`p-1 ${data.error ? "bg-red-500/10" : "bg-green-500/10"} rounded`}>
  {data.error ?  <X className="w-3 h-3 text-red-500"/>:<Check className="w-3 h-3 text-green-500" />}
  </div>
  <div className="flex flex-col gap-0.5">
    <h3 className="text-bold text-sm">{data.title}</h3>
    <p className="text-xs text-slate-500">{data.content}</p>
  </div>
</div>
}