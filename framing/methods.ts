import * as incoming from "./method_encoder.ts";
import * as outgoing from "./method_decoder.ts";

interface Send {
  (
    channel: number,
    method: { classId: number; methodId: number; args: any }
  ): Promise<void>;
}

interface Receive {
  (channel: number, method: { classId: number; methodId: number }): Promise<
    any
  >;
}

export interface ConnectionMethods {
  start(
    channel: number,
    args: incoming.ConnectionStartArgs
  ): Promise<outgoing.ConnectionStartOkArgs>;
  secure(
    channel: number,
    args: incoming.ConnectionSecureArgs
  ): Promise<outgoing.ConnectionSecureOkArgs>;
  tune(
    channel: number,
    args: incoming.ConnectionTuneArgs
  ): Promise<outgoing.ConnectionTuneOkArgs>;
  open(
    channel: number,
    args: incoming.ConnectionOpenArgs
  ): Promise<outgoing.ConnectionOpenOkArgs>;
  close(
    channel: number,
    args: incoming.ConnectionCloseArgs
  ): Promise<outgoing.ConnectionCloseOkArgs>;
  updateSecret(
    channel: number,
    args: incoming.ConnectionUpdateSecretArgs
  ): Promise<outgoing.ConnectionUpdateSecretOkArgs>;
  startOk(channel: number, args: incoming.ConnectionStartOkArgs): Promise<void>;
  secureOk(
    channel: number,
    args: incoming.ConnectionSecureOkArgs
  ): Promise<void>;
  tuneOk(channel: number, args: incoming.ConnectionTuneOkArgs): Promise<void>;
  openOk(channel: number, args: incoming.ConnectionOpenOkArgs): Promise<void>;
  closeOk(channel: number, args: incoming.ConnectionCloseOkArgs): Promise<void>;
  blocked(channel: number, args: incoming.ConnectionBlockedArgs): Promise<void>;
  unblocked(
    channel: number,
    args: incoming.ConnectionUnblockedArgs
  ): Promise<void>;
  updateSecretOk(
    channel: number,
    args: incoming.ConnectionUpdateSecretOkArgs
  ): Promise<void>;
}

export function initConnection(
  send: Send,
  receive: Receive
): ConnectionMethods {
  return {
    async start(channel: number, args: incoming.ConnectionStartArgs) {
      await send(channel, {
        classId: 10,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 11
      });
    },
    async secure(channel: number, args: incoming.ConnectionSecureArgs) {
      await send(channel, {
        classId: 10,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 21
      });
    },
    async tune(channel: number, args: incoming.ConnectionTuneArgs) {
      await send(channel, {
        classId: 10,
        methodId: 30,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 31
      });
    },
    async open(channel: number, args: incoming.ConnectionOpenArgs) {
      await send(channel, {
        classId: 10,
        methodId: 40,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 41
      });
    },
    async close(channel: number, args: incoming.ConnectionCloseArgs) {
      await send(channel, {
        classId: 10,
        methodId: 50,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 51
      });
    },
    async updateSecret(
      channel: number,
      args: incoming.ConnectionUpdateSecretArgs
    ) {
      await send(channel, {
        classId: 10,
        methodId: 70,
        args
      });

      return receive(channel, {
        classId: 10,
        methodId: 71
      });
    },

    async startOk(channel: number, args: incoming.ConnectionStartOkArgs) {
      await send(channel, {
        classId: 10,
        methodId: 11,
        args
      });
    },
    async secureOk(channel: number, args: incoming.ConnectionSecureOkArgs) {
      await send(channel, {
        classId: 10,
        methodId: 21,
        args
      });
    },
    async tuneOk(channel: number, args: incoming.ConnectionTuneOkArgs) {
      await send(channel, {
        classId: 10,
        methodId: 31,
        args
      });
    },
    async openOk(channel: number, args: incoming.ConnectionOpenOkArgs) {
      await send(channel, {
        classId: 10,
        methodId: 41,
        args
      });
    },
    async closeOk(channel: number, args: incoming.ConnectionCloseOkArgs) {
      await send(channel, {
        classId: 10,
        methodId: 51,
        args
      });
    },
    async blocked(channel: number, args: incoming.ConnectionBlockedArgs) {
      await send(channel, {
        classId: 10,
        methodId: 60,
        args
      });
    },
    async unblocked(channel: number, args: incoming.ConnectionUnblockedArgs) {
      await send(channel, {
        classId: 10,
        methodId: 61,
        args
      });
    },
    async updateSecretOk(
      channel: number,
      args: incoming.ConnectionUpdateSecretOkArgs
    ) {
      await send(channel, {
        classId: 10,
        methodId: 71,
        args
      });
    }
  };
}
export interface ChannelMethods {
  open(
    channel: number,
    args: incoming.ChannelOpenArgs
  ): Promise<outgoing.ChannelOpenOkArgs>;
  flow(
    channel: number,
    args: incoming.ChannelFlowArgs
  ): Promise<outgoing.ChannelFlowOkArgs>;
  close(
    channel: number,
    args: incoming.ChannelCloseArgs
  ): Promise<outgoing.ChannelCloseOkArgs>;
  openOk(channel: number, args: incoming.ChannelOpenOkArgs): Promise<void>;
  flowOk(channel: number, args: incoming.ChannelFlowOkArgs): Promise<void>;
  closeOk(channel: number, args: incoming.ChannelCloseOkArgs): Promise<void>;
}

