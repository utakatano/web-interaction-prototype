import { Comic } from "@/features/routes/comic/components/Comic";

export default function ComicPage() {
  return (
    <div className="bg-[#eee]">
      <div className="max-w-[800px] mx-auto h-[100svh] bg-white">
        <Comic />
      </div>
    </div>
  )
}