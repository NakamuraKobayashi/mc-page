import { tryOnBeforeUnmount } from "@vueuse/core";

export const maps: {
  name: string;
  web?: string;
  web3d?: string;
  native_version: string;
  active: boolean;
  download?: string;
  archived_at?: string;
}[] = [
  {
    name: 'The Earth',
    web: 'https://mcmap.anikenji.xyz/#earth:24308:2:7905:100:0:0:0:1:flat',
    web3d: 'https://mcmap.anikenji.xyz/#earth:24308:2:7905:100:0:0:0:0:perspective',
    native_version: 'Paper 1.21.1',
    active: true,
  },
  {
    name: 'Survival Building',
    web: 'https://mcmap.anikenji.xyz/#world:4821:0:-1883:1500:0:0:0:1:flat',
    web3d: 'https://mcmap.anikenji.xyz/#world:4821:0:-1883:1500:0:0:0:0:perspective',
    native_version: '1.21.1',
    active: true,
  },
];
