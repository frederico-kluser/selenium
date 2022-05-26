const xl = require('excel4node');

const wb = new xl.Workbook();

const data = [
  {
    "url": "https://www.onepeloton.co.uk/shop/tread",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a full body workout.",
    "receivedMetaDescription": "Get the Peloton Tread, everything you need for a full body workout."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/tread/tread-select-package-uk",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a full body workout.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/company",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/company/contact",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.co.uk/company/team",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/bi-material-cycling-shoe-cleats",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/podium-sport-bottle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/bikes-select-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/bikes-starter-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/bikes-ultimate-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/treads-select-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/treads-starter-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/treads-ultimate-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/set/yoga-set",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/accessories/yoga-strap-v2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/au_bondijunction",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/au_davidjonesbourkestreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/au_davidjoneschadstone",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/au_davidjoneselizabethstreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/au_martinplace",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_bc_parkroyal",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_ca_granvillewest4th",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_ca_vancouver",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_on_etobicoke_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_on_mississauga",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_on_toronto_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/ca_on_yorkdale_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/can_ab_calgary",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/can_ab_edmonton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/charlotte_nc_us_52",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_berlin",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_cologne",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_dusseldorf_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_engelhornsportsmannheim",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_frankfurt",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_hamburg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_intersportingolstadt",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_leipzig",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_ltsportosnabruck",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_munich",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_nuremberg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportfoergfriedberg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportheinzelbiberach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportreischmannkempten",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportscheckbraunschweig",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportscheckbremen",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportscheckkarlsruhe",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportscheckkassel",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_sportscheckmuenster",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_stuttgart",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/de_vaund",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/denver",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/detroit",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_bluewater",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_canarywharf",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_kingsroad",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_leeds",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_marylebonehighstreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/gb_oxford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/natick",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/roosevelt",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/santa-monica",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/seattle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/southlake_tx_us_57",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_bath",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_birminghambullring",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_edinburgh",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_glasgow",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_harrods",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisbrentcross",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisbristol",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewischeadle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewischeltenham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewishighwycombe",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewishorsham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewiskingston",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisliverpool",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewismiltonkeynes",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisnewcastle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisnottingham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewisoxfordst",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewissouthampton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewistrafford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_johnlewiswelwyn",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/uk_spitalfieldshorner",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_al_birmingham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_az_scottsdale",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_az_scottsdale_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_canogapark_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_centurycity",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_cortemadera",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_longbeach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_newportbeach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_paloalto",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_pasadena",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_roseville_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_sandiego",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_santaclara",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_thousandoaks",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ca_walnutcreek",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_co_lonetree_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ct_westhartford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ct_westport",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_de_newark",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_aventura",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_bocaraton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_coralgables",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_jacksonville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_naples",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_palmbeachgardens",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_fl_tampa",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ga_alpharetta",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ga_atlanta",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ia_desmoines",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_il_chicago",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_il_oakbrook",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_il_skokie",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_in_indianapolis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ks_leawood",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ky_louisville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ma_boston",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ma_chestnuthill",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ma_dedham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_mallofamerica_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_md_annapolis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_md_bethesda",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_md_columbia",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_mn_edina",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_mo_stlouis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nc_durham_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nc_raleigh",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nj_cherryhill",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nj_paramus",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nj_shorthills",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_nj_shrewsbury",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_brookfieldplace",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_hudsonyards2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_madisonavenue",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_manhasset",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_psnyretail",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ny_whiteplains",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_oh_cincinnati",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_oh_columbus",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_oh_orangevillage",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_or_portland_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_pa_kingofprussia",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_pa_pittsburgh",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_sc_mountpleasant",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tn_nashville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_austin",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_dallas",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_highlandvillage",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_houston",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_marketstreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_tx_plano",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_ut_murray",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_va_richmond",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_va_tysonscorner",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_wa_seattle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_wi_madison",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/showrooms/us_wi_wauwatosa",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.co.uk/bike",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.co.uk/bike/reviews",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.co.uk/guide",
    "expectedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger.",
    "receivedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger."
  },
  {
    "url": "https://www.onepeloton.co.uk/shop/guide",
    "expectedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger.",
    "receivedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger."
  },
  {
    "url": "https://www.onepeloton.de/bike/reviews",
    "expectedMetaDescription": "Das von Men's Health als bestes Cardio-Gerät ausgezeichnete Peloton Bike ist ein stationäres High-Tech-Fitnessbike mit 22-Zoll-HD-Bildschirm, Carbonstahlrahmen, einem gleichmäßigen Magnetwiderstand und einem nahezu geräuschlosen Riemenantrieb.",
    "receivedMetaDescription": "Das von Men's Health als bestes Cardio-Gerät ausgezeichnete Peloton Bike ist ein stationäres High-Tech-Fitnessbike mit 22-Zoll-HD-Bildschirm, Carbonstahlrahmen, einem gleichmäßigen Magnetwiderstand und einem nahezu geräuschlosen Riemenantrieb."
  },
  {
    "url": "https://www.onepeloton.de/bike/reviews/submit",
    "expectedMetaDescription": "Das von Men's Health als bestes Cardio-Gerät ausgezeichnete Peloton Bike ist ein stationäres High-Tech-Fitnessbike mit 22-Zoll-HD-Bildschirm, Carbonstahlrahmen, einem gleichmäßigen Magnetwiderstand und einem nahezu geräuschlosen Riemenantrieb.",
    "receivedMetaDescription": "Das von Men's Health als bestes Cardio-Gerät ausgezeichnete Peloton Bike ist ein stationäres High-Tech-Fitnessbike mit 22-Zoll-HD-Bildschirm, Carbonstahlrahmen, einem gleichmäßigen Magnetwiderstand und einem nahezu geräuschlosen Riemenantrieb."
  },
  {
    "url": "https://www.onepeloton.de/shop/bike-plus",
    "expectedMetaDescription": "Hol dir das Peloton Bike: das einzige Fitness Bike mit Live und On-Demand Indoor Cycling Kursen.",
    "receivedMetaDescription": "Hol dir das Peloton Bike: das einzige Fitness Bike mit Live  und On-Demand Indoor Cycling Kursen. "
  },
  {
    "url": "https://www.onepeloton.de/shop/bike",
    "expectedMetaDescription": "Hol dir das Peloton Bike: das einzige Fitness Bike mit Live und On-Demand Indoor Cycling Kursen.",
    "receivedMetaDescription": "Hol dir das Peloton Bike: das einzige Fitness Bike mit Live  und On-Demand Indoor Cycling Kursen. "
  },
  {
    "url": "https://www.onepeloton.de/shop/accessories",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/company/contact",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.de/shop/accessories/bi-material-cycling-shoe-cleats",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/shop/accessories/set/bikes-select-acc",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/shop/accessories/set/treads-select-acc",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/shop/accessories/set/yoga-set",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms",
    "expectedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Sofortiger Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/",
    "expectedMetaDescription": "Dein ultimatives live Cardio-Training Zuhause.",
    "receivedMetaDescription": "Dein ultimatives live Cardio-Training Zuhause."
  },
  {
    "url": "https://www.onepeloton.de/company",
    "expectedMetaDescription": "Dein ultimatives live Cardio-Training Zuhause.",
    "receivedMetaDescription": "Dein ultimatives live Cardio-Training Zuhause."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/au_martinplace",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/au_bondijunction",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/au_davidjonesbourkestreet",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/au_davidjoneselizabethstreet",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/ca_bc_parkroyal",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/charlotte_nc_us_52",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_berlin",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_cologne",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_dusseldorf_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_engelhornsportsmannheim",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_frankfurt",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_hamburg",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_leipzig",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_ltsportosnabruck",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_munich",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportfoergfriedberg",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportheinzelbiberach",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportreischmannkempten",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportscheckbraunschweig",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportscheckbremen",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_sportscheckmuenster",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_stuttgart",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/de_vaund",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/denver",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/detroit",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/gb_bluewater",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/gb_canarywharf",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/gb_oxford",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/natick",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/roosevelt",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/santa-monica",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/southlake_tx_us_57",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_bath",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_birminghambullring",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_edinburgh",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_glasgow",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_harrods",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewisbrentcross",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewisbristol",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewischeltenham",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewishighwycombe",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewishorsham",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewiskingston",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewisliverpool",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewismiltonkeynes",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewisnewcastle",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewisnottingham",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewissouthampton",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewistrafford",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_johnlewiswelwyn",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/uk_spitalfieldshorner",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_al_birmingham",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_az_scottsdale",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_az_scottsdale_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_canogapark_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_centurycity",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_cortemadera",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_longbeach",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_newportbeach",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_paloalto",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_pasadena",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_roseville_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_sandiego",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_santaclara",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_thousandoaks",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ca_walnutcreek",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_co_lonetree_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ct_westhartford",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ct_westport",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_de_newark",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_aventura",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_bocaraton",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_coralgables",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_jacksonville",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_naples",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_palmbeachgardens",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_fl_tampa",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ga_alpharetta",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ga_atlanta",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ia_desmoines",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_il_chicago",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_il_oakbrook",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_il_skokie",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_in_indianapolis",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ks_leawood",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ky_louisville",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ma_boston",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ma_chestnuthill",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ma_dedham",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_mallofamerica_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_md_annapolis",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_md_bethesda",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_md_columbia",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_mn_edina",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_mo_stlouis",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nc_durham_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nc_raleigh",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nj_cherryhill",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nj_paramus",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nj_shorthills",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_nj_shrewsbury",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_brookfieldplace",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_hudsonyards2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_madisonavenue",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_manhasset",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_psnyretail",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ny_whiteplains",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_oh_cincinnati",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_oh_columbus",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_oh_orangevillage",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_or_portland_2",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_pa_kingofprussia",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_pa_pittsburgh",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_sc_mountpleasant",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tn_nashville",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_austin",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_dallas",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_highlandvillage",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_houston",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_marketstreet",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_tx_plano",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_ut_murray",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand."
  },
  {
    "url": "https://www.onepeloton.de/showrooms/us_va_tysonscorner",
    "expectedMetaDescription": "Jederzeit Zugriff auf hochintensive Workouts. Entdecke Peloton: Fitnesskurse streamen, Live & On-Demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/company",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/company/team",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/altos-cycling-shoes",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/bi-material-cycling-shoe-cleats",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/bike-mat-v2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/cycling-shoes",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/dumbbells",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/heart-rate-band",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/jblx-peloton-earbuds-2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/pedal_set",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/peloton-glass-water-bottle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/peloton-weights",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/pl-hr-c-01",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/podium-sport-bottle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/resistance-bands",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/reversible-workout-mat",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/bikes-select-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/bikes-starter-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/bikes-ultimate-acc",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/urbanears-sumpan-earbuds",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/yoga-blocks-v2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/yoga-strap-v2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/au_davidjonesbourkestreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/au_davidjoneschadstone",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/au_davidjoneselizabethstreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_bc_parkroyal",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_ca_granvillewest4th",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_ca_vancouver",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/can_ab_calgary",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/can_ab_edmonton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_berlin",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_cologne",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_dusseldorf_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_engelhornsportsmannheim",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_hamburg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_intersportingolstadt",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_leipzig",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_ltsportosnabruck",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_munich",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_nuremberg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportfoergfriedberg",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportheinzelbiberach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportreischmannkempten",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportscheckbraunschweig",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportscheckbremen",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportscheckkarlsruhe",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportscheckkassel",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_sportscheckmuenster",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_stuttgart",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_vaund",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/denver",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/detroit",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_bluewater",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_canarywharf",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_leeds",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_marylebonehighstreet",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_oxford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/natick",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/roosevelt",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/santa-monica",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/southlake_tx_us_57",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_bath",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_birminghambullring",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_glasgow",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_harrods",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisbrentcross",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisbristol",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewischeadle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewischeltenham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewishighwycombe",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewishorsham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewiskingston",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisliverpool",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewismiltonkeynes",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisnewcastle",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisnottingham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewisoxfordst",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewissouthampton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewistrafford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_johnlewiswelwyn",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_spitalfieldshorner",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_al_birmingham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_az_scottsdale",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_az_scottsdale_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_canogapark_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_centurycity",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_cortemadera",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_longbeach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_newportbeach",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_paloalto",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_pasadena",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_roseville_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_sandiego",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_santaclara",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_thousandoaks",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ca_walnutcreek",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_co_lonetree_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ct_westhartford",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ct_westport",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_aventura",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_bocaraton",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_coralgables",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_jacksonville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_naples",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_palmbeachgardens",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_fl_tampa",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ga_alpharetta",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ga_atlanta",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ia_desmoines",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_il_chicago",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_il_oakbrook",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_il_skokie",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_in_indianapolis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ks_leawood",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ky_louisville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ma_dedham",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_md_annapolis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_md_bethesda",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_md_columbia",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_mo_stlouis",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_nj_cherryhill",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_nj_shorthills",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_nj_shrewsbury",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_brookfieldplace",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_madisonavenue",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_manhasset",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_whiteplains",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_oh_orangevillage",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_or_portland_2",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_pa_kingofprussia",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_pa_pittsburgh",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_sc_mountpleasant",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tn_nashville",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_austin",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_dallas",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_houston",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_plano",
    "expectedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/bike",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.ca/bike-plus/reviews",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.ca/bike/reviews",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.ca/bike/reviews/submit",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22\" HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive."
  },
  {
    "url": "https://www.onepeloton.ca/tread/reviews/submit",
    "expectedMetaDescription": "Awarded Best Cardio Machine by Men's Health, Peloton bike is a high-tech stationary bike with a 22' HD touchscreen, carbon steel frame, smooth magnetic resistance, and near-silent belt drive.",
    "receivedMetaDescription": "The Peloton Tread empowers you to run farther, train better and recover smarter with a range of total body workouts that keep you motivated every step of the way."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout.",
    "receivedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-basics-package-ca",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout.",
    "receivedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-select-package-ca",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-starter-package-ca",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-ultimate-package-ca",
    "expectedMetaDescription": "Get the Peloton Tread, everything you need for a total body workout.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/financing",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get started with $0 down and 0% APR financing and bringing home Peloton easier than ever."
  },
  {
    "url": "https://www.onepeloton.ca/accessibility",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/careers",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Work alongside the world’s best talent to create the future of fitness. Browse our openings and apply."
  },
  {
    "url": "https://www.onepeloton.ca/careers/finance",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Work alongside the world’s best talent to create the future of fitness. Browse our openings and apply."
  },
  {
    "url": "https://www.onepeloton.ca/careers/hardware",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Work alongside the world’s best talent to create the future of fitness. Browse our openings and apply."
  },
  {
    "url": "https://www.onepeloton.ca/careers/music",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Work alongside the world’s best talent to create the future of fitness. Browse our openings and apply."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/ASpeer",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/AlexToussaint",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Alex Toussaint has a love for fitness, teamwork and discipline rooted in his military school background. With his eye always on the prize, Alex uses the powe..."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/AllyMissLove",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/PeloML",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/instructors/aditishah",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "To Aditi, yoga goes beyond movement and can bring freedom and joy into life. Having lived and practiced yoga in India and NYC, Aditi’s style of teaching is a..."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/bike/clifforddwenger",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Growing up in Hamburg, Cliff’s first love was football–until music came along. In fact, his love of hip hop saw him become the first German rapper to make it"
  },
  {
    "url": "https://www.onepeloton.ca/instructors/bike/grannyriri",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "A former Division I distance runner with 10 years of coaching experience, Matt brings an encouraging energy grounded in athleticism to his teaching style. An"
  },
  {
    "url": "https://www.onepeloton.ca/instructors/nooneissafe",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Adrian is a powerhouse instructor with an unexpected tender side. A native New Yorker with bold Bronx energy, Adrian is a competitive sprinter—but he’s not a..."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/tread",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/instructors/yoga",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Reach for more on the mat with the guidance of Peloton's world-class Yoga instructors. Offering a range of teaching styles and training backgrounds, you can find new favourite to flow with."
  },
  {
    "url": "https://www.onepeloton.ca/membership",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Unlock motivation in every workout, ready when you are. With a Peloton membership, get access to cycling, running, strength, bootcamp, and yoga classes taught by expert instructors on Peloton Bikes, Treads, Guides, and the Peloton App."
  },
  {
    "url": "https://www.onepeloton.ca/press",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Peloton® Press articles and coverage."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/treads-select-acc",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/treads-starter-acc",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/treads-ultimate-acc",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/accessories/set/yoga-set-se",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike-plus/bike-plus-basics-package-ca",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get the Peloton Bike+ to seamlessly access cardio and strength, yoga classes with a rotating 24\" HD touchscreen, 360° sound system and compact design."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike-plus/bike-plus-select-package-ca",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get the Peloton Bike+ to seamlessly access cardio and strength, yoga classes with a rotating 24\" HD touchscreen, 360° sound system and compact design."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike-plus/bike-plus-starter-package-ca",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike-plus/bike-plus-ultimate-package-ca",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike-plus/compare?chat=true",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get the Peloton Bike+ to seamlessly access cardio and strength, yoga classes with a rotating 24\" HD touchscreen, 360° sound system and compact design."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-select-package-ca/heart-rate-band-size-guide",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-ultimate-package-ca/dumbbells-weight-guide",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-ultimate-package-ca/heart-rate-band-size-guide",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/guide/warranty",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-select-package-ca/dumbbells-weight-guide",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/tread/tread-select-package-ca/heart-rate-band-size-guide",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/au_bondijunction",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/au_martinplace",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_on_etobicoke_2",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_on_mississauga",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_on_toronto_2",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/ca_on_yorkdale_2",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/de_frankfurt",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/gb_kingsroad",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/uk_edinburgh",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_de_newark",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ma_boston",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ma_chestnuthill",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_mallofamerica_2",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_mn_edina",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_nj_paramus",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_hudsonyards2",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ny_psnyretail",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_highlandvillage",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_tx_marketstreet",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_ut_murray",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": "Access high-energy workouts, instantly. Discover Peloton: streaming fitness classes to you live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/showrooms/us_va_tysonscorner",
    "expectedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand.",
    "receivedMetaDescription": ""
  },
  {
    "url": "https://www.onepeloton.ca/guide",
    "expectedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger.",
    "receivedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger."
  },
  {
    "url": "https://www.onepeloton.ca/shop/guide",
    "expectedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger.",
    "receivedMetaDescription": "Introducing a new way to do strength training, turn your TV into a guided workout experience and see yourself grow stronger."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike",
    "expectedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.",
    "receivedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-basics-package-ca",
    "expectedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-select-package-ca",
    "expectedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-starter-package-ca",
    "expectedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  },
  {
    "url": "https://www.onepeloton.ca/shop/bike/bike-ultimate-package-ca",
    "expectedMetaDescription": "Get the original Peloton Bike, bringing game-changing cardio classes to your home live and on demand.",
    "receivedMetaDescription": "Access high-energy indoor cycling workouts instantly. Discover the Peloton bike: the only exercise bike streaming indoor cycling classes to your home live and on-demand."
  }
];

const style = wb.createStyle({
  font: {
    color: '#000000',
    bold: true,
  },
  fill: {
    type: 'pattern',
    bgColor: '#1fb6ff',
  },
});
const descriptions = {};
const sheets = {};

const newSheet = (ws, name, line, column, title) => {
  if (title) {
    ws.cell(line, column).string(name).style(style);
  } else {
    ws.cell(line, column).string(name);
  }
};

data.forEach(({ url, receivedMetaDescription }) => {
  if (url.indexOf('.ca/') !== -1) {
    if (descriptions[receivedMetaDescription] === undefined) {
      const ws = wb.addWorksheet(`Sheet ${Object.keys(descriptions).length + 1}`);
      newSheet(ws, 'URL', 1, 1, true);
      newSheet(ws, 'Description', 1, 2, true);
      newSheet(ws, 'Metadata', 1, 3, true);
      descriptions[receivedMetaDescription] = ws;
      sheets[receivedMetaDescription] = [url];
    } else {
      sheets[receivedMetaDescription].push(url);
    }

    const line = sheets[receivedMetaDescription].length;
    const ws = descriptions[receivedMetaDescription];
    newSheet(ws, url, line + 1, 1);
    newSheet(ws, receivedMetaDescription, line + 1, 2);
  }
});

wb.write('URLs with duplicate meta descriptions (CA).xlsx');