export function initChannel(send: Send, receive: Receive): ChannelMethods {
  return {
    async open(channel: number, args: incoming.ChannelOpenArgs) {
      await send(channel, {
        classId: 20,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 20,
        methodId: 11
      });
    },
    async flow(channel: number, args: incoming.ChannelFlowArgs) {
      await send(channel, {
        classId: 20,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 20,
        methodId: 21
      });
    },
    async close(channel: number, args: incoming.ChannelCloseArgs) {
      await send(channel, {
        classId: 20,
        methodId: 40,
        args
      });

      return receive(channel, {
        classId: 20,
        methodId: 41
      });
    },

    async openOk(channel: number, args: incoming.ChannelOpenOkArgs) {
      await send(channel, {
        classId: 20,
        methodId: 11,
        args
      });
    },
    async flowOk(channel: number, args: incoming.ChannelFlowOkArgs) {
      await send(channel, {
        classId: 20,
        methodId: 21,
        args
      });
    },
    async closeOk(channel: number, args: incoming.ChannelCloseOkArgs) {
      await send(channel, {
        classId: 20,
        methodId: 41,
        args
      });
    }
  };
}
export interface AccessMethods {
  request(
    channel: number,
    args: incoming.AccessRequestArgs
  ): Promise<outgoing.AccessRequestOkArgs>;
  requestOk(channel: number, args: incoming.AccessRequestOkArgs): Promise<void>;
}

export function initAccess(send: Send, receive: Receive): AccessMethods {
  return {
    async request(channel: number, args: incoming.AccessRequestArgs) {
      await send(channel, {
        classId: 30,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 30,
        methodId: 11
      });
    },

    async requestOk(channel: number, args: incoming.AccessRequestOkArgs) {
      await send(channel, {
        classId: 30,
        methodId: 11,
        args
      });
    }
  };
}
export interface ExchangeMethods {
  declare(
    channel: number,
    args: incoming.ExchangeDeclareArgs
  ): Promise<outgoing.ExchangeDeclareOkArgs>;
  delete(
    channel: number,
    args: incoming.ExchangeDeleteArgs
  ): Promise<outgoing.ExchangeDeleteOkArgs>;
  bind(
    channel: number,
    args: incoming.ExchangeBindArgs
  ): Promise<outgoing.ExchangeBindOkArgs>;
  unbind(
    channel: number,
    args: incoming.ExchangeUnbindArgs
  ): Promise<outgoing.ExchangeUnbindOkArgs>;
  declareOk(
    channel: number,
    args: incoming.ExchangeDeclareOkArgs
  ): Promise<void>;
  deleteOk(channel: number, args: incoming.ExchangeDeleteOkArgs): Promise<void>;
  bindOk(channel: number, args: incoming.ExchangeBindOkArgs): Promise<void>;
  unbindOk(channel: number, args: incoming.ExchangeUnbindOkArgs): Promise<void>;
}

