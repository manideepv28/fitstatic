import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, UtensilsCrossed, Target } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="https://picsum.photos/seed/fitnesshero/1200/800"
              alt="Hero Fitness Image"
              width={1200}
              height={800}
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-xl"
              data-ai-hint="fitness lifestyle"
              priority
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Welcome to FitStatic
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your ultimate companion for achieving your fitness goals. Discover personalized workout routines and nutrition plans designed for you.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/workouts">
                    <Dumbbell className="mr-2 h-5 w-5" /> Explore Workouts
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/nutrition">
                    <UtensilsCrossed className="mr-2 h-5 w-5" /> Discover Nutrition
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              FitStatic provides comprehensive tools and resources to help you on your fitness journey.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Dumbbell className="h-6 w-6 text-primary" />
                  Workout Library
                </CardTitle>
                <CardDescription>
                  Access a wide range of workout routines tailored to various fitness levels and goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>From beginner basics to advanced challenges, find the perfect workout to push your limits.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-6 w-6 text-primary" />
                  Goal-Oriented Filters
                </CardTitle>
                <CardDescription>
                  Easily find workouts that match your specific fitness objectives and difficulty preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Filter by strength, endurance, flexibility, cardio, and difficulty to customize your search.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <UtensilsCrossed className="h-6 w-6 text-primary" />
                  Nutrition Plans
                </CardTitle>
                <CardDescription>
                  Explore nutrition plans designed to complement your workouts and dietary needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Fuel your body right with plans for weight loss, muscle gain, or general health.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
