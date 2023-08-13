CREATE MIGRATION m1y6a4jsdtoftmchk5xrgkulh2dqfydob4wmrtjjorgpz2eotsyxvq
    ONTO m1obli4lmkmap5p6cs4ubgfeauxx2htjyjw2bihfk3kvfxpxhloiba
{
  ALTER SCALAR TYPE default::StateQuotationEscrow EXTENDING enum<NONE, BUILED, WAITING_XUMM_SIGN, CHECKED, WAITING_XUMM_SIGN_FINISH, FINISHED>;
};
