import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { partner: "bepay" } },
      { params: { partner: "estbank" } },
      { params: { partner: "liquido" } }
    ],
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  return { props: {} }
}

export default function Home() {
  const router = useRouter()
  const partner = typeof router.query.partner === "string" && router.query.partner
  const imgSrcUrl = partner === "liquido" ? "/LiquidoLogo.png" : "/EstBankLogo.png";
  return (
    <div className={partner || ""}>
      {partner && "Teste"}
      {partner && <span>
                <img src={imgSrcUrl} alt="Partner Logo" width={72} height={72} />
            </span>}
    </div>
  )
}
