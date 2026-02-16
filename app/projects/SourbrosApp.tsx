import Image from "next/image";
import { projects } from "./data";
import FlippableCard from "./FlippableCard";
import { ExternalLink } from "lucide-react";

export default function SourbrosApp() {
  const project = projects.find(p => p.id === 1)!;
  
  const frontContent = (
    <div className="space-y-6 text-center md:text-left bg-background/95 rounded-lg p-8 backdrop-blur-sm shadow-2xl">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          Project 01
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        {/* If there's a website, wrap the title in a link; otherwise, wrap the icon */}
        {project.website ? (
          <>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline focus:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                {project.title}
              </h2>
            </a>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
              <Image
                src="/sourbros/sassy-sourbros.png"
                alt="Sourbros App"
                width={100}
                height={100}
              />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              {project.title}
            </h2>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src="/sourbros/sassy-sourbros.png"
                  alt="Sourbros App"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </>
        )}
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <div className="pt-4">
        <div className="w-24 h-1 bg-foreground"></div>
      </div>
    </div>
  );

  const backContent = (
    <div className="w-full h-full space-y-4 text-center md:text-left bg-white rounded-lg p-8 shadow-2xl flex flex-col justify-center">
      <div className="inline-block">
        <span className="text-sm font-mono text-muted-foreground">
          Project 01 - Details
        </span>
      </div>
      <div className="space-y-4 text-lg text-muted-foreground">
        {project.backcontent && (
          <p className="pt-2">
            {project.backcontent}
          </p>
        )}
        {project.website && (
          <p className="pt-2">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Visit {project.website.replace(/^https?:\/\//, '')} →

            </a>
            <br />
            <a
              href={project.social}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Instagram →
            </a>
          </p>
        )}
      </div>
      <div className="pt-4">
        <div className="w-24 h-1 bg-foreground"></div>
      </div>
      <p className="text-sm text-muted-foreground italic">
        Click the corner to flip back
      </p>
    </div>
  );
  
  return (
    <section
      className="scroll-section flex items-center justify-end relative overflow-hidden"
      style={{
        backgroundImage: "url('/sourbros/background.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 flex justify-end">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-end pr-12">
          <div></div>
          {/* Project Info with Flippable Card */}
          <FlippableCard front={frontContent} back={backContent} />
        </div>
      </div>
    </section>
  );
}
