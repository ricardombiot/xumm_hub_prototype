CREATE MIGRATION m13hcz27lwztdm7iyuby5peeikfc5j2uzvujedegdie6ooqkj3a3rq
    ONTO m1xahdxr4k4tuhzgwylawaxv2zq4c7hjurafoojhz34ghkyvuqluja
{
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_xumm_payload_uuid: std::str;
  };
};
