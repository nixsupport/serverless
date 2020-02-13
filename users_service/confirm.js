const AWS = require("aws-sdk");
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: "2016-04-18",
  region: "us-east-1"
});

var params = {
  ChallengeName: "NEW_PASSWORD_REQUIRED",
  ClientId: "4d4j4i3qhaehveogtn4ndihsnp",
  ChallengeResponses: {
    USERNAME: "eraldcalaj3@gmail.com",
    NEW_PASSWORD: "eralderald"
  },
  Session:
    "GSz-PThzA3qF9B5IF9CE_ASCbmrzIeG-ZuVAReir68OAbjcTy3FebitMrvlzTYL0maY98pERPxW-vMlCeyHGpny69Y15Jik1ymceTV5kTqpQ0UclvFdnNyLBNjJ5AmWONh2iveaCr_yIZTAcIyRj3Jf9BEbfCEcjM4bnSt9WxOQ37jWwKSrPDuOlsOOCmt5cP6QtEAkPo-Btrw6YO4iZuDnQVD5lrY8wWOSUFT4rKEYM7-PFQ17-5-24lrD7dGar9sw81DBB6bAjJRJ1nnZYR7PJHdZ6iu6Ij9XiNPTtS3vrYfx_CUGl7mFqnenLn8bk1YZHoknt7cWBHzykCDrfrvH9-eH_sQzEhdm9tUyvFYYbrAr5L1RuEkIaufdfKMIp635L9OJ4jKfga7UXb2G7aId2I1QSzI0cve8odHGoFn5NCHATCsi8_OslwTX2CO_HMpu3oIOXR711M0eCl0sToaymj085jZH3JSw4fzPdpW6O_NWV5hb-rAPa1I5x5xmbzw9T1m5VFQ-pukJBbDBYb8VSnSqXfqW-esb4YQHEFkW4bpTb0tbXWTlwLe8wreHGUx0dibx-SblrJoR_J14Rz7pPmKisEh64LC8Abi4mW_9vvTtOkvPdSlAJFLW5RlI52WKiRZvuvTGBYRv5wqzP_RTDY6JKG98ct2nBKpBPsjLfZVdA_9sFSdJmLZ8CuXamDnppjAXbmW0-CGSRdazSwmvpkJfJKoUXWB81RALoJGIlRorC1q9eZsoMRkCgFsM1nsDQRavW-uRVy3DoGUNY11wHkLVVl3-felgYoAltndx-dQFSYHR17NOMaz9E5vimMjKluacqlhDzuOn-vpu4IhEQzrreyuAhqVG3ajnoRhvIaWsfD665-G9Lf14izcb7HGvnWhsyFa_lffdg-B_9n1iO1Q35EKqf0KPxg6FISoTEllfStcm8mevY_SZOfwLVWfGkGUvwMJ9Ur80Xuuwh2yXk0k6DDVUEQPlyNv7l5JDqjA0k"
};

cognitoidentityserviceprovider.respondToAuthChallenge(params, function(
  err,
  data
) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
