import { createLobeChatPluginGateway } from '@lobehub/chat-plugins-gateway';

export default async (req: Request) => createLobeChatPluginGateway()(req);
