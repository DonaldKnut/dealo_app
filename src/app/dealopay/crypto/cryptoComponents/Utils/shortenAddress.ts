export const shortenAddress = (address: string | undefined): string =>
  `${(address ?? "").slice(0, 5)}...${(address ?? "").slice(-4)}`;
