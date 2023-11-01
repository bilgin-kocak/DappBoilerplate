import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Home: NextPage = () => {
  return (
    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://github.com/JalelTounsi/DappBoilerplate">DappBoilerplate</a>
    //     </h1>
    //     <p className={styles.description}>
    //       Connect your wallet and start playing around
    //     </p>
    //   </main>
    // </div>
    <>
    <Box textAlign="center" padding={20}>
      <Heading as="h2" size="xl">
        Empower Your ML with Zero-Knowledge Proofs
      </Heading>
      <Text mt={4}>
        Experience next-level privacy and security with zkHug's ML models.
      </Text>
      <Button mt={8} colorScheme="blue">
        Browse Models
      </Button>
    </Box>
    <Features/>
    <Testimonials/>
    </>
  );
};

export default Home;
