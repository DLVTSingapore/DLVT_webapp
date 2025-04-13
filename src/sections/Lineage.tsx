'use client';

import React, { useMemo } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

import { hierarchyData } from '@/sections/data';
import { transformDataForPrimeReact } from '@/utils/transformData';
import OrgChartNodeTemplate from '@/components/CustomNode';

const LineagePrimeReactPage = () => {
  // Transform data only once
  const chartData = useMemo(() => {
    // The OrganizationChart expects an array containing the root node(s)
    return [transformDataForPrimeReact(hierarchyData)];
  }, []);

  // Define the function that renders the template
  const nodeTemplate = (node: TreeNode) => {
    return <OrgChartNodeTemplate node={node} />;
  };

  return (
    <section>
      <div className="flex flex-col gap-4 px-16 py-4 md:px-48">
        <h2 className="mb-4 text-start text-2xl font-bold">Our Lineage</h2>
        <div className="flex items-center justify-center overflow-x-auto rounded p-4">
          {' '}
          {/* Removed 'border border-gray-300' */}
          {/* Use the OrganizationChart component */}
          <OrganizationChart
            value={chartData}
            nodeTemplate={nodeTemplate}
            // Optional: Add PrimeReact utility classes for styling the chart container/lines if needed
            // className="my-custom-orgchart"
          />
        </div>
        <div className="mb-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8Wqf2DEG7ks?si=REBZuw2rf1vFlnVe"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LineagePrimeReactPage;
