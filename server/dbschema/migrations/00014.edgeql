CREATE MIGRATION m1lia76iyv5lne75xbmuzdrilb3i74m5fmnef72c4bqmfegg3x3ofq
    ONTO m1vnwl3doma3cjkqpp6lva56omznsw3nalnyokrsn5uyf2f6gvvm2a
{
  ALTER SCALAR TYPE default::StateQuotation EXTENDING enum<PUBLISHED, APPROVED, DONE, CONFIRMED, CLOSED>;
};
