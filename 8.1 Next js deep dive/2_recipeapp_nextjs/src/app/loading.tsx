import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
  return <div className="w-full  min-h-screen flex justify-center items-center">
  <h1>
    <Skeleton/>
  </h1>
</div>
}