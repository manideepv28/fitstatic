"use client";

import { useState, useMemo } from 'react';
import { workouts as allWorkouts } from '@/lib/data';
import type { Workout } from '@/types';
import { WorkoutCard } from '@/components/workouts/workout-card';
import { WorkoutFilters } from '@/components/workouts/workout-filters';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function WorkoutsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<{
    goal: Workout['goal'] | 'all';
    difficulty: Workout['difficulty'] | 'all';
  }>({
    goal: 'all',
    difficulty: 'all',
  });

  const handleFilterChange = (type: 'goal' | 'difficulty', value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value as Workout['goal'] | Workout['difficulty'] | 'all',
    }));
  };

  const filteredWorkouts = useMemo(() => {
    return allWorkouts.filter((workout) => {
      const matchesSearchTerm = workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                workout.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGoal = filters.goal === 'all' || workout.goal === filters.goal;
      const matchesDifficulty = filters.difficulty === 'all' || workout.difficulty === filters.difficulty;
      return matchesSearchTerm && matchesGoal && matchesDifficulty;
    });
  }, [searchTerm, filters]);

  const uniqueGoals = useMemo(() => Array.from(new Set(allWorkouts.map(w => w.goal))), []);
  const uniqueDifficulties = useMemo(() => Array.from(new Set(allWorkouts.map(w => w.difficulty))), []);


  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Find Your Perfect Workout
        </h1>
        <p className="mt-3 text-lg leading-7 text-muted-foreground sm:mt-4">
          Browse our collection of workouts tailored to your fitness goals and experience level.
        </p>
      </section>
      
      <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search workouts by name or description..."
            className="w-full pl-10 py-3 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <WorkoutFilters
        goals={uniqueGoals}
        difficulties={uniqueDifficulties}
        onFilterChange={handleFilterChange}
      />

      {filteredWorkouts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No workouts match your criteria. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}
