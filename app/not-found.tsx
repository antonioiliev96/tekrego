"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <h1 className="font-serif text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Страницата не е намерена
                </h2>
                <p className="text-muted-foreground mb-8">
                    Съжаляваме, но страницата, която търсите, не съществува или е била преместена.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="lg" asChild>
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Начална страница
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Назад
                    </Button>
                </div>
            </div>
        </div>
    );
}
