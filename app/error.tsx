"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter();

    // io.prismic.preview is readable from JS (__prerender_bypass is httpOnly), so only
    // editors with a preview session see the exit button. Read after mount to keep
    // the server and client HTML the same.
    const [isPreview, setIsPreview] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        setIsPreview(document.cookie.includes("io.prismic.preview"));
    }, []);

    // The digest links this report to the server log entry.
    useEffect(() => {
        console.error(error);
    }, [error]);

    // reset() alone re-renders with the RSC payload the client already has, so a
    // server component error would come back at once; refresh fetches it again.
    const retry = () =>
        startTransition(() => {
            router.refresh();
            reset();
        });

    // /api/exit-preview answers with JSON, so call it and reload instead of linking to it.
    const exitPreview = async () => {
        setIsExiting(true);
        await fetch("/api/exit-preview").catch(() => undefined);
        window.location.reload();
    };

    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">Нещо се обърка</h1>
                <p className="text-muted-foreground mb-8">
                    Страницата не можа да се зареди. Опитайте отново след малко.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="cta" size="lg" onClick={retry}>
                        <RotateCcw aria-hidden="true" />
                        Опитайте отново
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/">
                            <Home aria-hidden="true" />
                            Начална страница
                        </Link>
                    </Button>
                </div>
                {isPreview && (
                    <div className="mt-10 rounded-2xl border border-border bg-cream-dark p-6 text-sm text-muted-foreground">
                        <p className="mb-4">
                            Вие сте в режим на преглед от Prismic. Ако прегледът вече не е активен, излезте от него.
                        </p>
                        <Button variant="outline" onClick={exitPreview} disabled={isExiting}>
                            {isExiting ? "Излизане…" : "Изход от прегледа"}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
