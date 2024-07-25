import Introduction from "./introduction/page";
import Sidebar from "./sidebar/page";

export default function Home() {
  return (
    <div className="flex">
      <main className="flex-1 ">
        <Introduction />
      </main>
    </div>
  );
}
