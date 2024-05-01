import { ProductCardSkeleton } from "@/components/ProductCard";
import { Suspense } from "react";

export function ProductsPage() {
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <Suspense
      fallback={
        <>
          <ProductCardSkeleton />
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </>
      }
    >
      <ProductSuspense productsFetcher={productsFetcher} />
    </Suspense>
  </div>;
}
