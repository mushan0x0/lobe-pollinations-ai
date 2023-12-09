import { Descriptions, DescriptionsProps } from 'antd';
import { memo } from 'react';

import { ResponseData } from '@/type';

const Render = memo<Partial<ResponseData>>(({ description, params, url }) => {
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
      children: url,
      key: '3',
      label: 'Url',
      span: 3,
    },
  ];
  return <Descriptions bordered items={items} />;
});

export default Render;
