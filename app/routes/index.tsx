import { Link } from "@remix-run/react"

import { Box } from "../components/Box"
import { Header } from "../components/Header/Header"
import { Button, links as buttonLinks } from "../components/Button/Button"
import { Container, links as containerLinks } from "../components/Container/Container"
import { FeatureBlock } from "../components/FeatureBlock/FeatureBlock"
import { IoCompassOutline } from "react-icons/io5"
import { MdAutoFixHigh } from "react-icons/md"
import { TbClick, TbLockOpen, TbHeartHandshake } from "react-icons/tb"
import { FcGoogle } from "react-icons/fc"
import { RiCoinsLine } from "react-icons/ri"
import { Rolodex } from "../components/Rolodex/Rolodex"
import { LogoSymbol } from "../components/Logo/Logo"

export const links = () => [
  ...buttonLinks(),
  ...containerLinks()
]

export default function Index() {
  return (
    <>
      <Header />
      <Box paddingX="xlarge" paddingTop="large">
        <Box
          component="h1"
          fontSize="4x"
          lineHeight="4x"
          fontWeight="500"
          marginBottom="large"
        >
          Site de ultimă generație pentru dezvoltatori imobiliari
        </Box>
        <Button variant="primary">Cere un demo</Button>
      </Box>

      <Box style={{ height: "200px" }} />

      <Container>
        <Box
          component="h2"
          fontSize="3x"
          lineHeight="3x"
          fontWeight="500"
          marginTop="medium"
          marginBottom="large"
          paddingLeft="medium"
        >
          Lasă vizitatorii să exploreze proiectul
        </Box>
        <Box
          style={{ height: "200px" }}
          background="neutral_1"
          marginBottom="large"
        />
        <FeatureBlock
          icon={<IoCompassOutline size="36px" />}
          title="Orientare rapidă"
          content="Vizitatorii înțeleg foarte ușor și rapid
care sunt funcționalitățile proiectului tău"
        />
        <FeatureBlock
          icon={<MdAutoFixHigh size="36px" />}
          title="Selecție vizuală"
          content="Poți să alegi clădirea, etajul și apartamentul
pe care îl dorești"
        />
      </Container>

      <Container>
        <Box
          component="h2"
          fontSize="3x"
          lineHeight="3x"
          fontWeight="500"
          marginTop="medium"
          marginBottom="large"
          paddingLeft="medium"
        >
          Modifică prețurile și disponibilitatea direct din spreadsheet
        </Box>
        <Box
          style={{ height: "250px" }}
          background="neutral_1"
          marginBottom="large"
        />
        <FeatureBlock
          icon={<TbClick size="36px" />}
          title="Usor de folosit"
          content="Se integrează direct în workflow-ul tău"
        />
        <FeatureBlock
          icon={<TbLockOpen size="36px" />}
          title="Roluri și permisiuni"
          content="Drepturile de acces și modificare le adaugi
direct din Google Docs"
        />
        <FeatureBlock
          icon={<TbHeartHandshake size="36px" />}
          title="Mai multa incredere"
          content="Vizitatorii o sa aibă mai multă încredere în
conținutul site-ului"
        />
      </Container>

      <Box
        background={{ lightMode: "optional_3", darkMode: "optional_1" }}
        color={{ lightMode: "white", darkMode: "black" }}
        padding="large"
        borderRadius="medium"
        marginBottom="medium"
        marginX="medium"
      >
        Something here
        <Rolodex>
          <Box display="flex" justifyContent="space-around" padding="xlarge">
            <LogoSymbol />
            <h4>Something else</h4>
          </Box>
          <Box display="flex" justifyContent="space-around" padding="xlarge">
            <LogoSymbol />
            <h4>Something else</h4>
          </Box>
        </Rolodex>
      </Box>

      <Container
        extra={<h1>This is extra</h1>}
        extraTitle="Vezi toate funcționalitățile"
      >
        <Box
          component="h2"
          fontSize="3x"
          lineHeight="3x"
          fontWeight="500"
          marginTop="medium"
          marginBottom="large"
          paddingLeft="medium"
        >
          Optimizat pentru motoarele de căutare
        </Box>
        <Box
          style={{ height: "250px" }}
          background="neutral_1"
          marginBottom="large"
        />
        <FeatureBlock
          icon={<FcGoogle size="36px" />}
          title="Mai mulți vizitatori"
          content="Din cauza performanței Devio, Google
afișează site-ul mai sus în listă și ai mai mulți potențiali clienți"
        />
        <FeatureBlock
          icon={<RiCoinsLine size="36px" />}
          title="Costuri mai mici de promovare"
          content="Pentru că site-ul Devio este poziționat mai sus
decât ceilalți, ai costuri mai mici de
promovare"
        />
      </Container>

      <Box style={{ height: "200px" }} />
      <Box style={{ height: "200px" }} />
    </>
  )
}
