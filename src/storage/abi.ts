export const STORAGE_ABI = [
  {
    inputs: [{ internalType: 'string', name: '_key', type: 'string' }],
    name: 'getData',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'string', name: 'info', type: 'string' },
        ],
        internalType: 'struct IStorage.Data',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: '_key', type: 'string' },
      {
        components: [
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'string', name: 'info', type: 'string' },
        ],
        internalType: 'struct IStorage.Data',
        name: '_data',
        type: 'tuple',
      },
    ],
    name: 'setKeyData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allKeys',
    outputs: [{ internalType: 'string[]', name: '', type: 'string[]' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const
