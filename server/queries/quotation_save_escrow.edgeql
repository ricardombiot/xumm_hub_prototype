update default::Quotation 
filter .id = <std::uuid> $quotation_id and .job.payer.id = <std::uuid> $payer_id 
set {
  escrow_payload := <std::str> $escrow_payload,
  escrow_fullfilment := <std::str> $escrow_fullfilment,
  escrow_state := <default::StateQuotationEscrow> "BUILED"
} 