export function initExchange(send: Send, receive: Receive): ExchangeMethods {
  return {
    async declare(channel: number, args: incoming.ExchangeDeclareArgs) {
      await send(channel, {
        classId: 40,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 40,
        methodId: 11
      });
    },
    async delete(channel: number, args: incoming.ExchangeDeleteArgs) {
      await send(channel, {
        classId: 40,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 40,
        methodId: 21
      });
    },
    async bind(channel: number, args: incoming.ExchangeBindArgs) {
      await send(channel, {
        classId: 40,
        methodId: 30,
        args
      });

      return receive(channel, {
        classId: 40,
        methodId: 31
      });
    },
    async unbind(channel: number, args: incoming.ExchangeUnbindArgs) {
      await send(channel, {
        classId: 40,
        methodId: 40,
        args
      });

      return receive(channel, {
        classId: 40,
        methodId: 41
      });
    },

    async declareOk(channel: number, args: incoming.ExchangeDeclareOkArgs) {
      await send(channel, {
        classId: 40,
        methodId: 11,
        args
      });
    },
    async deleteOk(channel: number, args: incoming.ExchangeDeleteOkArgs) {
      await send(channel, {
        classId: 40,
        methodId: 21,
        args
      });
    },
    async bindOk(channel: number, args: incoming.ExchangeBindOkArgs) {
      await send(channel, {
        classId: 40,
        methodId: 31,
        args
      });
    },
    async unbindOk(channel: number, args: incoming.ExchangeUnbindOkArgs) {
      await send(channel, {
        classId: 40,
        methodId: 51,
        args
      });
    }
  };
}
export interface QueueMethods {
  declare(
    channel: number,
    args: incoming.QueueDeclareArgs
  ): Promise<outgoing.QueueDeclareOkArgs>;
  bind(
    channel: number,
    args: incoming.QueueBindArgs
  ): Promise<outgoing.QueueBindOkArgs>;
  purge(
    channel: number,
    args: incoming.QueuePurgeArgs
  ): Promise<outgoing.QueuePurgeOkArgs>;
  delete(
    channel: number,
    args: incoming.QueueDeleteArgs
  ): Promise<outgoing.QueueDeleteOkArgs>;
  unbind(
    channel: number,
    args: incoming.QueueUnbindArgs
  ): Promise<outgoing.QueueUnbindOkArgs>;
  declareOk(channel: number, args: incoming.QueueDeclareOkArgs): Promise<void>;
  bindOk(channel: number, args: incoming.QueueBindOkArgs): Promise<void>;
  purgeOk(channel: number, args: incoming.QueuePurgeOkArgs): Promise<void>;
  deleteOk(channel: number, args: incoming.QueueDeleteOkArgs): Promise<void>;
  unbindOk(channel: number, args: incoming.QueueUnbindOkArgs): Promise<void>;
}

