import { BigInt } from "@graphprotocol/graph-ts"
import {
  ThemisAuction,
  Approval,
  ApprovalForAll,
  AuctionEnded,
  AuctionInitialized,
  BidFailed,
  BidProvenRemote,
  BidRevealed,
  BidShortlisted,
  BidSuccessfullyPlaced,
  ReceivedToken,
  Reserved,
  RevealStarted,
  Transfer,
  VaultDeployed
} from "../generated/ThemisAuction/ThemisAuction"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.BASE_ASSET_URI(...)
  // - contract.MAX_SUPPLY(...)
  // - contract.ROUTER_ADDRESS(...)
  // - contract.balanceOf(...)
  // - contract.checkBid(...)
  // - contract.checkLiquidityReceipt(...)
  // - contract.collectionOwner(...)
  // - contract.controllers(...)
  // - contract.endOfBiddingPeriod(...)
  // - contract.endOfRevealPeriod(...)
  // - contract.getApproved(...)
  // - contract.getController(...)
  // - contract.getHighestBids(...)
  // - contract.highestBids(...)
  // - contract.isApprovedForAll(...)
  // - contract.name(...)
  // - contract.ownerOf(...)
  // - contract.reservePrice(...)
  // - contract.reserved(...)
  // - contract.router(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleAuctionEnded(event: AuctionEnded): void {}

export function handleAuctionInitialized(event: AuctionInitialized): void {}

export function handleBidFailed(event: BidFailed): void {}

export function handleBidProvenRemote(event: BidProvenRemote): void {}

export function handleBidRevealed(event: BidRevealed): void {}

export function handleBidShortlisted(event: BidShortlisted): void {}

export function handleBidSuccessfullyPlaced(
  event: BidSuccessfullyPlaced
): void {}

export function handleReceivedToken(event: ReceivedToken): void {}

export function handleReserved(event: Reserved): void {}

export function handleRevealStarted(event: RevealStarted): void {}

export function handleTransfer(event: Transfer): void {}

export function handleVaultDeployed(event: VaultDeployed): void {}
