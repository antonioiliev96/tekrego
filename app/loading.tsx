export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="relative">
                {/* Outer spinning ring */}
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>

                {/* Inner pulsing dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
        </div>
    );
}
