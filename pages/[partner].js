import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const partner = typeof router.query.partner === "string" && router.query.partner
  const imgs = {
    bepay: "/240-240.png",
    liquido: "/LiquidoLogo.png",
    estbank: "/EstBankLogo.png",
  }
  return (
    <div className={partner || ""}>
      {partner && "Teste"}
      {partner && <span>
                <img src={imgs[partner]} alt="Partner Logo" width={72} height={72} />
            </span>}
    </div>
  )
}
