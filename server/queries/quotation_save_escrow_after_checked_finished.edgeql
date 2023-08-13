update default::Quotation 
filter .id = <std::uuid> $quotation_id and .destine.id = <std::uuid> $destine_id and
.escrow_state = <default::StateQuotationEscrow> "WAITING_XUMM_SIGN_FINISH"
set {
  escrow_state := <default::StateQuotationEscrow> "FINISHED",
  state := <default::StateQuotation> "CLOSED",
} 