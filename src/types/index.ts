export interface Exercise {
  name: string;
  sets?: string;
  reps?: string;
  duration?: string;
  description?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  goal: 'Strength' | 'Endurance' | 'Flexibility' | 'Cardio' | 'Full Body';
  image: string;
  durationMinutes: number;
  exercises: Exercise[];
}

export interface Meal {
  name: string;
  description: string;
  calories?: number;
}

export interface DailyPlan {
  day: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks?: Meal[];
}

export interface NutritionPlan {
  id: string;
  name: string;
  description: string;
  preference: 'Omnivore' | 'Vegetarian' | 'Vegan' | 'Balanced';
  objective: 'Weight Loss' | 'Muscle Gain' | 'Maintenance' | 'General Health';
  image: string;
  dailyPlans: DailyPlan[];
}
