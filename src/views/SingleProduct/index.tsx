'use client';

import React from 'react';
import { useGetProductQuery } from '@/graphql/generated/graphql';
import { useParams } from 'next/navigation';

const SingleProductPage = () => {
  const { id } = useParams(); // Get the dynamic route param

  const { data, loading, error } = useGetProductQuery({
    variables: { id },
    skip: !id, // Skip query if 'id' is not available
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data?.getProduct?.item;

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {product.images?.[0] && (
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
      )}
      <p className="text-gray-700">{product.description}</p>
      <p className="font-bold mt-2">Quantity: {product.quantity}</p>
    </div>
  );
};

export default SingleProductPage;
