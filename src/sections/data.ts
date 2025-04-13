// data.ts

// 1. Define YOUR data structure without extending TreeNodeDatum
export interface RawTreeNode {
  name: string; // Name is required by react-d3-tree at the top level
  title?: string; // Your custom data
  image?: string; // Your custom data
  attributes?: { [key: string]: string | number | boolean }; // Optional standard attributes if needed
  children?: RawTreeNode[];
}

// 2. Type your initial data using the RawTreeNode interface
export const hierarchyData: RawTreeNode = {
  name: 'Late Grandmaster Ip Man',
  title: 'President of Ving Tsun Athletic Association till 1972',
  image: '/assets/images/lineage-IpMan.jpeg',
  children: [
    {
      name: 'Grandmaster Ip Ching',
      title: 'President - Ving Tsun Athletic Association',
      image: '/assets/images/lineage-IpChing.jpeg',
      children: [
        {
          name: 'Master Dennis Lee',
          title:
            'Chairman of Ving Tsun Athletic Association\nFounder of Dennis Lee Ving Tsun Martial Arts Association',
          image: '/assets/images/lineage-DennisLee.jpeg',
          children: [
            {
              name: 'Sifu Andy Chia',
              title:
                'Senior Instructor - Dennis Lee Ving Tsun Martial Arts Association (Singapore) \nCertified Instructor - Ving Tsun Athletic Association',
              image: '/assets/images/sifu-AndyChia7.jpg',
            },
          ],
        },
      ],
    },
  ],
};
