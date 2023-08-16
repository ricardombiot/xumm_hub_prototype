CREATE MIGRATION m1mbeii3nv6i3rbkapt5hsegcbmdvdjtuvgurvcoenugczc3r3vuxq
    ONTO m17r75ilri6256dtyzjcf557wa2hmded2obr6err5ql5vffgd2vk5a
{
  ALTER TYPE default::Job {
      CREATE PROPERTY categories: std::json;
  };
};