export function initQueue(send: Send, receive: Receive): QueueMethods {
  return {
    async declare(channel: number, args: incoming.QueueDeclareArgs) {
      await send(channel, {
        classId: 50,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 50,
        methodId: 11
      });
    },
    async bind(channel: number, args: incoming.QueueBindArgs) {
      await send(channel, {
        classId: 50,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 50,
        methodId: 21
      });
    },
    async purge(channel: number, args: incoming.QueuePurgeArgs) {
      await send(channel, {
        classId: 50,
        methodId: 30,
        args
      });

      return receive(channel, {
        classId: 50,
        methodId: 31
      });
    },
    async delete(channel: number, args: incoming.QueueDeleteArgs) {
      await send(channel, {
        classId: 50,
        methodId: 40,
        args
      });

      return receive(channel, {
        classId: 50,
        methodId: 41
      });
    },
    async unbind(channel: number, args: incoming.QueueUnbindArgs) {
      await send(channel, {
        classId: 50,
        methodId: 50,
        args
      });

      return receive(channel, {
        classId: 50,
        methodId: 51
      });
    },

    async declareOk(channel: number, args: incoming.QueueDeclareOkArgs) {
      await send(channel, {
        classId: 50,
        methodId: 11,
        args
      });
    },
    async bindOk(channel: number, args: incoming.QueueBindOkArgs) {
      await send(channel, {
        classId: 50,
        methodId: 21,
        args
      });
    },
    async purgeOk(channel: number, args: incoming.QueuePurgeOkArgs) {
      await send(channel, {
        classId: 50,
        methodId: 31,
        args
      });
    },
    async deleteOk(channel: number, args: incoming.QueueDeleteOkArgs) {
      await send(channel, {
        classId: 50,
        methodId: 41,
        args
      });
    },
    async unbindOk(channel: number, args: incoming.QueueUnbindOkArgs) {
      await send(channel, {
        classId: 50,
        methodId: 51,
        args
      });
    }
  };
}
export interface BasicMethods {
  qos(
    channel: number,
    args: incoming.BasicQosArgs
  ): Promise<outgoing.BasicQosOkArgs>;
  consume(
    channel: number,
    args: incoming.BasicConsumeArgs
  ): Promise<outgoing.BasicConsumeOkArgs>;
  cancel(
    channel: number,
    args: incoming.BasicCancelArgs
  ): Promise<outgoing.BasicCancelOkArgs>;
  get(
    channel: number,
    args: incoming.BasicGetArgs
  ): Promise<outgoing.BasicGetOkArgs>;
  recover(
    channel: number,
    args: incoming.BasicRecoverArgs
  ): Promise<outgoing.BasicRecoverOkArgs>;
  qosOk(channel: number, args: incoming.BasicQosOkArgs): Promise<void>;
  consumeOk(channel: number, args: incoming.BasicConsumeOkArgs): Promise<void>;
  cancelOk(channel: number, args: incoming.BasicCancelOkArgs): Promise<void>;
  publish(channel: number, args: incoming.BasicPublishArgs): Promise<void>;
  return(channel: number, args: incoming.BasicReturnArgs): Promise<void>;
  deliver(channel: number, args: incoming.BasicDeliverArgs): Promise<void>;
  getOk(channel: number, args: incoming.BasicGetOkArgs): Promise<void>;
  getEmpty(channel: number, args: incoming.BasicGetEmptyArgs): Promise<void>;
  ack(channel: number, args: incoming.BasicAckArgs): Promise<void>;
  reject(channel: number, args: incoming.BasicRejectArgs): Promise<void>;
  recoverAsync(
    channel: number,
    args: incoming.BasicRecoverAsyncArgs
  ): Promise<void>;
  recoverOk(channel: number, args: incoming.BasicRecoverOkArgs): Promise<void>;
  nack(channel: number, args: incoming.BasicNackArgs): Promise<void>;
}

export function initBasic(send: Send, receive: Receive): BasicMethods {
  return {
    async qos(channel: number, args: incoming.BasicQosArgs) {
      await send(channel, {
        classId: 60,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 60,
        methodId: 11
      });
    },
    async consume(channel: number, args: incoming.BasicConsumeArgs) {
      await send(channel, {
        classId: 60,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 60,
        methodId: 21
      });
    },
    async cancel(channel: number, args: incoming.BasicCancelArgs) {
      await send(channel, {
        classId: 60,
        methodId: 30,
        args
      });

      return receive(channel, {
        classId: 60,
        methodId: 31
      });
    },
    async get(channel: number, args: incoming.BasicGetArgs) {
      await send(channel, {
        classId: 60,
        methodId: 70,
        args
      });

      return receive(channel, {
        classId: 60,
        methodId: 71
      });
    },
    async recover(channel: number, args: incoming.BasicRecoverArgs) {
      await send(channel, {
        classId: 60,
        methodId: 110,
        args
      });

      return receive(channel, {
        classId: 60,
        methodId: 111
      });
    },

    async qosOk(channel: number, args: incoming.BasicQosOkArgs) {
      await send(channel, {
        classId: 60,
        methodId: 11,
        args
      });
    },
    async consumeOk(channel: number, args: incoming.BasicConsumeOkArgs) {
      await send(channel, {
        classId: 60,
        methodId: 21,
        args
      });
    },
    async cancelOk(channel: number, args: incoming.BasicCancelOkArgs) {
      await send(channel, {
        classId: 60,
        methodId: 31,
        args
      });
    },
    async publish(channel: number, args: incoming.BasicPublishArgs) {
      await send(channel, {
        classId: 60,
        methodId: 40,
        args
      });
    },
    async return(channel: number, args: incoming.BasicReturnArgs) {
      await send(channel, {
        classId: 60,
        methodId: 50,
        args
      });
    },
    async deliver(channel: number, args: incoming.BasicDeliverArgs) {
      await send(channel, {
        classId: 60,
        methodId: 60,
        args
      });
    },
    async getOk(channel: number, args: incoming.BasicGetOkArgs) {
      await send(channel, {
        classId: 60,
        methodId: 71,
        args
      });
    },
    async getEmpty(channel: number, args: incoming.BasicGetEmptyArgs) {
      await send(channel, {
        classId: 60,
        methodId: 72,
        args
      });
    },
    async ack(channel: number, args: incoming.BasicAckArgs) {
      await send(channel, {
        classId: 60,
        methodId: 80,
        args
      });
    },
    async reject(channel: number, args: incoming.BasicRejectArgs) {
      await send(channel, {
        classId: 60,
        methodId: 90,
        args
      });
    },
    async recoverAsync(channel: number, args: incoming.BasicRecoverAsyncArgs) {
      await send(channel, {
        classId: 60,
        methodId: 100,
        args
      });
    },
    async recoverOk(channel: number, args: incoming.BasicRecoverOkArgs) {
      await send(channel, {
        classId: 60,
        methodId: 111,
        args
      });
    },
    async nack(channel: number, args: incoming.BasicNackArgs) {
      await send(channel, {
        classId: 60,
        methodId: 120,
        args
      });
    }
  };
}
export interface TxMethods {
  select(
    channel: number,
    args: incoming.TxSelectArgs
  ): Promise<outgoing.TxSelectOkArgs>;
  commit(
    channel: number,
    args: incoming.TxCommitArgs
  ): Promise<outgoing.TxCommitOkArgs>;
  rollback(
    channel: number,
    args: incoming.TxRollbackArgs
  ): Promise<outgoing.TxRollbackOkArgs>;
  selectOk(channel: number, args: incoming.TxSelectOkArgs): Promise<void>;
  commitOk(channel: number, args: incoming.TxCommitOkArgs): Promise<void>;
  rollbackOk(channel: number, args: incoming.TxRollbackOkArgs): Promise<void>;
}

