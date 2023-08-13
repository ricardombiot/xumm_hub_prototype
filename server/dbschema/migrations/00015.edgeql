CREATE MIGRATION m1obli4lmkmap5p6cs4ubgfeauxx2htjyjw2bihfk3kvfxpxhloiba
    ONTO m1lia76iyv5lne75xbmuzdrilb3i74m5fmnef72c4bqmfegg3x3ofq
{
  ALTER TYPE default::Quotation {
      CREATE PROPERTY escrow_finished_xumm_payload_uuid: std::str;
  };
  ALTER SCALAR TYPE default::StateQuotationEscrow EXTENDING enum<NONE, BUILED, WAITING_XUMM_SIGN, CHECKED, WAITING_XUMM_SIGN_FINISH, FINISH>;
};
