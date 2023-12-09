import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { description, params } = (await req.json()) as RequestData;

  const result: ResponseData = {
    description,
    params,
    url: `https://image.pollinations.ai/prompt/${description.replaceAll(
      /[^A-Za-z]/g,
      '_',
    )}}?${params}`,
  };

  return new Response(JSON.stringify(result));
};
