CREATE MIGRATION m1t3wrr6h4ggi5nc2csiwvnn7fbdmz6dei5wgqxja7dp4c5asi7yuq
    ONTO m1yg7yworbyfjmi75nerwyu42nracicacivyg6mro67mcktge3i7zq
{
  CREATE TYPE default::DirectTransfer {
      CREATE LINK quotation: default::Quotation;
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
  ALTER TYPE default::Quotation {
      CREATE LINK direct_transfers := (.<quotation[IS default::DirectTransfer]);
  };
};
