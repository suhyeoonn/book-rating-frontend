import { Button } from "./button";
import { Input } from "./input";

export default function SearchInput() {
  return (
    <form className="flex w-full max-w-md items-center gap-2">
      <Input
        type="search"
        placeholder="Search books..."
        className="flex-1 rounded-l-md bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <Button
        type="submit"
        className="rounded-r-md bg-slate-600 px-4 py-2 text-white transition hover:bg-primary-foreground"
      >
        Search
      </Button>
    </form>
  );
}
