select default::Quotation {
  total_amount,
  delta_days,
  destine : {
    public_address
  },
  job : {
    payer : {
      id,
      public_address
    }
  },
  escrow_payload,
  escrow_xumm_payload_uuid,
  escrow_state
} filter .job.payer.id = <std::uuid> $payer_id and
  .id = <std::uuid> $quotation_id

