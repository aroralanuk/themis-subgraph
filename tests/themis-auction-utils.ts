import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
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

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createAuctionEndedEvent(): AuctionEnded {
  let auctionEndedEvent = changetype<AuctionEnded>(newMockEvent())

  auctionEndedEvent.parameters = new Array()

  return auctionEndedEvent
}

export function createAuctionInitializedEvent(
  auction: Address,
  owner: Address,
  bidPeriod: BigInt,
  revealPeriod: BigInt,
  reservePrice: BigInt
): AuctionInitialized {
  let auctionInitializedEvent = changetype<AuctionInitialized>(newMockEvent())

  auctionInitializedEvent.parameters = new Array()

  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "bidPeriod",
      ethereum.Value.fromUnsignedBigInt(bidPeriod)
    )
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "revealPeriod",
      ethereum.Value.fromUnsignedBigInt(revealPeriod)
    )
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "reservePrice",
      ethereum.Value.fromUnsignedBigInt(reservePrice)
    )
  )

  return auctionInitializedEvent
}

export function createBidFailedEvent(
  timestamp: BigInt,
  auction: Address,
  bidder: Address,
  bidAmount: BigInt
): BidFailed {
  let bidFailedEvent = changetype<BidFailed>(newMockEvent())

  bidFailedEvent.parameters = new Array()

  bidFailedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  bidFailedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  bidFailedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidFailedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidFailedEvent
}

export function createBidProvenRemoteEvent(
  timestamp: BigInt,
  auction: Bytes,
  bidder_: Address,
  vaultAmount_: BigInt
): BidProvenRemote {
  let bidProvenRemoteEvent = changetype<BidProvenRemote>(newMockEvent())

  bidProvenRemoteEvent.parameters = new Array()

  bidProvenRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  bidProvenRemoteEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromFixedBytes(auction))
  )
  bidProvenRemoteEvent.parameters.push(
    new ethereum.EventParam("bidder_", ethereum.Value.fromAddress(bidder_))
  )
  bidProvenRemoteEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAmount_",
      ethereum.Value.fromUnsignedBigInt(vaultAmount_)
    )
  )

  return bidProvenRemoteEvent
}

export function createBidRevealedEvent(
  currentPosition: BigInt,
  bidder: Bytes,
  bidAmount: BigInt
): BidRevealed {
  let bidRevealedEvent = changetype<BidRevealed>(newMockEvent())

  bidRevealedEvent.parameters = new Array()

  bidRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "currentPosition",
      ethereum.Value.fromUnsignedBigInt(currentPosition)
    )
  )
  bidRevealedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromFixedBytes(bidder))
  )
  bidRevealedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidRevealedEvent
}

export function createBidShortlistedEvent(
  mintIndex: BigInt,
  domain: BigInt,
  bidder: Address,
  bidAmount: BigInt
): BidShortlisted {
  let bidShortlistedEvent = changetype<BidShortlisted>(newMockEvent())

  bidShortlistedEvent.parameters = new Array()

  bidShortlistedEvent.parameters.push(
    new ethereum.EventParam(
      "mintIndex",
      ethereum.Value.fromUnsignedBigInt(mintIndex)
    )
  )
  bidShortlistedEvent.parameters.push(
    new ethereum.EventParam("domain", ethereum.Value.fromUnsignedBigInt(domain))
  )
  bidShortlistedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidShortlistedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidShortlistedEvent
}

export function createBidSuccessfullyPlacedEvent(
  timestamp: BigInt,
  auction: Address,
  bidder: Address,
  bidAmount: BigInt
): BidSuccessfullyPlaced {
  let bidSuccessfullyPlacedEvent = changetype<BidSuccessfullyPlaced>(
    newMockEvent()
  )

  bidSuccessfullyPlacedEvent.parameters = new Array()

  bidSuccessfullyPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  bidSuccessfullyPlacedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromAddress(auction))
  )
  bidSuccessfullyPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidSuccessfullyPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidSuccessfullyPlacedEvent
}

export function createReceivedTokenEvent(
  origin: BigInt,
  sender: Bytes,
  data: string,
  token: Address,
  amount: BigInt
): ReceivedToken {
  let receivedTokenEvent = changetype<ReceivedToken>(newMockEvent())

  receivedTokenEvent.parameters = new Array()

  receivedTokenEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromUnsignedBigInt(origin))
  )
  receivedTokenEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromFixedBytes(sender))
  )
  receivedTokenEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )
  receivedTokenEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  receivedTokenEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return receivedTokenEvent
}

export function createReservedEvent(to: Address, id: BigInt): Reserved {
  let reservedEvent = changetype<Reserved>(newMockEvent())

  reservedEvent.parameters = new Array()

  reservedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  reservedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return reservedEvent
}

export function createRevealStartedEvent(): RevealStarted {
  let revealStartedEvent = changetype<RevealStarted>(newMockEvent())

  revealStartedEvent.parameters = new Array()

  return revealStartedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return transferEvent
}

export function createVaultDeployedEvent(
  auction: Bytes,
  bidder: Address,
  vault: Address
): VaultDeployed {
  let vaultDeployedEvent = changetype<VaultDeployed>(newMockEvent())

  vaultDeployedEvent.parameters = new Array()

  vaultDeployedEvent.parameters.push(
    new ethereum.EventParam("auction", ethereum.Value.fromFixedBytes(auction))
  )
  vaultDeployedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  vaultDeployedEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )

  return vaultDeployedEvent
}
