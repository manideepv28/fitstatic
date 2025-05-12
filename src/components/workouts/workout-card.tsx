"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Clock, Zap, Activity, HeartPulse, PersonStanding, TrendingUp } from 'lucide-react';
import type { Workout } from '@/types';

interface WorkoutCardProps {
  workout: Workout;
}

const goalIcons: Record<Workout['goal'], React.ElementType> = {
  'Strength': Zap,
  'Endurance': Activity,
  'Flexibility': PersonStanding,
  'Cardio': HeartPulse,
  'Full Body': TrendingUp,
};

const difficultyColors: Record<Workout['difficulty'], string> = {
  'Beginner': 'bg-green-500 hover:bg-green-600',
  'Intermediate': 'bg-yellow-500 hover:bg-yellow-600',
  'Advanced': 'bg-red-500 hover:bg-red-600',
};


export function WorkoutCard({ workout }: WorkoutCardProps) {
  const GoalIcon = goalIcons[workout.goal] || TrendingUp;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={workout.image}
          alt={workout.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={`${workout.goal.toLowerCase()} exercise`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">{workout.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-12 overflow-hidden">
          {workout.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className={difficultyColors[workout.difficulty]  + " text-primary-foreground"}>
            {workout.difficulty}
          </Badge>
          <Badge variant="outline" className="border-primary text-primary">
            <GoalIcon className="w-3.5 h-3.5 mr-1" />
            {workout.goal}
          </Badge>
          <Badge variant="outline">
            <Clock className="w-3.5 h-3.5 mr-1" />
            {workout.durationMinutes} min
          </Badge>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="exercises">
            <AccordionTrigger className="text-base font-medium text-primary hover:no-underline">
              View Exercises ({workout.exercises.length})
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 mt-2 pl-2 border-l-2 border-primary/50">
                {workout.exercises.map((exercise, index) => (
                  <li key={index} className="text-sm">
                    <strong className="font-medium text-foreground">{exercise.name}</strong>
                    {exercise.sets && exercise.reps && (
                      <span className="text-muted-foreground block"> - {exercise.sets} sets of {exercise.reps} reps</span>
                    )}
                    {exercise.duration && !exercise.sets && (
                       <span className="text-muted-foreground block"> - {exercise.duration}</span>
                    )}
                    {exercise.description && (
                      <p className="text-xs text-muted-foreground mt-0.5 italic">{exercise.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        {/* Placeholder for actions, e.g., a "Start Workout" button if functionality were extended */}
        {/* <Button variant="default" className="w-full">Start Workout</Button> */}
      </CardFooter>
    </Card>
  );
}
