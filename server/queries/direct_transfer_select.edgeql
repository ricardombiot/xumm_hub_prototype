SELECT DirectTransfer {
    quotation : {
        id
    },
    owner : {
        id
    },
    payload,
    is_checked
} filter .id = <std::uuid> $direct_transfer_id and 
    .owner.id = <std::uuid> $owner_id
