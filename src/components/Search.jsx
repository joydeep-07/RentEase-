import { Mic, SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex items-center border pr-3 gap-2 bg-[var(--bg-seconadary)] border-[var(--border-light)]/50 h-[46px] rounded-full overflow-hidden w-2xl ">
      <input
        type="text"
        placeholder="Search for furnitures ..."
        className="w-full h-full pl-5 outline-none text-[var(--text-secondary)] placeholder-[var(--text-muted)]/50 text-sm"
      />
      <button type="button">
        <SearchIcon
          size={18}
          className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer "
        />
      </button>
      <div className="h-6 w-px bg-[var(--bg-seconadry)] "></div>
      <button className="mr-2" type="button">
        <Mic
          size={18}
          className="text-[var(--text-muted)] hover:text-[var(--text-main)] cursor-pointer "
        />
      </button>
    </div>
  );
}
