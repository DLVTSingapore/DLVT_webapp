'use client';

import React, { useMemo } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

import { hierarchyData } from '@/sections/data';
import { transformDataForPrimeReact } from '@/utils/transformData';
import OrgChartNodeTemplate from '@/components/CustomNode';

const OrganizationChartClient = () => {
  const chartData = useMemo(() => {
    // The OrganizationChart expects an array containing the root node(s)
    return [transformDataForPrimeReact(hierarchyData)];
  }, []);

  // Define the function that renders the template
  const nodeTemplate = (node: TreeNode) => {
    return <OrgChartNodeTemplate node={node} />;
  };
  return <OrganizationChart value={chartData} nodeTemplate={nodeTemplate} />;
};

export default OrganizationChartClient;
