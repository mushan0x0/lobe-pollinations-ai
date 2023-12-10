import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

const BASE_URL = 'https://image.pollinations.ai/prompt';

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { description, params } = (await req.json()) as RequestData;

  const result: ResponseData = {
    description,
    params,
    result: `![result](${BASE_URL}/${description.replaceAll(/\s/g, '%20')}?${params})`,
  };

  return new Response(JSON.stringify(result));
};
