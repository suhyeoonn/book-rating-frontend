import { Book } from "@/lib/types";
import HeartIcon from "./icons/heart-icon";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import StarGroup from "./star-group";
import BookComment from "./book-comment";
import { comments } from "@/lib/dummy-data";

export default function BookModal({
  selectedBook,
  setSelectedBook,
}: {
  selectedBook: Book;
  setSelectedBook: (selectedBook: Book | null) => void;
}) {
  return (
    <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-20">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-4xl h-full max-h-[80vh] overflow-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div>
          <img
            src="/placeholder.svg"
            alt={selectedBook.title}
            width={500}
            height={700}
            className="object-cover w-full h-80 rounded-lg"
            style={{ aspectRatio: "500/700", objectFit: "cover" }}
          />
          <h2 className="text-2xl font-bold mt-4">{selectedBook.title}</h2>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mt-2">
            {selectedBook.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">Level {selectedBook.level}</Badge>
            <Button
              size="sm"
              variant="ghost"
              className="text-primary hover:bg-primary/10"
            >
              <HeartIcon className="w-5 h-5" />
              <span className="sr-only">Add to Favorites</span>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarGroup rating={selectedBook.rating} />
            </div>
            <div className="text-sm font-medium">{selectedBook.rating}</div>
          </div>
          <div className="space-y-4">
            {comments.map((c) => (
              <BookComment key={c.id} comment={c} />
            ))}
          </div>
        </div>
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:bg-muted/10"
            onClick={() => setSelectedBook(null)}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
