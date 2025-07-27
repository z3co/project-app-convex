// In your components/date-picker.tsx or wherever you defined your DatePicker
// (This is a common shadcn/ui pattern, adjust path if yours is different)
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "~/lib/utils"; // Assuming you have this utility
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar"; // The actual Calendar component
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

interface DatePickerProps {
  id: string; // Keep your id prop
  selected: Date | undefined; // This is the prop to receive the selected date
  onSelect: (date: Date | undefined) => void; // This is the callback when a date is selected
}

export function DatePicker({ selected, onSelect }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !selected && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect} // Pass the onSelect prop directly to Calendar
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
