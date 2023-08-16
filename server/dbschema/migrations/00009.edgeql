CREATE MIGRATION m1f4zuefjfwmoaep5edbi3fwoczm5ecf4ojhxwbu2dox34jt5xctba
    ONTO m13hcz27lwztdm7iyuby5peeikfc5j2uzvujedegdie6ooqkj3a3rq
{
  CREATE SCALAR TYPE default::StateQuotationEscrow EXTENDING enum<NONE, BUILED, WAITING_XUMM_SIGN, CHECKED, FINISH>;
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_state: default::StateQuotationEscrow {
          SET default := (<default::StateQuotationEscrow>'NONE');
      };
  };
  ALTER TYPE default::Quotation {
      ALTER PROPERTY escrow_tx_uuid {
          RENAME TO escrow_sequence;
      };
  };
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_txid: std::str;
  };
};
