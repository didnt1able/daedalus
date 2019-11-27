// @flow
export type TipInfo = {
  epoch: number,
  slot: number,
};

export type GetNetworkInfoResponse = {
  syncProgress: number,
  localTip: TipInfo,
  networkTip: TipInfo,
};

export type NetworkInfoResponse = {
  sync_progress: {
    status: 'ready' | 'syncing',
    progress?: {
      quantity: number,
      unit: 'percent',
    },
  },
  node_tip: {
    slot_number: number,
    epoch_number: number,
    height: {
      quantity: number,
      unit: 'block',
    },
  },
  network_tip: {
    slot_number: number,
    epoch_number: number,
  },
};