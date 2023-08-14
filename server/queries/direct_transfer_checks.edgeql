UPDATE DirectTransfer 
filter .id = <std::uuid> $direct_transfer_id
set {
    xumm_payload_uuid := <std::str> $xumm_payload_uuid,
    is_checked := <std::bool> $is_checked
}
