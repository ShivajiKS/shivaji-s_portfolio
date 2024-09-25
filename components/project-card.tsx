// import { Card, CardContent } from "./ui/card";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";

export const ProjectCard = ({
  title,
  description,
  image,
  href,
  techStack,
}: {
  title: string;
  description: string;
  image: string;
  sourceCode: string;
  href: string;
  techStack: string[];
}) => {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full dark:bg-slate-700 rounded-lg"
      )}
    >
      <Link
        href={href || "#"}
        target="_blank"
        className={cn("block cursor-pointer")}
      >
        {image && (
          <Image
            src={`/${image}`}
            alt={title}
            width={500}
            height={300}
            className="h-52 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>

      <CardHeader className="px-2 space-y-3">
        <div className="space-y-1">
          <CardTitle className="text-xl mb-1">{title}</CardTitle>
          <p className="font-medium line-clamp-4 text-justify text-pretty text-sm tracking-tight leading-6 hyphens-auto">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center text-center"
            >
              <Button
                size="sm"
                variant="outline"
                className="cursor-default dark:bg-slate-800 capitalize"
              >
                {item}
              </Button>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardFooter className="px-2 pb-2 flex flex-row-reverse group-hover:text-green-500">
        <div className="flex flex-row flex-wrap items-end gap-1">
          <Link href={href} target="_blank">
            <Badge
              variant="outline"
              className="flex gap-2 px-3 py-1 text-[12px] capitalize dark:bg-slate-800"
            >
              view project
            </Badge>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
