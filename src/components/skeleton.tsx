import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export const SkeletonLoading = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <Skeleton className="h-8 w-40 mx-auto" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Skeleton className="h-10 flex-grow" />
            <Skeleton className="h-10 w-16" />
          </div>
          <ul className="space-y-2">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4 rounded-sm" />
                <Skeleton className="h-4 flex-grow" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