export function initTx(send: Send, receive: Receive): TxMethods {
  return {
    async select(channel: number, args: incoming.TxSelectArgs) {
      await send(channel, {
        classId: 90,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 90,
        methodId: 11
      });
    },
    async commit(channel: number, args: incoming.TxCommitArgs) {
      await send(channel, {
        classId: 90,
        methodId: 20,
        args
      });

      return receive(channel, {
        classId: 90,
        methodId: 21
      });
    },
    async rollback(channel: number, args: incoming.TxRollbackArgs) {
      await send(channel, {
        classId: 90,
        methodId: 30,
        args
      });

      return receive(channel, {
        classId: 90,
        methodId: 31
      });
    },

    async selectOk(channel: number, args: incoming.TxSelectOkArgs) {
      await send(channel, {
        classId: 90,
        methodId: 11,
        args
      });
    },
    async commitOk(channel: number, args: incoming.TxCommitOkArgs) {
      await send(channel, {
        classId: 90,
        methodId: 21,
        args
      });
    },
    async rollbackOk(channel: number, args: incoming.TxRollbackOkArgs) {
      await send(channel, {
        classId: 90,
        methodId: 31,
        args
      });
    }
  };
}
export interface ConfirmMethods {
  select(
    channel: number,
    args: incoming.ConfirmSelectArgs
  ): Promise<outgoing.ConfirmSelectOkArgs>;
  selectOk(channel: number, args: incoming.ConfirmSelectOkArgs): Promise<void>;
}

export function initConfirm(send: Send, receive: Receive): ConfirmMethods {
  return {
    async select(channel: number, args: incoming.ConfirmSelectArgs) {
      await send(channel, {
        classId: 85,
        methodId: 10,
        args
      });

      return receive(channel, {
        classId: 85,
        methodId: 11
      });
    },

    async selectOk(channel: number, args: incoming.ConfirmSelectOkArgs) {
      await send(channel, {
        classId: 85,
        methodId: 11,
        args
      });
    }
  };
}

export interface AmqpMethods {
  connection: ConnectionMethods;
  channel: ChannelMethods;
  access: AccessMethods;
  exchange: ExchangeMethods;
  queue: QueueMethods;
  basic: BasicMethods;
  tx: TxMethods;
  confirm: ConfirmMethods;
}

export function initializeMethods(send: Send, receive: Receive): AmqpMethods {
  return {
    connection: initConnection(send, receive),
    channel: initChannel(send, receive),
    access: initAccess(send, receive),
    exchange: initExchange(send, receive),
    queue: initQueue(send, receive),
    basic: initBasic(send, receive),
    tx: initTx(send, receive),
    confirm: initConfirm(send, receive)
  };
}