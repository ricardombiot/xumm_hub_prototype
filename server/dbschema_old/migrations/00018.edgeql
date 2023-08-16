CREATE MIGRATION m1yg7yworbyfjmi75nerwyu42nracicacivyg6mro67mcktge3i7zq
    ONTO m1vzosfvfjonz3fcqbxnawn466smzhvaxqe62h7b5dcws5vqsi4a4q
{
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
