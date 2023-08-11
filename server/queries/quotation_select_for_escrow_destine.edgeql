select default::Quotation {
  total_amount,
  destine : {
    id,
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
  escrow_fullfilment,
  escrow_sequence,
  escrow_state
} filter .destine.id = <std::uuid> $destine_id and
  .id = <std::uuid> $quotation_id 

