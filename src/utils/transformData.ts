// src/utils/transformData.ts (or place it where appropriate)
import { TreeNode } from 'primereact/treenode';
import { RawTreeNode } from '@/sections/data'; // Adjust path to your data.ts

// Simple key generator

export const transformDataForPrimeReact = (node: RawTreeNode): TreeNode => {
  const primeNode: TreeNode = {
    key: `<span class="math-inline">\{keyCounter\}\-</span>{node.name.replace(/\s+/g, '')}`, // Generate a unique key
    label: node.name, // Can be used, but we'll primarily use 'data' with the template
    // Store all your custom node data in the 'data' property
    data: {
      name: node.name,
      title: node.title,
      image: node.image,
    },
    // Add a type if you want different styling/templates for different nodes
    // type: 'person',
    expanded: true, // Keep nodes expanded initially
    children: node.children
      ? node.children.map(transformDataForPrimeReact) // Recursively transform children
      : [],
  };
  return primeNode;
};
