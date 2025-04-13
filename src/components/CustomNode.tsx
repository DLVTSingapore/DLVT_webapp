// src/components/OrgChartNodeTemplate.tsx
import React from 'react';
import { TreeNode } from 'primereact/treenode';
// If using next/image, import it. If using standard <img>, no import needed for that.
import Image from 'next/image';

interface OrgChartNodeProps {
  node: TreeNode; // Receives the processed PrimeReact TreeNode
}

const OrgChartNodeTemplate: React.FC<OrgChartNodeProps> = ({ node }) => {
  // Extract your data from the node.data field
  const { name, title, image } = node.data || {};

  if (!name) {
    // Should not happen with proper transformation, but good practice
    return <div>Invalid Node Data</div>;
  }

  return (
    <div className="flex flex-col items-center p-2 px-4 text-center">
      {image && (
        // Using standard <img> first, as next/image had issues previously.
        // Ensure path is correct relative to /public
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          quality={100} // Optional: Adjust quality
          priority // Optional: Load image with priority
          className="mb-2 h-20 w-20 rounded-full object-cover shadow-md" // Tailwind classes for size, shape, etc.
          onError={e => {
            // Optional: Handle image loading errors
            console.error('Image failed to load:', image);
            (e.target as HTMLImageElement).style.display = 'none'; // Hide broken image icon
            // Optionally show a placeholder
          }}
        />
        /* ---- OR using next/image (try after confirming standard img works) ----
        <div className="relative mb-2 h-20 w-20 flex-shrink-0 overflow-hidden rounded-full shadow-md">
           <Image
               src={image}
               alt={name}
               layout="fill"
               objectFit="cover"
               unoptimized={true} // Keep this from previous debugging
           />
        </div>
        */
      )}
      <div className="mt-1 text-sm font-semibold">{name}</div>
      {title && (
        <div className="mt-1 text-xs whitespace-pre-line text-gray-600">
          {title}
        </div>
      )}
    </div>
  );
};

export default OrgChartNodeTemplate;
