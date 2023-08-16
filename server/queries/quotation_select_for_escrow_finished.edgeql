select default::Quotation {
  total_amount,
  destine : {
    public_address
  },
  job : {
    payer : {
      id,
      public_address
    }
  },
  escrow_state,
  escrow_finished_xumm_payload_uuid,
  state
} filter .destine.id = <std::uuid> $destine_id and
  .id = <std::uuid> $quotation_id

