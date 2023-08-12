UPDATE Quotation 
filter .id = <std::uuid> $quotation_id and
.state = <default::StateQuotation> "PUBLISHED"
set {
    description := <std::str> $quotation_description,
    total_amount := <std::float64> $quotation_total_amount
} 