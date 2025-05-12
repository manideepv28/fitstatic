import type { Workout, NutritionPlan } from '@/types';

export const workouts: Workout[] = [
  {
    id: 'w1',
    name: 'Full Body Blast (Beginner)',
    description: 'A great starting point for anyone new to fitness, targeting all major muscle groups.',
    difficulty: 'Beginner',
    goal: 'Full Body',
    image: 'https://picsum.photos/400/300?random=1',
    durationMinutes: 45,
    exercises: [
      { name: 'Squats', sets: '3', reps: '10-12', description: 'Focus on form, keeping your back straight.' },
      { name: 'Push-ups (on knees if needed)', sets: '3', reps: 'As many as possible (AMRAP)', description: 'Keep your core engaged.' },
      { name: 'Plank', sets: '3', duration: '30 seconds', description: 'Maintain a straight line from head to heels.' },
      { name: 'Lunges', sets: '3', reps: '10 per leg', description: 'Step forward and lower your hips until both knees are bent at a 90-degree angle.' },
      { name: 'Dumbbell Rows (light weight)', sets: '3', reps: '10-12 per arm', description: 'Keep your back straight and pull the dumbbell towards your chest.' },
    ],
  },
  {
    id: 'w2',
    name: 'Strength Builder (Intermediate)',
    description: 'Focus on building muscle mass with compound exercises.',
    difficulty: 'Intermediate',
    goal: 'Strength',
    image: 'https://picsum.photos/400/300?random=2',
    durationMinutes: 60,
    exercises: [
      { name: 'Barbell Squats', sets: '4', reps: '8-10' },
      { name: 'Bench Press', sets: '4', reps: '8-10' },
      { name: 'Deadlifts', sets: '1', reps: '5 (after warm-up sets)' },
      { name: 'Overhead Press', sets: '3', reps: '8-12' },
      { name: 'Pull-ups (or Lat Pulldowns)', sets: '3', reps: 'AMRAP or 8-12' },
    ],
  },
  {
    id: 'w3',
    name: 'Cardio Endurance (Advanced)',
    description: 'High-intensity interval training to boost cardiovascular health and endurance.',
    difficulty: 'Advanced',
    goal: 'Cardio',
    image: 'https://picsum.photos/400/300?random=3',
    durationMinutes: 30,
    exercises: [
      { name: 'Warm-up', duration: '5 minutes', description: 'Light jogging, jumping jacks.' },
      { name: 'Sprints', sets: '8', duration: '30 seconds sprint, 60 seconds rest' },
      { name: 'Burpees', sets: '3', reps: '15' },
      { name: 'Jump Rope', duration: '10 minutes continuous or interval' },
      { name: 'Cool-down', duration: '5 minutes', description: 'Stretching.' },
    ],
  },
  {
    id: 'w4',
    name: 'Yoga for Flexibility (Beginner)',
    description: 'Improve your flexibility, balance, and mindfulness with this gentle yoga routine.',
    difficulty: 'Beginner',
    goal: 'Flexibility',
    image: 'https://picsum.photos/400/300?random=4',
    durationMinutes: 30,
    exercises: [
      { name: 'Cat-Cow Stretch', reps: '10 cycles', description: 'Coordinate movement with breath.' },
      { name: 'Downward-Facing Dog', duration: 'Hold for 5 breaths', reps: '3 times' },
      { name: 'Warrior I', duration: 'Hold for 3 breaths per side', reps: '2 times' },
      { name: 'Triangle Pose', duration: 'Hold for 3 breaths per side', reps: '2 times' },
      { name: 'Child\'s Pose', duration: 'Hold for 1-2 minutes', description: 'Relax and breathe deeply.' },
    ],
  },
];

export const nutritionPlans: NutritionPlan[] = [
  {
    id: 'n1',
    name: 'Balanced Diet for Maintenance',
    description: 'A well-rounded plan focusing on whole foods to maintain a healthy weight and energy levels.',
    preference: 'Balanced',
    objective: 'Maintenance',
    image: 'https://picsum.photos/400/300?random=5',
    dailyPlans: [
      {
        day: 'Sample Day',
        breakfast: { name: 'Oatmeal with Berries and Nuts', description: '1 cup cooked oatmeal, 1/2 cup mixed berries, 1 tbsp nuts.' },
        lunch: { name: 'Grilled Chicken Salad', description: '4oz grilled chicken, mixed greens, assorted vegetables, light vinaigrette.' },
        dinner: { name: 'Salmon with Roasted Vegetables', description: '4oz baked salmon, 1 cup roasted broccoli and carrots.' },
        snacks: [{ name: 'Apple with Almond Butter', description: '1 medium apple, 2 tbsp almond butter.' }],
      },
    ],
  },
  {
    id: 'n2',
    name: 'Muscle Gain Plan (Omnivore)',
    description: 'High-protein meals designed to support muscle growth and recovery.',
    preference: 'Omnivore',
    objective: 'Muscle Gain',
    image: 'https://picsum.photos/400/300?random=6',
    dailyPlans: [
      {
        day: 'Sample Day',
        breakfast: { name: 'Scrambled Eggs with Whole Wheat Toast', description: '3-4 eggs, 2 slices toast, avocado.' },
        lunch: { name: 'Lean Beef with Quinoa and Steamed Greens', description: '5oz lean beef, 1 cup quinoa, 1 cup steamed spinach.' },
        dinner: { name: 'Chicken Breast with Sweet Potato and Asparagus', description: '6oz chicken breast, 1 medium sweet potato, 1 cup asparagus.' },
        snacks: [{ name: 'Greek Yogurt with Honey', description: '1 cup Greek yogurt, 1 tsp honey.' }, { name: 'Protein Shake', description: '1 scoop whey protein with milk or water.' }],
      },
    ],
  },
  {
    id: 'n3',
    name: 'Vegetarian Weight Loss',
    description: 'Calorie-controlled vegetarian meals rich in fiber and nutrients to aid weight loss.',
    preference: 'Vegetarian',
    objective: 'Weight Loss',
    image: 'https://picsum.photos/400/300?random=7',
    dailyPlans: [
      {
        day: 'Sample Day',
        breakfast: { name: 'Tofu Scramble with Veggies', description: '150g tofu, mixed bell peppers, spinach.' },
        lunch: { name: 'Lentil Soup with Whole Grain Bread', description: 'Large bowl of lentil soup, 1 slice bread.' },
        dinner: { name: 'Chickpea Curry with Brown Rice', description: '1.5 cups chickpea curry, 1/2 cup brown rice.' },
        snacks: [{ name: 'Mixed Nuts', description: 'Small handful (30g).' }, { name: 'Fruit Salad', description: '1 cup mixed fruit.' }],
      },
    ],
  },
];
