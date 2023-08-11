update default::Quotation 
filter .id = <std::uuid> $quotation_id and .job.payer.id = <std::uuid> $payer_id 
set {
  escrow_xumm_payload_uuid := <std::str> $escrow_xumm_payload_uuid,
  escrow_state := <default::StateQuotationEscrow> "WAITING_XUMM_SIGN"
} 