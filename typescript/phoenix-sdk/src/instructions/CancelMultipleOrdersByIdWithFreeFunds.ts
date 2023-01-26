/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category CancelMultipleOrdersByIdWithFreeFunds
 * @category generated
 */
export const CancelMultipleOrdersByIdWithFreeFundsStruct =
  new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
    [['instructionDiscriminator', beet.u8]],
    'CancelMultipleOrdersByIdWithFreeFundsInstructionArgs'
  )
/**
 * Accounts required by the _CancelMultipleOrdersByIdWithFreeFunds_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [**signer**] trader
 * @category Instructions
 * @category CancelMultipleOrdersByIdWithFreeFunds
 * @category generated
 */
export type CancelMultipleOrdersByIdWithFreeFundsInstructionAccounts = {
  phoenixProgram: web3.PublicKey
  logAuthority: web3.PublicKey
  market: web3.PublicKey
  trader: web3.PublicKey
}

export const cancelMultipleOrdersByIdWithFreeFundsInstructionDiscriminator = 11

/**
 * Creates a _CancelMultipleOrdersByIdWithFreeFunds_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelMultipleOrdersByIdWithFreeFunds
 * @category generated
 */
export function createCancelMultipleOrdersByIdWithFreeFundsInstruction(
  accounts: CancelMultipleOrdersByIdWithFreeFundsInstructionAccounts,
  programId = new web3.PublicKey('phnxNHfGNVjpVVuHkceK3MgwZ1bW25ijfWACKhVFbBH')
) {
  const [data] = CancelMultipleOrdersByIdWithFreeFundsStruct.serialize({
    instructionDiscriminator:
      cancelMultipleOrdersByIdWithFreeFundsInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.phoenixProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.trader,
      isWritable: false,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
