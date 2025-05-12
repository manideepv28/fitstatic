"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Utensils, Leaf, Activity, Target } from 'lucide-react';
import type { NutritionPlan } from '@/types';

interface NutritionPlanCardProps {
  plan: NutritionPlan;
}

const preferenceIcons: Record<NutritionPlan['preference'], React.ElementType> = {
  'Omnivore': Utensils,
  'Vegetarian': Leaf,
  'Vegan': Leaf,
  'Balanced': Activity,
};

const objectiveColors: Record<NutritionPlan['objective'], string> = {
  'Weight Loss': 'bg-blue-500 hover:bg-blue-600',
  'Muscle Gain': 'bg-orange-500 hover:bg-orange-600',
  'Maintenance': 'bg-purple-500 hover:bg-purple-600',
  'General Health': 'bg-teal-500 hover:bg-teal-600',
};

export function NutritionPlanCard({ plan }: NutritionPlanCardProps) {
  const PreferenceIcon = preferenceIcons[plan.preference] || Utensils;
  const ObjectiveIcon = Target; // Generic icon for objective

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={plan.image}
          alt={plan.name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={`${plan.preference.toLowerCase()} food`}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">{plan.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground h-12 overflow-hidden">
          {plan.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className={objectiveColors[plan.objective] + " text-primary-foreground"}>
             <ObjectiveIcon className="w-3.5 h-3.5 mr-1" />
            {plan.objective}
          </Badge>
          <Badge variant="outline" className="border-primary text-primary">
            <PreferenceIcon className="w-3.5 h-3.5 mr-1" />
            {plan.preference}
          </Badge>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="daily-plans">
            <AccordionTrigger className="text-base font-medium text-primary hover:no-underline">
              View Sample Daily Plan
            </AccordionTrigger>
            <AccordionContent>
              {plan.dailyPlans.map((dailyPlan, dpIndex) => (
                <div key={dpIndex} className="mt-2 space-y-3 pl-2 border-l-2 border-primary/50">
                  <h4 className="font-semibold text-foreground">{dailyPlan.day}</h4>
                  <div className="text-sm">
                    <strong className="text-foreground">Breakfast:</strong>
                    <p className="text-muted-foreground ml-2">{dailyPlan.breakfast.name} - <em className="text-xs">{dailyPlan.breakfast.description}</em></p>
                  </div>
                  <div className="text-sm">
                    <strong className="text-foreground">Lunch:</strong>
                    <p className="text-muted-foreground ml-2">{dailyPlan.lunch.name} - <em className="text-xs">{dailyPlan.lunch.description}</em></p>
                  </div>
                  <div className="text-sm">
                    <strong className="text-foreground">Dinner:</strong>
                    <p className="text-muted-foreground ml-2">{dailyPlan.dinner.name} - <em className="text-xs">{dailyPlan.dinner.description}</em></p>
                  </div>
                  {dailyPlan.snacks && dailyPlan.snacks.length > 0 && (
                    <div className="text-sm">
                      <strong className="text-foreground">Snacks:</strong>
                      {dailyPlan.snacks.map((snack, sIndex) => (
                        <p key={sIndex} className="text-muted-foreground ml-2">{snack.name} - <em className="text-xs">{snack.description}</em></p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
       <CardFooter>
        {/* Placeholder for actions */}
      </CardFooter>
    </Card>
  );
}
