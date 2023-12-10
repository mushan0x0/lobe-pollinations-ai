import { Descriptions, DescriptionsProps } from 'antd';
import { memo } from 'react';

import { ResponseData } from '@/type';

const Render = memo<Partial<ResponseData>>(({ description, params, result }) => {
  const items: DescriptionsProps['items'] = [
    {
      children: description,
      key: '1',
      label: 'Description',
      span: 3,
    },
    {
      children: params,
      key: '2',
      label: 'Params',
      span: 3,
    },
    {
      children: result,
      key: '3',
      label: 'Result',
      span: 3,
    },
  ];
  return <Descriptions bordered items={items} />;
});

export default Render;
