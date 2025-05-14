import LoyaltyApp from "./loyalty-app/page";
export const metadata = {
  title: "Loyster - Profesjonalne aplikacje lojalnościowe dla Twojego biznesu",
  description: "Loyster to kompleksowa platforma do tworzenia i zarządzania programami lojalnościowymi, która pomoże Ci zwiększyć zaangażowanie klientów i rozwinąć biznes.",
};
export default function HomePage() {
  return (
    <>
      <LoyaltyApp />
    </>
  );
}
