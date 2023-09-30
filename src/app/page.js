import FeaturedProject from "./components/FeaturedProject";
import Hero from "./components/Hero";
import StatList from "./components/StatList";
import WorkList from "./components/WorkList";

export default function Home() {
    return (
        <div>
            <Hero />
            <WorkList />
            <StatList />
            <FeaturedProject />
        </div>
    );
}
