export const payViaUPI = ({
  amount = 2,
  note = "SpaceHub PDF Download",
}) => {
  const upiId = "yourupiid@upi"; // 🔴 CHANGE THIS
  const name = "SpaceHub";
  const currency = "INR";

  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
    name
  )}&am=${amount}&cu=${currency}&tn=${encodeURIComponent(note)}`;

  window.location.href = upiUrl;
};
