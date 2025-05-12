import { nutritionPlans } from '@/lib/data';
import { NutritionPlanCard } from '@/components/nutrition/nutrition-plan-card';

export default function NutritionPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Fuel Your Body Right
        </h1>
        <p className="mt-3 text-lg leading-7 text-muted-foreground sm:mt-4">
          Explore our expertly crafted nutrition plans to complement your fitness journey.
        </p>
      </section>

      {nutritionPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionPlans.map((plan) => (
            <NutritionPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No nutrition plans available at this time.</p>
        </div>
      )}
    </div>
  );
}
