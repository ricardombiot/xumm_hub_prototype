update default::Quotation 
filter .id = <std::uuid> $quotation_id and .destine.id = <std::uuid> $destine_id 
set {
  escrow_finished_xumm_payload_uuid := <std::str> $finished_xumm_payload_uuid,
  escrow_state := <default::StateQuotationEscrow> "WAITING_XUMM_SIGN_FINISH"
} 

