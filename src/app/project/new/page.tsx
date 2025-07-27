"use client";

import { Input } from "~/components/ui/input";
import { MainNav } from "~/components/main-nav";
import { Search } from "~/components/search";
import { ModeToggle } from "~/components/mode-toggle";
import { DatePicker } from "~/components/date-picker";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { FileText, CalendarDays, FolderPlus } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "~/../convex/_generated/api";
import { useState } from "react";

export default function CreateProjectComponent() {
  const [projectEndDate, setProjectEndDate] = useState<Date | undefined>(
    undefined,
  );
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const createProject = useMutation(api.projects.createProject);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!projectName.trim() || !projectDescription.trim() || !projectEndDate) {
      alert("Please fill in all project details");
      return;
    }

    try {
      await createProject({
        name: projectName,
        description: projectDescription,
        status: "In Progress",
        endDate: projectEndDate.toISOString(),
      });
      alert("Project created");

      setProjectName("");
      setProjectDescription("");
      setProjectEndDate(undefined);
    } catch (error) {
      console.error("Failed to create project", error);
      alert("Failed to create project");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav />
          <div className="flex items-center gap-4">
            <Search />
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="bg-background/95 supports-[backdrop-filter]:bg-background/60 rounded-md p-4 md:p-6">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <FolderPlus className="text-primary h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Create New Project
            </h1>
            <p className="text-muted-foreground mt-2">
              Set up your project with a name, description, and timeline
            </p>
          </div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Fill in the information below to create your new project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <FileText className="h-4 w-4" />
                  Name of project
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    className="h-11"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <FileText className="h-4 w-4" />
                  Description
                </Label>
                <div className="relative">
                  <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="A short description of the project"
                    className="h-11"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* Project End Date */}
              <div className="space-y-2">
                <Label
                  htmlFor="endDate"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <CalendarDays className="h-4 w-4" />
                  End of the project
                </Label>
                <div className="relative">
                  <DatePicker
                    id="endDate"
                    onSelect={setProjectEndDate}
                    selected={projectEndDate}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="h-11 w-full text-base font-medium"
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-muted-foreground mt-6 text-center text-sm">
            <p>
              You can always edit these details later in your project settings.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
