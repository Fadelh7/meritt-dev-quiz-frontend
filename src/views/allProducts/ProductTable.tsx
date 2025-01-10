'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Product } from '@/graphql/generated/graphql';

interface ProductTableProps {
  products: Product[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  limit: number;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  currentPage,
  totalPages,
  totalItems,
  limit,
}) => {
  const router = useRouter();
  const [page, setPage] = useState(currentPage);

  // Navigate to single product page using the dynamic route
  const handleRowClick = (productId: string) => {
    router.push(`/single-product/${productId}`);
  };

  // Handle page change
  const handlePageChange = useCallback(
    (newPage: number) => {
      setPage(newPage);
      router.push(`/all-products?page=${newPage}&limit=${limit}`);
    },
    [limit, router]
  );

  // Render pagination numbers
  const renderPageNumbers = useCallback(() => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? 'secondary' : 'outline'}
          className="mx-1"
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  }, [currentPage, handlePageChange, totalPages]);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Created At</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product._id}
              onClick={() => handleRowClick(product._id)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <TableCell>{new Date(product.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          {page > 1 && (
            <Button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
          )}
          {renderPageNumbers()}
          {page < totalPages && (
            <Button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          )}
        </div>
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages} | Total items: {totalItems}
        </div>
      </div>
    </div>
  );
};
