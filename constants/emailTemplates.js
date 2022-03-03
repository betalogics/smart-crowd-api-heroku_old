function rentDisbursementAlert(previousBalance, netRentAmount, newBalance) {
  return `A new rent disbursement was created and your wallet on Smart Crowd has been topped up with USDC ${previousBalance} over the rent generated of USDC ${netRentAmount}.\n\nYour new balance now is USDC ${newBalance}.`;
}

function rentDisbursementSubject(name) {
  return `Rent Disbursement for ${name}`;
}

function forgetPasswordBody(token){
  return `Please follow the link to reset your password. The link is only active for the next one hour.\n\nhttp://localhost:3000/forget-password-request?id=${token}`;
}

module.exports = { rentDisbursementSubject, rentDisbursementAlert, forgetPasswordBody };
