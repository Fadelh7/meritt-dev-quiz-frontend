'use client';

import React, { useMemo } from 'react';
import {
  Product,
  ProductSearchFields,
  Sorting,
  useGetAllProductsQuery,
} from '@/graphql/generated/graphql';
import { useSearchParams } from 'next/navigation';
import { ProductTable } from './ProductTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AllProductsPage = () => {
  const params = useSearchParams();

  const page = params.get('page');
  const limit = params.get('limit');

  const { data, loading } = useGetAllProductsQuery({
    variables: {
      limit: limit ? parseInt(limit, 10) : 30,
      page: page ? parseInt(page, 10) : 1,
      sort: {
        field: ProductSearchFields.Title,
        order: Sorting.Asc,
      },
      searchFields: {
        fields: [ProductSearchFields.Title],
        q: '',
      },
      filters: null,
    },
  });

  const { allProducts, allProductsLength, totalPages } = useMemo(() => {
    return {
      allProducts: data?.getAllProduct.items,
      allProductsLength: data?.getAllProduct.length,
      totalPages: Math.ceil(+data?.getAllProduct?.length! / +limit!),
    };
  }, [data?.getAllProduct.items, data?.getAllProduct.length, limit]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-4xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-4 px-2">
      <div className="text-2xl font-bold mb-4">
        <Button asChild>
          <Link href={'/'}>Go Back</Link>
        </Button>
      </div>
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      {allProducts && (
        <ProductTable
          products={allProducts as Product[]}
          currentPage={+page!}
          totalPages={totalPages}
          totalItems={+allProductsLength!}
          limit={+limit!}
        />
      )}
    </div>
  );
};

export default AllProductsPage;
