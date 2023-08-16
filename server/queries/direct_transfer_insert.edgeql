INSERT DirectTransfer {
    quotation := (SELECT Quotation FILTER .id = <std::uuid> $quotation_id),
    payload := <std::str> $payload,
    owner := (SELECT User FILTER .id = <std::uuid> $user_id),
}
