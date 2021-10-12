// console.log(Hdrando(1,0,0,0,10));

export function Hdrando(entityId, varId, option1, option2, pmIndex) {
  // supports 4 variables for sipmath 3.0 standard
  const largePrime = 4294967296; // there are a lot of primes. ?? Need to find out when to change them
  // Do we need this in js? is there a modulo?
  function MOD(n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
  }
  let randi =
    (MOD(
      (MOD(
        MOD(
          999999999999989,
          MOD(
            pmIndex * 2499997 +
              varId * 1800451 +
              entityId * 2000371 +
              option1 * 1796777 +
              option2 * 2299603,
            7450589
          ) *
            4658 +
            7450581
        ) * 383,
        99991
      ) *
        7440893 +
        MOD(
          MOD(
            999999999999989,
            MOD(
              pmIndex * 2246527 +
                varId * 2399993 +
                entityId * 2100869 +
                option1 * 1918303 +
                option2 * 1624729,
              7450987
            ) *
              7580 +
              7560584
          ) * 17669,
          7440893
        )) *
        1343,
      largePrime
    ) +
      0.5) /
    largePrime;

  return randi;
}
