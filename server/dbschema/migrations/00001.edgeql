CREATE MIGRATION m1aysfznnxv5wdy432uzkb2rsagaruzlfvbavnnfkj3pi23p2bfyna
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE PROPERTY bio: std::str;
      CREATE PROPERTY city: std::str;
      CREATE PROPERTY country: std::str;
      CREATE PROPERTY email: std::str;
      CREATE PROPERTY full_address: std::str;
      CREATE PROPERTY last_name: std::str;
      CREATE PROPERTY name: std::str;
      CREATE PROPERTY phone: std::str;
      CREATE PROPERTY postal_code: std::str;
      CREATE REQUIRED PROPERTY public_address: std::str;
  };
  CREATE TYPE default::DirectTransfer {
      CREATE LINK owner: default::User;
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE PROPERTY is_checked: std::bool {
          SET default := false;
      };
      CREATE PROPERTY payload: std::str;
      CREATE PROPERTY xumm_payload_uuid: std::str;
  };
  CREATE SCALAR TYPE default::StateQuotation EXTENDING enum<PUBLISHED, APPROVED, DONE, CONFIRMED, CLOSED>;
  CREATE SCALAR TYPE default::StateQuotationEscrow EXTENDING enum<NONE, BUILED, WAITING_XUMM_SIGN, CHECKED, WAITING_XUMM_SIGN_FINISH, FINISHED>;
  CREATE TYPE default::Quotation {
      CREATE REQUIRED LINK destine: default::User;
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE PROPERTY delta_days: std::int32 {
          SET default := 7;
      };
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE PROPERTY escrow_checked_at: std::datetime;
      CREATE PROPERTY escrow_finished_xumm_payload_uuid: std::str;
      CREATE PROPERTY escrow_fullfilment: std::str;
      CREATE PROPERTY escrow_payload: std::str;
      CREATE PROPERTY escrow_sequence: std::int64;
      CREATE PROPERTY escrow_state: default::StateQuotationEscrow {
          SET default := (<default::StateQuotationEscrow>'NONE');
      };
      CREATE PROPERTY escrow_txid: std::str;
      CREATE PROPERTY escrow_xumm_payload_uuid: std::str;
      CREATE PROPERTY state: default::StateQuotation {
          SET default := (<default::StateQuotation>'PUBLISHED');
      };
      CREATE REQUIRED PROPERTY total_amount: std::float64;
  };
  ALTER TYPE default::DirectTransfer {
      CREATE LINK quotation: default::Quotation;
  };
  ALTER TYPE default::Quotation {
      CREATE LINK direct_transfers := (.<quotation[IS default::DirectTransfer]);
  };
  CREATE TYPE default::Job {
      CREATE LINK approved_quotation: default::Quotation;
      CREATE REQUIRED LINK payer: default::User;
      CREATE PROPERTY budget_range: std::str;
      CREATE PROPERTY categories: std::json;
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY title: std::str;
  };
  ALTER TYPE default::Quotation {
      CREATE REQUIRED LINK job: default::Job;
  };
  ALTER TYPE default::Job {
      CREATE LINK quotations := (.<job[IS default::Quotation]);
  };
  CREATE TYPE default::Tx {
      CREATE REQUIRED LINK quotation: default::Quotation;
      CREATE PROPERTY created_at: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY ledger_txid: std::str;
      CREATE REQUIRED PROPERTY tx_type: std::str;
  };
  ALTER TYPE default::Quotation {
      CREATE LINK txs := (.<quotation[IS default::Tx]);
  };
};
