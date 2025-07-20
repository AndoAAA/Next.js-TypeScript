"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

const ReservationForm = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <form className="max-w-3xl mx-auto p-6  rounded-2xl text-white space-y-8">
      <h2 className="text-3xl font-semibold text-center">Book a Table</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstname">First Name</Label>
          <Input id="firstname" placeholder="John" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="lastname">Last Name</Label>
          <Input id="lastname" placeholder="Doe" className="mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "mt-1 w-full justify-start text-left font-normal bg-white text-black hover:bg-gray-100"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label>Persons</Label>
          <Select>
            <SelectTrigger className="mt-1 w-full bg-white text-black hover:bg-gray-100">
              <SelectValue placeholder="How many people?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>People</SelectLabel>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={String(num)}>
                    {num}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          className="uppercase px-10 py-4 bg-teal-700 hover:bg-teal-500 cursor-pointer transition rounded-full text-lg"
        >
          Book a Table
        </Button>
      </div>
    </form>
  );
};

export default ReservationForm;
