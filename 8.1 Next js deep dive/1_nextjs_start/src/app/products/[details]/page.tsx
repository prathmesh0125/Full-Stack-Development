// app/[id]/page.tsx
'use client'
import { useParams } from 'next/navigation';

export default function Details() {
  // const params = useParams();
  // const { id } = params; // 'id' corresponds to the dynamic segment in the URL

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID</p>
    </div>
  );
}
