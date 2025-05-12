"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { Workout } from "@/types";

interface WorkoutFiltersProps {
  goals: Workout['goal'][];
  difficulties: Workout['difficulty'][];
  onFilterChange: (type: 'goal' | 'difficulty', value: string) => void;
}

export function WorkoutFilters({ goals, difficulties, onFilterChange }: WorkoutFiltersProps) {
  const uniqueGoals = Array.from(new Set(goals));
  const uniqueDifficulties = Array.from(new Set(difficulties));

  return (
    <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="goal-filter" className="text-sm font-medium text-muted-foreground mb-2 block">Filter by Goal</Label>
          <Select onValueChange={(value) => onFilterChange('goal', value)}>
            <SelectTrigger id="goal-filter" className="w-full">
              <SelectValue placeholder="All Goals" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Goals</SelectItem>
              {uniqueGoals.map((goal) => (
                <SelectItem key={goal} value={goal}>
                  {goal}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="difficulty-filter" className="text-sm font-medium text-muted-foreground mb-2 block">Filter by Difficulty</Label>
          <Select onValueChange={(value) => onFilterChange('difficulty', value)}>
            <SelectTrigger id="difficulty-filter" className="w-full">
              <SelectValue placeholder="All Difficulties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              {uniqueDifficulties.map((difficulty) => (
                <SelectItem key={difficulty} value={difficulty}>
                  {difficulty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
