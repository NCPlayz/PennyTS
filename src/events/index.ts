import { messageReactionAdd } from './messageReactionAdd';
import { messageReactionRemove } from './messageReactionRemove';
import { guildMemberAdd } from './guildMemberAdd';
import { guildMemberRemove } from './guildMemberRemove';
import { guildMemberUpdate } from './guildMemberUpdate';
import { guildBanAdd } from './guildBanAdd';
import { guildBanRemove } from './guildBanRemove';
import { messageDelete } from './messageDelete';
import { usersUpdate } from './usersUpdate';

export default [
  messageReactionAdd,
  messageReactionRemove,
  guildMemberAdd,
  guildMemberRemove,
  guildMemberUpdate,
  guildBanAdd,
  guildBanRemove,
  messageDelete,
  usersUpdate,
];
