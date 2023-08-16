select default::Quotation {
  id,
  description,
  total_amount,
  delta_days,
  destine: {
    id,
    name
  },
  job : {
    id,
    payer : {
      id,
      name
    },
    approved_quotation
  },
  escrow_state,
  escrow_checked_at,
  state,
  txs : {
    tx_type,
    ledger_txid,
    created_at
  }
} filter .id = <std::uuid> $quotation_id 

