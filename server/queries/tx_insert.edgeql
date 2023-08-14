INSERT Tx {
    quotation := (SELECT Quotation FILTER .id = <std::uuid> $quotation_id),
    tx_type := <std::str> $tx_type,
    ledger_txid := <std::str> $ledger_txid
}